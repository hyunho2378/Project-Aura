import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Shop Page - Product Catalog
 * 
 * Sophisticated grid layout with glassmorphism product cards
 */
export default function Shop() {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Products' },
        { id: 'serum', label: 'Serums' },
        { id: 'cream', label: 'Creams' },
        { id: 'cleanser', label: 'Cleansers' },
        { id: 'essence', label: 'Essences' }
    ];

    const products = [
        {
            id: 1,
            name: 'Aura Hydra Serum',
            category: 'serum',
            price: 78000,
            description: 'Deep hydration with hyaluronic acid complex',
            color: 'from-purple-500/20 to-blue-500/20',
            badge: 'Best Seller'
        },
        {
            id: 2,
            name: 'Glow Radiance Essence',
            category: 'essence',
            price: 65000,
            description: 'Brightening formula for luminous skin',
            color: 'from-pink-500/20 to-purple-500/20',
            badge: null
        },
        {
            id: 3,
            name: 'Calm Barrier Cream',
            category: 'cream',
            price: 89000,
            description: 'Soothing moisturizer for sensitive skin',
            color: 'from-blue-500/20 to-teal-500/20',
            badge: 'New'
        },
        {
            id: 4,
            name: 'Pure Gentle Cleanser',
            category: 'cleanser',
            price: 42000,
            description: 'pH-balanced foam cleanser',
            color: 'from-teal-500/20 to-green-500/20',
            badge: null
        },
        {
            id: 5,
            name: 'Night Repair Complex',
            category: 'serum',
            price: 120000,
            description: 'Overnight regeneration serum with retinol',
            color: 'from-indigo-500/20 to-purple-500/20',
            badge: 'Premium'
        },
        {
            id: 6,
            name: 'Vitamin C Brightening',
            category: 'serum',
            price: 72000,
            description: '15% stabilized vitamin C for radiance',
            color: 'from-orange-500/20 to-yellow-500/20',
            badge: null
        },
        {
            id: 7,
            name: 'Oil-Free Moisturizer',
            category: 'cream',
            price: 58000,
            description: 'Lightweight hydration for oily skin',
            color: 'from-cyan-500/20 to-blue-500/20',
            badge: null
        },
        {
            id: 8,
            name: 'Deep Cleansing Oil',
            category: 'cleanser',
            price: 48000,
            description: 'Gentle makeup remover with botanical oils',
            color: 'from-amber-500/20 to-orange-500/20',
            badge: null
        },
        {
            id: 9,
            name: 'First Treatment Essence',
            category: 'essence',
            price: 95000,
            description: 'Fermented essence for skin renewal',
            color: 'from-rose-500/20 to-pink-500/20',
            badge: 'Best Seller'
        }
    ];

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('ko-KR').format(price) + '원';
    };

    return (
        <div className="min-h-screen bg-void pt-24">
            {/* Header Section */}
            <section className="px-6 md:px-12 lg:px-24 pt-16 pb-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
                            Product Collection
                        </p>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
                            Curated for
                            <br />
                            <span className="italic text-white/80">Your Skin</span>
                        </h1>
                        <p className="text-lg text-white/50 max-w-xl">
                            Discover our range of scientifically-formulated products,
                            each designed to address specific skin concerns.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="px-6 md:px-12 lg:px-24 pb-8 border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`
                  px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === cat.id
                                        ? 'bg-white text-void'
                                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                                    }
                `}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="px-6 md:px-12 lg:px-24 py-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        layout
                    >
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group"
                            >
                                <Link to={`/shop/${product.id}`} className="block">
                                    <div className="relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500">
                                        {/* Product Image Area */}
                                        <div className={`relative h-[280px] bg-gradient-to-br ${product.color}`}>
                                            {/* Badge */}
                                            {product.badge && (
                                                <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white/80 border border-white/10">
                                                    {product.badge}
                                                </div>
                                            )}

                                            {/* Placeholder Product Visual */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-20 h-32 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500" />
                                            </div>

                                            {/* Quick Add Button */}
                                            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <button className="w-full py-3 bg-white/10 backdrop-blur-md rounded-xl text-sm text-white border border-white/20 hover:bg-white/20 transition-colors">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>

                                        {/* Product Info */}
                                        <div className="p-6">
                                            <p className="text-xs uppercase tracking-wider text-white/40 mb-2">
                                                {product.category}
                                            </p>
                                            <h3 className="font-sans text-lg font-medium text-white mb-2 group-hover:text-white/90 transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-white/40 mb-4 line-clamp-2">
                                                {product.description}
                                            </p>
                                            <p className="text-lg font-medium text-white">
                                                {formatPrice(product.price)}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="px-6 md:px-12 lg:px-24 py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-pink-500/10 border border-white/5">
                        <div className="relative z-10 text-center">
                            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
                                Not sure what's right for you?
                            </h2>
                            <p className="text-white/50 mb-8 max-w-md mx-auto">
                                Take our AI-powered skin diagnosis and get personalized product recommendations.
                            </p>
                            <a href="/diagnosis" className="btn-primary inline-block">
                                <span>Start Diagnosis</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
