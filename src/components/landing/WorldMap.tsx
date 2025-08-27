'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function WorldMap() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Globe
    const geometry = new THREE.SphereGeometry(1.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x8A2BE2, // PENTORA Purple
      wireframe: true,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Points on globe
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x00f5d4, // Electric Teal
      size: 0.03,
      sizeAttenuation: true,
    });
    const pointsGeometry = new THREE.BufferGeometry();
    const pointsVertices = [];
    for (let i = 0; i < 200; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const x = 1.5 * Math.sin(phi) * Math.cos(theta);
      const y = 1.5 * Math.sin(phi) * Math.sin(theta);
      const z = 1.5 * Math.cos(phi);
      pointsVertices.push(x, y, z);
    }
    pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(pointsVertices, 3));
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);


    // Handle Resize
    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.001;
      points.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
    };
  }, []);

  return (
    <section className="py-24">
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-4xl font-bold">Our Global Impact</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Serving clients and neutralizing threats across the globe, 24/7.
        </p>
        <div ref={mountRef} className="mx-auto mt-8 h-96 w-full max-w-2xl" />
      </div>
    </section>
  );
}
