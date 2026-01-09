import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * How It Works Section
 * 
 * Horizontal scroll showcasing the diagnosis process
 */
export default function HowItWorks() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0.2, 0.8], ["10%", "-40%"]);

    const steps = [
        {
            number: "01",
            title: "Capture",
            description: "Take a quick photo using our AI-powered skin scanner.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
            ),
            color: "from-purple-500/20 to-blue-500/20"
        },
        {
            number: "02",
            title: "Analyze",
            description: "Our AI maps 6 key skin dimensions to determine your unique Aura Type.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 15.5m14.8-.2l-.975 5.556a2.25 2.25 0 01-2.218 1.894H7.393a2.25 2.25 0 01-2.218-1.894L4.2 15.3" />
                </svg>
            ),
            color: "from-blue-500/20 to-teal-500/20"
        },
        {
            number: "03",
            title: "Prescribe",
            description: "Receive a personalized product routine tailored to your exact needs.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
            ),
            color: "from-teal-500/20 to-green-500/20"
        },
        {
            number: "04",
            title: "Transform",
            description: "Track your skin's evolution and refine your routine over time.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
            ),
            color: "from-pink-500/20 to-purple-500/20"
        }
    ];

    return (
        <section
            ref={containerRef}
            className="relative h-[150vh] bg-void"
        >
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                {/* Header */}
                <div className="px-6 md:px-12 lg:px-24 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3">
                            The Process
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white">
                            How It Works
                        </h2>
                    </motion.div>
                </div>

                {/* Horizontal Scroll */}
                <motion.div
                    className="flex gap-6 md:gap-8 pl-6 md:pl-12 lg:pl-24"
                    style={{ x }}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 w-[320px] md:w-[380px]"
                        >
                            <div className={`
                h-[400px] p-8 rounded-3xl
                bg-gradient-to-br ${step.color}
                border border-white/[0.08]
                flex flex-col
                hover:border-white/[0.15] transition-colors duration-500
              `}>
                                {/* Number */}
                                <span className="text-sm text-white/40 font-medium mb-auto">
                                    {step.number}
                                </span>

                                {/* Icon */}
                                <div className="text-white/60 mb-6">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="font-sans text-2xl font-medium text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/50 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* CTA Card */}
                    <div className="flex-shrink-0 w-[280px] h-[400px] flex items-center justify-center">
                        <a
                            href="/diagnosis"
                            className="flex flex-col items-center gap-4 text-white/40 hover:text-white transition-colors group"
                        >
                            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 group-hover:bg-white/5 transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                            <span className="text-sm uppercase tracking-wider">Start Now</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
