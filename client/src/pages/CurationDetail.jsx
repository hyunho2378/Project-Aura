import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Analysis Result Products - Korean text
 * Used when source='analysis' (user just finished the test)
 */
const analysisProducts = [
    {
        id: 101,
        name: "Aura Hydra Serum",
        type: "SERUM",
        matchRate: 97,
        desc: "속건조를 해결하고 유수분 밸런스를 맞춰주는 맞춤형 세럼",
        fullDesc: "피부 깊숙한 곳까지 수분을 전달하여 72시간 동안 촉촉함을 유지하는 혁신적인 수분 컴플렉스입니다. 히알루론산 3중 복합체가 피부 속부터 겉까지 수분을 채우고, 세라마이드가 피부 장벽을 강화합니다.",
        price: "₩78,000",
        imageColor: "bg-blue-900",
        ingredients: ["Hyaluronic Acid", "Ceramide NP", "Niacinamide", "Panthenol"]
    },
    {
        id: 102,
        name: "Glow Radiance Essence",
        type: "ESSENCE",
        matchRate: 92,
        desc: "칙칙한 피부 톤을 밝혀주는 고농축 에센스",
        fullDesc: "칙칙한 피부 톤을 밝혀주고 본연의 광채를 되찾아주는 고농축 화이트닝 에센스입니다. 순수 비타민C와 나이아신아마이드가 기미, 잡티를 케어합니다.",
        price: "₩65,000",
        imageColor: "bg-purple-900",
        ingredients: ["Vitamin C", "Niacinamide", "Alpha Arbutin", "Glutathione"]
    }
];

/**
 * Curation Products - Korean text
 * Used when source='curation' (general browsing)
 */
const curationProducts = [
    {
        id: 201,
        name: "Calm Barrier Cream",
        type: "CREAM",
        tag: "Sensitive Care",
        desc: "외부 자극에 예민한 피부를 위한 고농축 진정 크림",
        fullDesc: "민감해진 피부 장벽을 강화하고 외부 자극으로부터 피부를 보호하는 진정 크림입니다. 센텔라아시아티카와 마데카소사이드가 자극받은 피부를 빠르게 진정시킵니다.",
        recommendationText: "민감성 피부 / 붉은기 완화 추천",
        price: "₩89,000",
        imageColor: "bg-indigo-900",
        ingredients: ["Centella Asiatica", "Madecassoside", "Ceramide EOP", "Allantoin"]
    },
    {
        id: 202,
        name: "Aura Hydra Serum",
        type: "SERUM",
        tag: "Best Seller",
        desc: "수부지 피부를 위한 수분 충전 솔루션",
        fullDesc: "피부 깊숙한 곳까지 수분을 전달하여 72시간 동안 촉촉함을 유지하는 혁신적인 수분 컴플렉스입니다.",
        recommendationText: "수분 부족형 지성 / 속건조 개선 추천",
        price: "₩78,000",
        imageColor: "bg-blue-900",
        ingredients: ["Hyaluronic Acid", "Ceramide NP", "Niacinamide", "Panthenol"]
    },
    {
        id: 203,
        name: "Night Recovery Cream",
        type: "CREAM",
        tag: "Premium",
        desc: "수면 중 피부 재생을 촉진하는 나이트 크림",
        fullDesc: "수면 중 피부 재생을 촉진하고 다음 날 아침 탄력 있는 피부로 깨어나게 하는 나이트 크림입니다. 레티놀과 펩타이드 복합체가 피부 세포 턴오버를 활성화합니다.",
        recommendationText: "안티에이징 / 탄력 개선 추천",
        price: "₩95,000",
        imageColor: "bg-slate-900",
        ingredients: ["Retinol", "Peptide Complex", "Squalane", "Shea Butter"]
    }
];

/**
 * CurationDetail - Product Detail Page (Two Modes)
 * 
 * source='analysis': Shows AI Match Score %
 * source='curation': Shows Recommendation Tag
 * 
 * Layout: 2-column (Image left, Text right)
 * Background: Transparent (uses global Deep Navy)
 */
export default function CurationDetail() {
    const { id } = useParams();
    const location = useLocation();

    // Determine source from query param or pathname
    const searchParams = new URLSearchParams(location.search);
    const source = searchParams.get('source') || 'curation';

    // Find product from appropriate data source
    const productId = parseInt(id);
    let product = null;

    if (source === 'analysis') {
        product = analysisProducts.find(p => p.id === productId);
    }
    if (!product) {
        product = curationProducts.find(p => p.id === productId);
    }
    if (!product) {
        // Fallback: check both lists
        product = [...analysisProducts, ...curationProducts].find(p => p.id === productId);
    }

    if (!product) {
        return (
            <main className="min-h-screen bg-transparent pt-20 flex items-center justify-center relative z-10">
                <div className="text-center">
                    <h1 className="font-serif text-2xl text-white mb-4">제품을 찾을 수 없습니다</h1>
                    <Link to="/curations" className="text-purple-400 hover:text-purple-300 font-sans">
                        ← 큐레이션으로 돌아가기
                    </Link>
                </div>
            </main>
        );
    }

    const isAnalysisMode = source === 'analysis' && product.matchRate;

    return (
        <main className="min-h-screen bg-transparent pt-20 relative z-10">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-12 md:py-16">

                {/* 2-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Left Column: Product Image (4:5 ratio) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={`aspect-[4/5] max-h-[600px] ${product.imageColor} rounded-2xl relative overflow-hidden`}>
                            {/* Tag (Curation mode) or Score Badge (Analysis mode) */}
                            <div className="absolute top-6 left-6 z-10">
                                {isAnalysisMode ? (
                                    <span className="px-4 py-2 text-[11px] uppercase tracking-wider font-sans
                                                   bg-purple-500/20 backdrop-blur-sm text-purple-200 rounded-full border border-purple-400/30">
                                        AI Match {product.matchRate}%
                                    </span>
                                ) : product.tag && (
                                    <span className="px-4 py-2 text-[11px] uppercase tracking-wider font-sans
                                                   bg-white/10 backdrop-blur-sm text-white/90 rounded-full">
                                        {product.tag}
                                    </span>
                                )}
                            </div>

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f29]/30 to-transparent" />
                        </div>
                    </motion.div>

                    {/* Right Column: Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col"
                    >
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm font-sans text-white/40 mb-8">
                            <Link to={isAnalysisMode ? "/analysis" : "/curations"} className="hover:text-white transition-colors">
                                {isAnalysisMode ? "AI 진단 결과" : "큐레이션"}
                            </Link>
                            <span>›</span>
                            <span className="text-white/60">{product.type}</span>
                        </nav>

                        {/* Product Name - English (Serif) */}
                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
                            {product.name}
                        </h1>

                        {/* Price */}
                        <p className="font-sans text-xl text-white/80 mb-8">
                            {product.price}
                        </p>

                        {/* Description - Korean (Sans-serif) */}
                        <p className="font-sans text-base text-white/50 leading-relaxed mb-10" style={{ wordBreak: 'keep-all' }}>
                            {product.fullDesc}
                        </p>

                        {/* Conditional: AI Match Score (Analysis mode) OR Recommendation (Curation mode) */}
                        {isAnalysisMode ? (
                            /* AI Match Score - Analysis Mode */
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-8">
                                <div className="flex items-center gap-6">
                                    {/* Circular Progress */}
                                    <div className="relative w-20 h-20 flex-shrink-0">
                                        <svg className="w-20 h-20 transform -rotate-90">
                                            <circle
                                                cx="40"
                                                cy="40"
                                                r="36"
                                                stroke="rgba(255,255,255,0.1)"
                                                strokeWidth="4"
                                                fill="none"
                                            />
                                            <circle
                                                cx="40"
                                                cy="40"
                                                r="36"
                                                stroke="url(#gradient)"
                                                strokeWidth="4"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeDasharray={`${2 * Math.PI * 36 * product.matchRate / 100} ${2 * Math.PI * 36}`}
                                            />
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#a855f7" />
                                                    <stop offset="100%" stopColor="#6366f1" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="font-sans text-lg font-medium text-white">{product.matchRate}%</span>
                                        </div>
                                    </div>

                                    {/* Match Text - Korean */}
                                    <div>
                                        <p className="font-sans text-sm text-white/70 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                                            Guest님의 피부 데이터와 <span className="text-purple-400 font-medium">{product.matchRate}%</span> 일치하는 포뮬러입니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Recommendation Tag - Curation Mode */
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-8">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-sans mb-2">
                                    추천 대상
                                </p>
                                <p className="font-sans text-sm text-white/70" style={{ wordBreak: 'keep-all' }}>
                                    {product.recommendationText || product.desc}
                                </p>
                            </div>
                        )}

                        {/* Ingredients */}
                        <div className="mb-10">
                            <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-sans mb-4">
                                Key Ingredients
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {product.ingredients.map((ingredient) => (
                                    <span
                                        key={ingredient}
                                        className="px-4 py-2 text-sm font-sans text-white/60 
                                                   bg-white/5 border border-white/10 rounded-full"
                                    >
                                        {ingredient}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button className="btn-primary w-full md:w-auto px-12 py-4 text-base">
                            장바구니 담기
                        </button>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
