import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Video Section - LUXURY TECH Aesthetic
 * 
 * STRICT PALETTE:
 * - Highlight: #3C7795 (Cyan)
 * - Mist: #8AAEC0 (Secondary text)
 * - Surface: #082B35 (Cards)
 * - Void: #000000 (Background)
 * - NO PURPLE
 */
export default function VideoSection() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

    return (
        <section
            ref={containerRef}
            className="relative py-24 md:py-32 bg-black overflow-hidden"
        >
            {/* Global Container */}
            <motion.div
                className="max-w-screen-xl mx-auto px-6 lg:px-16"
                style={{ opacity, scale }}
            >
                {/* Video Container - Luxury Tech Card */}
                <div className="relative aspect-video rounded-2xl overflow-hidden 
                                bg-gradient-to-br from-[#082B35] to-black 
                                border border-[#8AAEC0]/20">
                    {/* Video Placeholder */}
                    <div className="absolute inset-0">
                        {/* Subtle Cyan Gradient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3C7795]/10 via-transparent to-[#1E5672]/10" />

                        {/* Animated Grain */}
                        <div
                            className="absolute inset-0 opacity-5"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                            }}
                        />
                    </div>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Play Button - Cyan accent */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full 
                                       bg-[#082B35]/50 border border-[#3C7795]/50 
                                       flex items-center justify-center 
                                       hover:bg-[#082B35]/70 hover:border-[#3C7795] 
                                       hover:shadow-[0_0_30px_-10px_rgba(60,119,149,0.50)]
                                       transition-all duration-300"
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
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#8AAEC0]/50 mb-1 font-sans">
                            Brand Film
                        </p>
                        <h3 className="font-serif text-xl md:text-2xl text-white">
                            The Science of You
                        </h3>
                    </div>
                </div>

                {/* Text Below - Mist color */}
                <motion.div
                    className="mt-16 text-left max-w-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg md:text-xl text-[#8AAEC0] leading-relaxed font-sans">
                        Every face tells a story. AURA listens—using advanced AI to decode
                        your skin's unique needs and craft solutions that work for <em className="text-white not-italic">you</em>.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
