import { motion } from 'framer-motion';

/**
 * Brand Content - Korean text
 * DO NOT TRANSLATE
 */
const brandContent = {
    hero: {
        title: "Where Science Meets Soul",
        desc: `진정한 아름다움은 당신만큼이나 고유하다는 믿음에서 AURA는 탄생했습니다.
우리는 AI의 힘을 활용해 당신의 피부를 가장 깊은 곳까지 이해하고, 
당신만의 빛을 존중하는 개인화된 리추얼을 만듭니다.`
    },
    philosophy: {
        title: "Our Philosophy",
        desc: "우리는 획일적인 스킨케어 접근 방식을 거부합니다. 대신 각 사람을 특별하게 만드는 피부 결, 톤, 기질의 미세한 차이, 그 복잡성을 온전히 포용합니다."
    },
    vision: {
        title: "Our Vision",
        desc: "데이터와 감성이 결합된 기술로, 누구나 자신만의 고유한 아우라를 발견하고 주체적인 아름다움을 완성하는 세상을 그립니다."
    },
    values: [
        { id: 1, title: "Hyper-Personalization", desc: "평균이 아닌, 오직 당신 한 사람을 위한 정밀함." },
        { id: 2, title: "Data Integrity", desc: "투명하고 정확한 데이터 분석을 통한 신뢰." },
        { id: 3, title: "Soulful Tech", desc: "차가운 기술이 아닌, 삶에 스며드는 따뜻한 혁신." }
    ]
};

/**
 * Brand Story Page - LUXURY TECH Aesthetic
 * 
 * STRICT PALETTE:
 * - #000000 (Black - Background)
 * - #082B35 (Darkest Teal - Surface)
 * - #1E5672 (Deep Teal - Accent)
 * - #3C7795 (Cyan - Highlight)
 * - #8AAEC0 (Mist - Secondary Text)
 * - #FFFFFF (White - Primary Text)
 * 
 * NO PURPLE • NO BLUR ARTIFACTS
 */
export default function BrandStory() {
    return (
        <main className="min-h-screen bg-transparent pt-20 relative z-10">

            {/* Hero Section - CLEAN, NO BLUR ARTIFACTS */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="relative max-w-screen-xl mx-auto px-6 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        {/* Label - Cyan (NOT purple) */}
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#3C7795] font-sans mb-4">
                            Our Story
                        </p>
                        {/* Title - English (Serif) */}
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
                            {brandContent.hero.title}
                        </h1>
                        {/* Description - Korean (Sans-serif) - Mist color */}
                        <p className="font-sans text-lg md:text-xl text-[#8AAEC0] leading-relaxed whitespace-pre-line"
                            style={{ wordBreak: 'keep-all' }}>
                            {brandContent.hero.desc}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy & Vision Section */}
            <section className="py-24 border-t border-[#8AAEC0]/10 relative">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                        {/* Philosophy Card - Luxury Tech Gradient (NO blur) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-[#082B35] to-black border border-[#8AAEC0]/20 rounded-3xl p-8 md:p-10"
                        >
                            {/* Title - English (Serif) */}
                            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6">
                                {brandContent.philosophy.title}
                            </h2>
                            {/* Description - Korean (Sans-serif) - Mist */}
                            <p className="font-sans text-[#8AAEC0] leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                                {brandContent.philosophy.desc}
                            </p>
                        </motion.div>

                        {/* Vision Card - Luxury Tech Gradient (NO blur) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-gradient-to-br from-[#082B35] to-black border border-[#8AAEC0]/20 rounded-3xl p-8 md:p-10"
                        >
                            {/* Title - English (Serif) */}
                            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6">
                                {brandContent.vision.title}
                            </h2>
                            {/* Description - Korean (Sans-serif) - Mist */}
                            <p className="font-sans text-[#8AAEC0] leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                                {brandContent.vision.desc}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 border-t border-[#8AAEC0]/10 relative overflow-hidden">
                <div className="relative max-w-screen-xl mx-auto px-6 lg:px-16">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        {/* Label - Cyan (NOT purple) */}
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#3C7795] font-sans mb-4">
                            What We Believe
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl text-white">
                            Our Core Values
                        </h2>
                    </motion.div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {brandContent.values.map((value, index) => (
                            <motion.div
                                key={value.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-gradient-to-br from-[#082B35] to-black border border-[#8AAEC0]/20 rounded-2xl p-8
                                           hover:border-[#3C7795]/50 transition-all duration-500"
                            >
                                {/* Number - Cyan (NOT purple) */}
                                <span className="text-[11px] font-sans text-[#3C7795] tracking-[0.15em] mb-4 block">
                                    {String(value.id).padStart(2, '0')}
                                </span>

                                {/* Title - English (Serif) */}
                                <h3 className="font-serif text-xl text-white mb-4">
                                    {value.title}
                                </h3>

                                {/* Description - Korean (Sans-serif) - Mist dimmed */}
                                <p className="font-sans text-sm text-[#8AAEC0]/60 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 border-t border-[#8AAEC0]/10">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
                            Ready to discover your aura?
                        </h2>
                        <p className="font-sans text-[#8AAEC0] mb-8" style={{ wordBreak: 'keep-all' }}>
                            당신만의 고유한 빛을 찾는 여정을 시작하세요.
                        </p>
                        <a href="/analysis" className="btn-primary inline-flex items-center gap-3">
                            <span className="font-sans text-sm tracking-wide">Start Your Analysis</span>
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
