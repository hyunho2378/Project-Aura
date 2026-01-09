import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, OrbitControls } from '@react-three/drei';

/**
 * ProductDetail Page (/shop/:id) - "The Masterpiece"
 * 
 * Split-screen: 3D viewer (left) + Product info with AI Match (right)
 */
export default function ProductDetail({ user }) {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock product data
    const products = {
        '1': {
            name: 'Aura Hydra Serum',
            price: 78000,
            description: 'A revolutionary hydration complex that penetrates deep into the skin layers, delivering sustained moisture for up to 72 hours.',
            category: 'Serum',
            ingredients: ['Hyaluronic Acid', 'Squalane', 'Ceramide NP', 'Niacinamide'],
            matchScore: 98,
            color: '#a855f7'
        },
        '2': {
            name: 'Glow Radiance Essence',
            price: 65000,
            description: "A brightening formula that reveals your skin's natural luminosity through advanced fermentation technology.",
            category: 'Essence',
            ingredients: ['Galactomyces', 'Vitamin C', 'Licorice Root', 'Tranexamic Acid'],
            matchScore: 92,
            color: '#ec4899'
        },
        '3': {
            name: 'Calm Barrier Cream',
            price: 89000,
            description: 'Intensive barrier repair for sensitive skin, formulated with a soothing complex that calms irritation instantly.',
            category: 'Cream',
            ingredients: ['Centella Asiatica', 'Panthenol', 'Madecassoside', 'Beta-Glucan'],
            matchScore: 95,
            color: '#3b82f6'
        }
    };

    const product = products[id] || products['1'];
    const userName = user?.name || 'Guest';

    return (
        <div className="min-h-screen pt-20">
            <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
                {/* Left: 3D Product Viewer */}
                <div className="relative h-[50vh] lg:h-auto bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5">
                    <Canvas
                        camera={{ position: [0, 0, 5], fov: 45 }}
                        dpr={[1, 1.5]}
                        gl={{ antialias: true, alpha: true }}
                    >
                        <ambientLight intensity={0.4} />
                        <directionalLight position={[5, 5, 5]} intensity={0.5} />
                        <pointLight position={[-3, 2, 2]} intensity={0.4} color={product.color} />
                        <Environment preset="city" />
                        <OrbitControls
                            enableZoom={false}
                            autoRotate
                            autoRotateSpeed={1}
                            minPolarAngle={Math.PI / 3}
                            maxPolarAngle={Math.PI / 1.5}
                        />
                        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
                            <ProductBottle color={product.color} />
                        </Float>
                    </Canvas>

                    {/* Drag hint */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/40 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                        </svg>
                        Drag to rotate
                    </div>
                </div>

                {/* Right: Product Info */}
                <div className="p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/shop')}
                        className="self-start flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Back to Curations
                    </button>

                    {/* Category */}
                    <p className="text-xs uppercase tracking-[0.2em] text-purple-400/80 mb-3">
                        {product.category}
                    </p>

                    {/* Product Name */}
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 leading-tight">
                        {product.name}
                    </h1>

                    {/* Price */}
                    <p className="text-2xl font-medium text-white/90 mb-6">
                        ₩{product.price.toLocaleString()}
                    </p>

                    {/* Description */}
                    <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-lg">
                        {product.description}
                    </p>

                    {/* AI Match Score Card */}
                    <AIMatchScore score={product.matchScore} userName={userName} />

                    {/* Ingredients */}
                    <div className="mt-10">
                        <p className="text-sm text-white/40 mb-3">Key Ingredients</p>
                        <div className="flex flex-wrap gap-2">
                            {product.ingredients.map((ing) => (
                                <span
                                    key={ing}
                                    className="px-4 py-2 text-sm text-white/70 bg-white/5 border border-white/10 rounded-full"
                                >
                                    {ing}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 mt-10">
                        <button className="btn-primary flex-1 md:flex-none">
                            <span>Add to Cart</span>
                        </button>
                        <button className="btn-glass">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * 3D Product Bottle
 */
function ProductBottle({ color }) {
    const bottleRef = useRef();
    const liquidRef = useRef();

    useFrame((state) => {
        if (liquidRef.current) {
            const t = state.clock.elapsedTime;
            liquidRef.current.material.emissiveIntensity = 0.4 + Math.sin(t * 0.5) * 0.15;
        }
    });

    return (
        <group ref={bottleRef} scale={1.3}>
            {/* Bottle Body */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.5, 0.6, 2, 32, 1, true]} />
                <meshPhysicalMaterial
                    color="#ffffff"
                    metalness={0.05}
                    roughness={0.05}
                    transmission={0.95}
                    thickness={0.5}
                    envMapIntensity={1.2}
                    clearcoat={1}
                    ior={1.5}
                    transparent
                    opacity={0.9}
                />
            </mesh>

            {/* Bottom */}
            <mesh position={[0, -1, 0]} rotation={[Math.PI, 0, 0]}>
                <circleGeometry args={[0.6, 32]} />
                <meshPhysicalMaterial
                    color="#ffffff"
                    transmission={0.9}
                    roughness={0.1}
                    transparent
                    opacity={0.8}
                />
            </mesh>

            {/* Liquid */}
            <mesh ref={liquidRef} position={[0, -0.15, 0]}>
                <cylinderGeometry args={[0.42, 0.52, 1.5, 32]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.4}
                    transparent
                    opacity={0.7}
                    roughness={0.2}
                />
            </mesh>

            {/* Cap */}
            <mesh position={[0, 1.25, 0]}>
                <cylinderGeometry args={[0.3, 0.35, 0.5, 32]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.1} />
            </mesh>

            {/* Gold Ring */}
            <mesh position={[0, 1.02, 0]}>
                <torusGeometry args={[0.36, 0.025, 16, 32]} />
                <meshStandardMaterial color="#c8a96a" metalness={1} roughness={0.2} />
            </mesh>
        </group>
    );
}

/**
 * AI Match Score Component with Animation
 */
function AIMatchScore({ score, userName }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [displayScore, setDisplayScore] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

                setDisplayScore(Math.round(eased * score));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            animate();
        }
    }, [isInView, score]);

    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (displayScore / 100) * circumference;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-2xl glass-card"
        >
            <div className="flex items-center gap-6">
                {/* Score Ring */}
                <div className="relative w-24 h-24 flex-shrink-0">
                    <svg className="w-full h-full -rotate-90">
                        {/* Background ring */}
                        <circle
                            cx="48"
                            cy="48"
                            r="45"
                            fill="none"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="6"
                        />
                        {/* Animated ring */}
                        <motion.circle
                            cx="48"
                            cy="48"
                            r="45"
                            fill="none"
                            stroke="url(#scoreGradient)"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            animate={isInView ? { strokeDashoffset } : {}}
                            transition={{ duration: 2, ease: "easeOut" }}
                            style={{ filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))' }}
                        />
                        <defs>
                            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Score Number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{displayScore}%</span>
                    </div>

                    {/* Glow effect */}
                    {isInView && (
                        <motion.div
                            className="absolute inset-0 rounded-full bg-purple-500/20"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.1, opacity: [0, 0.5, 0] }}
                            transition={{ duration: 2, ease: "easeOut" }}
                        />
                    )}
                </div>

                {/* Match Info */}
                <div>
                    <p className="text-sm text-purple-400 font-medium mb-1">AI Match Score</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                        {userName}님의 피부 데이터와 <span className="text-white font-medium">{score}%</span> 일치하는 포뮬러입니다.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
