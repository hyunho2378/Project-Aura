import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/**
 * CosmeticBottle - 3D Glass Bottle (Right side)
 */
function CosmeticBottle() {
    const bottleRef = useRef();
    const liquidRef = useRef();

    useFrame((state, delta) => {
        if (bottleRef.current) {
            bottleRef.current.rotation.y += delta * 0.1;
        }
        if (liquidRef.current) {
            const t = state.clock.elapsedTime;
            liquidRef.current.material.emissiveIntensity = 0.3 + Math.sin(t * 0.5) * 0.1;
        }
    });

    return (
        <group ref={bottleRef} position={[1.5, 0, 0]} scale={1.2}>
            {/* Bottle Body */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.6, 0.7, 2.2, 24, 1, true]} />
                <meshPhysicalMaterial
                    color="#ffffff"
                    metalness={0.1}
                    roughness={0.05}
                    transmission={0.95}
                    thickness={0.5}
                    envMapIntensity={1.5}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    ior={1.5}
                    transparent
                    opacity={0.9}
                />
            </mesh>

            {/* Bottle Bottom */}
            <mesh position={[0, -1.1, 0]} rotation={[Math.PI, 0, 0]}>
                <circleGeometry args={[0.7, 24]} />
                <meshPhysicalMaterial
                    color="#ffffff"
                    transmission={0.9}
                    roughness={0.1}
                    envMapIntensity={1}
                    transparent
                    opacity={0.8}
                />
            </mesh>

            {/* Glowing Liquid */}
            <mesh ref={liquidRef} position={[0, -0.2, 0]}>
                <cylinderGeometry args={[0.5, 0.6, 1.6, 24]} />
                <meshStandardMaterial
                    color="#a78bfa"
                    emissive="#7c3aed"
                    emissiveIntensity={0.35}
                    transparent
                    opacity={0.75}
                    roughness={0.3}
                />
            </mesh>

            {/* Cap */}
            <mesh position={[0, 1.4, 0]}>
                <cylinderGeometry args={[0.35, 0.4, 0.6, 24]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.15} />
            </mesh>

            {/* Cap Ring */}
            <mesh position={[0, 1.15, 0]}>
                <torusGeometry args={[0.42, 0.03, 12, 24]} />
                <meshStandardMaterial color="#c8a96a" metalness={1} roughness={0.25} />
            </mesh>
        </group>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={0.4} color="#ffffff" />
            <pointLight position={[-3, 1, 2]} intensity={0.5} color="#c084fc" />
            <Environment preset="city" />

            <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3} floatingRange={[-0.08, 0.08]}>
                <CosmeticBottle />
            </Float>
        </>
    );
}

/**
 * Hero3D - Left-aligned text with global container
 */
export default function Hero3D() {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
        }
    };

    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#0a0f1a]">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="ambient-glow ambient-glow-1" />
                <div className="ambient-glow ambient-glow-2" />
            </div>

            {/* 3D Canvas - Right side */}
            <div className="absolute inset-0 z-10">
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 45 }}
                    dpr={[1, 1.5]}
                    gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                    performance={{ min: 0.5 }}
                >
                    <Scene />
                </Canvas>
            </div>

            {/* Text Content - Global Container Alignment */}
            <div className="relative z-20 h-full max-w-screen-xl mx-auto px-6 lg:px-16">
                <motion.div
                    className="flex flex-col items-start justify-center h-full max-w-xl pointer-events-none"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-6 text-left"
                    >
                        Sculpting Beauty
                        <br />
                        <span className="italic font-normal text-white/90">with Your Data.</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        variants={itemVariants}
                        className="font-sans text-base md:text-lg text-white/50 max-w-md mb-10 text-left leading-relaxed"
                    >
                        Experience the hyper-personalized wellness solution.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={itemVariants} className="flex gap-4 pointer-events-auto">
                        <button
                            onClick={() => navigate('/analysis')}
                            className="btn-primary"
                        >
                            <span>Start Analysis</span>
                        </button>
                        <button
                            onClick={() => navigate('/curations')}
                            className="btn-glass"
                        >
                            Explore Curations
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Aligned with container */}
            <motion.div
                className="absolute bottom-8 z-20 max-w-screen-xl mx-auto px-6 lg:px-16 left-0 right-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-gradient-to-r from-white/40 to-transparent" />
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-sans">
                        Scroll to explore
                    </span>
                </div>
            </motion.div>
        </section>
    );
}
