import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Footer Links Data
 */
const SHOP_LINKS = [
    { id: 1, label: 'Shop All', href: '/shop' },
    { id: 2, label: 'AI Analysis', href: '/analysis' },
    { id: 3, label: 'Curations', href: '/curations' },
    { id: 4, label: 'Gift Cards', href: '/gift-cards' },
];

const COMPANY_LINKS = [
    { id: 1, label: 'Brand Story', href: '/brand' },
    { id: 2, label: 'Careers', href: '/careers' },
    { id: 3, label: 'Press', href: '/press' },
    { id: 4, label: 'Contact', href: '/contact' },
];

const SOCIAL_LINKS = [
    {
        id: 1,
        label: 'Instagram',
        href: 'https://instagram.com',
        icon: (
            <svg width="18\" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        )
    },
    {
        id: 2,
        label: 'YouTube',
        href: 'https://youtube.com',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
        )
    },
    {
        id: 3,
        label: 'Twitter',
        href: 'https://twitter.com',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
        )
    },
];

/**
 * Footer Component - 4-Column Professional Layout
 * 
 * Strictly left-aligned, luxury grid design
 * Reference: Aesop, Tamburins, Amorepacific
 */
export default function Footer() {
    return (
        <footer className="relative bg-[#0a0f1a] border-t border-white/5">
            {/* Subtle gradient line */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            {/* Main Content - Global Container */}
            <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-16 md:py-20">

                {/* 4-Column Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 text-left">

                    {/* Column 1: Brand */}
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
                        <p className="font-sans text-sm text-white/40 mt-4 leading-relaxed max-w-[200px]">
                            Sculpting Beauty<br />with Your Data.
                        </p>
                    </motion.div>

                    {/* Column 2: Shop */}
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
                            {SHOP_LINKS.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        to={link.href}
                                        className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Company */}
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
                            {COMPANY_LINKS.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        to={link.href}
                                        className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 4: Social */}
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
                            {SOCIAL_LINKS.map((social) => (
                                <li key={social.id}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2.5 text-white/50 hover:text-white transition-colors duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <span className="text-white/40 group-hover:text-purple-400 transition-colors duration-300">
                                            {social.icon}
                                        </span>
                                        <span className="font-sans text-sm">{social.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar - Left Aligned */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                    <p className="font-sans text-xs text-white/30 text-left">
                        © 2026 AURA Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-left">
                        <Link to="/privacy" className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
