import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BackgroundCanvas = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        let renderer, scene, camera, animationId;
        let particleSystems = [];

        try {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

            renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.domElement.id = 'bg-canvas'; // Ensure ID matches CSS selector
            renderer.domElement.style.position = 'fixed';
            renderer.domElement.style.top = '0';
            renderer.domElement.style.left = '0';
            renderer.domElement.style.zIndex = '-1';

            if (mountRef.current) {
                // Clear any existing children first to avoid duplicates on re-render
                while (mountRef.current.firstChild) {
                    mountRef.current.removeChild(mountRef.current.firstChild);
                }
                mountRef.current.appendChild(renderer.domElement);
            }

            camera.position.setZ(50);

            function createParticleSystem(particleCount, color, size, speed) {
                const particles = new THREE.BufferGeometry();
                const positions = new Float32Array(particleCount * 3);
                for (let i = 0; i < particleCount * 3; i++) {
                    positions[i] = (Math.random() - 0.5) * 200;
                }
                particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

                const material = new THREE.PointsMaterial({
                    size: size,
                    color: color,
                    blending: THREE.AdditiveBlending,
                    transparent: true,
                    opacity: 0.7
                });

                const particleSystem = new THREE.Points(particles, material);
                particleSystem.userData = { speed };
                scene.add(particleSystem);
                return particleSystem;
            }

            // Create systems exactly as in reference
            const ps1 = createParticleSystem(10000, 0x38bdf8, 0.2, 0.0002);
            const ps2 = createParticleSystem(5000, 0xa78bfa, 0.3, 0.0004);
            const ps3 = createParticleSystem(2000, 0xf472b6, 0.4, 0.0006);
            particleSystems.push(ps1, ps2, ps3);

            const animate = () => {
                animationId = requestAnimationFrame(animate);
                particleSystems.forEach(ps => {
                    ps.rotation.x += ps.userData.speed;
                    ps.rotation.y += ps.userData.speed;
                });
                renderer.render(scene, camera);
            };
            animate();

            const handleResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                cancelAnimationFrame(animationId);

                // Cleanup Three.js resources
                particleSystems.forEach(ps => {
                    if (ps.geometry) ps.geometry.dispose();
                    if (ps.material) ps.material.dispose();
                });
                if (renderer) {
                    renderer.dispose();
                    if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
                        mountRef.current.removeChild(renderer.domElement);
                    }
                }
            };
        } catch (error) {
            console.error("Three.js initialization failed:", error);
        }
    }, []);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
};

export default BackgroundCanvas;
