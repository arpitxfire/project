window.APP_DATA = {

  /* ─────────────────────────────────────────────
     1. INTERVIEW INSIGHTS
  ───────────────────────────────────────────── */
  interviewInsights: [
    {
      id: 1,
      theme: "Design Strength",
      question: "India vs US in semiconductor industry - strengths and weaknesses?",
      shortQuestion: "India vs US strengths & weaknesses?",
      answer: "US dominates in EDA tools, core IP and high-end logic designs/processor architectures. India is mainly concentrated on Design verification and physical design with few complete end-to-end designs. However, the IP and profits flow back to US company headquarters. To gain advantage, India should either get into IP licensing or the complete final end products.",
      keywords: ["EDA tools", "IP licensing", "design verification", "physical design"],
      highlight: "IP and profits flow back to US"
    },
    {
      id: 2,
      theme: "Market Capture",
      question: "Can India capture 20% stake in global value chain in 20-30 years?",
      shortQuestion: "Can India capture 20% global stake?",
      answer: "20% stake in the entire value chain might be difficult unless some large-scale global events happen. Fabrication requires decades of knowledge and complete supply chains. However, I think it would be entirely feasible to capture 20% stake in high-growth segments like power electronics or semiconductor assembly and test.",
      keywords: ["ATMP", "power electronics", "market share", "feasibility"],
      highlight: "feasible to capture 20% in high-growth segments"
    },
    {
      id: 3,
      theme: "Startup Strategy",
      question: "If starting a semiconductor startup tomorrow - India vs US?",
      shortQuestion: "Startup in India vs US — which bet?",
      answer: "In India, I would target fabless power semiconductors (GaN/SiC) for electric vehicles. India has massive domestic EV market. In US, I would target AI accelerators for edge computing.",
      keywords: ["GaN/SiC", "EV market", "AI accelerators", "fabless"],
      highlight: "fabless power semiconductors (GaN/SiC) for EVs"
    },
    {
      id: 4,
      theme: "Node Strategy",
      question: "What is the best path for India in the fast-paced semiconductor race?",
      shortQuestion: "Best node strategy for India?",
      answer: "India should not try to catch up on advanced 3nm logic nodes. It requires too much capital and is too easy to fail. Instead, focus on legacy nodes (28nm and above) that are workhorses for automotive and IoT, in high demand and growing further. Or invest in open-source architectures to reduce reliance on ARM/Intel licences.",
      keywords: ["28nm", "legacy nodes", "automotive", "IoT", "RISC-V"],
      highlight: "Do NOT race to 3nm — own the legacy node workhorses"
    },
    {
      id: 5,
      theme: "Fabrication Reality",
      question: "Should India seriously pursue fabrication?",
      shortQuestion: "Should India pursue fabrication?",
      answer: "It is best to have complete end-to-end development in India and fabrication is a crucial step there. But trying directly for advanced logic nodes is very difficult. It is important to get the legacy nodes working and become dominant in that category first.",
      keywords: ["fabrication", "end-to-end", "legacy nodes", "dominance"],
      highlight: "Get legacy nodes working — become dominant there first"
    },
    {
      id: 6,
      theme: "Infrastructure Priority",
      question: "Designing India's semiconductor strategy from scratch - what to prioritize?",
      shortQuestion: "Top infrastructure priorities?",
      answer: "I would prioritize Infrastructure and Chemical Supply Chains over the actual Fab buildings. A Fab is useless without a just-in-time supply of ultra-pure water, stable electricity, and specialty gases.",
      keywords: ["ultra-pure water", "specialty gases", "supply chain", "infrastructure"],
      highlight: "A Fab is useless without just-in-time supply chain"
    },
    {
      id: 7,
      theme: "Current Investments",
      question: "Thoughts on Tata and Micron plants in India?",
      shortQuestion: "Tata & Micron plants — good bets?",
      answer: "Micron: This is a brilliant first step. It builds the labor force and logistics habits required for semiconductors without the extreme risk of a full wafer Fab. Tata: It is high-risk, but necessary for attracting the thousands of smaller suppliers that follow a big Fab.",
      keywords: ["Micron", "Tata", "ATMP", "wafer fab", "supply chain"],
      highlight: "Micron: brilliant first step. Tata: high-risk but necessary"
    },
    {
      id: 8,
      theme: "Workforce Gap",
      question: "Is India skilled enough for semiconductors?",
      shortQuestion: "Is India's workforce ready?",
      answer: "Yes and No. India has world-class Design Engineers. However, it has a massive shortage of Process Engineers and Technicians who know how to run a cleanroom. We are Software-ready but not yet Hardware-hardened.",
      keywords: ["process engineers", "cleanroom", "design engineers", "workforce"],
      highlight: "Software-ready but not yet Hardware-hardened"
    },
    {
      id: 9,
      theme: "Startup Opportunities",
      question: "What semiconductor startups have realistic chance of scaling globally from India?",
      shortQuestion: "Which startups can scale globally?",
      answer: "Analog/Mixed-Signal Design: Hard to automate, requires artistic engineering, and has high margins. Chiplet Interconnects: As chips become modular, the technology that connects different dies will be a massive market.",
      keywords: ["analog design", "mixed-signal", "chiplets", "interconnects", "margins"],
      highlight: "Analog design: hard to automate, artistic engineering, high margins"
    },
    {
      id: 10,
      theme: "Step-by-Step Focus",
      question: "Should India try all processes at once or focus one at a time?",
      shortQuestion: "All-at-once vs step-by-step approach?",
      answer: "Trying to do everything at once might be too spread out. Concentrate step-by-step. Start with what we are good at - design - and own it completely. Then move into packaging (Micron-style). Then specialty fabrication such as legacy nodes. Once ecosystem is mature, concentrate on advanced nodes.",
      keywords: ["design first", "packaging", "step-by-step", "ecosystem", "advanced nodes"],
      highlight: "Concentrate step-by-step — don't spread too thin"
    }
  ],

  /* ─────────────────────────────────────────────
     2. SWOT DATA
  ───────────────────────────────────────────── */
  swotData: {
    strengths: [
      {
        title: "Large Design Engineering Talent Pool",
        description: "India is home to over 85,000 semiconductor design engineers — the largest outside the United States.",
        icon: "🧠",
        detail: "Indian engineers staff major design centers for Qualcomm, NVIDIA, Intel, and AMD. The country produces 1.5M+ STEM graduates annually, creating a sustainable pipeline for design verification (DV) and physical design (PD) roles. This talent base is the single clearest competitive advantage India possesses in the global semiconductor value chain."
      },
      {
        title: "Strong IT/Software Ecosystem",
        description: "Decades of software services experience provide adjacent skills in EDA scripting, verification methodologies, and embedded firmware.",
        icon: "💻",
        detail: "India's $250B IT industry has built deep expertise in automation, system validation, and large-scale engineering project management. These capabilities translate directly into semiconductor design support services, VLSI verification, and chip software stack development, giving Indian teams a shorter ramp-up curve than most emerging economies."
      },
      {
        title: "Growing Domestic EV/IoT Market",
        description: "India's EV revolution and smart-city ambitions are creating substantial domestic demand for power semiconductors and IoT chips.",
        icon: "⚡",
        detail: "With EV adoption growing at 40%+ CAGR and over 500M smartphone users, India is generating an enormous captive market for automotive-grade chips (GaN/SiC), microcontrollers, and connectivity silicon. A strong home market can anchor early-stage fabs and fabless startups alike, reducing dependence on export volumes for unit economics."
      },
      {
        title: "Government ISM Incentives ($10B+)",
        description: "India Semiconductor Mission offers production-linked incentives, capital subsidies, and single-window clearances worth over $10 billion.",
        icon: "🏛️",
        detail: "The ISM framework provides up to 50% fiscal support for greenfield semiconductor fabs and up to 30% for ATMP units, dramatically improving project IRRs. State-level incentives in Gujarat, Tamil Nadu, and Telangana layer on additional support including land, water, and power subsidies. This policy commitment signals sovereign-level prioritization rare for an emerging semiconductor nation."
      },
      {
        title: "Cost-Competitive R&D",
        description: "India's R&D operating costs are 60–70% lower than US/EU counterparts, enabling sustained innovation at scale.",
        icon: "📊",
        detail: "Salary arbitrage combined with world-class institute output (IITs, IISc, NITs) allows fabless startups and MNC design centers to run larger, more aggressive R&D programs per dollar spent. This cost advantage is particularly powerful in analog design, mixed-signal verification, and software-defined hardware development — areas where human creativity is the primary input."
      }
    ],
    weaknesses: [
      {
        title: "No World-Class Fab Yet",
        description: "India has zero operational leading-edge or mature-node wafer fabs at commercial scale as of 2024.",
        icon: "🏭",
        detail: "TSMC and Samsung have accumulated 30+ years of fab process know-how that cannot be replicated quickly with capital alone. India's Tata fab project is under construction but represents a first-generation attempt. Until operational and proven, India remains 100% dependent on foreign foundries for wafer fabrication, creating a critical strategic vulnerability."
      },
      {
        title: "Shortage of Process Engineers",
        description: "While design talent is abundant, India has very few engineers with hands-on cleanroom and process integration experience.",
        icon: "👷",
        detail: "Running a semiconductor fab requires specialized expertise in chemical mechanical planarization, photolithography process control, diffusion furnace management, and yield engineering — skills built through years of fab-floor experience that India simply hasn't had the infrastructure to develop. Filling this gap requires either expensive foreign hires, aggressive domestic training programs, or knowledge-transfer partnerships with established fab operators."
      },
      {
        title: "Weak Chemical Supply Chains",
        description: "India lacks domestic production of ultra-pure process chemicals, specialty gases, and photoresists essential for semiconductor manufacturing.",
        icon: "🧪",
        detail: "Semiconductor-grade chemicals (HF, H₂O₂, IPA at 99.9999% purity), photoresists, and specialty gases (silane, germane, NF₃) are today almost entirely imported. Building domestic chemical supply chains is a multi-decade effort requiring significant investment in chemical engineering infrastructure — and it must happen before any fab can operate reliably at scale."
      },
      {
        title: "IP Ownership Nearly Zero",
        description: "Despite designing chips for the world, India-based teams own virtually no semiconductor IP that generates royalty revenue.",
        icon: "📜",
        detail: "The fundamental economic problem of India's semiconductor participation is that engineers in Bangalore design world-class chips but all IP, patents, and licensing revenues accrue to US/EU headquarters. This 'talent trap' means India gets wages but not wealth creation. Until Indian entities own processor IP, analog IP blocks, or interface standards, the value-add remains at the bottom of the stack."
      },
      {
        title: "Power/Water Infrastructure Gaps",
        description: "Many potential fab sites lack the consistent 24/7 power and ultrapure water supply that semiconductor manufacturing demands.",
        icon: "💧",
        detail: "A modern 300mm fab requires 10–20 million gallons of ultra-pure water per day and 100–200 MW of uninterruptible power. India's grid reliability issues and water scarcity in semiconductor-friendly climates (dry, low-humidity regions) pose fundamental site-selection challenges. Infrastructure investment must precede — not accompany — fab construction to avoid costly production disruptions."
      }
    ],
    opportunities: [
      {
        title: "Legacy Node Demand Surge (Automotive/IoT)",
        description: "65% of global chips shipped are still on 28nm and above nodes — and this demand is growing, not shrinking.",
        icon: "🚗",
        detail: "Modern vehicles use 1,400+ chips, most of which are mature-node microcontrollers, power management ICs, and sensor interface chips — not bleeding-edge 3nm logic. The automotive chip shortage of 2021–2023 exposed how underinvested legacy node capacity truly is. India entering this market through a 28nm fab would immediately find paying customers among Tier-1 automotive suppliers desperate to diversify away from single-source Asian fabs."
      },
      {
        title: "ATMP for Global Brands",
        description: "Assembly, Test & Packaging is the most accessible entry point into the semiconductor supply chain and is actively being onshored.",
        icon: "📦",
        detail: "ATMP facilities require significantly less capital and technical risk than wafer fabs, while still building critical institutional knowledge — cleanroom discipline, logistics precision, yield tracking. Global brands (Apple, Qualcomm, NVIDIA) are actively seeking ATMP diversification away from China and Taiwan. India's combination of skilled labor, government subsidies, and a large domestic electronics assembly industry makes it the most competitive alternative."
      },
      {
        title: "GaN/SiC Power Chips for EVs",
        description: "Wide-bandgap semiconductor materials are the next major frontier, and India's EV market creates a natural anchor customer base.",
        icon: "🔋",
        detail: "GaN and SiC power devices command 3–5x the ASP of silicon equivalents and the market is growing at 30%+ CAGR driven by EV drivetrains, solar inverters, and industrial motor drives. Unlike advanced logic, GaN/SiC fabs can be built at 150–200mm wafer sizes with manageable capital ($500M–$2B range) — making them achievable for India within a decade. An Indian GaN/SiC fabless company with domestic foundry access could supply the entire Indian EV industry."
      },
      {
        title: "Chiplet Interconnect Market",
        description: "As the industry shifts from monolithic chips to modular chiplet architectures, the interfaces and packaging technology become the new battleground.",
        icon: "🔗",
        detail: "UCIe, BoW, and other chiplet interconnect standards create opportunities for specialized IP companies that are not scale-dependent like logic fabs. India's strong analog and mixed-signal design capability is directly applicable to SerDes, PHY IP, and advanced packaging control electronics. A focused Indian startup in chiplet interconnect IP could achieve global relevance with $50–100M in investment — a fraction of fab-level capital."
      },
      {
        title: "China+1 Supply Chain Diversification",
        description: "Geopolitical tensions are forcing global electronics companies to build semiconductor supply chains outside China and Taiwan.",
        icon: "🌐",
        detail: "The CHIPS Act, European Chips Act, and Japan's semiconductor reinvestment programs all reflect a global consensus that concentration of chip manufacturing in Taiwan and China is an unacceptable strategic risk. India is the most credible large-scale alternative — English-speaking, democratic, large domestic market, and increasingly policy-aligned with the US/EU semiconductor alliance. This geopolitical tailwind is a once-in-a-generation opportunity."
      }
    ],
    threats: [
      {
        title: "TSMC/Samsung Fab Moats",
        description: "Leading-edge fabs represent 30+ years of accumulated process know-how that cannot be replicated quickly regardless of capital invested.",
        icon: "🏔️",
        detail: "TSMC's 3nm yield rates are the result of thousands of engineering refinements built over decades of continuous production. Even TSMC's own Arizona fabs have struggled to replicate Taiwan-level yields. India attempting to enter advanced nodes without this accumulated knowledge base would likely result in catastrophic yield failures and multi-billion dollar write-offs. The moat is real and deep."
      },
      {
        title: "US Export Control Spillover",
        description: "US semiconductor export controls targeting China could inadvertently restrict technology access for Indian entities as well.",
        icon: "🚫",
        detail: "The Entity List framework and EAR controls are complex and rapidly evolving. Indian companies with Chinese investors, research partnerships, or operational links to China could find themselves caught in export control restrictions on EDA software, chip manufacturing equipment, and advanced process IP. As India scales its semiconductor ambitions, navigating this regulatory minefield becomes an increasingly critical capability."
      },
      {
        title: "Capital-Intensive Competition",
        description: "The US, EU, Japan, and South Korea are collectively investing $300B+ in domestic semiconductor capacity, creating a capital arms race.",
        icon: "💰",
        detail: "Intel's Ohio fab ($20B), TSMC's Arizona expansion ($40B), and the EU Chips Act ($47B) represent sovereign-scale capital deployment that India must compete with on a constrained budget. While India's $10B ISM is meaningful for ATMP and design, it is a rounding error in the context of global fab investment. India must be extremely strategic about capital allocation, focusing on segments where $1 of investment creates maximum strategic leverage."
      },
      {
        title: "Brain Drain to US/EU",
        description: "India's best semiconductor engineers continue to emigrate to higher-paying opportunities in Silicon Valley and European chip hubs.",
        icon: "✈️",
        detail: "An Indian chip engineer with 10 years of experience earns $80–100K in India versus $300–500K+ in the United States. Until India's semiconductor industry creates domestic wealth-generation opportunities (through IP ownership, stock options in global companies, and fab operator roles), the talent pipeline will continue to drain faster than it fills. Policy must address compensation parity at least for critical-skill roles."
      },
      {
        title: "Geopolitical Volatility",
        description: "Taiwan Strait tensions create both opportunity and risk — a conflict scenario would devastate global chip supply chains including India.",
        icon: "⚠️",
        detail: "India's semiconductor strategy is partly premised on being a stable alternative to Taiwan and China. But a major geopolitical crisis in the Taiwan Strait could simultaneously create demand for Indian production AND disrupt India's own supply of the EDA tools, equipment, and process chemicals needed to ramp that production. India's preparedness for such a shock scenario — strategic chip stockpiles, emergency production protocols — remains minimal."
      }
    ]
  },

  /* ─────────────────────────────────────────────
     3. PESTEL DATA
  ───────────────────────────────────────────── */
  pestelData: {
    political: {
      title: "Political",
      icon: "🏛️",
      color: "#6366f1",
      points: [
        {
          title: "India Semiconductor Mission ($10B+)",
          description: "The ISM is India's most significant industrial policy in decades, offering 50% capital subsidy for fabs and 30% for ATMP. Single-window clearance mechanisms reduce bureaucratic friction that historically stalled large-scale industrial investment."
        },
        {
          title: "US-India Technology Alliance (iCET)",
          description: "The Initiative on Critical and Emerging Technologies creates a framework for semiconductor technology co-development, joint research, and supply chain cooperation. This gives Indian companies preferential access to US technology ecosystems under CHIPS Act partnership provisions."
        },
        {
          title: "China+1 Geopolitical Tailwind",
          description: "US, EU, and Japanese government policies are actively incentivizing semiconductor supply chain diversification away from China and Taiwan. India, as the world's largest democracy with strong rule of law and US alignment, is the primary geopolitical beneficiary of this restructuring."
        },
        {
          title: "State-Level Competition for Fabs",
          description: "Gujarat, Tamil Nadu, Telangana, and Karnataka are competing aggressively with land grants, power subsidies, and water guarantees to attract semiconductor investments. This state-level competition is driving infrastructure improvements that benefit the entire sector."
        }
      ]
    },
    economic: {
      title: "Economic",
      icon: "💹",
      color: "#10b981",
      points: [
        {
          title: "India's $26B Semiconductor Market Growing at 13% CAGR",
          description: "India is already a substantial semiconductor consumer market driven by smartphones, consumer electronics, automotive, and industrial demand. This domestic demand base provides an anchor market for early-stage Indian chip ventures, reducing the pressure to immediately compete in export markets."
        },
        {
          title: "Cost Arbitrage in R&D and Engineering",
          description: "India's engineering talent costs 60–70% less than US/EU equivalents, creating fundamental unit-economics advantages for fabless design companies. For compute-intensive EDA workloads, India's cloud computing cost advantages further compound this R&D efficiency."
        },
        {
          title: "Global Semiconductor Market at $600B+ and Growing",
          description: "The total addressable market for semiconductors is forecast to reach $1 trillion by 2030, driven by AI silicon, automotive electrification, industrial IoT, and 5G infrastructure. India entering even 5% of this market would represent a $50B annual revenue opportunity."
        },
        {
          title: "Capital Availability Gap vs. OECD",
          description: "India's domestic private equity and venture capital markets are underdeveloped relative to the capital requirements of semiconductor investment. Fab-scale capital ($5–30B per project) is not available domestically, necessitating sovereign wealth fund participation, FDI, or joint ventures with established global players."
        }
      ]
    },
    social: {
      title: "Social",
      icon: "👥",
      color: "#f59e0b",
      points: [
        {
          title: "1.5M+ STEM Graduates Per Year",
          description: "India's university system produces the world's second-largest annual cohort of science and technology graduates. While curriculum quality varies, the sheer volume creates a large funnel from which semiconductor companies can recruit and train talent at scale."
        },
        {
          title: "Massive Cleanroom Technician Training Gap",
          description: "India lacks the vocational training infrastructure for semiconductor fab technicians — the people who actually operate deposition, etch, and lithography equipment. Bridging this gap requires a dedicated semiconductor-specific polytechnic system analogous to Taiwan's vocational education pipeline that built TSMC's workforce."
        },
        {
          title: "Growing Aspirational Middle Class Driving Tech Consumption",
          description: "400M+ Indians are expected to join the middle class by 2035, dramatically expanding domestic consumption of smartphones, EVs, smart appliances, and connected devices — all chip-intensive product categories. This expanding consumer base is the fundamental demand driver for an Indian semiconductor industry."
        },
        {
          title: "Diaspora Network as Strategic Asset",
          description: "Over 100,000 Indian-origin semiconductor professionals work at leading US chip companies — including CEO-level roles at Google, Microsoft, and AMD. This diaspora represents a potential technology transfer, mentorship, and investment network that no other emerging semiconductor nation possesses."
        }
      ]
    },
    technological: {
      title: "Technological",
      icon: "⚙️",
      color: "#8b5cf6",
      points: [
        {
          title: "Design Verification Leadership",
          description: "India's design engineers are globally recognized leaders in functional verification, formal methods, and hardware emulation — the disciplines that ensure chips work correctly before tape-out. This expertise is the foundation of India's semiconductor value proposition today."
        },
        {
          title: "RISC-V Open Architecture Opportunity",
          description: "RISC-V eliminates ARM licensing fees and enables India to build processor IP stacks that are domestically owned. IIT Madras (Shakti processor) and C-DAC's VEGA project demonstrate India's capability to develop production-grade RISC-V designs, with defense and government applications providing the initial captive market."
        },
        {
          title: "Legacy Node Technology is Accessible",
          description: "28nm and above process technology is more mature, better documented, and available through knowledge-transfer partnerships with ISMC's GlobalFoundries relationship and other strategic alliances. India doesn't need to invent a new process — it needs to execute a known one reliably, which is a fundamentally different (and more achievable) engineering challenge."
        },
        {
          title: "AI/ML Chip Design Tools Democratizing Access",
          description: "AI-assisted EDA tools are beginning to automate portions of physical design, synthesis optimization, and verification that previously required years of expert experience. This technology shift could compress India's learning curve in chip design and reduce the experiential gap versus TSMC's process engineers."
        }
      ]
    },
    environmental: {
      title: "Environmental",
      icon: "🌿",
      color: "#06b6d4",
      points: [
        {
          title: "Water Scarcity as Fab Location Constraint",
          description: "India's semiconductor-friendly low-humidity regions (Rajasthan, parts of Gujarat) are often water-scarce, while water-rich regions may have humidity or logistics challenges. Water recycling and zero-liquid-discharge fab designs are not optional for India — they are mandatory prerequisites for regulatory approval and operational sustainability."
        },
        {
          title: "Semiconductor Chemical Waste Regulation",
          description: "Fab effluents include hazardous chemicals (HF, H₂SO₄, perfluorocarbons) that require sophisticated treatment infrastructure. India's environmental regulatory framework for semiconductor-specific waste is underdeveloped, creating both compliance risk and the need for significant upfront investment in effluent treatment systems."
        },
        {
          title: "Energy Transition Creating Demand Tailwind",
          description: "India's commitment to 500 GW of renewable energy by 2030 requires massive quantities of power semiconductors for solar inverters, wind converters, and grid management. This domestic clean energy buildout creates a captive, high-volume market for Indian power semiconductor manufacturers — with predictable government-backed demand."
        },
        {
          title: "Carbon Footprint of Semiconductor Manufacturing",
          description: "Chip manufacturing is energy-intensive — a leading-edge fab uses as much electricity as a small city. India's push for renewable energy integration into industrial zones could make Indian fabs among the greenest in the world by 2030, which is increasingly a procurement criterion for European customers and ESG-conscious global brands."
        }
      ]
    },
    legal: {
      title: "Legal",
      icon: "⚖️",
      color: "#ec4899",
      points: [
        {
          title: "IP Protection Framework Needs Strengthening",
          description: "India's intellectual property protection regime, while improving, is not yet at the level required to give multinational semiconductor companies confidence to transfer their most sensitive process IP and design secrets to India-based operations. Strengthening patent enforcement, trade secret protection, and semiconductor mask work registration is a legal prerequisite for deep technology transfer."
        },
        {
          title: "Export Control Compliance Infrastructure",
          description: "As India receives US-controlled semiconductor technology, it must build robust export control compliance systems to ensure that technology does not leak to restricted destinations. India's establishment of an export control licensing authority and SCOMET list reforms are steps in the right direction, but industry compliance capacity remains thin."
        },
        {
          title: "Data Localization and Security Requirements",
          description: "India's data protection legislation intersects with semiconductor design in complex ways — particularly for chip designs that process personal data or are used in critical national infrastructure. Clear legal frameworks for semiconductor design data handling will be needed to attract foreign design center expansions."
        },
        {
          title: "Land Acquisition and Environmental Clearance",
          description: "Fab sites require 50–200 acres of contiguous land with specific geological, hydrological, and connectivity characteristics. India's land acquisition laws and multi-agency environmental clearance processes have historically added 2–5 years to large industrial project timelines — a delay that is fatal in the fast-moving semiconductor industry."
        }
      ]
    }
  },

  /* ─────────────────────────────────────────────
     4. ROADMAP PHASES
  ───────────────────────────────────────────── */
  roadmapPhases: [
    {
      phase: 1,
      title: "Design Dominance + ATMP Scale",
      years: "2024–2027",
      description: "India's immediate priority is to consolidate and deepen its existing design engineering advantage while simultaneously scaling ATMP operations through the Micron Gujarat plant and follow-on investments. This phase builds institutional knowledge, logistics habits, and cleanroom culture without the extreme capital risk of a full wafer fab. Success here establishes the credibility needed to attract phase-two investment.",
      milestones: [
        { title: "Micron ATMP Plant at Full Capacity", description: "Micron's $825M ATMP facility in Sanand, Gujarat achieves full production ramp with 5,000+ direct employees and a local supplier ecosystem established." },
        { title: "5 Indian Fabless Companies Funded at $50M+", description: "Government-backed semiconductor funds (ISMC, ISM) co-invest with private VCs to create a pipeline of Indian-owned fabless chip companies targeting GaN/SiC power, automotive MCUs, and analog/mixed-signal." },
        { title: "RISC-V Processor IP Stack Certified", description: "IIT Madras Shakti or C-DAC VEGA processor achieves defense/government production qualification, establishing India's first domestically-owned processor IP with real deployment." },
        { title: "20 MNC Design Centers Expanded", description: "Incentive packages attract significant expansions of Qualcomm, NVIDIA, NXP, and Infineon India design centers, adding 15,000+ high-value design jobs and — critically — IP co-development agreements." }
      ],
      keyPlayers: ["Micron India", "Tata Electronics", "Qualcomm India", "IIT Madras", "C-DAC", "ISM"],
      color: "#00d4ff",
      icon: "🎯"
    },
    {
      phase: 2,
      title: "Legacy Fab at 28nm",
      years: "2027–2030",
      description: "The Tata Electronics fab (in partnership with PSMC of Taiwan) commences production operations, initially targeting 28nm mature-node processes for automotive, industrial, and IoT applications. This phase transforms India from a pure-play design nation to one with manufacturing credibility. Yields will be imperfect early — the goal is learning, not immediate profitability. The phase also focuses on developing domestic chemical supply chains.",
      milestones: [
        { title: "Tata Fab First Silicon", description: "Tata Electronics / PSMC joint fab achieves first silicon yield milestone at 28nm node, initially targeting simple automotive microcontrollers and power management ICs where defect tolerance is higher." },
        { title: "Process Engineer Workforce of 2,000+", description: "Dedicated semiconductor technician training programs at ITIs, specialized engineering colleges, and fab-embedded apprenticeships create India's first generation of experienced cleanroom process professionals." },
        { title: "Domestic Chemical Supply Chain Seeded", description: "Joint ventures with Merck, Air Products, and domestic chemical companies establish local production of 3–5 critical process chemicals and specialty gases, reducing import dependency for established node processes." },
        { title: "India ATMP Handles 5% of Global Volume", description: "Combined Micron, Tata, and new entrant ATMP plants position India to handle 5% of global semiconductor assembly and test volume, creating a recurring, capital-light revenue base." }
      ],
      keyPlayers: ["Tata Electronics", "PSMC", "Merck India", "Air Products India", "ISMC", "State Skill Development Missions"],
      color: "#fbbf24",
      icon: "🏭"
    },
    {
      phase: 3,
      title: "Ecosystem Maturity",
      years: "2030–2035",
      description: "India's semiconductor ecosystem reaches self-reinforcing maturity — fabs attract equipment suppliers, chemical companies, and design tool vendors who then attract more fabs. Indian fabless companies begin generating meaningful royalty and product revenues. Specialty segments (GaN/SiC, analog, chiplet interconnects) see Indian companies achieving top-10 global positions. The design-to-manufacturing handoff becomes a domestic capability.",
      milestones: [
        { title: "First Indian Fabless IPO at $1B+ Valuation", description: "An Indian GaN/SiC power semiconductor or analog design company achieves public market validation, proving that Indian semiconductor IP can generate investable returns and inspiring a second wave of deep-tech startups." },
        { title: "Second 28nm/14nm Fab Announced", description: "Ecosystem maturity and proven yields at the Tata fab attract a second major fab investment — potentially from a global IDM or a new Indian industrial conglomerate — targeting 14nm or advanced 28nm for mobile and communications chips." },
        { title: "India Handles 10% of Global ATMP", description: "Multiple operational ATMP clusters across Gujarat, Tamil Nadu, and Telangana collectively process 10% of global semiconductor packaging volume, making India a structurally important node in the global supply chain." },
        { title: "Domestic EDA Tool Company Emerges", description: "An Indian EDA startup, possibly building on open-source tools (OpenROAD, Magic) and AI-assisted automation, achieves commercial traction in the global market — the first step toward India having a role in the design tool stack, not just the design services layer." }
      ],
      keyPlayers: ["Indian Fabless Ecosystem", "Tata Electronics", "CG Power", "IIT/IISc Research Labs", "NASSCOM Semiconductor Council", "Invest India"],
      color: "#10b981",
      icon: "🌱"
    },
    {
      phase: 4,
      title: "Advanced Node Ambition",
      years: "2035+",
      description: "With a mature ecosystem, proven fab operations, and a credible talent base of process engineers, India can begin to responsibly consider advanced node investments at 7nm and below. This phase must be driven by commercial logic, not national pride — India should only pursue advanced nodes if it has a competitive advantage in specific applications (e.g., RISC-V AI chips for the Indian market, specialty advanced packaging, chiplet integration). The goal is strategic relevance, not technological mimicry.",
      milestones: [
        { title: "Advanced Packaging Leadership (Chiplets)", description: "India establishes global leadership in 2.5D/3D chiplet integration and advanced packaging — a segment that requires precision engineering and systems integration capability rather than leading-edge lithography, making it achievable before 3nm logic." },
        { title: "7nm Feasibility Study and Pilot Line", description: "Based on demonstrated 14nm yields and accumulated process knowledge, a consortium of Indian industry and government commissions a credible feasibility study for 7nm capability, potentially through a TSMC/Samsung technology licensing agreement." },
        { title: "India in Global Top-5 ATMP", description: "India becomes a top-5 global semiconductor packaging nation by volume, with clusters in multiple states and a full ecosystem of substrate manufacturers, solder suppliers, and test equipment makers domestically sourced." },
        { title: "Indian Chip Used in 1B+ Devices Globally", description: "An Indian-designed and Indian-manufactured chip (even at legacy nodes) achieves billion-unit deployment in a global product category — the symbolic milestone that transforms India's semiconductor identity from service provider to product nation." }
      ],
      keyPlayers: ["Future Tata/ISMC Advanced Fabs", "Indian Advanced Packaging Consortia", "DRDO", "ISRO", "Global Foundry Partners", "ISM 2.0"],
      color: "#a855f7",
      icon: "🚀"
    }
  ],

  /* ─────────────────────────────────────────────
     5. SCENARIO DATA
  ───────────────────────────────────────────── */
  scenarioData: [
    {
      id: "failure",
      title: "Dependency Trap",
      subtitle: "India Remains a Consumer",
      description: "Despite initial investments, India fails to build a self-sustaining semiconductor ecosystem. Policy inconsistency, infrastructure gaps, and inability to retain process talent result in Tata fab delays and Micron operating as an isolated island without supplier depth. India remains 80%+ import-dependent by 2040, with the design sector stagnating as AI automation displaces India's DV/PD labor advantage. A geopolitical disruption to Taiwan supply chains causes a severe semiconductor shortage that halts India's EV and electronics industries.",
      gdpLoss: "$180B",
      jobsMissed: "2.4M",
      marketShare: "3%",
      color: "#ef4444",
      icon: "⚠️",
      stats: [
        { label: "Import Dependency by 2035", value: "85%+", negative: true },
        { label: "Fab Projects Completed", value: "0–1", negative: true },
        { label: "Design Job Growth", value: "Stagnant", negative: true },
        { label: "Domestic IP Revenue", value: "<$1B", negative: true }
      ],
      outcomes: [
        "Tata fab delayed 5+ years due to yield failures and supply chain gaps",
        "Design engineers continue migrating to US/EU for 3x salary premium",
        "No domestic power semiconductor for India's EV industry — full import dependency",
        "Geopolitical shock to Taiwan supply chain causes 18-month chip shortage for Indian OEMs",
        "ISM Phase 2 funding not disbursed due to Phase 1 underperformance",
        "India remains assembly-level electronics manufacturer, not a chip nation"
      ]
    },
    {
      id: "partial",
      title: "Niche Champion",
      subtitle: "India Captures Key Segments",
      description: "India makes meaningful but uneven progress — becoming a globally significant ATMP hub and developing genuine strength in GaN/SiC power semiconductors and analog design, but failing to crack the core logic fab market. The Tata 28nm fab operates but remains subscale and high-cost relative to TSMC equivalents. India carves out defensible niches worth $85B annually by 2040 but misses the transformative opportunity to become a full-stack semiconductor power. This is the most likely near-term scenario.",
      gdpGain: "$85B",
      jobsCreated: "1.2M",
      marketShare: "12%",
      color: "#fbbf24",
      icon: "⚡",
      stats: [
        { label: "ATMP Global Share", value: "8–12%", positive: true },
        { label: "GaN/SiC Market Share", value: "15%", positive: true },
        { label: "Logic Fab Capability", value: "28nm Only", neutral: true },
        { label: "Design IP Revenue", value: "$8B/year", positive: true }
      ],
      outcomes: [
        "Micron ATMP scales to 3 plants with 15,000+ employees",
        "India becomes top-3 global GaN/SiC power semiconductor nation",
        "Analog/mixed-signal design startups generate $5B+ in export revenues",
        "Tata 28nm fab serves automotive and IoT customers with 70–80% yields",
        "India misses advanced logic — remains dependent on TSMC for cutting-edge chips",
        "Chiplet interconnect IP company achieves $1B valuation from India"
      ]
    },
    {
      id: "dominant",
      title: "Global Node",
      subtitle: "India as Strategic Supply Chain Hub",
      description: "India executes a disciplined step-by-step strategy across design, ATMP, legacy fabs, and eventually advanced packaging — becoming the world's third semiconductor supply chain hub after the US/EU and Asia-Pacific blocs. By 2040, India handles 20% of global ATMP, has multiple operational fabs including a 14nm node, and hosts a dozen billion-dollar fabless companies with domestically-owned IP. The $300B GDP contribution represents a structural transformation of India's economy comparable to the IT revolution of the 1990s.",
      gdpGain: "$300B",
      jobsCreated: "4.5M",
      marketShare: "20%",
      color: "#10b981",
      icon: "🚀",
      stats: [
        { label: "ATMP Global Share", value: "20%+", positive: true },
        { label: "Fab Nodes Achieved", value: "28nm + 14nm", positive: true },
        { label: "Indian IP Companies", value: "12+ Unicorns", positive: true },
        { label: "Annual Chip Export Revenue", value: "$120B", positive: true }
      ],
      outcomes: [
        "India achieves 20% of global ATMP volume — second only to China",
        "Multiple Indian-owned GaN/SiC and analog chip companies achieve $1B+ revenues",
        "Tata fab + second fab together handle significant portion of Asian legacy node demand",
        "RISC-V processor designed and fabricated in India powers 100M+ domestic devices",
        "India becomes a mandatory node in global semiconductor supply chains — strategic leverage achieved",
        "Semiconductor export revenues reach $120B — transforming India's trade balance and strategic autonomy"
      ]
    }
  ],

  /* ─────────────────────────────────────────────
     6. SIMULATOR OPTIONS
  ───────────────────────────────────────────── */
  simulatorOptions: {
    design: {
      title: "Fabless Design",
      icon: "🧠",
      risk: 30,
      capital: "$50M–500M",
      timeToScale: "3–5 years",
      strategicPayoff: 75,
      description: "Build semiconductor IP and chip designs without owning manufacturing. Leverage India's existing talent pool for design verification, RTL engineering, and physical design to create domestically-owned chip products targeting GaN/SiC power, analog, and RISC-V processor markets. The fabless model is how Qualcomm, NVIDIA, and AMD achieved dominance without ever owning a fab.",
      pros: [
        "Leverages India's proven strength in 85,000+ design engineers",
        "Low capital intensity compared to fabs — accessible to Indian VCs",
        "Fastest time to revenue (3–5 years vs. 10–15 for fabs)",
        "IP ownership generates royalties and licensing revenue that scale independently",
        "Domestic EV and IoT market provides captive early customers"
      ],
      cons: [
        "Dependent on foreign foundries (TSMC, GlobalFoundries) for manufacturing",
        "IP still needs protection — requires strengthened legal framework",
        "AI/ML automation of DV/PD could erode India's current talent advantage",
        "Global competition from US, EU, and Taiwanese fabless companies is intense",
        "Difficulty attracting CEO/CTO talent with product commercialization experience"
      ],
      companies: ["Qualcomm India R&D", "Synapse Design", "InCore Semiconductors", "Mindgrove Technologies", "C-DAC"],
      keyInsight: "Fabless design is India's clearest near-term path to IP ownership. The risk is not failure to design chips — it's designing chips that others own. Policy must mandate IP co-ownership in MNC design centers."
    },
    packaging: {
      title: "ATMP / Packaging",
      icon: "📦",
      risk: 45,
      capital: "$500M–2B",
      timeToScale: "5–7 years",
      strategicPayoff: 70,
      description: "Invest in Assembly, Test, Measurement and Packaging facilities — the final stages of semiconductor manufacturing where finished wafers are diced, assembled into packages, tested, and prepared for board-level integration. Micron's Gujarat plant is the proof-of-concept. ATMP builds the cleanroom culture, logistics precision, and supply chain depth that a full fab requires, at a fraction of the cost and risk.",
      pros: [
        "Capital requirement is 10–20x lower than a wafer fab",
        "Technology risk is manageable — well-understood processes",
        "Builds critical institutional knowledge: cleanroom, supply chain, yield tracking",
        "Global demand for ATMP diversification away from China is real and urgent",
        "Creates supplier ecosystem that supports eventual fab investments"
      ],
      cons: [
        "Lower strategic value-add than fab or design IP",
        "Susceptible to automation — robotic packaging is advancing rapidly",
        "Requires large land parcels with specific infrastructure (power, water, logistics)",
        "Margin pressure from established SE Asian players (ASE, Amkor, JCET)",
        "Advanced packaging (2.5D/3D) requires sophisticated engineering not yet available in India"
      ],
      companies: ["Micron India", "Tata Electronics ATMP", "ASE India", "Amkor India", "CG Power"],
      keyInsight: "ATMP is the correct entry point for India's manufacturing journey. Not because it is the most valuable segment, but because it is the right first step — building the workforce discipline, logistics infrastructure, and supply chain reflexes that make everything else possible."
    },
    fabrication: {
      title: "Wafer Fabrication",
      icon: "🏭",
      risk: 85,
      capital: "$10B–30B",
      timeToScale: "10–15 years",
      strategicPayoff: 95,
      description: "Build wafer fabrication facilities that convert silicon wafers into patterned chips through hundreds of deposition, etching, lithography, and implantation steps. The highest-risk, highest-reward option — a successful Indian fab changes India's strategic position in the global supply chain permanently. The recommendation is to start with legacy nodes (28nm+) rather than attempting leading-edge processes that require decades of accumulated know-how.",
      pros: [
        "Highest strategic payoff — transforms India from consumer to producer",
        "Creates the densest supply chain cluster of any semiconductor segment",
        "Legacy nodes (28nm+) have strong, growing demand from automotive and IoT",
        "Reduces India's vulnerability to geopolitical supply chain disruption",
        "Attracts downstream equipment and chemical investment, multiplying economic impact"
      ],
      cons: [
        "Enormous capital requirement ($10–30B per fab) — requires sovereign co-investment",
        "Process knowledge gap is severe — requires foreign technology partnership",
        "Yield ramp takes 3–5 years even with experienced foreign operators",
        "Requires 24/7 ultra-pure water, stable power, and specialty gas supply — infrastructure not ready",
        "Critical shortage of process engineers who know how to run a cleanroom"
      ],
      companies: ["Tata Electronics + PSMC", "ISMC + GlobalFoundries (on hold)", "HCL + Foxconn (proposed)", "DRDO Strategic Fab"],
      keyInsight: "Fabrication is India's nation-defining bet — necessary for true strategic sovereignty but perilous if attempted too fast or at the wrong node. The mantra must be: own 28nm completely before even studying 14nm. One step, fully executed, beats ten steps half-done."
    }
  },

  /* ─────────────────────────────────────────────
     7. VALUE CHAIN STAGES
  ───────────────────────────────────────────── */
  valueChainStages: [
    {
      id: "design",
      title: "Design & Architecture",
      country: "USA",
      flag: "🇺🇸",
      companies: ["Qualcomm", "NVIDIA", "AMD", "Intel", "ARM", "Synopsys", "Cadence"],
      marketShare: "35%",
      indiaRole: "Strong presence in DV/PD but IP flows to US HQ",
      description: "The design stage encompasses chip architecture, RTL coding, verification, and physical implementation. US companies dominate through proprietary EDA tools (Synopsys, Cadence), processor instruction set architectures (x86, ARM), and a deep portfolio of semiconductor IP blocks. India participates extensively at the engineering level but captures minimal economic value — the profits and patents flow to US headquarters while Indian engineers receive salaries, not equity or royalties.",
      color: "#6366f1",
      globePos: { lat: 37, lng: -122 }
    },
    {
      id: "fabrication",
      title: "Wafer Fabrication",
      country: "Taiwan / Korea",
      flag: "🇹🇼🇰🇷",
      companies: ["TSMC", "Samsung", "GlobalFoundries"],
      marketShare: "40%",
      indiaRole: "No presence at leading edge",
      description: "Wafer fabrication is the capital- and knowledge-intensive heart of semiconductor manufacturing, where silicon wafers are transformed into functional chips through 500–1000 process steps including photolithography, deposition, etching, and doping. TSMC alone handles over 90% of the world's most advanced chip production. The concentration of this capability in Taiwan represents the single greatest supply chain vulnerability in the global technology economy — and India's single greatest strategic opportunity if it can build credible fab capability.",
      color: "#ef4444",
      globePos: { lat: 25, lng: 121 }
    },
    {
      id: "equipment",
      title: "Equipment & EDA",
      country: "Netherlands / Japan / USA",
      flag: "🇳🇱🇯🇵",
      companies: ["ASML", "Tokyo Electron", "Applied Materials", "Lam Research"],
      marketShare: "15%",
      indiaRole: "Minimal",
      description: "Semiconductor manufacturing equipment and electronic design automation tools represent the most technically defensible moat in the entire supply chain. ASML's monopoly on EUV lithography machines (each costing $200M+, containing 100,000 components from 5,000 suppliers) is perhaps the most complete technology monopoly in modern industry. India has virtually no presence in this segment today, and equipment indigenization should be a 20-year aspiration — not a near-term priority.",
      color: "#f59e0b",
      globePos: { lat: 52, lng: 5 }
    },
    {
      id: "atmp",
      title: "Assembly, Test & Packaging",
      country: "SE Asia",
      flag: "🌏",
      companies: ["ASE Group", "Amkor", "JCET", "Micron India"],
      marketShare: "7%",
      indiaRole: "ENTRY ZONE — Micron ATMP plant operational",
      description: "ATMP is where finished wafers are diced into individual chips, assembled into protective packages, tested for functionality and reliability, and prepared for board-level integration. While often perceived as low-value, advanced packaging (2.5D interposers, 3D stacking, chiplet integration) is emerging as a key differentiator — TSMC's CoWoS packaging for NVIDIA's H100 is as strategically important as the logic node itself. India has made its most significant semiconductor investment in this segment through Micron's Gujarat facility.",
      color: "#10b981",
      globePos: { lat: 1, lng: 103 }
    },
    {
      id: "india",
      title: "India Emerging",
      country: "India",
      flag: "🇮🇳",
      companies: ["Tata Electronics", "Micron India", "CG Power", "ISMC"],
      marketShare: "<1%",
      indiaRole: "Current focus: ATMP + Design + Legacy Fab roadmap",
      description: "India is at the beginning of its semiconductor manufacturing journey, currently strong in design services but nascent in manufacturing. The strategic roadmap is clear: scale ATMP through Micron and follow-on investments, build design IP ownership through fabless companies and RISC-V development, and execute the Tata 28nm fab as India's first major manufacturing milestone. The window for India to insert itself into a restructuring global supply chain is open — but it will not stay open indefinitely.",
      color: "#fbbf24",
      globePos: { lat: 20, lng: 77 }
    }
  ],

  /* ─────────────────────────────────────────────
     8. STATS
  ───────────────────────────────────────────── */
  stats: {
    importDependency: "80%+",
    globalMarket: "$600B+",
    indiaMarket: "$26B",
    designEngineers: "85,000+",
    govIncentive: "$10B+",
    micronInvestment: "$825M",
    tataInvestment: "$11B",
    evMarketGrowth: "40% CAGR",
    legacyNodeDemand: "65% of chips",
    atmpGrowth: "12% CAGR",
    chipletMarket: "$58B by 2035",
    analogMarket: "$74B by 2029",
    isdgrowth: "20% YoY"
  },

  /* ─────────────────────────────────────────────
     9. CHIP SIMULATION STAGES
  ───────────────────────────────────────────── */
  chipSimStages: [
    {
      id: 0,
      title: "Silicon Substrate",
      subtitle: "Ultra-pure monocrystalline silicon · 300mm",
      companies: ["Shin-Etsu Chemical", "SUMCO", "Siltronic"],
      description: "Pure silicon wafers grown from molten silicon via Czochralski process at 1420°C. India has no major silicon wafer manufacturer. The starting material for every semiconductor must be imported — representing a foundational raw material dependency that predates even the design or fabrication gap. Domestic silicon crystal growth capability would require investment in high-purity polysilicon production and specialized crystal-pulling equipment.",
      indiaGap: "Critical raw material import dependency",
      color: "#94a3b8"
    },
    {
      id: 1,
      title: "Design & IP",
      subtitle: "EDA tools + RTL design + physical layout",
      companies: ["Synopsys", "Cadence", "Siemens EDA"],
      description: "Where India is strongest. RTL design, verification, physical design. But IP ownership stays with foreign HQs. India's 85,000+ design engineers are world-class — staffing the design centers of NVIDIA, Qualcomm, Intel, and AMD. The strategic challenge is that these engineers build billion-dollar IP portfolios that are entirely owned by their foreign employers. Transitioning from 'design services' to 'design product' is the defining strategic task for India's semiconductor journey.",
      indiaStrength: "85,000+ design engineers. Strong DV/PD talent.",
      color: "#6366f1"
    },
    {
      id: 2,
      title: "Lithography",
      subtitle: "ASML EUV machines · 13.5nm wavelength",
      companies: ["ASML", "Zeiss", "Cymer"],
      description: "ASML controls 100% of EUV lithography. One machine costs $200M+. The hardest bottleneck in the entire chain. Each EUV machine contains 100,000 components sourced from 5,000 suppliers and took 30 years of R&D to develop. For India, attempting EUV-based advanced node manufacturing is not a near-term option — the barriers are capital, supply chain, and physics. Legacy DUV lithography at 28nm nodes is viable and represents the correct entry point for Indian fab ambitions.",
      indiaGap: "Cannot manufacture or afford EUV for advanced nodes. Legacy DUV is viable.",
      color: "#f59e0b"
    },
    {
      id: 3,
      title: "Wafer Fabrication",
      subtitle: "Clean room Class 1 · 3nm to 28nm processes",
      companies: ["TSMC", "Samsung", "Intel Foundry"],
      description: "Tata Electronics building India's first significant fab. Focus must be on legacy nodes (28nm+) not 3nm. The Tata–PSMC joint venture in Gujarat represents a $11B commitment and the most consequential industrial investment in India's history. Success requires not just capital but knowledge transfer, supply chain development, workforce training, and relentless process engineering iteration. The nation-defining bet is whether India can achieve consistent 28nm yields by 2028.",
      indiaStatus: "Tata fab under construction. High risk, high reward. The nation-defining bet.",
      color: "#ef4444"
    },
    {
      id: 4,
      title: "Assembly, Test & Packaging",
      subtitle: "ATMP · Chiplets · Advanced packaging",
      companies: ["Micron India", "ASE Group", "Amkor"],
      description: "India's strategic entry point. Micron's ATMP plant in Gujarat operational. Builds institutional knowledge safely. The Micron facility represents more than its $825M investment figure suggests — it is India's first large-scale proof of concept that international semiconductor companies trust India with chip manufacturing operations. Each yield improvement, logistics optimization, and supply chain partnership built at Micron creates the template for every subsequent semiconductor manufacturing investment in India.",
      indiaStrength: "Micron operational. Labor force building. Next: chiplet advanced packaging.",
      color: "#10b981"
    }
  ]

};
