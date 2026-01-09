import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import diagnosisData from '../data/diagnosisData.json';

/**
 * Diagnosis Page - AI Skin Type Quiz
 * 
 * Features:
 * - 10-question interactive quiz
 * - Smooth animations between questions
 * - Progress indicator
 * - Score calculation logic
 * - Result display with AURA type
 */
export default function Diagnosis() {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState({ O: 0, D: 0, S: 0, Normal: 0 });
    const [flagCombination, setFlagCombination] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [resultType, setResultType] = useState(null);
    const [isStarted, setIsStarted] = useState(false);
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [isSaving, setIsSaving] = useState(false);

    const questions = diagnosisData.questions;
    const totalQuestions = questions.length;
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;

    // Calculate Result Type based on scores
    const calculateResult = () => {
        const { logic_rules, results_mapping } = diagnosisData;
        const { thresholds, priority_order } = logic_rules;

        for (const typeKey of priority_order) {
            const threshold = thresholds[typeKey];

            if (!threshold) {
                // NORMAL is the fallback
                return results_mapping[typeKey];
            }

            // Check single variable threshold
            if (threshold.variable && scores[threshold.variable] >= threshold.min) {
                return results_mapping[typeKey];
            }

            // Check dual variable threshold (OILY_DEHYDRATED)
            if (threshold.variable_1 && threshold.variable_2) {
                if (scores[threshold.variable_1] >= threshold.min_1 &&
                    scores[threshold.variable_2] >= threshold.min_2) {
                    return results_mapping[typeKey];
                }
            }

            // Check flag (COMBINATION)
            if (threshold.flag_check && flagCombination === threshold.value) {
                return results_mapping[typeKey];
            }
        }

        // Default to NORMAL
        return results_mapping['NORMAL'];
    };

    // Save result to API
    const saveResultToAPI = async (result, finalScores) => {
        setIsSaving(true);
        try {
            const response = await fetch('http://localhost:4000/api/diagnosis', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    resultType: result.type_name,
                    auraKeyword: result.aura_keyword,
                    scores: finalScores
                })
            });
            const data = await response.json();
            if (data.success && data.data.recommendedProducts) {
                setRecommendedProducts(data.data.recommendedProducts);
            }
        } catch (error) {
            console.error('Failed to save diagnosis result:', error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleOptionSelect = (option, index) => {
        if (isAnimating) return;
        setSelectedOption(index);
        setIsAnimating(true);

        // Update scores
        if (option.score) {
            setScores(prev => {
                const newScores = { ...prev };
                Object.entries(option.score).forEach(([key, value]) => {
                    newScores[key] = (newScores[key] || 0) + value;
                });
                return newScores;
            });
        }

        // Update combination flag
        if (option.flag_combination !== undefined) {
            setFlagCombination(option.flag_combination);
        }

        // Move to next question or show result
        setTimeout(() => {
            if (currentQuestion < totalQuestions - 1) {
                setCurrentQuestion(prev => prev + 1);
                setSelectedOption(null);
            } else {
                // Calculate and show result
                const result = calculateResult();
                setResultType(result);
                setShowResult(true);
                // Save to API with current scores (need to calculate final scores here)
                const finalScores = { ...scores };
                if (option.score) {
                    Object.entries(option.score).forEach(([key, value]) => {
                        finalScores[key] = (finalScores[key] || 0) + value;
                    });
                }
                saveResultToAPI(result, finalScores);
            }
            setIsAnimating(false);
        }, 600);
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setScores({ O: 0, D: 0, S: 0, Normal: 0 });
        setFlagCombination(false);
        setSelectedOption(null);
        setShowResult(false);
        setResultType(null);
        setIsStarted(false);
        setRecommendedProducts([]);
    };

    // Intro Screen
    if (!isStarted) {
        return (
            <div className="min-h-screen pt-24 pb-20 px-6 flex flex-col items-center justify-center">
                {/* Ambient Glow */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
                                    bg-gradient-to-b from-purple-500/20 to-transparent rounded-full blur-3xl" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-xl text-center"
                >
                    <p className="text-xs uppercase tracking-[0.3em] text-purple-400/80 mb-4">
                        AI Skin Diagnosis
                    </p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                        Discover Your<br />
                        <span className="text-gradient-purple">Skin Aura</span>
                    </h1>
                    <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">
                        10가지 질문을 통해 당신만의 피부 타입과 맞춤형 케어 솔루션을 찾아보세요.
                    </p>

                    <motion.button
                        onClick={() => setIsStarted(true)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary text-base px-10 py-4"
                    >
                        Start Diagnosis
                    </motion.button>

                    <p className="text-white/30 text-sm mt-6">
                        약 2-3분 소요
                    </p>
                </motion.div>
            </div>
        );
    }

    // Result Screen
    if (showResult && resultType) {
        return (
            <div className="min-h-screen pt-24 pb-20 px-6 flex flex-col items-center justify-center">
                {/* Ambient Glow with result color */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
                        style={{
                            background: `radial-gradient(circle, ${resultType.color}30 0%, transparent 70%)`
                        }}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative z-10 max-w-xl text-center"
                >
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
                        Your Skin Aura
                    </p>

                    {/* Aura Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.8, delay: 0.5 }}
                        className="relative w-32 h-32 mx-auto mb-8"
                    >
                        <div
                            className="absolute inset-0 rounded-full animate-pulse"
                            style={{
                                background: `radial-gradient(circle, ${resultType.color}50 0%, transparent 70%)`,
                                filter: 'blur(20px)'
                            }}
                        />
                        <div
                            className="relative w-full h-full rounded-full flex items-center justify-center"
                            style={{
                                background: `linear-gradient(135deg, ${resultType.color}40, ${resultType.color}20)`,
                                border: `2px solid ${resultType.color}60`
                            }}
                        >
                            <span className="text-3xl font-serif text-white">
                                {resultType.aura_keyword.charAt(0)}
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-3"
                    >
                        {resultType.aura_keyword}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-lg mb-4"
                        style={{ color: resultType.color }}
                    >
                        {resultType.type_name}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="text-white/60 text-lg mb-10 max-w-md mx-auto"
                    >
                        {resultType.description}
                    </motion.p>

                    {/* Score Debug (optional - can be removed in production) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                        className="glass-card p-6 mb-8 text-left"
                    >
                        <p className="text-xs uppercase tracking-wider text-white/40 mb-4">Analysis Scores</p>
                        <div className="grid grid-cols-4 gap-4">
                            {Object.entries(scores).map(([key, value]) => (
                                <div key={key} className="text-center">
                                    <p className="text-2xl font-serif text-white">{value}</p>
                                    <p className="text-xs text-white/40 uppercase">{key}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Recommended Products */}
                    {recommendedProducts.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                            className="mb-10"
                        >
                            <p className="text-xs uppercase tracking-wider text-white/40 mb-4 text-left">Curated For You</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {recommendedProducts.map((product, index) => (
                                    <motion.button
                                        key={product.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.5 + index * 0.1 }}
                                        onClick={() => navigate(`/shop/${product.id}`)}
                                        className="glass-card p-4 text-left hover:bg-white/15 transition-all"
                                    >
                                        <div className="w-full h-24 bg-white/5 rounded-lg mb-3 flex items-center justify-center">
                                            <span className="text-2xl">✨</span>
                                        </div>
                                        <p className="text-sm font-medium text-white truncate">{product.nameKo || product.name}</p>
                                        <p className="text-xs text-white/40 mt-1">₩{product.price?.toLocaleString()}</p>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {isSaving && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-white/40 text-sm mb-4"
                        >
                            분석 결과 저장 중...
                        </motion.p>
                    )}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button
                            onClick={() => navigate('/shop')}
                            className="btn-primary"
                        >
                            View Curated Products
                        </button>
                        <button
                            onClick={handleRestart}
                            className="btn-glass"
                        >
                            Retake Quiz
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        );
    }

    // Quiz Screen
    const currentQ = questions[currentQuestion];

    return (
        <div className="min-h-screen pt-24 pb-20 px-6">
            {/* Progress Bar */}
            <div className="fixed top-[80px] left-0 right-0 h-0.5 bg-white/10 z-40">
                <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Question Counter */}
            <div className="max-w-2xl mx-auto pt-8 mb-12 text-center">
                <span className="text-white/40 text-sm">
                    Question {currentQuestion + 1} / {totalQuestions}
                </span>
            </div>

            {/* Question Card */}
            <div className="max-w-2xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestion}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-serif text-2xl md:text-3xl text-white leading-relaxed">
                            {currentQ.question}
                        </h2>
                    </motion.div>
                </AnimatePresence>

                {/* Options */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`options-${currentQuestion}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                    >
                        {currentQ.options.map((option, index) => (
                            <motion.button
                                key={index}
                                onClick={() => handleOptionSelect(option, index)}
                                disabled={isAnimating}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className={`
                                    w-full p-5 text-left rounded-2xl transition-all duration-300
                                    ${selectedOption === index
                                        ? 'bg-purple-500/30 border-purple-400/50'
                                        : 'glass-card hover:bg-white/15'
                                    }
                                `}
                            >
                                <span className="text-white/90 text-lg">
                                    {option.text}
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Skip Button (optional) */}
            <div className="max-w-2xl mx-auto mt-10 text-center">
                <button
                    onClick={handleRestart}
                    className="text-white/30 hover:text-white/50 text-sm transition-colors"
                >
                    처음부터 다시 시작
                </button>
            </div>
        </div>
    );
}
