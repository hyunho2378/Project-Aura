import { motion } from 'framer-motion';
import { contentData } from '../data/contentData';

/**
 * Mission Section - PURE BLACK Aesthetic
 * 
 * STRICT PALETTE:
 * - Background: #000000 (Pure Black)
 * - Title: #FFFFFF (White)
 * - Description: #8AAEC0 (Mist)
 * - NO PURPLE, NO MUDDY BLUE
 */
export default function MissionSection() {
    const { mission } = contentData;

    return (
        <section className="relative py-24 md:py-32 bg-black overflow-hidden">
            {/* NO BLUR ARTIFACTS - Clean background */}

            {/* Global Container */}
            <div className="relative max-w-screen-xl mx-auto px-6 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Title - English (Serif) - White */}
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
                        {mission.title}
                    </h2>

                    {/* Description - Korean (Sans-serif) - Mist */}
                    <p className="font-sans text-base md:text-lg text-[#8AAEC0] leading-relaxed whitespace-pre-line">
                        {mission.description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
