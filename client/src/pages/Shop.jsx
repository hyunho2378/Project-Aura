import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ALL_PRODUCTS } from '../data/productsData';

/**
 * Shop Page - Personalized Recommendations (Analysis Result)
 * 
 * Visual Refinements:
 * - 게스트 (Korean for Guest)
 * - Single line description
 * - Divider line below header
 * - Tight spacing
 * - 3-column grid
 * 
 * Background: Transparent (uses global Deep Navy)
 */
export default function Shop() {
    // Simulate logged-in user with 수부지 skin type
    const userSkinType = "수부지";
    const userName = "게스트";

    // Filter products for user's skin type
    const recommendedProducts = ALL_PRODUCTS.filter(p => p.skinType === userSkinType);

    return (
        <main className="min-h-screen bg-transparent relative z-10">
            {/* Compact Header Section - Reduced padding */}
            <div className="max-w-5xl mx-auto px-6 pt-24 pb-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Label */}
                    <p className="text-purple-400 font-bold tracking-widest text-xs mb-3 uppercase font-sans">
                        AI Personalized
                    </p>

                    {/* Title - Korean */}
                    <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
                        <span className="text-white">{userName}</span>님을 위한<br />
                        <span className="text-gradient-purple">맞춤 처방</span>
                    </h1>

                    {/* Description - SINGLE LINE */}
                    <p className="text-gray-300 text-base md:text-lg mb-6 font-sans whitespace-nowrap overflow-hidden text-ellipsis"
                        style={{ wordBreak: 'keep-all' }}>
                        {userName}님의 피부 타입 분석 결과에 기반한 최적의 솔루션입니다. AI가 분석한 <span className="text-purple-400 font-bold">{userSkinType}</span> 피부에 맞는 제품을 추천해 드립니다.
                    </p>

                    {/* Divider Line */}
                    <div className="w-full h-px bg-white/20 mb-8" />
                </motion.div>

                {/* Skin Type Badge & Count */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full">
                        <span className="text-sm font-sans text-purple-300">
                            피부 타입: <span className="font-bold text-white">{userSkinType}</span>
                        </span>
                    </div>
                    <span className="text-sm text-white/40 font-sans">
                        {recommendedProducts.length}개의 맞춤 제품
                    </span>
                </motion.div>

                {/* 3-COLUMN GRID */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {recommendedProducts.map((product, index) => {
                        // Calculate match rate for each product (85-99%)
                        const matchRate = 85 + (product.id % 15);

                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                            >
                                <Link
                                    to={`/shop/${product.id}`}
                                    className="group block"
                                >
                                    {/* Card - Glassmorphism with Match Score */}
                                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden
                                                    hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500">

                                        {/* Match Score Badge */}
                                        <div className="absolute top-3 left-3 z-10">
                                            <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider font-sans
                                                           bg-purple-500/30 backdrop-blur-sm text-purple-200 rounded-full border border-purple-400/30">
                                                {matchRate}% Match
                                            </span>
                                        </div>

                                        {/* Tag */}
                                        {product.tag && (
                                            <div className="absolute top-3 right-3 z-10">
                                                <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-sans
                                                               bg-white/10 backdrop-blur-sm text-white/80 rounded-full">
                                                    {product.tag}
                                                </span>
                                            </div>
                                        )}

                                        {/* Image Area */}
                                        <div className={`aspect-[4/5] ${product.imageColor} relative overflow-hidden`}>
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f29]/50 to-transparent" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-5">
                                            {/* Category */}
                                            <p className="text-[10px] uppercase tracking-[0.15em] text-white/30 font-sans mb-1">
                                                {product.category}
                                            </p>

                                            {/* Name - English (Serif) */}
                                            <h3 className="font-serif text-base text-white mb-1 group-hover:text-purple-300 transition-colors">
                                                {product.name}
                                            </h3>

                                            {/* Price */}
                                            <p className="font-sans text-sm text-white/60 mb-3">
                                                {product.price}
                                            </p>

                                            {/* Description - Korean */}
                                            <p className="font-sans text-xs text-white/40 leading-relaxed line-clamp-2" style={{ wordBreak: 'keep-all' }}>
                                                {product.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Bottom Spacing */}
            <div className="pb-16" />
        </main>
    );
}
