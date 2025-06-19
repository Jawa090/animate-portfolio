
import React, { useEffect, useRef } from 'react';

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let scene: any, camera: any, renderer: any;
    let centralOrb: any;
    let spaceParticles: any;
    let nebulaClouds: any[] = [];
    let animationId: number;
    let mouse = { x: 0, y: 0 };

    const init = async () => {
      const THREE = await import('three');

      // Scene setup with deep space background
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);
      
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // Create deep space particles (stars)
      const createSpaceParticles = () => {
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 3000;
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);

        for (let i = 0; i < starCount * 3; i += 3) {
          // Distribute particles in a large sphere
          const radius = 1000 + Math.random() * 500;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          
          positions[i] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[i + 2] = radius * Math.cos(phi);

          // Star colors (blue, white, cyan tints)
          const colorType = Math.random();
          if (colorType < 0.6) {
            colors[i] = 0.8 + Math.random() * 0.2;     // R
            colors[i + 1] = 0.9 + Math.random() * 0.1; // G
            colors[i + 2] = 1.0;                       // B (white-blue)
          } else if (colorType < 0.8) {
            colors[i] = 0.3 + Math.random() * 0.3;     // R
            colors[i + 1] = 0.8 + Math.random() * 0.2; // G
            colors[i + 2] = 1.0;                       // B (cyan)
          } else {
            colors[i] = 0.6 + Math.random() * 0.4;     // R
            colors[i + 1] = 0.3 + Math.random() * 0.3; // G
            colors[i + 2] = 1.0;                       // B (purple-blue)
          }

          sizes[i / 3] = Math.random() * 2 + 0.5;
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const starMaterial = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 }
          },
          vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            uniform float time;
            
            void main() {
              vColor = color;
              vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
              float twinkle = sin(time * 3.0 + position.x * 0.01) * 0.5 + 0.5;
              gl_PointSize = size * (300.0 / -mvPosition.z) * (0.5 + twinkle * 0.5);
              gl_Position = projectionMatrix * mvPosition;
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
            
            void main() {
              float r = distance(gl_PointCoord, vec2(0.5, 0.5));
              if (r > 0.5) discard;
              float alpha = 1.0 - smoothstep(0.0, 0.5, r);
              gl_FragColor = vec4(vColor, alpha);
            }
          `,
          transparent: true,
          vertexColors: true,
          blending: THREE.AdditiveBlending
        });

        return new THREE.Points(starGeometry, starMaterial);
      };

      // Create central rotating orb with enhanced glow
      const createCentralOrb = () => {
        const group = new THREE.Group();
        
        // Main wireframe sphere
        const sphereGeometry = new THREE.SphereGeometry(25, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color(0x00ffff),
          wireframe: true,
          transparent: true,
          opacity: 0.8
        });
        
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        group.add(sphere);
        
        // Inner energy core
        const coreGeometry = new THREE.SphereGeometry(15, 16, 16);
        const coreMaterial = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            color1: { value: new THREE.Color(0x0088ff) },
            color2: { value: new THREE.Color(0x8800ff) }
          },
          vertexShader: `
            varying vec2 vUv;
            varying vec3 vPosition;
            
            void main() {
              vUv = uv;
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float time;
            uniform vec3 color1;
            uniform vec3 color2;
            varying vec2 vUv;
            varying vec3 vPosition;
            
            void main() {
              float noise = sin(vPosition.x * 0.1 + time) * sin(vPosition.y * 0.1 + time * 1.5) * sin(vPosition.z * 0.1 + time * 0.8);
              vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
              float alpha = 0.3 + noise * 0.2;
              gl_FragColor = vec4(color, alpha);
            }
          `,
          transparent: true,
          side: THREE.DoubleSide
        });
        
        const core = new THREE.Mesh(coreGeometry, coreMaterial);
        group.add(core);
        
        // Outer glow
        const glowGeometry = new THREE.SphereGeometry(35, 16, 16);
        const glowMaterial = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 }
          },
          vertexShader: `
            varying vec3 vNormal;
            
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float time;
            varying vec3 vNormal;
            
            void main() {
              float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
              vec3 glow = vec3(0.1, 0.6, 1.0) * intensity;
              float pulse = sin(time * 2.0) * 0.3 + 0.7;
              gl_FragColor = vec4(glow * pulse, intensity * 0.6);
            }
          `,
          transparent: true,
          side: THREE.BackSide,
          blending: THREE.AdditiveBlending
        });
        
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        group.add(glow);
        
        return group;
      };

      // Create nebula clouds
      const createNebulaClouds = () => {
        const clouds = [];
        
        for (let i = 0; i < 6; i++) {
          const cloudGeometry = new THREE.PlaneGeometry(200, 100);
          const cloudMaterial = new THREE.ShaderMaterial({
            uniforms: {
              time: { value: 0 },
              color: { value: new THREE.Color().setHSL(0.6 + i * 0.1, 0.8, 0.4) }
            },
            vertexShader: `
              varying vec2 vUv;
              
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              uniform float time;
              uniform vec3 color;
              varying vec2 vUv;
              
              float noise(vec2 p) {
                return sin(p.x * 10.0 + time * 0.5) * sin(p.y * 10.0 + time * 0.3) * 0.5 + 0.5;
              }
              
              void main() {
                vec2 uv = vUv;
                float n = noise(uv) * noise(uv * 2.0) * noise(uv * 4.0);
                float alpha = smoothstep(0.2, 0.8, n) * 0.15;
                gl_FragColor = vec4(color, alpha);
              }
            `,
            transparent: true,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending
          });
          
          const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
          
          // Position clouds around the scene
          const angle = (i / 6) * Math.PI * 2;
          cloud.position.set(
            Math.cos(angle) * 300,
            (Math.random() - 0.5) * 200,
            Math.sin(angle) * 300
          );
          
          cloud.rotation.z = angle;
          clouds.push(cloud);
          scene.add(cloud);
        }
        
        return clouds;
      };

      // Initialize scene elements
      spaceParticles = createSpaceParticles();
      centralOrb = createCentralOrb();
      nebulaClouds = createNebulaClouds();

      scene.add(spaceParticles);
      scene.add(centralOrb);

      // Position camera
      camera.position.set(0, 50, 150);
      camera.lookAt(0, 0, 0);

      // Mouse movement tracking
      const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Animation loop
      const animate = () => {
        animationId = requestAnimationFrame(animate);

        const time = Date.now() * 0.001;

        // Update shader uniforms
        if (spaceParticles.material.uniforms) {
          spaceParticles.material.uniforms.time.value = time;
        }

        // Rotate central orb
        if (centralOrb) {
          centralOrb.rotation.y += 0.005;
          centralOrb.rotation.x += 0.002;
          
          // Update core shader
          const core = centralOrb.children[1];
          if (core && core.material.uniforms) {
            core.material.uniforms.time.value = time;
          }
          
          // Update glow shader
          const glow = centralOrb.children[2];
          if (glow && glow.material.uniforms) {
            glow.material.uniforms.time.value = time;
          }
        }

        // Animate nebula clouds
        nebulaClouds.forEach((cloud, index) => {
          if (cloud.material.uniforms) {
            cloud.material.uniforms.time.value = time;
          }
          cloud.rotation.z += 0.001 * (index + 1);
        });

        // Smooth camera movement with mouse parallax
        const targetX = mouse.x * 20;
        const targetY = mouse.y * 20;
        
        camera.position.x += (targetX - camera.position.x) * 0.02;
        camera.position.y += (targetY + 50 - camera.position.y) * 0.02;
        
        // Gentle camera orbit
        const radius = 150;
        camera.position.x += Math.sin(time * 0.1) * radius * 0.1;
        camera.position.z = radius + Math.cos(time * 0.08) * 30;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      };

      animate();

      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        if (renderer) {
          renderer.dispose();
        }
      };
    };

    init();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export { ThreeBackground };
