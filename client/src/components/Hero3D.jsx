import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

/**
 * FlowingParticles - Advanced InstancedMesh with Organic Flow Animation
 * 2000 ribbon-like particles that flow in mesmerizing patterns
 */
function FlowingParticles({ count = 2000 }) {
    const mesh = useRef();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Initialize particle data
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const radius = 3 + Math.random() * 5;

            temp.push({
                x: radius * Math.sin(phi) * Math.cos(theta),
                y: radius * Math.sin(phi) * Math.sin(theta),
                z: radius * Math.cos(phi),
                baseScale: 0.3 + Math.random() * 0.7,
                speed: 0.2 + Math.random() * 0.3,
                offset: Math.random() * 1000
            });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;

        const time = state.clock.getElapsedTime() * 0.15;

        for (let i = 0; i < count; i++) {
            const p = particles[i];

            // Organic flow using combined sine/cosine waves
            const flowX = Math.sin(time * p.speed + p.offset * 0.01) * 0.5;
            const flowY = Math.cos(time * p.speed * 1.3 + p.offset * 0.015) * 0.5;
            const flowZ = Math.sin(time * p.speed * 0.7 + p.offset * 0.02) * 0.3;

            // Swirling motion around center
            const angle = time * 0.3 + p.offset * 0.001;
            const swirl = Math.sin(angle) * 0.5;

            const x = p.x + flowX + Math.cos(angle) * swirl;
            const y = p.y + flowY + Math.sin(time * 0.5 + i * 0.01) * 0.3;
            const z = p.z + flowZ + Math.sin(angle) * swirl;

            dummy.position.set(x, y, z);

            // Dynamic rotation
            dummy.rotation.x = Math.sin(time + p.offset) * Math.PI;
            dummy.rotation.y = time * 0.3 + p.offset;
            dummy.rotation.z = Math.cos(time * 0.5 + p.offset) * Math.PI * 0.5;

            // Breathing scale
            const breathe = 1 + Math.sin(time * 2 + p.offset) * 0.15;
            dummy.scale.set(p.baseScale * 0.5, p.baseScale * breathe, p.baseScale * 0.2);

            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        }

        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]} frustumCulled={false}>
            <planeGeometry args={[0.15, 1.2, 1, 4]} />
            <meshPhysicalMaterial
                color="#0a1a20"
                emissive="#1E5672"
                emissiveIntensity={0.4}
                roughness={0.1}
                metalness={0.85}
                transmission={0.5}
                thickness={1.5}
                transparent
                opacity={0.85}
                side={THREE.DoubleSide}
            />
        </instancedMesh>
    );
}

/**
 * AmbientDust - Smaller floating particles for depth
 */
function AmbientDust({ count = 400 }) {
    const mesh = useRef();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                x: (Math.random() - 0.5) * 20,
                y: (Math.random() - 0.5) * 15,
                z: (Math.random() - 0.5) * 10,
                speed: 0.1 + Math.random() * 0.2,
                offset: Math.random() * 1000
            });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;

        const time = state.clock.getElapsedTime();

        for (let i = 0; i < count; i++) {
            const p = particles[i];

            const x = p.x + Math.sin(time * p.speed + p.offset) * 0.5;
            const y = p.y + Math.cos(time * p.speed * 0.7 + p.offset) * 0.3;
            const z = p.z + Math.sin(time * 0.3 + p.offset * 0.5) * 0.2;

            dummy.position.set(x, y, z);
            dummy.scale.setScalar(0.02 + Math.sin(time + p.offset) * 0.01);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        }

        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial color="#3C7795" transparent opacity={0.4} />
        </instancedMesh>
    );
}

/**
 * ParticleScene - Complete 3D Scene
 */
function ParticleScene() {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <>
            <ambientLight intensity={0.3} />
            <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1.5} color="#3C7795" />
            <pointLight position={[-10, -5, -10]} intensity={0.5} color="#1E5672" />
            <Environment preset="night" />

            <group ref={groupRef}>
                <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.3}>
                    <FlowingParticles count={1500} />
                </Float>
            </group>

            <AmbientDust count={300} />

            {/* Bloom Post-Processing */}
            <EffectComposer>
                <Bloom
                    luminanceThreshold={0.15}
                    luminanceSmoothing={0.9}
                    height={300}
                    intensity={1.2}
                />
            </EffectComposer>
        </>
    );
}

/**
 * Hero3D - ADVANCED KINETIC ART with Flowing Particles
 */
export default function Hero3D() {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.5 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
        }
    };

    return (
        <section className="relative w-full h-screen max-h-[900px] overflow-hidden bg-black">
            {/* 3D Canvas */}
            <div className="absolute inset-0 z-0">
                <Canvas
                    camera={{ position: [0, 0, 12], fov: 50 }}
                    dpr={[1, 1.5]}
                    gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
                    performance={{ min: 0.5 }}
                    onCreated={({ gl }) => {
                        gl.setClearColor('#000000');
                    }}
                >
                    <ParticleScene />
                </Canvas>
            </div>

            {/* Text Overlay */}
            <div className="relative z-10 h-full max-w-screen-xl mx-auto px-6 lg:px-16">
                <motion.div
                    className="flex flex-col items-start justify-center h-full max-w-xl pointer-events-none"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-6 text-left text-white drop-shadow-lg"
                    >
                        Unveil Your<br />Inner Aura
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="font-sans text-base md:text-lg text-[#8AAEC0] max-w-md mb-10 text-left leading-relaxed"
                        style={{ wordBreak: 'keep-all' }}
                    >
                        당신 안에 잠재된 고유의 빛을 마주하세요. 데이터 기반의 초개인화 뷰티 솔루션이 당신만의 분위기를 설계합니다.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex gap-4 pointer-events-auto">
                        <button onClick={() => navigate('/analysis')} className="btn-primary">
                            <span>시작하기</span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 z-10 max-w-screen-xl mx-auto px-6 lg:px-16 left-0 right-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-gradient-to-r from-[#3C7795]/60 to-transparent" />
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8AAEC0]/50 font-sans">
                        Scroll to explore
                    </span>
                </div>
            </motion.div>
        </section>
    );
}
