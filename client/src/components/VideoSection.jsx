import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Video Section
 * 
 * Full-width cinematic brand film placeholder with glass overlay
 */
export default function VideoSection() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

    return (
        <section
            ref={containerRef}
            className="relative py-32 px-6 md:px-12 lg:px-24 bg-void overflow-hidden"
        >
            <motion.div
                className="max-w-7xl mx-auto"
                style={{ opacity, scale }}
            >
                {/* Video Container */}
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-void-lighter">
                    {/* Video Placeholder */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-pink-500/20" />

                        {/* Animated Grain */}
                        <div
                            className="absolute inset-0 opacity-5"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                            }}
                        />
                    </div>

                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-void/40 backdrop-blur-sm" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group hover:bg-white/20 transition-colors"
                        >
                            <svg
                                className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">
                            Brand Film
                        </p>
                        <h3 className="font-serif text-xl md:text-2xl text-white">
                            The Science of You
                        </h3>
                    </div>
                </div>

                {/* Text Below */}
                <motion.div
                    className="mt-16 text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg md:text-xl text-white/50 leading-relaxed">
                        Every face tells a story. AURA listens—using advanced AI to decode
                        your skin's unique needs and craft solutions that work for <em className="text-white/70 not-italic">you</em>.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
