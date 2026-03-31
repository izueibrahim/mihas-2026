const fs = require('fs');

const path = 'c:/Users/User/Desktop/mihas-2026/data/news.js';
let content = fs.readFileSync(path, 'utf8');

const news1To5 = `    {
        id: 1,
        slug: 'news1',
        date: '20 September 2025',
        title: 'Excellence, Innovation and Sustainability Take Centre Stage at MIHAS Awards 2025',
        excerpt: '14 winners honoured across two main categories, spotlighting innovation, sustainability and emerging stars in the halal industry',
        author: 'MATRADE',
        frontImage: '/images/refrrence/news1/content1.png',
        heroImage: '/images/refrrence/news1/news1-title.png',
        contentImage: '/images/refrrence/news1/content2.png',
        category: 'Press Release',
        content: \\\`
            <p><strong>KUALA LUMPUR, 20 September 2025</strong> – The Malaysia International Halal Showcase (MIHAS) Awards 2025 concluded with a celebration of excellence, innovation, and sustainability, honouring 14 trailblazing winners from across Malaysia’s dynamic halal industry.</p>
            <p>The 12th edition of the MIHAS Awards was held on 20 September 2025 at the Malaysia International Trade and Exhibition Centre (MITEC), Kuala Lumpur, in conjunction with MIHAS 2025, which ran from 17 to 20 September 2025.</p>
            <p>The MIHAS Awards 2025, organised by the Malaysia External Trade Development Corporation (MATRADE), is a prestigious recognition for businesses driving the global halal economy through innovation, strong export performance, and a commitment to ESG principles.</p>
            <p><strong>MATRADE Chairman YB Dato’ Seri Reezal Merican Naina Merican</strong> said, “The MIHAS Awards underscore Malaysia’s commitment to positioning the Halal Malaysia brand on the global stage. The Awards celebrate visionary enterprises that have set new standards of excellence in halal trade. By recognising both industry leaders and emerging innovators, the Awards advance the national agenda of innovation, sustainability, and inclusive growth under the 13th Malaysia Plan – further strengthening Malaysia’s position as a trusted global benchmark for halal integrity, quality and excellence.”</p>
            <p><strong>MATRADE Chief Executive Officer YBhg. Dato’ Sri Mohd Mustafa Abdul Aziz added</strong>, “The MIHAS Awards 2025 shine a spotlight on companies representing the very best of Malaysian entrepreneurship. Their success proves that halal is not only about compliance, but also about competitiveness, innovation, and long-term sustainability. By acknowledging and celebrating their achievements, we inspire more businesses to expand into global markets, boosting Malaysia’s halal exports.”</p>
            <h2 style="color: #c41e3a; font-size: 1.5rem; text-align: left; margin: 2rem 0;">2025 MIHAS Award Winners:</h2>
            <p><strong>Excellence Awards:</strong></p>
            <ul style="list-style-type: disc; margin-left: 2rem; margin-bottom: 1rem;">
                <li><strong>Products Excellence Award:</strong> recognised for halal product quality, innovation, and export growth
                    <ol style="list-style-type: decimal; margin-left: 2rem; margin-top: 0.5rem;">
                        <li>MAMEE Double Decker (M) Sdn Bhd;</li>
                        <li>Zhafou Global Sdn Bhd; and</li>
                        <li>Aafiyat Marketing Sdn Bhd.</li>
                    </ol>
                </li>
                <li style="margin-top: 0.5rem;"><strong>Services Excellence Award:</strong> acknowledged for exceptional contributions in halal services, including logistics, e-commerce, and support industries
                    <ol style="list-style-type: decimal; margin-left: 2rem; margin-top: 0.5rem;">
                        <li>STG Shipping (M) Sdn Bhd; and</li>
                        <li>Serunai Commerce Sdn Bhd.</li>
                    </ol>
                </li>
                <li style="margin-top: 0.5rem;"><strong>Emerging Star Award:</strong> recognised as rising leaders with strong export potential and driving positive impact in the halal landscape
                    <ol style="list-style-type: decimal; margin-left: 2rem; margin-top: 0.5rem;">
                        <li>Product: Industri Makanan Jati Sdn Bhd;</li>
                        <li>Service: Adabi Consumer Industries Sdn Bhd; and</li>
                        <li>Service: GFB Food Sdn Bhd.</li>
                    </ol>
                </li>
            </ul>
            <p><strong>Innovation & Sustainability Awards:</strong></p>
            <ul style="list-style-type: disc; margin-left: 2rem; margin-bottom: 1rem;">
                <li><strong>Products Innovation & Sustainability Award:</strong>
                    <ol style="list-style-type: decimal; margin-left: 2rem; margin-top: 0.5rem;">
                        <li>ADA Biotech Sdn Bhd;</li>
                        <li>Culvita;</li>
                        <li>Poweroot Manufacturing Sdn Bhd; and</li>
                        <li>Wonderliv Sdn Bhd / Food Art.</li>
                    </ol>
                </li>
                <li style="margin-top: 0.5rem;"><strong>Services Innovation & Sustainability Award:</strong>
                    <ol style="list-style-type: decimal; margin-left: 2rem; margin-top: 0.5rem;">
                        <li>Pos Malaysia Berhad; and</li>
                        <li>Nestlé Products Sdn Bhd</li>
                    </ol>
                </li>
            </ul>
            <p>The MIHAS Awards position winners on the global stage, enhancing visibility, credibility, and access to strategic trade networks. The recognition strengthens brand reputation, affirms commitment to ESG and sustainability, and drives continuous growth, innovation, and leadership in the halal industry.</p>
            <p>All winners were selected by an independent panel comprising experts from industry and senior representatives of key government agencies. Entries were evaluated against rigorous criteria covering quality, innovation, sustainability, export growth, market expansion, and halal compliance.</p>
        \\\`
    },
    {
        id: 2,
        slug: 'news2',
        date: '19 September 2025',
        title: 'MIHAS 2025 ON TRACK TO HIT RM4.5 BILLION TARGET',
        excerpt: 'MIHAS\\'s International Edition to Expand to Europe in 2026',
        author: 'MATRADE',
        frontImage: '/images/refrrence/news2/content1.png',
        heroImage: '/images/refrrence/news2/news2-title.png',
        contentImage: '/images/refrrence/news2/content2.png',
        category: 'Press Release',
        content: \\\`
            <p><strong>KUALA LUMPUR, 19 September 2025</strong> – The Malaysia International Halal Showcase (MIHAS) 2025 entered its third day on a high note as YAB Prime Minister Dato’ Seri Anwar bin Ibrahim graced the Official Opening Ceremony today at the Malaysia International Trade and Exhibition Centre (MITEC).</p>
            <p>Organised by the Malaysia External Trade Development Corporation (MATRADE), MIHAS 2025 runs from 17–20 September at MITEC, Kuala Lumpur. Themed “Pinnacle of Halal Excellence”, the 21st edition continues to reaffirm Malaysia’s position as a global leader in the Halal economy.</p>
            <p>The Opening Ceremony, held alongside the Opening of the Global Halal Summit, followed two days of strong momentum at MIHAS 2025. Off on a strong start, preliminary results from its flagship <strong>International Sourcing Programme (INSP)</strong> looks set to help MIHAS achieve its RM4.5 billion sales targets.</p>
            <p><strong>INSP MIHAS 2025</strong>, a central pillar of this event, saw more than physical 4,000 business meetings arranged between 600 Malaysian sellers and 300 international buyers, including top tier retailers and hypermarkets with combined annual revenues exceeding RM1.5 trillion. The programme, which also has a virtual component running until 5 November 2025, has already delivered significant sales and is expected to surpass last year’s RM2.52 billion achievement, strengthening Malaysia’s trade ties across ASEAN, the GCC, Europe, Africa and the Americas.</p>
            <p>On the second day, the focus was on <strong>Knowledge Hub</strong>, a platform comprising 23 strategically curated sessions with 76 global industry experts, and two webinars on supply chain traceability and e-Commerce equipping businesses with digital solutions for global market expansion.</p>
            <p><strong>Minister of Investment, Trade and Industry (MITI) YB Senator Tengku Datuk Seri Utama Zafrul Tengku Abdul Aziz</strong> said: “Malaysia is reframing halal as a driver of responsible innovation to reinforce sustainable and inclusive economic growth. By expanding halal trade, Malaysia is not only capturing value from a fast-growing global sector, but also hedging against volatility in traditional commodities, while reinforcing our role as a bridge between the Muslim world and global markets.”</p>
            <p><strong>MATRADE’s Chairman YB Dato’ Seri Reezal Merican Naina Merican</strong> added that MIHAS continues to serve as a catalyst for Malaysia’s Halal leadership: “The strong performance of the INSP this year underscores the global demand for Malaysia’s Halal offerings. Through MIHAS and our digital platforms, we are enabling Malaysian exporters to connect with high value global buyers and unlock new opportunities.”</p>
            <p>Looking ahead, MIHAS is set to expand its global reach with MIHAS@Shanghai taking place from 5 to 11 November 2025 in conjunction with the China International Import Expo. Beyond that, plans are underway to bring the MIHAS brand to Europe in 2026.</p>
            <p>MIHAS 2025 features 14 dedicated industry clusters covering Halal food, pharmaceuticals, Islamic finance, modest fashion, green technology, e-commerce, and Muslim-friendly tourism, alongside knowledge-sharing platforms such as the Global Halal Summit.</p>
        \\\`
    },
    {
        id: 3,
        slug: 'news3',
        date: '18 September 2025',
        title: 'Malaysia Powers Halal Trade Growth With MIHAS Knowledge Hub 2025',
        excerpt: 'Prelude, Meet-The-Experts & Power Talk: Empowering Exporters with Global Insights',
        author: 'MATRADE',
        frontImage: '/images/refrrence/news3/content1.png',
        heroImage: '/images/refrrence/news3/news3-title.png',
        contentImage: '/images/refrrence/news3/content2.png',
        category: 'Press Release',
        content: \\\`
            <p><strong>KUALA LUMPUR, 18 September 2025</strong> – Malaysia is spearheading its Halal trade agenda through the MIHAS Knowledge Hub 2025, a flagship initiative by the Malaysia External Trade Development Corporation (MATRADE) that positions the Malaysia International Halal Showcase (MIHAS) as a 365-day trade ecosystem.</p>
            <p>Accessible via the MIHAS Portal and MADANI Digital Trade (MDT), the Knowledge Hub which consists of prelude sessions by strategic partners, webinars by industry experts and a panel session – provides round-the-clock market intelligence, regulatory briefings, actionable analytics and direct access to premium buyers.</p>
            <h2 style="color: #c41e3a; font-size: 1.5rem; text-align: left; margin: 2rem 0;">A PERMANENT TRADE PLATFORM, NOT JUST A SHOWCASE</h2>
            <p>Since 25 August, the Knowledge Hub has featured a series of livestreamed and on-demand sessions, beginning with the Prelude sessions supported by the Halal Development Corporation (HDC), MBSB Bank, FedEx and Nazsoft Tech. More than 1,000 participants joined to explore export competitiveness themes.</p>
            <p>In September, the Knowledge Hub started with 16 ‘Meet the Experts’ webinars, featuring leading commercial figures and market leaders from: Indonesia, Vietnam, Thailand, India, Bangladesh, China, Hong Kong, Taipei, Republic of Korea, Canada, Brazil, Chile, France, Egypt, the United Arab Emirates (UAE) and Qatar.</p>
            <p>“The Knowledge Hub translates market insights into tangible action. It connects nearly 10,000 Halal-certified producers with vital intelligence and buyer networks. This initiative helps propel SME exports beyond RM61.7 billion last year towards the RM63.1 billion milestone for 2025,” said <strong>MATRADE Chairman YB Dato’ Seri Reezal Merican Naina Merican</strong>.</p>
            <p>“Brand strength and digital agility are now non-negotiable for Halal exporters who want to compete globally. MIHAS is more than just creating networks or connections. It is about driving measurable growth and building long-term market presence,” said <strong>MATRADE Chief Executive Officer YBhg. Dato’ Sri Mohd Mustafa Abdul Aziz</strong>.</p>
            <h2 style="color: #c41e3a; font-size: 1.5rem; text-align: left; margin: 2rem 0;">POWER TALK: BUILDING RESILIENT, DIGITAL-READY BRANDS</h2>
            <p>Another highlight of the day was the Power Talk session, themed “Building Resilient Business Growth through Branding and Digital Platforms”. The session featured a panel of homegrown household names:</p>
            <ul style="list-style-type: disc; margin-left: 2rem; margin-bottom: 1rem;">
                <li><strong>Mr. Sinan Ismail</strong>, Founder & Chief Executive Officer, Durioo+</li>
                <li><strong>Mr. Sid Murshid</strong>, Founder, Grey Café</li>
                <li><strong>Mr. Venon Tian</strong>, Co-Founder & Chief Operating Officer, Zus Coffee</li>
            </ul>
        \\\`
    },
    {
        id: 4,
        slug: 'news4',
        date: '17 September 2025',
        title: 'INSP MIHAS 2025 Facilitates Over 4,000 Business Meetings, Targeting RM2.5 billion in Sales',
        excerpt: 'Virtual Component Continues to November, Providing Further Opportunities for Malaysian Exporters to Connect with International Buyers',
        author: 'MATRADE',
        frontImage: '/images/refrrence/news4/content1.png',
        heroImage: '/images/refrrence/news4/news4-title.png',
        contentImage: '/images/refrrence/news4/content2.png',
        category: 'Press Release',
        content: \\\`
            <p><strong>KUALA LUMPUR, 17 September 2025</strong> – The International Sourcing Programme (INSP) in conjunction with the 21st Malaysia International Halal Showcase (MIHAS) 2025 concluded today on a strong note, reinforcing Malaysia’s leadership in the global halal economy.</p>
            <p>Held at the Malaysia International Trade & Exhibition Centre (MITEC), INSP MIHAS 2025 convened 300 physical international buyers from 50 countries covering all regions, including 50 premium buyers (premium importers and leading hypermarket chains), alongside 150 virtual buyers, connecting them with 600 Malaysian exporters. The event facilitated more than 4,000 one-to-one business meetings, with sales targeted at RM2.5 billion.</p>
            <h2 style="color: #c41e3a; font-size: 1.5rem; text-align: left; margin: 2rem 0;">Bigger Global Buyer Participation</h2>
            <p>This year’s physical edition featured a highly diverse and regionally balanced buyer contingent:</p>
            <ul style="list-style-type: disc; margin-left: 2rem; margin-bottom: 1rem;">
                <li>China & North East Asia: 86 buyers (29%)</li>
                <li>South Asia: 75 buyers (25%)</li>
                <li>ASEAN: 60 buyers (20%)</li>
                <li>Africa: 36 buyers (12%)</li>
                <li>Americas & Europe: 25 buyers (8%)</li>
                <li>Central & West Asia: 18 buyers (6%)</li>
            </ul>
            <p>It also welcomed buyers from new markets including Algeria, Congo, Costa Rica, Ghana, Mali, Norway, and Panama, significantly expanding MIHAS’s global reach. The top buying nations were China (39 companies), Bangladesh (39), and Nepal (16).</p>
            <p><strong>MATRADE Chairman Dato’ Seri Reezal Merican Naina Merican</strong> said the results reaffirm the continued role of MIHAS and INSP in advancing Malaysia’s global trade agenda:</p>
            <p><em>“INSP MIHAS 2025 has drawn one of the most regionally diverse contingents ever, connecting Malaysian exporters with buyers from both established and new markets. By opening doors to countries such as Algeria, Costa Rica and Norway, Malaysia is strengthening its position as ASEAN’s bridge to the global Halal economy.”</em></p>
            <p>Echoing this, MATRADE Chief Executive Officer Dato’ Sri Mohd Mustafa Abdul Aziz emphasised that INSP MIHAS is about building long-term business linkages:</p>
            <p><em>“The 4,000 meetings conducted today are not just transactions, but opportunities for Malaysian exporters to forge lasting partnerships in high-value markets. This is how we position Malaysian Halal products and services as trusted global brands.”</em></p>
            <h2 style="color: #c41e3a; font-size: 1.5rem; text-align: left; margin: 2rem 0;">Digital Empowerment through MADANI Digital Trade Platform</h2>
            <p>INSP MIHAS 2025 also saw the inaugural integration of the AI-powered MADANI Digital Trade (MDT) platform, a groundbreaking innovation designed to seamlessly connect businesses, optimise trade matchmaking and enhance global halal trade opportunities. Leveraging AI algorithms, the platform intelligently matches Malaysian exporters with targeted international buyers.</p>
        \\\`
    },
    {
        id: 5,
        slug: 'news5',
        date: '13 August 2025',
        title: 'MIHAS 2025 Poised to Attract Significant Participation',
        excerpt: 'MATRADE Accelerates Strategic International Engagements to Further Enhance Internationalisation of MIHAS',
        author: 'MATRADE',
        frontImage: '/images/refrrence/news5/content1.png',
        heroImage: '/images/refrrence/news5/news5-title.png',
        contentImage: '/images/refrrence/news5/content2.png',
        category: 'Press Release',
        content: \\\`
            <p><strong>KUALA LUMPUR, 13 AUGUST 2025</strong> – The 21st edition of the Malaysia International Halal Showcase (MIHAS) in 2025, is poised to attract one of the highest ever participation. This was disclosed by the Malaysia External Trade Development Corporation (MATRADE) in a briefing session with Foreign Missions and industry players today. MIHAS 2025 is gaining remarkable traction, with projections pointing to more than 2,300 booths from 45 countries, an impressive leap beyond the 2,028 booths featured in the last edition.</p>
            <p>In his address, <strong>YB Dato’ Seri Reezal Merican Naina Merican</strong>, Chairman of MATRADE described the session as a strategic step towards building trust-based economic partnerships:</p>
            <p><em>“In an era of global uncertainties and trade tensions, the way forward lies not in zero-sum competition, but in leveraging on each other’s strengths to create shared value. When we combine Malaysia’s Halal leadership with your regions’ unique capabilities - whether it’s Europe’s innovation, the Middle East’s capital, Africa’s resources, or Latin America’s agricultural prowess - we create trade relationships that generate surpluses for all parties involved.”</em></p>
            <p>YB Dato’ Seri Reezal Merican added, “Since its inception in 2004, MIHAS has grown from a visionary idea by our late former Prime Minister, Allahyarham Tun Abdullah Ahmad Badawi, into the world’s leading halal trade showcase. This year, under the theme Pinnacle of Halal Excellence, we are poised to welcome over 45,000 trade visitors from more than 45 countries.”</p>
            <p>This surge in global participation reinforces Malaysia’s role in accelerating the global halal economy and its strategic vision as the ASEAN Chair. This engagement specifically aims to strengthen Malaysia’s position as a trusted halal trade partner and build momentum for its ASEAN Chairmanship, emphasising halal diplomacy as a catalyst for inclusive growth and sustainable economic collaboration.</p>
            <p>Themed “Pinnacle of Halal Excellence”, MIHAS 2025 will highlight innovation, sustainability, and digitalisation as key drivers of growth. Its enhanced Knowledge Hub will advance knowledge exchange, halal investment and policy alignment where else their targeted International Sourcing Programme (INSP) will empower Malaysian exporters with access to curated international buyers, powered by the MADANI Digital Trade (MDT) Platform for real time matching and analytics.</p>
            <p>This engagement also reflects Malaysia’s forward-looking agenda as ASEAN Chair in 2025, focusing on sustainable, innovative, and inclusive trade. By leveraging MIHAS as a flagship initiative, Malaysia aims to advance regional cooperation through halal trade, investment, and policy alignment.</p>
            <p>Concluding the session, YB Dato’ Seri Reezal Merican remarked:</p>
            <p><em>“I am proud of the remarkable growth we have achieved. I am equally humbled by the tremendous support from our international partners. This continued growth and international recognition will drive further participation. We expect increased involvement from both business-to-business and business-to-consumer segments. More people will witness what MIHAS offers to the global Halal ecosystem. Thank you once again for your continued partnership and support. InsyaAllah, together, we will continue to elevate the global Halal industry to new heights of excellence.”</em></p>
        \\\`
    }`;

let startIndex = content.indexOf('export const newsData = [\\n    {');
let firstBrace = content.indexOf('    {', startIndex);
let itemsMatched = 0;
let endIndex = firstBrace;
let i = firstBrace;
while(itemsMatched < 5 && i < content.length) {
    let nextBrace = content.indexOf('    },', i);
    if(nextBrace !== -1) {
        itemsMatched++;
        i = nextBrace + 6;
        if(itemsMatched === 5) {
             endIndex = nextBrace + 5; // right at the '}' of '    },'
        }
    } else {
        break;
    }
}

const prefix = content.substring(0, firstBrace);
const suffix = content.substring(endIndex);

const newContent = prefix + news1To5 + suffix;

fs.writeFileSync(path, newContent, 'utf8');
console.log('Replaced successfully');
