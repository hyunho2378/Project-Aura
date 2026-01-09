import { motion } from 'framer-motion';

/**
 * Hero Section Component
 * 
 * Cinematic center-stage hero with staggered text animations
 * and a placeholder for the 3D Antigravity scene.
 */
export default function Hero() {
    // Animation variants for staggered fade-in
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* ================================================
          3D SCENE PLACEHOLDER
          The <AntigravityScene /> component will be 
          positioned here to create the mysterious void
          background effect. Replace this div with the
          actual WebGL canvas component.
          ================================================ */}
            <div
                className="absolute inset-0 z-10"
                aria-hidden="true"
            >
                {/* <AntigravityScene /> */}

                {/* Ambient background glows for visual depth */}
                <div className="ambient-glow ambient-glow-1" />
                <div className="ambient-glow ambient-glow-2" />

                {/* Subtle noise texture overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* ================================================
          TEXT CONTENT LAYER (Above 3D Scene)
          ================================================ */}
            <motion.div
                className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Main Title */}
                <motion.h1
                    variants={itemVariants}
                    className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-none mb-6"
                >
                    Data-Sculpted
                    <br />
                    <span className="italic font-normal">Beauty</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="font-sans text-sm sm:text-base md:text-lg text-white/50 max-w-md md:max-w-xl mb-12 leading-relaxed"
                >
                    Discover your inner universe through our
                    <br className="hidden sm:block" />
                    3D wellness algorithm.
                </motion.p>

                {/* CTA Button */}
                <motion.button
                    variants={itemVariants}
                    className="btn-glow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span>Start Diagnosis</span>
                </motion.button>
            </motion.div>

            {/* ================================================
          SCROLL HINT INDICATOR
          ================================================ */}
            <motion.div
                className="absolute bottom-8 left-1/2 z-20 scroll-hint flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-sans">
                    Scroll
                </span>
                <svg
                    width="16"
                    height="24"
                    viewBox="0 0 16 24"
                    fill="none"
                    className="text-white/40"
                >
                    <rect
                        x="1"
                        y="1"
                        width="14"
                        height="22"
                        rx="7"
                        stroke="currentColor"
                        strokeWidth="1"
                    />
                    <motion.circle
                        cx="8"
                        cy="8"
                        r="2"
                        fill="currentColor"
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </svg>
            </motion.div>
        </section>
    );
}
