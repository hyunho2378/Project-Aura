import { motion } from 'framer-motion';
import { contentData } from '../data/contentData';

/**
 * Mission Section - Uses contentData.mission
 * 
 * Displays brand mission with Korean description
 */
export default function MissionSection() {
    const { mission } = contentData;

    return (
        <section className="relative py-24 md:py-32 bg-[#0a0f1a] overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 
                                w-[800px] h-[400px] bg-gradient-to-b from-purple-500/10 to-transparent 
                                blur-3xl opacity-50" />
            </div>

            {/* Global Container */}
            <div className="relative max-w-screen-xl mx-auto px-6 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Title - English (Serif) */}
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
                        {mission.title}
                    </h2>

                    {/* Description - Korean (Sans-serif) */}
                    <p className="font-sans text-base md:text-lg text-white/50 leading-relaxed whitespace-pre-line">
                        {mission.description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
