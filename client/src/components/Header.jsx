import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

/**
 * Navigation Menu Items
 */
const MENU_ITEMS = [
    { id: 1, label: 'Brand Story', href: '/brand' },
    { id: 2, label: 'AI Analysis', href: '/analysis' },
    { id: 3, label: 'Curations', href: '/curations' },
];

/**
 * Header Component - Global Luxury Beauty Standard
 * 
 * Layout: Logo (Left) | Empty Center | Nav + Utilities (Right)
 * Reference: Aesop, Tamburins, Amorepacific
 */
export default function Header({ onLoginClick, isLoggedIn, onLogout, user }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const isActive = (href) => location.pathname === href;

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className={`
                    fixed top-0 left-0 right-0 z-50
                    h-16 md:h-20
                    transition-all duration-500
                    ${isScrolled ? 'bg-[#0a0f1a]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}
                `}
            >
                {/* Global Container - Shared alignment with content */}
                <div className="max-w-screen-xl mx-auto px-6 lg:px-16 h-full flex items-center justify-between">

                    {/* Left: Logo */}
                    <Link
                        to="/"
                        className="font-serif text-xl md:text-2xl font-medium tracking-[0.15em] text-white hover:opacity-80 transition-opacity"
                    >
                        AURA
                    </Link>

                    {/* Center: Empty (for luxury spacing) */}
                    <div className="hidden lg:block flex-1" />

                    {/* Right: Navigation + Utilities */}
                    <div className="hidden lg:flex items-center gap-12">
                        {/* Navigation Links */}
                        <nav className="flex items-center gap-10">
                            {MENU_ITEMS.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.href}
                                    className={`
                                        relative text-[13px] tracking-[0.1em] uppercase font-sans
                                        ${isActive(item.href) ? 'text-white' : 'text-white/50'}
                                        hover:text-white transition-colors duration-300
                                    `}
                                >
                                    {item.label}
                                    {isActive(item.href) && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white/60"
                                        />
                                    )}
                                </Link>
                            ))}
                        </nav>

                        {/* Divider */}
                        <div className="w-[1px] h-4 bg-white/10" />

                        {/* Utilities: Language Toggle + Login */}
                        <div className="flex items-center gap-6">
                            {/* Language Toggle */}
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-1.5 text-[12px] tracking-wide font-sans
                                           text-white/50 hover:text-white transition-colors duration-300"
                                aria-label="Toggle Language"
                            >
                                <span className={language === 'ko' ? 'text-white' : ''}>KR</span>
                                <span className="text-white/20">/</span>
                                <span className={language === 'en' ? 'text-white' : ''}>EN</span>
                            </button>

                            {/* User Button */}
                            {isLoggedIn ? (
                                <Link
                                    to="/dashboard"
                                    className="text-[12px] tracking-wide font-sans text-white/50 hover:text-white transition-colors duration-300"
                                >
                                    My Page
                                </Link>
                            ) : (
                                <button
                                    onClick={onLoginClick}
                                    className="text-[12px] tracking-wide font-sans text-white/50 hover:text-white transition-colors duration-300"
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mobile: Hamburger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden flex flex-col items-end gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
                            className="w-6 h-[1.5px] bg-white/80 block origin-center"
                        />
                        <motion.span
                            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                            className="w-4 h-[1.5px] bg-white/50 block"
                        />
                        <motion.span
                            animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
                            className="w-6 h-[1.5px] bg-white/80 block origin-center"
                        />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-[#0a0f1a]/98 backdrop-blur-2xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="absolute inset-x-0 top-20 flex flex-col items-center gap-8 p-12"
                        >
                            {MENU_ITEMS.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 + index * 0.05 }}
                                >
                                    <Link
                                        to={item.href}
                                        className={`text-2xl font-serif tracking-wide ${isActive(item.href) ? 'text-white' : 'text-white/50'} hover:text-white transition-colors`}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Language Toggle - Mobile */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10"
                            >
                                <button
                                    onClick={toggleLanguage}
                                    className="text-sm font-sans text-white/40 hover:text-white transition-colors"
                                >
                                    {language === 'ko' ? 'Switch to English' : '한국어로 변경'}
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                className="mt-4"
                            >
                                {isLoggedIn ? (
                                    <Link to="/dashboard" className="btn-glass text-sm py-3 px-8 font-sans">
                                        My Page
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() => { setIsMobileMenuOpen(false); onLoginClick(); }}
                                        className="btn-glass text-sm py-3 px-8 font-sans"
                                    >
                                        Login
                                    </button>
                                )}
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
