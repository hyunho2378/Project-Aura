import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Sample Curations Data
 */
const CURATIONS = [
    {
        id: 1,
        title: 'Morning Ritual',
        subtitle: 'Start your day with radiance',
        products: 4,
        image: null
    },
    {
        id: 2,
        title: 'Night Recovery',
        subtitle: 'Deep restoration while you sleep',
        products: 5,
        image: null
    },
    {
        id: 3,
        title: 'Hydration Boost',
        subtitle: 'Essential moisture for dry skin',
        products: 3,
        image: null
    },
    {
        id: 4,
        title: 'Sensitive Care',
        subtitle: 'Gentle solutions for delicate skin',
        products: 4,
        image: null
    }
];

/**
 * Curations Page - Personalized Collections
 */
export default function Curations() {
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
                            Curated For You
                        </p>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
                            Rituals Designed<br />
                            <span className="text-gradient-purple">For Your Skin</span>
                        </h1>
                        <p className="font-sans text-lg md:text-xl text-white/50 leading-relaxed">
                            Discover expertly curated collections tailored to your unique skin needs.
                            Each ritual combines science and soul for optimal results.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Curations Grid */}
            <section className="py-16 border-t border-white/5">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {CURATIONS.map((curation, index) => (
                            <motion.div
                                key={curation.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link
                                    to={`/curations/${curation.id}`}
                                    className="group block relative bg-white/[0.03] border border-white/[0.06] 
                                               rounded-2xl p-8 md:p-10 min-h-[280px]
                                               hover:bg-white/[0.06] hover:border-white/[0.12]
                                               transition-all duration-500"
                                >
                                    {/* Badge */}
                                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/30 font-sans">
                                        {curation.products} Products
                                    </span>

                                    {/* Title */}
                                    <h3 className="font-serif text-2xl md:text-3xl text-white mt-4 mb-3
                                                   group-hover:text-gradient transition-colors duration-300">
                                        {curation.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p className="font-sans text-sm text-white/50 leading-relaxed">
                                        {curation.subtitle}
                                    </p>

                                    {/* Arrow */}
                                    <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full 
                                                    bg-white/[0.05] flex items-center justify-center
                                                    group-hover:bg-white/[0.1] transition-colors duration-300">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="1.5" className="text-white/50">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
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
                        <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
                            Not sure where to start?
                        </h2>
                        <p className="font-sans text-white/50 mb-8">
                            Take our AI-powered skin analysis to discover your perfect ritual.
                        </p>
                        <a href="/analysis" className="btn-primary inline-flex items-center gap-3">
                            <span className="font-sans text-sm tracking-wide">Start Analysis</span>
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
