import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Navbar Component
 * 
 * Fixed navigation bar with glassmorphism effect on scroll.
 * Features elegant logo and minimal navigation links.
 */
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Diagnosis', href: '#diagnosis' },
        { label: 'Shop', href: '#shop' },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-8 md:px-16 lg:px-24
        h-[80px]
        transition-all duration-500 ease-out
        ${isScrolled
                    ? 'glass'
                    : 'bg-transparent'
                }
      `}
        >
            {/* Logo */}
            <a
                href="/"
                className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-white"
            >
                AURA
            </a>

            {/* Navigation Links */}
            <div className="flex items-center gap-8 md:gap-12">
                {navLinks.map((link, index) => (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        className="nav-link hidden sm:block"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3 + index * 0.1,
                            ease: [0.4, 0, 0.2, 1]
                        }}
                    >
                        {link.label}
                    </motion.a>
                ))}

                {/* Mobile Menu Button */}
                <button
                    className="sm:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span className="w-6 h-[1px] bg-white/80" />
                    <span className="w-4 h-[1px] bg-white/60" />
                </button>
            </div>
        </motion.nav>
    );
}
