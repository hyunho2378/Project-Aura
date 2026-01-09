import { motion } from 'framer-motion';

/**
 * Process Steps Data - Exact content as specified
 */
const PROCESS_STEPS = [
    {
        id: 1,
        titleEn: "Capture Reality",
        descKo: "초정밀 AI 스캐닝으로 당신의 피부 텍스처와 빛을 있는 그대로 포착합니다.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
            </svg>
        ),
    },
    {
        id: 2,
        titleEn: "Deep Analysis",
        descKo: "6가지 핵심 지표를 입체적으로 분석하여 데이터 기반의 고유한 '아우라 타입'을 도출합니다.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6" />
                <path d="M8 18v-1" />
                <path d="M16 18v-3" />
            </svg>
        ),
    },
    {
        id: 3,
        titleEn: "Curated Ritual",
        descKo: "단순한 제품 추천을 넘어, 당신의 라이프스타일에 스며드는 최적의 뷰티 리추얼을 설계합니다.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </svg>
        ),
    },
    {
        id: 4,
        titleEn: "Continuous Glow",
        descKo: "변화하는 피부 컨디션을 지속적으로 트래킹하며, 어제보다 더 나은 당신의 빛을 완성합니다.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
            </svg>
        ),
    },
];

/**
 * HowItWorks Component - Process Section
 * 
 * Hover Interaction:
 * - Default: Step Number, Icon, English Title (Serif)
 * - Hover: Fade in Korean Description (Sans-serif) with duration-500
 */
export default function HowItWorks() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#0a0f1a]">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                w-[900px] h-[500px] bg-gradient-to-r from-purple-500/8 via-blue-500/5 to-pink-500/8 
                                blur-3xl opacity-60" />
            </div>

            {/* Global Container */}
            <div className="relative max-w-screen-xl mx-auto px-6 lg:px-16">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-left mb-16 md:mb-20"
                >
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-sans mb-4">
                        How It Works
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                        Your Journey to<br />
                        <span className="text-gradient-purple">Radiant Aura</span>
                    </h2>
                </motion.div>

                {/* Process Cards Grid - 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PROCESS_STEPS.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] 
                                       rounded-2xl p-8 md:p-10 min-h-[320px] md:min-h-[360px]
                                       hover:bg-white/[0.06] hover:border-white/[0.12]
                                       transition-all duration-500 cursor-default"
                        >
                            {/* Step Number & Icon Row */}
                            <div className="flex items-start justify-between mb-8">
                                <span className="text-[11px] font-sans text-white/25 tracking-[0.15em]">
                                    {String(step.id).padStart(2, '0')}
                                </span>
                                <div className="text-white/30 group-hover:text-purple-400/80 transition-colors duration-500">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Title - English Serif */}
                            <h3 className="font-serif text-xl md:text-2xl text-white mb-6 leading-tight">
                                {step.titleEn}
                            </h3>

                            {/* Description - Korean Sans-serif (Hidden by default, fade in on hover) */}
                            <p className="font-sans text-sm text-white/0 leading-relaxed
                                          group-hover:text-white/60
                                          transition-all duration-500 ease-out">
                                {step.descKo}
                            </p>

                            {/* Decorative Line */}
                            <div className="absolute bottom-8 left-8 right-8 h-[1px] 
                                            bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0 
                                            scale-x-0 group-hover:scale-x-100
                                            transition-transform duration-500 origin-left" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <a
                        href="/analysis"
                        className="btn-primary inline-flex items-center gap-3"
                    >
                        <span className="font-sans text-sm tracking-wide">Start Your Analysis</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
