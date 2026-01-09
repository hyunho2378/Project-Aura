import { motion } from 'framer-motion';

/**
 * Brand Story Page - Placeholder
 * 
 * Full page with unified deep navy background
 */
export default function BrandStory() {
    return (
        <main className="min-h-screen bg-[#0a0f1a] pt-20">
            {/* Hero Section */}
            <section className="py-24 md:py-32">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-sans mb-4">
                            Our Story
                        </p>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
                            Where Science<br />
                            <span className="text-gradient-purple">Meets Soul</span>
                        </h1>
                        <p className="font-sans text-lg md:text-xl text-white/50 leading-relaxed">
                            AURA was born from a simple belief: that true beauty is as unique as you are.
                            We harness the power of artificial intelligence to understand your skin at its deepest level,
                            crafting personalized rituals that honor your individual glow.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6">
                                Our Philosophy
                            </h2>
                            <p className="font-sans text-white/50 leading-relaxed">
                                We reject the one-size-fits-all approach to skincare. Instead, we embrace complexity—
                                the subtle variations in texture, tone, and temperament that make each person extraordinary.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6">
                                Our Promise
                            </h2>
                            <p className="font-sans text-white/50 leading-relaxed">
                                Every recommendation we make is backed by data, refined by expertise,
                                and delivered with care. Your trust is our most valued ingredient.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-serif text-2xl md:text-3xl text-white mb-8">
                            Ready to discover your aura?
                        </h2>
                        <a href="/analysis" className="btn-primary inline-flex items-center gap-3">
                            <span className="font-sans text-sm tracking-wide">Start Your Analysis</span>
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
