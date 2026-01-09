import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ALL_PRODUCTS } from '../data/productsData';

/**
 * ProductDetail - Unified Layout Component (HEADER-ALIGNED VERSION)
 * 
 * Container classes COPIED EXACTLY from Header.jsx line 48:
 * "max-w-screen-xl mx-auto px-6 lg:px-16"
 * 
 * This ensures perfect alignment with Header and Footer.
 * 
 * Used for BOTH routes:
 * - /shop/:id (Analysis Mode) - Shows AI Match Score
 * - /curations/:id (Curation Mode) - Shows Recommendation Target
 */
export default function ProductDetail() {
    const { id } = useParams();
    const location = useLocation();

    // Determine mode from route
    const isShopRoute = location.pathname.startsWith('/shop');
    const mode = isShopRoute ? 'analysis' : 'curation';

    const product = ALL_PRODUCTS.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <main className="min-h-screen bg-transparent flex items-center justify-center relative z-10">
                <div className="text-center">
                    <h1 className="font-serif text-2xl text-white mb-4">제품을 찾을 수 없습니다</h1>
                    <Link to={isShopRoute ? "/shop" : "/curations"} className="text-purple-400 hover:text-purple-300 font-sans">
                        ← 돌아가기
                    </Link>
                </div>
            </main>
        );
    }

    const isAnalysisMode = mode === 'analysis';
    const matchRate = 85 + (product.id % 15);

    return (
        /* ============================================
           1. OUTER WRAPPER: Full Screen Vertical Center
           ============================================ */
        <main className="min-h-screen bg-transparent text-white flex items-center justify-center relative z-10">

            {/* ============================================
                2. THE GOLDEN CONTAINER (Stolen from Header/Footer)
                EXACT SAME CLASSES AS HEADER.JSX LINE 48:
                max-w-screen-xl + mx-auto + px-6 + lg:px-16
                ============================================ */}
            <div className="max-w-screen-xl w-full mx-auto px-6 lg:px-16">

                {/* ============================================
                    3. THE GRID (5:7 Ratio, Fixed 500px Height)
                    ============================================ */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 h-auto md:h-[500px] items-start">

                    {/* LEFT COLUMN (Image): col-span-5 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`md:col-span-5 w-full h-[400px] md:h-full rounded-sm relative overflow-hidden shadow-2xl ${product.imageColor || 'bg-blue-900'}`}
                    >
                        {/* Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] uppercase text-white border border-white/10 z-10">
                            {isAnalysisMode ? 'Best Match' : product.tag}
                        </div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f29]/30 to-transparent" />
                    </motion.div>

                    {/* RIGHT COLUMN (Content): col-span-7 */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-7 flex flex-col h-auto md:h-full justify-between py-2"
                    >
                        {/* Top Info */}
                        <div>
                            <p className="text-purple-300 font-medium tracking-[0.2em] text-xs mb-4 uppercase font-sans">
                                {product.category}
                            </p>
                            <h1 className="text-3xl lg:text-4xl font-serif mb-2 font-light text-white tracking-wide">
                                {product.name}
                            </h1>
                            <p className="text-lg lg:text-xl font-light text-gray-400 font-sans mb-6">
                                {product.price}
                            </p>

                            {/* Description */}
                            <p className="text-gray-300 text-sm leading-loose font-sans opacity-90 border-t border-white/10 pt-6 line-clamp-4" style={{ wordBreak: 'keep-all' }}>
                                {product.desc}
                            </p>

                            {/* Conditional Box */}
                            <div className="mt-6">
                                {isAnalysisMode ? (
                                    <div className="flex items-center gap-4 p-3 border border-white/10 bg-white/5 rounded-lg w-fit">
                                        <div className="text-purple-400 font-serif text-2xl">{matchRate}%</div>
                                        <div className="text-xs text-gray-400 font-sans">AI Match Score</div>
                                    </div>
                                ) : (
                                    <div className="py-2">
                                        <p className="text-[10px] text-purple-300 mb-1 uppercase tracking-wider font-sans">
                                            Recommended For
                                        </p>
                                        <p className="text-sm text-white font-sans" style={{ wordBreak: 'keep-all' }}>
                                            {product.recommendationTarget}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Bottom Button Group (Pinned to bottom) */}
                        <div className="w-full mt-6 md:mt-0">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {product.ingredients.slice(0, 4).map(ing => (
                                    <span
                                        key={ing}
                                        className="text-[10px] text-gray-500 uppercase tracking-wider border border-white/10 px-3 py-1 rounded-full font-sans"
                                    >
                                        {ing}
                                    </span>
                                ))}
                            </div>

                            <button className="w-full py-4 bg-white text-[#0a0f29] text-sm font-bold tracking-[0.1em] uppercase hover:bg-gray-200 transition-all duration-300 font-sans">
                                장바구니 담기
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
