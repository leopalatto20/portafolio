import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data';
import * as THREE from 'three';
import { FileText } from 'lucide-react';

function AnimatedSphere(props: any) {
    const mesh = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);

    useFrame((_state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * 0.2;
            mesh.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh
                {...props}
                ref={mesh}
                scale={hovered ? 1.2 : 1}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color={hovered ? "#ff0080" : "#7928ca"}
                    wireframe
                />
            </mesh>
        </Float>
    );
}

export default function Hero() {
    return (
        <section className="h-screen w-full relative bg-black overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <AnimatedSphere position={[2, 0, 0]} />
                    <AnimatedSphere position={[-2, 1, -2]} />
                    <AnimatedSphere position={[0, -2, -1]} />
                </Canvas>
            </div>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center pointer-events-auto p-6"
                >
                    <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                        {profile.name}
                    </h1>
                    <h2 className="text-2xl md:text-4xl text-gray-300 font-light mb-6">
                        {profile.title}
                    </h2>
                    <a
                        href={profile.cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-sm transition-all hover:scale-105 text-white font-medium"
                    >
                        <FileText size={20} />
                        <span>Descargar CV</span>
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
}
