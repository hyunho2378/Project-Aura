import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { contentData } from '../data/contentData';

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
 * Hero3D - Uses contentData.hero for text content
 * Background: Transparent (uses global Deep Navy)
 */
export default function Hero3D() {
    const navigate = useNavigate();
    const { hero } = contentData;

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
        <section className="relative w-full h-screen overflow-hidden bg-transparent">
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
                    {/* Title - English (Serif) */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-6 text-left"
                    >
                        {hero.title}
                    </motion.h1>

                    {/* Subtitle - Korean (Sans-serif) */}
                    <motion.p
                        variants={itemVariants}
                        className="font-sans text-base md:text-lg text-white/50 max-w-md mb-10 text-left leading-relaxed whitespace-pre-line"
                        style={{ wordBreak: 'keep-all' }}
                    >
                        {hero.subtitle}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div variants={itemVariants} className="flex gap-4 pointer-events-auto">
                        <button
                            onClick={() => navigate('/analysis')}
                            className="btn-primary"
                        >
                            <span>{hero.cta}</span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
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
