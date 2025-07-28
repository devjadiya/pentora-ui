"use client";

import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

// Define the structure for a location point on the globe
interface Point {
  lat: number;
  lng: number;
  label: string;
}

// Function to convert latitude/longitude to 3D coordinates
const latLonToVector3 = (lat: number, lng: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
};

// Component for the animated arcs between locations
const Arc = ({ start, end }: { start: Point; end: Point }) => {
    const startVec = latLonToVector3(start.lat, start.lng, 2);
    const endVec = latLonToVector3(end.lat, end.lng, 2);
    
    const arc = useMemo(() => {
        const curve = new THREE.CubicBezierCurve3(
            startVec,
            startVec.clone().multiplyScalar(1.3),
            endVec.clone().multiplyScalar(1.3),
            endVec
        );
        return new THREE.TubeGeometry(curve, 20, 0.005, 8, false);
    }, [startVec, endVec]);

    return (
        <mesh geometry={arc}>
            <meshBasicMaterial color="#8834e4" toneMapped={false} />
        </mesh>
    );
};

// Main Globe Component
const GlobeComponent = () => {
    const globeRef = useRef<THREE.Mesh>(null!);

    const locations: Point[] = [
        { lat: 34.0522, lng: -118.2437, label: 'USA' }, // Los Angeles
        { lat: 20.5937, lng: 78.9629, label: 'India' }, // Central India
        { lat: 25.276987, lng: 55.296249, label: 'Dubai' },
        { lat: 51.5072, lng: -0.1276, label: 'UK' }, // London
        { lat: 35.6895, lng: 139.6917, label: 'Japan' }, // Tokyo
    ];

    useFrame((_, delta) => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.1 * delta;
        }
    });

    return (
        <>
            <ambientLight color="#ffffff" intensity={0.2} />
            <directionalLight color="#ffffff" position={[2, 2, 5]} intensity={0.5} />
            
            <motion.group
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <Sphere ref={globeRef} args={[2, 64, 64]}>
                    <meshPhongMaterial color="#fff" map={new THREE.TextureLoader().load('/earth-map.jpg')} />
                </Sphere>

                {/* Render points for each location */}
                {locations.map((loc) => (
                    <mesh key={loc.label} position={latLonToVector3(loc.lat, loc.lng, 2)}>
                        <sphereGeometry args={[0.03, 16, 16]} />
                        <meshBasicMaterial color="#8834e4" toneMapped={false} />
                    </mesh>
                ))}

                {/* Render arcs between locations */}
                <Arc start={locations[0]} end={locations[1]} />
                <Arc start={locations[0]} end={locations[2]} />
                <Arc start={locations[1]} end={locations[3]} />
                <Arc start={locations[2]} end={locations[4]} />
            </motion.group>
            
            <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        </>
    );
};

export default function AboutSection() {
  return (
    <section className="relative bg-[#1a0c2e] py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <motion.h2 
              className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Securing the World's Digital Infrastructure
            </motion.h2>
            <motion.p 
              className="mt-6 text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              From our global security operations centers, PENTORA delivers elite, real-time threat observation and response. We leverage cutting-edge technology and a worldwide network of experts to provide unparalleled protection for enterprises in the digital age.
            </motion.p>
             <motion.a
                href="#"
                className="inline-block mt-8 bg-white/10 text-white font-semibold py-3 px-8 rounded-lg border border-white/20 hover:bg-[#8834e4] hover:border-[#8834e4] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
                Explore Our Global Impact
            </motion.a>
          </div>

          {/* Right Column: Interactive 3D Globe */}
          <div className="w-full h-[400px] lg:h-[500px] cursor-grab active:cursor-grabbing">
             <Canvas>
                <GlobeComponent />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
