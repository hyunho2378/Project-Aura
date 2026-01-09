import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Footer Component - Cloned from Header Layout Logic
 * 
 * Container classes COPIED EXACTLY from Header.jsx line 48:
 * "max-w-screen-xl mx-auto px-6 lg:px-16"
 * 
 * This ensures perfect alignment with the Header.
 */
export default function Footer() {
    return (
        /* ============================================
           LAYER 1: FULL WIDTH BACKGROUND
           w-full = 100vw edge-to-edge
           bg-[#0a0f29] = Dark theme background
           ============================================ */
        <footer className="w-full bg-[#0a0f29] border-t border-white/10 pt-20 pb-10">

            {/* Holographic glow line */}
            <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

            {/* ============================================
                LAYER 2: CONTENT CONTAINER
                EXACT SAME CLASSES AS HEADER.JSX LINE 48:
                max-w-screen-xl mx-auto px-6 lg:px-16
                ============================================ */}
            <div className="max-w-screen-xl mx-auto px-6 lg:px-16">

                {/* LAYER 3: Footer Content Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

                    {/* Column 1: Brand Logo & Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="col-span-2 md:col-span-1"
                    >
                        <Link to="/" className="font-serif text-2xl tracking-[0.1em] text-white hover:opacity-80 transition-opacity">
                            AURA
                        </Link>
                        <p className="font-sans text-sm text-white/40 mt-4 leading-relaxed max-w-[200px]" style={{ wordBreak: 'keep-all' }}>
                            데이터로 조각하는 나만의 아름다움.
                        </p>
                    </motion.div>

                    {/* Column 2: Shop Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-sans mb-5">
                            Shop
                        </p>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/curations" className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-300">
                                    전체 상품 보기
                                </Link>
                            </li>
                            <li>
                                <Link to="/analysis" className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-300">
                                    AI 피부 진단
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-300">
                                    맞춤 처방
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Column 3: Company Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-sans mb-5">
                            Company
                        </p>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/brand" className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-300">
                                    브랜드 스토리
                                </Link>
                            </li>
                            <li>
                                <Link to="/analysis" className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-300">
                                    AI 진단
                                </Link>
                            </li>
                            <li>
                                <Link to="/curations" className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-300">
                                    큐레이션
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Column 4: Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-sans mb-5">
                            Follow
                        </p>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 text-white/50 hover:text-white transition-colors duration-300 group"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40 group-hover:text-purple-400 transition-colors">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                    <span className="font-sans text-sm">Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 text-white/50 hover:text-white transition-colors duration-300 group"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40 group-hover:text-purple-400 transition-colors">
                                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                                    </svg>
                                    <span className="font-sans text-sm">YouTube</span>
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar - Copyright & Legal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                    <p className="font-sans text-xs text-white/30">
                        © 2026 AURA Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link to="/privacy" className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors">
                            개인정보처리방침
                        </Link>
                        <Link to="/terms" className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors">
                            이용약관
                        </Link>
                    </div>
                </motion.div>

            </div>
        </footer>
    );
}
