import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * About Page - Brand Story
 * 
 * Rich storytelling page with parallax scrolling
 */
export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);

    const values = [
        {
            title: "Data-Driven",
            description: "Every recommendation is backed by advanced analytics and AI-powered skin analysis.",
            icon: "📊"
        },
        {
            title: "Personalized",
            description: "No two skin types are alike. We create solutions as unique as you are.",
            icon: "✨"
        },
        {
            title: "Sustainable",
            description: "Beauty that doesn't cost the earth. Eco-conscious formulations and packaging.",
            icon: "🌿"
        },
        {
            title: "Scientific",
            description: "Powered by cutting-edge dermatological research and proven ingredients.",
            icon: "🔬"
        }
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-void pt-24">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Ambient */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[150px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
                </div>

                <motion.div
                    className="relative z-10 text-center px-6"
                    style={{ opacity }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm uppercase tracking-[0.3em] text-white/50 mb-6"
                    >
                        Our Philosophy
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white mb-8 leading-tight"
                    >
                        Beauty is
                        <br />
                        <span className="italic text-white/80">Personal.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
                    >
                        AURA was born from a simple belief: that true beauty emerges when science meets individuality.
                        We don't believe in one-size-fits-all solutions—we believe in you.
                    </motion.p>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
                    </div>
                </motion.div>
            </section>

            {/* Story Section */}
            <section className="py-32 px-6 md:px-12 lg:px-24">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="grid md:grid-cols-2 gap-16 items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Text */}
                        <div>
                            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-8">
                                The AURA
                                <br />
                                <span className="italic text-white/70">Story</span>
                            </h2>
                            <div className="space-y-6 text-white/60 leading-relaxed">
                                <p>
                                    In 2024, a team of data scientists, dermatologists, and beauty enthusiasts
                                    came together with a radical idea: what if skincare could be as unique as
                                    a fingerprint?
                                </p>
                                <p>
                                    Traditional beauty brands offer generic solutions for generic problems.
                                    But your skin tells a story—of your lifestyle, your environment, your genetics.
                                    AURA listens to that story.
                                </p>
                                <p>
                                    Using advanced 3D skin mapping and AI analysis, we decode your skin's unique
                                    language and craft solutions that speak directly to its needs.
                                </p>
                            </div>
                        </div>

                        {/* Visual */}
                        <div className="relative h-[500px] rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-pink-500/20" />
                            <div className="absolute inset-0 backdrop-blur-sm" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-48 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="font-serif text-4xl md:text-5xl font-medium text-white mb-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Our Values
                    </motion.h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500"
                            >
                                <div className="text-4xl mb-6">{value.icon}</div>
                                <h3 className="font-sans text-xl font-medium text-white mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
                        Ready to discover your unique aura?
                    </h2>
                    <p className="text-white/50 mb-10 max-w-md mx-auto">
                        Take our 3-minute skin diagnosis and unlock personalized recommendations.
                    </p>
                    <a href="/diagnosis" className="btn-primary inline-block">
                        <span>Start Your Journey</span>
                    </a>
                </motion.div>
            </section>
        </div>
    );
}
