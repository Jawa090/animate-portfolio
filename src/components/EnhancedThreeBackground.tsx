
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const EnhancedThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Enhanced scene setup with better fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.002);
    sceneRef.current = scene;

    // Camera with cinematic field of view
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.set(0, 0, 100);
    cameraRef.current = camera;

    // Enhanced renderer with post-processing
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Cinematic lighting setup
    const ambientLight = new THREE.AmbientLight(0x0a0a2e, 0.1);
    scene.add(ambientLight);

    // Main volumetric light
    const mainLight = new THREE.DirectionalLight(0x00d4ff, 2);
    mainLight.position.set(50, 50, 25);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    scene.add(mainLight);

    // Rim lighting for depth
    const rimLight1 = new THREE.DirectionalLight(0x8a2be2, 1);
    rimLight1.position.set(-50, -25, -25);
    scene.add(rimLight1);

    const rimLight2 = new THREE.DirectionalLight(0xff006b, 0.5);
    rimLight2.position.set(25, -50, 50);
    scene.add(rimLight2);

    // Central hero orb with enhanced materials
    const orbGeometry = new THREE.SphereGeometry(12, 128, 128);
    const orbMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00d4ff,
      emissive: 0x003355,
      emissiveIntensity: 0.3,
      roughness: 0.05,
      metalness: 0.9,
      transmission: 0.15,
      thickness: 2,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      ior: 1.5
    });
    
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    orb.position.set(0, 0, -50);
    orb.castShadow = true;
    orb.receiveShadow = true;
    scene.add(orb);

    // Enhanced wireframe with multiple layers
    const wireframeGeometry1 = new THREE.SphereGeometry(12.5, 64, 64);
    const wireframeMaterial1 = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    const wireframeOrb1 = new THREE.Mesh(wireframeGeometry1, wireframeMaterial1);
    wireframeOrb1.position.set(0, 0, -50);
    scene.add(wireframeOrb1);

    const wireframeGeometry2 = new THREE.SphereGeometry(13.5, 32, 32);
    const wireframeMaterial2 = new THREE.MeshBasicMaterial({
      color: 0x8a2be2,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });
    const wireframeOrb2 = new THREE.Mesh(wireframeGeometry2, wireframeMaterial2);
    wireframeOrb2.position.set(0, 0, -50);
    scene.add(wireframeOrb2);

    // Enhanced elegant particle system
    const particleCount = 150;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // More controlled positioning
      const radius = Math.random() * 300 + 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      particlePositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i3 + 2] = radius * Math.cos(phi) - 100;
      
      // Slower, more elegant movement
      particleVelocities[i3] = (Math.random() - 0.5) * 0.005;
      particleVelocities[i3 + 1] = (Math.random() - 0.5) * 0.005;
      particleVelocities[i3 + 2] = (Math.random() - 0.5) * 0.003;
      
      particleSizes[i] = Math.random() * 3 + 1;
      
      // Elegant color palette
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        // Cyan
        particleColors[i3] = 0;
        particleColors[i3 + 1] = 0.8;
        particleColors[i3 + 2] = 1;
      } else if (colorChoice < 0.7) {
        // Purple
        particleColors[i3] = 0.5;
        particleColors[i3 + 1] = 0.2;
        particleColors[i3 + 2] = 0.9;
      } else {
        // White
        particleColors[i3] = 1;
        particleColors[i3 + 1] = 1;
        particleColors[i3 + 2] = 1;
      }
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 3,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      vertexColors: true
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Floating geometric elements with better materials
    const shapes: THREE.Mesh[] = [];
    const geometries = [
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.OctahedronGeometry(2.5),
      new THREE.TetrahedronGeometry(2.8),
      new THREE.DodecahedronGeometry(2.2),
      new THREE.IcosahedronGeometry(2.4)
    ];

    for (let i = 0; i < 12; i++) {
      const geometry = geometries[i % geometries.length];
      
      const material = new THREE.MeshPhysicalMaterial({
        color: i % 3 === 0 ? 0x00d4ff : i % 3 === 1 ? 0x8a2be2 : 0xff006b,
        transparent: true,
        opacity: 0.4,
        roughness: 0.1,
        metalness: 0.8,
        emissive: i % 3 === 0 ? 0x001122 : i % 3 === 1 ? 0x1a0a2e : 0x220011,
        emissiveIntensity: 0.1,
        transmission: 0.1,
        thickness: 1
      });

      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 100 - 50
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      shapes.push(shape);
      scene.add(shape);
    }

    // Nebula background planes
    const nebulaGeometry = new THREE.PlaneGeometry(400, 400);
    const nebulaMaterial1 = new THREE.MeshBasicMaterial({
      color: 0x2a0845,
      transparent: true,
      opacity: 0.05
    });
    const nebula1 = new THREE.Mesh(nebulaGeometry, nebulaMaterial1);
    nebula1.position.set(-200, 100, -200);
    nebula1.rotation.z = Math.PI / 6;
    scene.add(nebula1);

    const nebulaMaterial2 = new THREE.MeshBasicMaterial({
      color: 0x0a2a45,
      transparent: true,
      opacity: 0.03
    });
    const nebula2 = new THREE.Mesh(nebulaGeometry, nebulaMaterial2);
    nebula2.position.set(200, -100, -250);
    nebula2.rotation.z = -Math.PI / 4;
    scene.add(nebula2);

    // Enhanced mouse interaction with easing
    const mouse = { x: 0, y: 0 };
    const targetCamera = { x: 0, y: 0 };
    
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      targetCamera.x = mouse.x * 8;
      targetCamera.y = mouse.y * 5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Smooth animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.0008;

      // Smooth camera easing
      camera.position.x += (targetCamera.x - camera.position.x) * 0.02;
      camera.position.y += (targetCamera.y - camera.position.y) * 0.02;
      camera.lookAt(0, 0, -50);

      // Enhanced orb animation
      orb.rotation.y = time * 0.2;
      orb.rotation.x = Math.sin(time * 0.3) * 0.1;
      orb.position.y = Math.sin(time * 0.5) * 2;
      
      wireframeOrb1.rotation.y = time * -0.3;
      wireframeOrb1.rotation.x = Math.cos(time * 0.4) * 0.15;
      wireframeOrb1.position.y = orb.position.y;
      
      wireframeOrb2.rotation.y = time * 0.15;
      wireframeOrb2.rotation.x = Math.sin(time * 0.2) * 0.08;
      wireframeOrb2.position.y = orb.position.y;

      // Elegant particle animation
      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] += particleVelocities[i3];
        positions[i3 + 1] += particleVelocities[i3 + 1];
        positions[i3 + 2] += particleVelocities[i3 + 2];

        // Gentle boundary wrapping
        if (Math.abs(positions[i3]) > 300) particleVelocities[i3] *= -0.8;
        if (Math.abs(positions[i3 + 1]) > 300) particleVelocities[i3 + 1] *= -0.8;
        if (positions[i3 + 2] > 100 || positions[i3 + 2] < -200) particleVelocities[i3 + 2] *= -0.8;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Smooth floating shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.002 + index * 0.0003;
        shape.rotation.y += 0.001 + index * 0.0002;
        shape.position.y += Math.sin(time + index) * 0.01;
        shape.position.x += Math.cos(time * 0.5 + index) * 0.005;
      });

      // Animate nebula
      nebula1.rotation.z += 0.0001;
      nebula1.material.opacity = 0.03 + Math.sin(time) * 0.02;
      nebula2.rotation.z -= 0.00008;
      nebula2.material.opacity = 0.02 + Math.cos(time * 0.7) * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Enhanced cleanup
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

export { EnhancedThreeBackground };
