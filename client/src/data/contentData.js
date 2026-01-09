/**
 * Master Content Data for AURA Landing Page
 * 
 * Typography Rules:
 * - Titles/Headlines (English): Serif font (Playfair Display)
 * - Body/Descriptions (Korean): Sans-serif font (Pretendard)
 * 
 * IMPORTANT: Do NOT translate Korean strings.
 */
export const contentData = {
    // Header Navigation
    nav: {
        logo: "AURA",
        menu: ["Brand Story", "AI Analysis", "Curations"],
        utils: ["KR/EN", "Log In"]
    },

    // Hero Section
    hero: {
        title: "Unveil Your Inner Aura.",
        subtitle: "당신 안에 잠재된 고유의 빛을 마주하세요.\n데이터 기반의 초개인화 뷰티 솔루션이 당신만의 분위기를 설계합니다.",
        cta: "Explore Now"
    },

    // Brand Mission
    mission: {
        title: "Beyond Beauty, It's About You.",
        description: "획일화된 기준을 넘어, 나만이 가진 고유한 개성을 탐구합니다.\n아우라(AURA)는 정교한 3D 기술과 섬세한 큐레이션으로 당신이 가장 빛나는 순간을 찾아드립니다."
    },

    // Brand Story Page
    brandStory: {
        headline: "Where Science Meets Soul",
        bodyKR: "진정한 아름다움은 당신만큼이나 고유하다는 믿음에서 AURA는 탄생했습니다. 우리는 AI의 힘을 활용해 당신의 피부를 가장 깊은 곳까지 이해하고, 당신만의 빛을 존중하는 개인화된 리추얼을 만듭니다.",
        philosophyTitle: "Our Philosophy",
        philosophyBodyKR: "우리는 획일적인 스킨케어 접근 방식을 거부합니다. 대신, 각 사람을 특별하게 만드는 피부 결, 톤, 기질의 미세한 차이—그 복잡성을 포용합니다.",
        promiseTitle: "Our Promise",
        promiseBodyKR: "우리의 모든 추천은 데이터로 뒷받침되고, 전문성으로 정제되며, 정성을 다해 전달됩니다. 당신의 신뢰가 우리의 가장 소중한 성분입니다."
    },

    // Process Section (How It Works)
    processSteps: [
        { id: 1, title: "Capture", descKR: "초정밀 AI 스캐닝으로 피부 텍스처와 빛을 포착합니다.", icon: "Camera" },
        { id: 2, title: "Analyze", descKR: "6가지 핵심 지표를 분석해 고유의 '아우라 타입'을 결정합니다.", icon: "Activity" },
        { id: 3, title: "Prescribe", descKR: "정확한 니즈에 맞춘 개인화된 제품 루틴을 제안받으세요.", icon: "Sparkles" },
        { id: 4, title: "Transform", descKR: "피부 변화를 추적하고 시간이 지남에 따라 루틴을 발전시키세요.", icon: "RefreshCw" }
    ],

    // Footer
    footer: {
        linksKR: ["개인정보처리방침", "이용약관", "Instagram", "YouTube"],
        copyright: "© 2026 AURA Inc. All rights reserved."
    }
};
