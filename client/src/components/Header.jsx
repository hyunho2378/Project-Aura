import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

/**
 * Header Component
 * 
 * High-end navigation with corrected menu structure:
 * Logo (AURA → /) | AURA | Diagnosis | Curations | [Globe] [User]
 */
export default function Header({ onLoginClick, isLoggedIn, onLogout, user }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const menuItems = [
        { label: 'AURA', href: '/aura' },
        { label: 'Diagnosis', href: '/diagnosis' },
        { label: 'Curations', href: '/shop' },
    ];

    const isActive = (href) => location.pathname === href;

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className={`
          fixed top-0 left-0 right-0 z-50
          h-[72px] md:h-[80px] px-6 md:px-12 lg:px-20
          flex items-center justify-between
          transition-all duration-500
          ${isScrolled ? 'glass' : 'bg-transparent'}
        `}
            >
                {/* Logo - Links to Home */}
                <Link
                    to="/"
                    className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-white hover:opacity-80 transition-opacity"
                >
                    AURA
                </Link>

                {/* Center Navigation - Desktop */}
                <nav className="hidden lg:flex items-center gap-10">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={`
                nav-link text-sm tracking-wide
                ${isActive(item.href) ? 'text-white' : 'text-white/60'}
              `}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Right Section */}
                <div className="flex items-center gap-3 md:gap-4">
                    {/* Language Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="p-2 text-white/60 hover:text-white transition-colors"
                            aria-label="Language"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M2 12h20" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </button>

                        <AnimatePresence>
                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute right-0 top-full mt-2 py-2 px-1 rounded-xl glass min-w-[120px]"
                                >
                                    {['English', '한국어', '中文'].map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => setIsLangOpen(false)}
                                            className="w-full px-4 py-2 text-left text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                        >
                                            {lang}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* User Button */}
                    {isLoggedIn ? (
                        <div className="hidden sm:flex items-center gap-3">
                            <Link to="/dashboard" className="btn-glass text-sm py-2 px-4">
                                My Page
                            </Link>
                        </div>
                    ) : (
                        <button
                            onClick={onLoginClick}
                            className="hidden sm:flex btn-glass text-sm py-2 px-4"
                        >
                            Log In
                        </button>
                    )}

                    {/* Hamburger Menu - Mobile */}
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
                            className="w-4 h-[1.5px] bg-white/60 block"
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
                            className="absolute inset-0 bg-void/95 backdrop-blur-2xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="absolute inset-x-0 top-[80px] flex flex-col items-center gap-8 p-10"
                        >
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 + index * 0.05 }}
                                >
                                    <Link
                                        to={item.href}
                                        className={`text-2xl font-serif ${isActive(item.href) ? 'text-white' : 'text-white/60'} hover:text-white transition-colors`}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-6"
                            >
                                {isLoggedIn ? (
                                    <Link to="/dashboard" className="btn-glass">
                                        My Page
                                    </Link>
                                ) : (
                                    <button onClick={() => { setIsMobileMenuOpen(false); onLoginClick(); }} className="btn-glass">
                                        Log In
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
