/**
 * Master Product Data - 50 Products with RICH DESCRIPTIONS
 * 
 * Each description is 150-200 characters of luxurious Korean beauty copy.
 * Categories: Serums, Creams, Toners, Essences, Cleansers, Masks, Suncare, Oils, Lotions, Mists
 * Skin Types: 수부지, 지성, 민감성, 건성, 복합성
 * 
 * DO NOT TRANSLATE THE KOREAN TEXT
 */
export const ALL_PRODUCTS = [
    // === 수부지 (Dehydrated Oily) - 10 Products ===
    {
        id: 101, name: "Aqua Balance Serum", category: "Serums", price: "₩72,000", skinType: "수부지", tag: "Best Seller",
        desc: "피부 속 깊은 건조함은 빠르게 해결하고, 표면의 번들거리는 유분은 산뜻하게 정돈해주는 듀얼 액션 수분 밸런싱 세럼입니다. 5중 히알루론산 복합체가 피부 층층이 수분을 채워주어 하루 종일 속당김 없이 편안한 상태를 유지시켜 줍니다. 끈적임 없이 빠르게 흡수되는 텍스처로 메이크업 전 사용하기에도 적합합니다.",
        recommendationTarget: "수부지 / 속당김과 번들거림 동시 해결", ingredients: ["히알루론산", "판테놀", "병풀추출물"], imageColor: "bg-blue-900"
    },
    {
        id: 102, name: "Hydra Gel Cream", category: "Creams", price: "₩68,000", skinType: "수부지", tag: "Lightweight",
        desc: "바르는 순간 물방울이 터지듯 피부에 즉각적인 쿨링감과 수분을 공급하는 산뜻한 젤 타입 크림입니다. 무거운 유분감 없이 수분막을 형성하여 수부지 피부의 유수분 밸런스를 맞춰주고, 외부 자극으로 달아오른 피부 온도를 낮추어 진정 효과를 선사합니다. 여름철이나 지성 피부도 부담 없이 사용할 수 있습니다.",
        recommendationTarget: "수부지 / 무거운 크림이 부담스러운 피부", ingredients: ["알로에베라", "세라마이드NP"], imageColor: "bg-blue-800"
    },
    {
        id: 103, name: "Pore Refresh Toner", category: "Toners", price: "₩45,000", skinType: "수부지", tag: "Daily Care",
        desc: "늘어진 모공을 탄탄하게 조여주고 피부 결을 매끄럽게 정돈하는 모공 케어 토너입니다. PHA 성분이 피부 표면의 묵은 각질을 부드럽게 제거하고, 위치하젤 추출물이 과도한 피지 분비를 조절합니다. 세안 직후 첫 단계로 사용하면 후속 스킨케어 제품의 흡수력을 높여주어 더욱 효과적인 루틴을 완성할 수 있습니다.",
        recommendationTarget: "수부지 / 모공 고민과 수분 부족", ingredients: ["위치하젤", "PHA"], imageColor: "bg-cyan-900"
    },
    {
        id: 104, name: "Water Barrier Essence", category: "Essences", price: "₩55,000", skinType: "수부지", tag: "Hydrating",
        desc: "무너진 수분 장벽을 빠르게 복구하고 강화하여 하루 종일 촉촉함이 지속되는 수분 에센스입니다. 베타인과 알란토인이 자극받은 피부를 진정시키며, 피부 본연의 보습 기능을 활성화합니다. 가벼운 텍스처가 피부에 순식간에 스며들어 끈적임 없이 산뜻하게 마무리되며, 환절기 건조함에 특히 효과적입니다.",
        recommendationTarget: "수부지 / 쉽게 건조해지는 피부", ingredients: ["베타인", "알란토인"], imageColor: "bg-sky-900"
    },
    {
        id: 105, name: "Balancing Fluid SPF50+", category: "Suncare", price: "₩50,000", skinType: "수부지", tag: "No White Cast",
        desc: "끈적임 없이 피부에 산뜻하게 마무리되는 수분 에센스 제형의 고기능성 자외선 차단제입니다. SPF50+ PA++++의 강력한 자외선 차단 효과와 함께 나이아신아마이드가 피부 톤을 맑게 가꿔주고, 아데노신이 탄력을 케어합니다. 백탁 현상 없이 깔끔하게 발리며, 메이크업 베이스로도 손색없는 매끄러운 피부결을 만들어 줍니다.",
        recommendationTarget: "수부지 / 번들거리지 않는 자외선 차단", ingredients: ["나이아신아마이드", "아데노신"], imageColor: "bg-blue-700"
    },
    {
        id: 106, name: "Aqua Bomb Mask", category: "Masks", price: "₩42,000", skinType: "수부지", tag: "Intensive",
        desc: "수분 폭발이라는 이름 그대로, 단 15분 만에 피부 속까지 강력한 수분 충전을 경험할 수 있는 집중 케어 시트 마스크입니다. 고농축 히알루론산 앰플이 가득 담긴 마이크로파이버 시트가 피부에 밀착되어 수분을 빠르게 전달하고, 알로에베라 추출물이 피부를 시원하게 진정시켜 줍니다. 건조해진 피부에 즉각적인 생기를 부여합니다.",
        recommendationTarget: "수부지 / 급한 수분 충전이 필요할 때", ingredients: ["히알루론산", "알로에베라"], imageColor: "bg-cyan-800"
    },
    {
        id: 107, name: "Oil-Free Cleanser", category: "Cleansers", price: "₩35,000", skinType: "수부지", tag: "Gentle",
        desc: "유분 없이도 메이크업과 피부 노폐물을 효과적으로 녹여내는 워터 타입 클렌저입니다. 미셀라 테크놀로지가 적용되어 문지르지 않아도 화장이 부드럽게 지워지며, 로즈워터가 클렌징 후에도 피부를 촉촉하게 유지시켜 줍니다. 자극 없이 순하게 클렌징이 가능해 민감해진 피부에도 안심하고 사용할 수 있습니다.",
        recommendationTarget: "수부지 / 산뜻한 세안 마무리", ingredients: ["미셀라워터", "로즈워터"], imageColor: "bg-sky-800"
    },
    {
        id: 108, name: "Hydra Mist", category: "Mists", price: "₩32,000", skinType: "수부지", tag: "Refreshing",
        desc: "에어컨 바람이나 건조한 환경으로 인해 지친 피부를 즉각적으로 리프레시해주는 수분 미스트입니다. 초미립 분사 기술로 메이크업 위에 뿌려도 뭉침 없이 촉촉함을 더해주며, 히알루론산과 글리세린이 피부에 수분을 빠르게 공급합니다. 가방 속에 휴대하며 수시로 수분 충전이 필요할 때 사용하면 하루 종일 생기 있는 피부를 유지할 수 있습니다.",
        recommendationTarget: "수부지 / 수시로 수분 충전이 필요한 피부", ingredients: ["히알루론산", "글리세린"], imageColor: "bg-blue-600"
    },
    {
        id: 109, name: "Light Moisture Lotion", category: "Lotions", price: "₩48,000", skinType: "수부지", tag: "Daily",
        desc: "가볍고 산뜻한 텍스처로 끈적임 없이 피부에 수분을 공급하는 데일리 로션입니다. 사이클로펜타실록세인이 벨벳처럼 부드러운 피부결을 만들어주고, 나이아신아마이드가 모공 관리와 피부 톤 개선을 동시에 케어합니다. 아침저녁 스킨케어 루틴의 마지막 단계로 사용하면 가벼우면서도 촉촉한 마무리감을 선사합니다.",
        recommendationTarget: "수부지 / 가볍게 마무리하고 싶을 때", ingredients: ["사이클로펜타실록세인", "나이아신아마이드"], imageColor: "bg-cyan-700"
    },
    {
        id: 110, name: "Sebum Balance Ampoule", category: "Serums", price: "₩78,000", skinType: "수부지", tag: "Premium",
        desc: "피지 과다 분비와 속건조를 동시에 해결하는 정교한 밸런싱 앰플입니다. 징크PCA가 과잉 피지를 효과적으로 조절하고, 저분자 히알루론산이 피부 깊숙이 침투하여 수분을 채워줍니다. 고농축 포뮬러가 한 방울만으로도 얼굴 전체에 충분히 펴 발라지며, 지속 사용 시 유수분 밸런스가 회복되어 더욱 건강한 피부 상태를 경험할 수 있습니다.",
        recommendationTarget: "수부지 / 피지 과다 분비 + 속건조", ingredients: ["징크PCA", "히알루론산"], imageColor: "bg-indigo-800"
    },

    // === 지성 (Oily) - 10 Products ===
    {
        id: 201, name: "Sebum Control Ampoule", category: "Serums", price: "₩65,000", skinType: "지성", tag: "Oil Free",
        desc: "과도한 피지 분비를 효과적으로 조절하고 트러블을 예방하는 오일 프리 고농축 앰플입니다. 징크PCA가 번들거림의 원인인 과잉 피지를 제어하고, 티트리 추출물이 트러블을 일으키는 유해 세균의 번식을 억제합니다. 가볍게 스며드는 워터 제형으로 사용 후에도 산뜻한 피부 상태가 오래 지속됩니다.",
        recommendationTarget: "지성 / 오후만 되면 번들거리는 피부", ingredients: ["징크PCA", "티트리"], imageColor: "bg-green-900"
    },
    {
        id: 202, name: "Matte Finish Cream", category: "Creams", price: "₩62,000", skinType: "지성", tag: "Mattifying",
        desc: "실키하고 보송한 마무리감을 선사하여 하루 종일 번들거림 없는 매트한 피부를 유지시켜 주는 오일 프리 크림입니다. 실리카 파우더가 피지를 흡착하여 보송한 피부질감을 만들고, 녹차 추출물이 피부를 진정시키며 항산화 효과를 더합니다. 메이크업 전 프라이머 대용으로 사용하면 화장이 오래 지속됩니다.",
        recommendationTarget: "지성 / 산뜻한 마무리를 원하는 피부", ingredients: ["실리카", "녹차추출물"], imageColor: "bg-teal-900"
    },
    {
        id: 203, name: "Clear Pad", category: "Toners", price: "₩38,000", skinType: "지성", tag: "Exfoliating",
        desc: "불필요한 각질과 모공 속 노폐물을 순하면서도 효과적으로 제거하는 저자극 데일리 필링 패드입니다. BHA가 모공 속 피지와 블랙헤드를 녹여내고, AHA가 피부 표면의 묵은 각질을 부드럽게 정리합니다. 엠보싱과 플랫 면이 함께 구성되어 각질 제거와 토너 패팅을 한 번에 해결할 수 있는 효율적인 제품입니다.",
        recommendationTarget: "지성 / 각질과 피지 관리가 필요한 피부", ingredients: ["BHA", "AHA"], imageColor: "bg-emerald-900"
    },
    {
        id: 204, name: "Pore Tightening Mask", category: "Masks", price: "₩42,000", skinType: "지성", tag: "Wash-off",
        desc: "고품질 클레이 성분이 모공 속 깊은 노폐물과 과잉 피지를 강력하게 흡착하는 워시오프 타입 딥클렌징 마스크입니다. 카올린과 벤토나이트가 모공을 깨끗하게 정화하고 일시적으로 수축시켜 매끄럽고 정돈된 피부결을 완성합니다. 주 1-2회 사용으로 블랙헤드와 넓은 모공 고민을 효과적으로 관리할 수 있습니다.",
        recommendationTarget: "지성 / 블랙헤드와 넓은 모공 고민", ingredients: ["카올린", "벤토나이트"], imageColor: "bg-gray-800"
    },
    {
        id: 205, name: "Refreshing Gel Cleanser", category: "Cleansers", price: "₩35,000", skinType: "지성", tag: "pH Balanced",
        desc: "풍성하고 크리미한 거품이 과잉 피지와 노폐물을 말끔하게 씻어내는 약산성 젤 클렌저입니다. 살리실산이 모공을 깨끗하게 정화하고, 어성초 추출물이 트러블을 예방하며 피부를 진정시킵니다. 세안 후에도 피부가 당기지 않으며 미끌거림 없이 개운하고 상쾌한 세안감을 느낄 수 있습니다.",
        recommendationTarget: "지성 / 미끌거림 없는 상쾌한 세안", ingredients: ["살리실산", "어성초"], imageColor: "bg-green-800"
    },
    {
        id: 206, name: "Tea Tree Spot", category: "Treatments", price: "₩28,000", skinType: "지성", tag: "Trouble Care",
        desc: "갑자기 올라온 트러블 부위에 집중적으로 작용하는 티트리 스팟 트리트먼트입니다. 고농축 티트리 오일이 트러블을 일으키는 세균을 억제하고, 살리실산이 막힌 모공을 깨끗하게 정화하여 빠른 진정을 돕습니다. 투명하게 발리는 제형으로 낮에도 메이크업 위에 덧바르기 편리하며, 밤새 집중 케어 시 더욱 효과적입니다.",
        recommendationTarget: "지성 / 갑자기 올라온 트러블 진정", ingredients: ["티트리오일", "살리실산"], imageColor: "bg-teal-800"
    },
    {
        id: 207, name: "Oil Control Powder", category: "Suncare", price: "₩45,000", skinType: "지성", tag: "SPF30",
        desc: "피지 흡착 기능과 자외선 차단 기능을 동시에 담은 올인원 피니싱 파우더입니다. 초미세 실리카 입자가 번들거림을 즉각 흡착하고, 아연 옥사이드가 SPF30의 자외선 차단 효과를 제공합니다. 메이크업 위에 수시로 가볍게 덧바르면 산뜻한 피부 상태를 유지하면서도 자외선으로부터 피부를 보호할 수 있습니다.",
        recommendationTarget: "지성 / 메이크업 위에 덧바르는 선케어", ingredients: ["실리카", "아연옥사이드"], imageColor: "bg-emerald-800"
    },
    {
        id: 208, name: "Charcoal Deep Cleanser", category: "Cleansers", price: "₩38,000", skinType: "지성", tag: "Deep Pore",
        desc: "활성탄 성분이 모공 깊숙한 곳까지 침투하여 눈에 보이지 않는 노폐물과 미세먼지까지 흡착해내는 딥 클렌저입니다. 차콜 파우더가 피부 표면의 불순물을 제거하고, AHA가 각질 정리를 도와 맑고 깨끗한 피부결을 완성합니다. 일반 클렌저로는 해결되지 않는 모공 속 깊은 클렌징이 필요할 때 사용하면 효과적입니다.",
        recommendationTarget: "지성 / 모공 속까지 딥 클렌징", ingredients: ["차콜파우더", "AHA"], imageColor: "bg-gray-900"
    },
    {
        id: 209, name: "Green Tea Essence", category: "Essences", price: "₩52,000", skinType: "지성", tag: "Antioxidant",
        desc: "녹차에서 추출한 풍부한 폴리페놀이 피부의 산화를 막고 피지 산화로 인한 칙칙함을 개선하는 안티옥시던트 에센스입니다. 강력한 항산화 효과가 환경 오염과 스트레스로 지친 피부를 보호하고, 비타민C가 피부 톤을 균일하게 맑게 가꿔줍니다. 사용 후 피부가 한층 맑고 투명해지는 것을 느낄 수 있습니다.",
        recommendationTarget: "지성 / 피부 톤 맑고 깨끗하게", ingredients: ["녹차추출물", "비타민C"], imageColor: "bg-green-700"
    },
    {
        id: 210, name: "Cooling Gel Mask", category: "Masks", price: "₩36,000", skinType: "지성", tag: "Soothing",
        desc: "더운 날씨에 달아오른 피부 열감을 빠르게 식혀주고 과도한 피지 분비를 진정시키는 쿨링 젤 마스크입니다. 멘톨 성분이 바르는 순간 시원한 청량감을 선사하며, 알로에베라가 자극받은 피부를 부드럽게 진정시킵니다. 냉장 보관 후 사용하면 더욱 시원하고 강력한 쿨링 효과를 경험할 수 있습니다.",
        recommendationTarget: "지성 / 더운 날 피부 진정", ingredients: ["멘톨", "알로에베라"], imageColor: "bg-teal-700"
    },

    // === 민감성 (Sensitive) - 10 Products ===
    {
        id: 301, name: "Cica Calming Serum", category: "Serums", price: "₩75,000", skinType: "민감성", tag: "Soothing",
        desc: "외부 자극으로 붉어지고 예민해진 피부를 즉각적으로 진정시키는 고함량 시카 세럼입니다. 마데카소사이드와 병풀 정량 추출물이 손상된 피부 장벽을 빠르게 회복시키고, 자극에 대한 피부의 저항력을 높여줍니다. 순하고 부드러운 제형으로 심하게 예민해진 피부에도 자극 없이 사용 가능하며, 진정 효과가 오래 지속됩니다.",
        recommendationTarget: "민감성 / 쉽게 붉어지고 예민한 피부", ingredients: ["마데카소사이드", "병풀정량추출물"], imageColor: "bg-red-900"
    },
    {
        id: 302, name: "Barrier Repair Balm", category: "Creams", price: "₩82,000", skinType: "민감성", tag: "Intensive",
        desc: "극도로 손상된 피부 장벽을 집중적으로 케어하는 고보습 밤 타입 크림입니다. 5종 세라마이드 복합체가 무너진 피부 장벽을 빈틈없이 메우고, 시어버터가 피부를 감싸듯 보호막을 형성하여 외부 자극을 차단합니다. 겨울철 극심한 건조함이나 피부 시술 후 예민해진 피부에 사용하면 빠른 회복을 도와줍니다.",
        recommendationTarget: "민감성 / 극도로 예민하고 건조한 피부", ingredients: ["세라마이드 복합체", "쉐어버터"], imageColor: "bg-rose-900"
    },
    {
        id: 303, name: "Minimal Toner", category: "Toners", price: "₩40,000", skinType: "민감성", tag: "Hypoallergenic",
        desc: "전성분 단 10개 미만으로, 꼭 필요한 보습 성분만을 담아 자극을 최소화한 순수한 토너입니다. 정제수, 글리세린, 부틸렌글라이콜 등 검증된 성분만으로 구성되어 모든 화장품이 자극적으로 느껴지는 초민감 피부도 안심하고 사용할 수 있습니다. 알러지 테스트와 피부 자극 테스트를 완료한 피부과 검증 제품입니다.",
        recommendationTarget: "민감성 / 모든 화장품이 자극적인 피부", ingredients: ["정제수", "글리세린", "부틸렌글라이콜"], imageColor: "bg-pink-900"
    },
    {
        id: 304, name: "Mugwort Essence", category: "Essences", price: "₩58,000", skinType: "민감성", tag: "Calming",
        desc: "강인한 생명력을 가진 국내산 강화 약쑥에서 추출한 성분이 예민하고 지친 피부를 편안하게 다독여주는 진정 에센스입니다. 풍부한 플라보노이드와 미네랄이 피부 컨디션을 안정시키고, 열감이 잘 오르는 피부의 온도를 낮춰줍니다. 환절기나 생리 전후 등 피부가 특히 예민해지는 시기에 사용하면 효과적입니다.",
        recommendationTarget: "민감성 / 열감이 잘 오르는 피부 진정", ingredients: ["약쑥추출물"], imageColor: "bg-orange-900"
    },
    {
        id: 305, name: "Mild Sun Cream SPF50+", category: "Suncare", price: "₩52,000", skinType: "민감성", tag: "Mineral Filter",
        desc: "피부에 직접 흡수되지 않는 100% 물리적(무기) 자외선 차단제로, 화학적 필터에 민감한 피부도 안심하고 사용할 수 있는 순한 선크림입니다. 징크옥사이드와 티타늄디옥사이드가 자외선을 산란시켜 차단하며, 눈시림이나 피부 자극이 거의 없습니다. 백탁을 최소화한 톤업 기능으로 자연스러운 피부 표현이 가능합니다.",
        recommendationTarget: "민감성 / 화학적 자외선 차단제가 안 맞는 피부", ingredients: ["징크옥사이드", "티타늄디옥사이드"], imageColor: "bg-red-800"
    },
    {
        id: 306, name: "Zero Foam Cleanser", category: "Cleansers", price: "₩32,000", skinType: "민감성", tag: "No Foam",
        desc: "거품 없이 부드러운 밀크 제형으로 순하게 클렌징하여 피부 장벽을 보호하는 저자극 클렌저입니다. 계면활성제로 인한 피부 자극을 최소화하여 세안 후에도 당김이나 건조함 없이 촉촉한 피부 상태를 유지합니다. 글리세린과 스쿠알란이 클렌징과 동시에 수분과 영양을 공급하여 민감한 피부를 케어합니다.",
        recommendationTarget: "민감성 / 세안 후 자극과 당김", ingredients: ["글리세린", "스쿠알란"], imageColor: "bg-pink-800"
    },
    {
        id: 307, name: "Aloe Soothing Gel", category: "Treatments", price: "₩25,000", skinType: "민감성", tag: "Multi-use",
        desc: "순도 99%의 제주산 유기농 알로에 젤로, 다양한 피부 자극 상황에 즉각 대응하는 만능 수딩 젤입니다. 자외선 노출 후 달아오른 피부, 면도 후 예민해진 피부, 트러블로 붉어진 부위 등에 사용하면 빠르게 진정되고 촉촉함이 더해집니다. 얼굴뿐 아니라 전신 어디에든 사용 가능한 온 가족 필수 아이템입니다.",
        recommendationTarget: "민감성 / 자극 받은 피부 즉각 진정", ingredients: ["알로에베라잎즙"], imageColor: "bg-green-200"
    },
    {
        id: 308, name: "Panthenol Cream", category: "Creams", price: "₩65,000", skinType: "민감성", tag: "Repair",
        desc: "프로비타민 B5인 판테놀을 고함량으로 담아 손상된 피부를 빠르게 회복시키고 진정시키는 리페어 크림입니다. 피부 재생력을 높여 트러블 자국이나 상처가 아무는 것을 돕고, 알란토인이 예민해진 피부를 부드럽게 감싸줍니다. 피부과 시술 후 진정 크림이나 트러블 후 집중 케어 제품으로 사용하기 적합합니다.",
        recommendationTarget: "민감성 / 피부 손상 후 빠른 회복", ingredients: ["판테놀", "알란토인"], imageColor: "bg-rose-800"
    },
    {
        id: 309, name: "Ceramide Sheet Mask", category: "Masks", price: "₩38,000", skinType: "민감성", tag: "Barrier",
        desc: "세라마이드가 무너진 피부 장벽 사이사이를 메워 건강하고 탄탄한 피부로 회복시켜 주는 집중 케어 시트 마스크입니다. 세라마이드NP와 콜레스테롤이 피부 지질 구조와 유사한 조성으로 피부에 자연스럽게 스며들어 장벽 기능을 강화합니다. 환절기나 피부가 유난히 예민해진 날 응급 케어 마스크로 추천드립니다.",
        recommendationTarget: "민감성 / 장벽 강화가 필요한 피부", ingredients: ["세라마이드NP", "콜레스테롤"], imageColor: "bg-red-700"
    },
    {
        id: 310, name: "Calming Mist", category: "Mists", price: "₩28,000", skinType: "민감성", tag: "Anytime",
        desc: "예민해진 피부에 언제 어디서든 뿌려 즉각적인 진정 효과를 경험할 수 있는 센서티브 미스트입니다. 병풀 추출물과 마데카소사이드가 외부 자극으로 붉어진 피부를 빠르게 안정시키고, 미세한 분사 입자가 메이크업 위에도 뭉침 없이 촉촉함을 더합니다. 외출 중 피부가 달아오르거나 건조해질 때 수시로 사용하세요.",
        recommendationTarget: "민감성 / 외출 중 피부 진정", ingredients: ["병풀추출물", "마데카소사이드"], imageColor: "bg-pink-700"
    },

    // === 건성 (Dry) - 10 Products ===
    {
        id: 401, name: "Deep Moisture Oil", category: "Oils", price: "₩85,000", skinType: "건성", tag: "Nourishing",
        desc: "푸석하고 생기 없는 건성 피부에 깊은 영양감을 전달하여 건강한 윤기를 부여하는 럭셔리 페이셜 오일입니다. 호호바 오일이 피지막과 유사한 구조로 피부에 자연스럽게 스며들고, 아르간 오일이 풍부한 지방산으로 피부를 윤택하게 가꿔줍니다. 크림에 1-2방울 섞어 사용하거나 마지막 단계에서 오일 씰링으로 활용하세요.",
        recommendationTarget: "건성 / 극심한 건조함과 푸석거림", ingredients: ["호호바오일", "아르간오일"], imageColor: "bg-yellow-900"
    },
    {
        id: 402, name: "Rich Nutrition Cream", category: "Creams", price: "₩88,000", skinType: "건성", tag: "Anti-Aging",
        desc: "탄력을 잃고 건조해진 피부에 힘을 실어주는 고영양 안티에이징 크림입니다. 다양한 펩타이드가 콜라겐 합성을 촉진하여 탄력을 개선하고, 가수분해 콜라겐이 피부에 직접 영양을 공급합니다. 리치한 텍스처가 건조함에 지친 피부를 감싸 안듯 편안하게 보호하며, 다음 날 아침 더욱 탱탱해진 피부를 경험할 수 있습니다.",
        recommendationTarget: "건성 / 잔주름과 탄력 저하 고민", ingredients: ["펩타이드", "콜라겐"], imageColor: "bg-amber-900"
    },
    {
        id: 403, name: "Milky Toner", category: "Toners", price: "₩48,000", skinType: "건성", tag: "Moisturizing",
        desc: "우윳빛의 진하고 크리미한 보습감이 세안 직후 급격한 건조함을 빠르게 잡아주는 밀키 토너입니다. 세라마이드가 풍부하게 녹아든 워터가 피부 장벽을 강화하고, 토너임에도 에센스 못지않은 깊은 보습력을 선사합니다. 화장솜보다는 손바닥에 덜어 피부에 눌러 흡수시키듯 사용하면 더욱 효과적입니다.",
        recommendationTarget: "건성 / 세안 후 바로 당기는 피부", ingredients: ["세라마이드 워터"], imageColor: "bg-orange-800"
    },
    {
        id: 404, name: "Cream Mist", category: "Mists", price: "₩39,000", skinType: "건성", tag: "On-the-go",
        desc: "크림의 영양감을 그대로 녹여낸 혁신적인 제형으로, 뿌릴 때마다 피부에 즉각적인 보습막을 형성하는 크림 미스트입니다. 판테놀과 세라마이드가 피부를 촉촉하게 감싸고, 건조한 환경에서도 수분 증발을 막아줍니다. 일반 미스트처럼 가볍게 뿌리면서도 크림을 바른 듯한 깊은 보습감을 느낄 수 있어 건조한 피부에 필수 아이템입니다.",
        recommendationTarget: "건성 / 수시로 건조함을 느끼는 피부", ingredients: ["판테놀", "세라마이드"], imageColor: "bg-yellow-800"
    },
    {
        id: 405, name: "Glow Sun Base", category: "Suncare", price: "₩55,000", skinType: "건성", tag: "Radiance",
        desc: "촉촉한 수분감과 자연스러운 윤광을 선사하는 톤업 자외선 차단 베이스입니다. 히알루론산 복합체가 풍부한 수분을 공급하여 메이크업 전 피부 결을 매끄럽게 정돈하고, 미세한 펄 입자가 피부에 건강한 생기를 더해줍니다. 화장이 잘 뜨고 들뜨는 건조한 피부에 사용하면 오래 지속되는 촉촉한 베이스를 완성할 수 있습니다.",
        recommendationTarget: "건성 / 화장이 잘 뜨는 건조한 피부", ingredients: ["히알루론산 복합체"], imageColor: "bg-amber-800"
    },
    {
        id: 406, name: "Honey Sleep Mask", category: "Masks", price: "₩52,000", skinType: "건성", tag: "Overnight",
        desc: "자는 동안 꿀 성분이 피부에 깊은 영양과 수분을 듬뿍 공급하는 오버나이트 슬리핑 마스크입니다. 천연 꿀 추출물의 보습 및 항균 효과가 피부를 건강하게 가꾸고, 프로폴리스가 피부 면역력을 높여줍니다. 밤새 피부 위에서 작용하여 다음 날 아침 꿀 바른 듯 촉촉하고 윤기 나는 피부를 경험하실 수 있습니다.",
        recommendationTarget: "건성 / 자는 동안 집중 보습", ingredients: ["꿀추출물", "프로폴리스"], imageColor: "bg-yellow-700"
    },
    {
        id: 407, name: "Butter Cleanser", category: "Cleansers", price: "₩42,000", skinType: "건성", tag: "Sherbet",
        desc: "버터처럼 부드럽게 녹으며 메이크업과 노폐물을 효과적으로 녹여내면서도 보습막을 남기는 셔벳 타입 클렌저입니다. 시어버터와 올리브 오일이 클렌징과 동시에 피부에 영양을 공급하여 세안 후에도 당김 없이 촉촉한 피부 상태를 유지합니다. 건조한 피부나 세안 후 피부가 금방 당기는 분들께 특히 추천드립니다.",
        recommendationTarget: "건성 / 세안 후에도 촉촉한 마무리", ingredients: ["시어버터", "올리브오일"], imageColor: "bg-amber-700"
    },
    {
        id: 408, name: "Ceramide Ampoule", category: "Serums", price: "₩72,000", skinType: "건성", tag: "Barrier",
        desc: "5종의 필수 세라마이드가 건조함으로 인해 무너진 피부 장벽을 탄탄하게 복구시켜 주는 고농축 장벽 강화 앰플입니다. 피부 본연의 지질 구조와 동일한 비율의 세라마이드가 빈틈없이 장벽을 채워 수분 손실을 방지하고, 피부를 외부 자극으로부터 보호합니다. 꾸준히 사용하면 피부가 건조해지기 어려운 건강한 상태로 개선됩니다.",
        recommendationTarget: "건성 / 피부 장벽 강화로 건조 예방", ingredients: ["세라마이드 복합체"], imageColor: "bg-orange-700"
    },
    {
        id: 409, name: "Avocado Eye Cream", category: "Eye Care", price: "₩68,000", skinType: "건성", tag: "Rich",
        desc: "영양 가득한 아보카도 오일이 건조하고 얇은 눈가 피부에 깊은 보습과 탄력을 선사하는 리치 아이크림입니다. 레티놀이 눈가 잔주름을 케어하고 피부 탄력을 개선하며, 부드러운 텍스처가 자극 없이 편안하게 흡수됩니다. 아침저녁 스킨케어 마지막 단계에서 눈가에 톡톡 두드리듯 바르면 생기 있는 눈매를 유지할 수 있습니다.",
        recommendationTarget: "건성 / 눈가 잔주름과 건조함", ingredients: ["아보카도오일", "레티놀"], imageColor: "bg-green-900"
    },
    {
        id: 410, name: "Royal Jelly Essence", category: "Essences", price: "₩78,000", skinType: "건성", tag: "Luxury",
        desc: "여왕벌만을 위한 귀한 로얄젤리가 웰에이징에 필요한 핵심 영양을 피부에 전달하는 럭셔리 에센스입니다. 로얄젤리 추출물이 피부 깊숙이 영양을 공급하여 칙칙하고 생기 없는 피부에 활력을 더하고, 프로폴리스가 피부의 자연 보호력을 강화합니다. 지속적인 사용으로 피부 전체가 화사하고 건강하게 빛납니다.",
        recommendationTarget: "건성 / 영양 부족으로 칙칙한 피부", ingredients: ["로얄젤리추출물", "프로폴리스"], imageColor: "bg-yellow-600"
    },

    // === 복합성 (Combination) - 10 Products ===
    {
        id: 501, name: "Dual Balancing Serum", category: "Serums", price: "₩70,000", skinType: "복합성", tag: "Smart Care",
        desc: "T존의 번들거리는 유분과 U존의 건조함을 동시에 스마트하게 케어하는 듀얼 밸런싱 세럼입니다. 나이아신아마이드가 피지 분비를 조절하고 모공을 관리하는 동시에, 베타인이 건조한 부위에 선택적으로 수분을 집중 공급합니다. 부위에 따라 다른 고민을 가진 복합성 피부에게 딱 맞는 올인원 솔루션입니다.",
        recommendationTarget: "복합성 / 부위별로 다른 피부 고민", ingredients: ["나이아신아마이드", "베타인"], imageColor: "bg-indigo-900"
    },
    {
        id: 502, name: "Lightweight Lotion", category: "Lotions", price: "₩58,000", skinType: "복합성", tag: "Fresh",
        desc: "유수분 밸런스를 최적으로 맞춰주어 어느 부위에 발라도 답답함이 없이 산뜻한 로션입니다. 녹차수가 피부를 맑게 정돈하고 항산화 효과를 더하며, 스쿠알란이 너무 무겁지 않게 적당한 보습을 공급합니다. 너무 가볍거나 너무 무거운 제형이 모두 불편하셨던 복합성 피부에게 최적화된 제품입니다.",
        recommendationTarget: "복합성 / 너무 가볍지도 무겁지도 않은 보습", ingredients: ["녹차수", "스쿠알란"], imageColor: "bg-violet-900"
    },
    {
        id: 503, name: "Zone Control Cream", category: "Creams", price: "₩65,000", skinType: "복합성", tag: "Targeted",
        desc: "피부 부위에 따라 필요한 케어를 선택적으로 제공하는 스마트 존 컨트롤 크림입니다. 히알루론산이 건조한 U존에 수분을 집중 공급하고, 나이아신아마이드가 기름진 T존의 피지 분비를 조절합니다. 한 제품으로 부위별 맞춤 케어가 가능하여 복합성 피부의 스킨케어 루틴을 단순화시켜 줍니다.",
        recommendationTarget: "복합성 / 부위별 맞춤 케어", ingredients: ["히알루론산", "나이아신아마이드"], imageColor: "bg-purple-900"
    },
    {
        id: 504, name: "Bi-Phase Toner", category: "Toners", price: "₩46,000", skinType: "복합성", tag: "Shake to Use",
        desc: "2층 구조의 오일과 워터 레이어가 흔들어 섞으면 유분과 수분을 동시에 공급하는 독특한 바이페이즈 토너입니다. 스쿠알란 오일층이 건조한 부위에 보호막을 형성하고, 히알루론산 워터층이 피부 전체에 수분을 채워줍니다. 복합성 피부의 밸런스를 맞추는 데 최적화된 혁신적인 포뮬러입니다.",
        recommendationTarget: "복합성 / 유수분 동시 충전", ingredients: ["스쿠알란", "히알루론산"], imageColor: "bg-indigo-800"
    },
    {
        id: 505, name: "Pore & Moisture Mask", category: "Masks", price: "₩44,000", skinType: "복합성", tag: "Dual Effect",
        desc: "하나의 시트에 T존용과 U존용 에센스가 따로 적용되어 부위별로 다른 효과를 제공하는 듀얼 이펙트 마스크입니다. T존에는 카올린이 모공을 정화하고 피지를 흡착하며, U존에는 히알루론산이 깊은 수분을 공급합니다. 복합성 피부의 모든 고민을 한 번에 해결할 수 있는 스마트한 마스크입니다.",
        recommendationTarget: "복합성 / 부위별 다른 마스크 효과", ingredients: ["카올린", "히알루론산"], imageColor: "bg-violet-800"
    },
    {
        id: 506, name: "Gentle Foam Cleanser", category: "Cleansers", price: "₩34,000", skinType: "복합성", tag: "Daily",
        desc: "순하면서도 개운하게 세안되어 기름진 부위와 건조한 부위 모두를 편안하게 클렌징하는 폼 클렌저입니다. 코코넛 유래 계면활성제가 저자극으로 피부를 씻어내고, 글리세린이 세안 중에도 수분을 빼앗기지 않도록 보호합니다. 매일 사용해도 피부가 예민해지지 않는 순한 제형입니다.",
        recommendationTarget: "복합성 / 적당한 세정력과 보습감", ingredients: ["코코넛유래계면활성제", "글리세린"], imageColor: "bg-purple-800"
    },
    {
        id: 507, name: "Light Sun Gel SPF50+", category: "Suncare", price: "₩48,000", skinType: "복합성", tag: "Water Base",
        desc: "가벼운 수분 젤 제형으로 T존도 번들거리지 않으면서 U존에는 보습감을 주는 복합성 피부용 선젤입니다. SPF50+ PA++++의 강력한 자외선 차단 효과와 함께 히알루론산이 피부에 수분을 공급하고, 나이아신아마이드가 피부 톤을 맑게 가꿔줍니다. 산뜻하면서도 촉촉한 마무리감으로 복합성 피부에 최적입니다.",
        recommendationTarget: "복합성 / 산뜻하면서도 촉촉한 자외선 차단", ingredients: ["히알루론산", "나이아신아마이드"], imageColor: "bg-indigo-700"
    },
    {
        id: 508, name: "Multi-Zone Essence", category: "Essences", price: "₩62,000", skinType: "복합성", tag: "Balancing",
        desc: "피부의 각 부위가 필요로 하는 것을 인식하여 최적의 밸런스를 맞춰주는 멀티존 밸런싱 에센스입니다. 판테놀이 자극받은 피부를 진정시키며, 녹차 추출물이 피지 산화를 방지하고 항산화 효과를 더합니다. 전체 피부 상태를 균일하게 개선하여 어디서든 건강하게 빛나는 피부를 만들어 줍니다.",
        recommendationTarget: "복합성 / 전체적인 피부 밸런싱", ingredients: ["판테놀", "녹차추출물"], imageColor: "bg-violet-700"
    },
    {
        id: 509, name: "Smart Moisture Gel", category: "Creams", price: "₩56,000", skinType: "복합성", tag: "Adaptive",
        desc: "피부 상태와 환경에 따라 수분 공급량이 자동으로 조절되는 스마트 젤 크림입니다. 히알루론산이 수분이 부족한 곳에 선택적으로 수분을 집중 공급하고, 세라마이드가 장벽을 강화하여 피부 컨디션을 안정시킵니다. 날씨나 컨디션에 따라 피부 상태가 매번 다르게 느껴지는 분께 추천드립니다.",
        recommendationTarget: "복합성 / 날씨에 따라 변하는 피부", ingredients: ["히알루론산", "세라마이드"], imageColor: "bg-purple-700"
    },
    {
        id: 510, name: "T-Zone Control Mist", category: "Mists", price: "₩30,000", skinType: "복합성", tag: "Oil Control",
        desc: "T존의 번들거림은 즉각 잡아주고 U존은 촉촉하게 유지시켜 주는 밸런싱 미스트입니다. 위치하젤이 피지 분비를 조절하고 모공을 수축시키며, 알로에베라가 건조한 부위에 수분을 공급합니다. 오후에 무너지는 메이크업 위에 뿌리면 번들거림 없이 촉촉한 상태로 피부를 리프레시할 수 있습니다.",
        recommendationTarget: "복합성 / 오후 유분 관리", ingredients: ["위치하젤", "알로에베라"], imageColor: "bg-indigo-600"
    }
];
