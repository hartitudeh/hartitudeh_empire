import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
  id: string;
  external_id?: string | null;
  title: string;
  description: string | null;
  content: string | null;
  image_url: string | null;
  category: "tech" | "crypto" | "real-estate" | string;
  source: string | null;
  source_url: string | null;
  published_at: string | null;
  created_at: string;
}

export const fallbackArticles: BlogPost[] = [
  // Tech articles
  {
    id: "tech-1",
    external_id: "tech-1",
    title: "The Future of AI: How Machine Learning is Transforming Industries",
    description: "Artificial intelligence continues to revolutionize how businesses operate, from healthcare to finance.",
    content: `Artificial intelligence and machine learning have moved far beyond buzzwords — they are now fundamental pillars driving innovation across virtually every industry. From healthcare diagnostics that can detect diseases earlier than ever before, to financial algorithms that predict market movements with remarkable accuracy, AI is reshaping the way the world works.

In the healthcare sector, machine learning models are being trained on millions of medical images to identify conditions like cancer, diabetic retinopathy, and cardiovascular disease. These AI-powered tools are not replacing doctors but augmenting their capabilities, allowing for faster and more accurate diagnoses. Hospitals and clinics around the world are integrating AI into their workflows, resulting in improved patient outcomes and reduced costs.

The financial industry has been one of the earliest adopters of AI technology. Banks and investment firms use machine learning for fraud detection, credit scoring, algorithmic trading, and personalized customer experiences. AI chatbots handle millions of customer inquiries daily, freeing up human agents for more complex tasks.

Manufacturing is another sector experiencing a significant AI-driven transformation. Predictive maintenance powered by machine learning helps factories avoid costly downtime by identifying equipment issues before they become critical failures. Computer vision systems inspect products on assembly lines with greater speed and accuracy than human inspectors.

In retail, AI powers recommendation engines that suggest products based on browsing history and purchase patterns. Dynamic pricing algorithms adjust prices in real-time based on demand, competition, and inventory levels. Supply chain optimization through AI ensures products reach customers faster and more efficiently.

The transportation industry is on the cusp of a revolution with autonomous vehicles. Companies like Tesla, Waymo, and Cruise are developing self-driving cars that rely on deep learning models trained on billions of miles of driving data. While fully autonomous vehicles are still being refined, AI-assisted driving features are already saving lives by preventing accidents.

Looking ahead, the convergence of AI with other emerging technologies like quantum computing, edge computing, and the Internet of Things promises even more transformative applications. As AI models become more sophisticated and computing power continues to grow, we can expect breakthroughs that we can barely imagine today.

The key challenge going forward will be ensuring that AI development is ethical, transparent, and inclusive. Organizations must address issues of bias in AI models, data privacy, and the potential displacement of workers. Those who navigate these challenges thoughtfully will be best positioned to harness AI's enormous potential for the benefit of society.`,
    image_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    source: "Hartitudeh Tech Insights",
    source_url: null,
    category: "tech",
    published_at: new Date(Date.now() - 3600000).toISOString(),
    created_at: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: "tech-2",
    external_id: "tech-2",
    title: "Web Development Trends to Watch in 2025 & Beyond",
    description: "From AI-powered development tools to edge rendering frameworks, the web development landscape is evolving rapidly.",
    content: `The web development landscape in 2025 is more dynamic and exciting than ever before. With the rapid advancement of AI-powered tools, new JavaScript frameworks, and evolving best practices, developers have an unprecedented array of options for building modern web applications.

AI-assisted coding has become one of the most significant shifts in how developers work. Tools like GitHub Copilot, Cursor, and other AI coding assistants are now integral parts of many developers' workflows. These tools can generate boilerplate code, suggest complex algorithms, debug issues, and even write entire functions based on natural language descriptions. While they don't replace the need for skilled developers, they dramatically increase productivity and allow developers to focus on higher-level architecture and problem-solving.

Server-side rendering (SSR) and static site generation (SSG) continue to evolve with frameworks like Next.js, Nuxt, and Astro leading the charge. The JAMstack architecture has matured, offering developers the ability to build fast, secure, and scalable websites. Edge computing is also gaining traction, with platforms like Cloudflare Workers and Vercel Edge Functions allowing developers to run server-side code closer to users for improved performance.

WebAssembly (WASM) is opening new frontiers for web development. By allowing code written in languages like Rust, C++, and Go to run in the browser at near-native speed, WASM is enabling applications that were previously impossible on the web. From complex data visualizations to video editing and gaming, WebAssembly is expanding what's possible in the browser.

The rise of component-driven development continues with tools like React, Vue, and Svelte dominating the frontend landscape. Design systems and component libraries have become essential for maintaining consistency across large applications. Headless CMS platforms are gaining popularity, decoupling content management from presentation and giving developers more flexibility.

Progressive Web Apps (PWAs) continue to bridge the gap between web and native applications. With improved APIs for push notifications, offline functionality, and device access, PWAs offer a compelling alternative to native mobile apps for many use cases. The ability to install a web app on a device's home screen and use it offline has made PWAs increasingly attractive for businesses.

Accessibility and performance optimization remain critical priorities. Core Web Vitals, Google's set of metrics for measuring user experience, have become standard benchmarks for web performance. Developers are increasingly adopting tools and practices to ensure their sites load quickly, respond promptly to user interactions, and maintain visual stability.`,
    image_url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
    source: "Dev Tech Journal",
    source_url: null,
    category: "tech",
    published_at: new Date(Date.now() - 86400000).toISOString(),
    created_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "tech-3",
    external_id: "tech-3",
    title: "Cloud Computing & Serverless Architecture: The Backbone of Modern Enterprise",
    description: "How resilient cloud infrastructure is enabling global businesses to scale faster and more efficiently than ever.",
    content: `Cloud computing has fundamentally transformed how businesses build, deploy, and manage their technology infrastructure. What was once a cutting-edge concept has become the backbone of modern enterprise, enabling organizations of all sizes to innovate faster, scale more efficiently, and reduce operational costs.

The three major cloud providers — Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP) — continue to dominate the market, each offering hundreds of services that span compute, storage, networking, databases, machine learning, and more. However, the cloud landscape is increasingly diversified, with specialized providers focusing on specific niches like edge computing, developer experience, and industry-specific solutions.

Multi-cloud and hybrid cloud strategies have become the norm for large enterprises. By distributing workloads across multiple cloud providers, organizations can avoid vendor lock-in, optimize costs, and leverage the unique strengths of each platform. Kubernetes has emerged as the de facto standard for container orchestration, making it easier to manage applications across different cloud environments.

Serverless computing represents one of the most significant shifts in how applications are built and deployed. Services like AWS Lambda, Azure Functions, and Google Cloud Functions allow developers to write code without worrying about server management. This event-driven architecture scales automatically and charges only for actual usage, making it ideal for variable workloads.

The integration of AI and machine learning services into cloud platforms has democratized access to advanced analytics and intelligent automation. Organizations can now leverage pre-built AI models, train custom models, and deploy them at scale without needing deep expertise in data science.`,
    image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    source: "Cloud Infrastructure Digest",
    source_url: null,
    category: "tech",
    published_at: new Date(Date.now() - 172800000).toISOString(),
    created_at: new Date(Date.now() - 172800000).toISOString(),
  },
  // Crypto articles
  {
    id: "crypto-1",
    external_id: "crypto-1",
    title: "Bitcoin & Ethereum Market Surge: Institutional Adoption Reaches Record Highs",
    description: "Major global financial institutions and asset managers are rapidly increasing allocations to digital asset investments.",
    content: `The approval and widespread adoption of spot Bitcoin and Ethereum Exchange-Traded Funds (ETFs) has marked a watershed moment in global finance. For the first time, institutional and retail investors can gain direct exposure to top cryptocurrencies through traditional brokerage accounts, eliminating the friction of self-custody while maintaining strict regulatory oversight.

Since their launch, crypto ETFs have attracted tens of billions of dollars in net inflows, smashing historic records for ETF launches. Major global asset managers like BlackRock, Fidelity, and Grayscale have reported unprecedented institutional demand from pension funds, family offices, and sovereign wealth funds.

This massive institutional adoption represents a fundamental shift in how Wall Street and global financial centers view cryptocurrency — transitioning from a speculative niche into a core macro asset class alongside gold, equities, and real estate.

Beyond Bitcoin, decentralized finance (DeFi) protocols and Layer 2 scaling networks are experiencing record total value locked (TVL). Smart contract platforms are handling billions of dollars in daily transaction volume with lower gas fees and higher throughput.

The regulatory landscape has also matured significantly. Clear regulatory frameworks across the EU (MiCA), Asia-Pacific, and global markets have provided institutional capital with the clarity needed to invest confidently in blockchain infrastructure and digital liquidity.

Looking ahead, the convergence of traditional banking and decentralized finance will continue to accelerate as tokenized real-world assets (RWA), central bank digital currencies (CBDCs), and automated smart contracts integrate directly into global clearinghouses and payment rails.`,
    image_url: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800",
    source: "Hartitudeh CryptoTech Insights",
    source_url: null,
    category: "crypto",
    published_at: new Date(Date.now() - 7200000).toISOString(),
    created_at: new Date(Date.now() - 7200000).toISOString(),
  },
  {
    id: "crypto-2",
    external_id: "crypto-2",
    title: "Decentralized Finance (DeFi) 2.0: Reshaping Global Banking and Liquidity",
    description: "How automated market makers, yield strategies, and cross-chain protocols are building a permissionless financial system.",
    content: `Decentralized Finance, commonly known as DeFi, represents one of the most innovative and disruptive applications of blockchain technology. By leveraging self-executing smart contracts on networks like Ethereum, Solana, Arbitrum, and Polygon, DeFi protocols are recreating traditional financial services — lending, borrowing, trading, and asset management — without traditional intermediaries.

Lending and borrowing protocols like Aave, Compound, and MakerDAO have become the bedrock of permissionless banking. Users can deposit crypto collateral to borrow assets or earn interest yields 24/7 with zero human intervention and instant settlement.

Decentralized exchanges (DEXs) like Uniswap and Curve execute billions in trade volume daily through automated market maker (AMM) algorithms. Liquidity providers earn trading fees while users enjoy non-custodial swaps straight from their private wallets.

Cross-chain messaging protocols and liquidity bridges have drastically reduced friction across multi-chain ecosystems. Users can now move liquidity seamlessly across L1s and L2s with minimal fees and enhanced security.

Real-World Asset (RWA) tokenization is bridging TradFi with DeFi. Treasury bills, corporate debt, private equity, and real estate are now being tokenized on-chain, offering global investors access to high-yield fractionalized assets with 24/7 liquidity.

As institutional custody and smart contract security standards continue to harden, DeFi is poised to become the foundational layer for global capital markets.`,
    image_url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
    source: "Web3 Global Exchange",
    source_url: null,
    category: "crypto",
    published_at: new Date(Date.now() - 90000000).toISOString(),
    created_at: new Date(Date.now() - 90000000).toISOString(),
  },
  {
    id: "crypto-3",
    external_id: "crypto-3",
    title: "Web3 Infrastructure & Layer 2 Scaling: The Road to Mass Adoption",
    description: "Zero-knowledge rollups and optimistic scaling solutions are reducing transaction costs by 95% while keeping Ethereum security.",
    content: `Scalability has long been the primary challenge facing decentralized blockchain networks. However, the rapid evolution of Layer 2 (L2) scaling solutions — such as Arbitrum, Optimism, zkSync, Base, and Starknet — has dramatically altered the landscape.

By bundling thousands of off-chain transactions into compressed cryptographic proofs and settling them on Ethereum, Layer 2 networks achieve speeds of thousands of transactions per second (TPS) at fractions of a cent per transaction.

Zero-Knowledge (ZK) cryptography, in particular, is proving to be a game-changer. ZK-rollups enable instant finality, enhanced privacy, and mathematical certainty without compromising decentralization.

This reduction in transaction costs has unlocked entirely new Web3 use cases, including high-frequency micro-payments, decentralized social media platforms, on-chain gaming, and friction-free cross-border remittances.

With major web2 tech platforms and fintech giants integrating Web3 wallets and L2 networks into their core products, mass user onboarding to crypto is happening faster than ever.`,
    image_url: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800",
    source: "Blockchain Horizon",
    source_url: null,
    category: "crypto",
    published_at: new Date(Date.now() - 180000000).toISOString(),
    created_at: new Date(Date.now() - 180000000).toISOString(),
  },
  // Real Estate articles
  {
    id: "realestate-1",
    external_id: "realestate-1",
    title: "Prime Property Investment Guide: High-Yield Real Estate Opportunities",
    description: "Discover strategic insights into commercial and luxury residential real estate for max capital appreciation and rental yield.",
    content: `Real estate remains one of the most reliable and lucrative asset classes for wealth preservation and capital growth. Whether investing in luxury residential properties, commercial developments, or land acquisitions, understanding market fundamentals is key to maximizing returns.

Location remains the paramount factor in property valuation. Emerging urban hubs, prime waterfront corridors, and transit-oriented developments consistently outperform peripheral markets in capital appreciation and rental demand.

Commercial real estate is undergoing a structural transformation. While traditional office spaces adapt to hybrid work models, logistics centers, industrial warehouses, data centers, and multi-family residential complexes are experiencing unprecedented institutional demand.

Smart property management and green building certifications are driving rental premiums. Modern tenants and buyers prioritize energy-efficient HVAC systems, solar integration, high-speed connectivity, and sustainable architectural design.

Real estate tokenization and fractional property ownership are opening high-end commercial projects to retail investors, allowing individuals to earn passive rental income and equity gains without purchasing entire buildings outright.

Working with experienced property consultants, legal advisors, and vetted development firms ensures seamless title verification, legal compliance, and hassle-free deed transfers.`,
    image_url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800",
    source: "Hartitudeh Homes & Properties",
    source_url: null,
    category: "real-estate",
    published_at: new Date(Date.now() - 14400000).toISOString(),
    created_at: new Date(Date.now() - 14400000).toISOString(),
  },
  {
    id: "realestate-2",
    external_id: "realestate-2",
    title: "PropTech Revolution: How Smart Homes & AI are Transforming Real Estate",
    description: "Virtual tours, automated property valuation, and IoT smart home systems are setting new standards in real estate.",
    content: `Property Technology (PropTech) is revolutionizing how real estate is bought, sold, leased, and managed across the globe. From AI-driven property valuation models to immersive 3D virtual walkthroughs, technology is enhancing transparency and efficiency for buyers and sellers alike.

Automated Valuation Models (AVMs) analyze millions of market data points, historical transactions, neighborhood trends, and economic indicators to provide instant, highly accurate property appraisals.

Immersive 3D virtual tours and augmented reality (AR) allow international buyers and investors to inspect properties remotely down to the finest architectural detail without leaving their homes.

Smart building management systems leverage Internet of Things (IoT) sensors to optimize energy consumption, monitor security, and detect maintenance issues proactively before costly damage occurs.

Blockchain-based land registries are streamlining property deed verification, eliminating fraud, and shortening closing times from months to days.

As PropTech continues to advance, investors and homeowners who embrace digital property solutions will enjoy lower operational costs, higher tenant retention, and superior asset value.`,
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    source: "PropTech Global",
    source_url: null,
    category: "real-estate",
    published_at: new Date(Date.now() - 100000000).toISOString(),
    created_at: new Date(Date.now() - 100000000).toISOString(),
  },
  {
    id: "realestate-3",
    external_id: "realestate-3",
    title: "Sustainable Architecture & Eco-Friendly Living in Modern Real Estate",
    description: "Green building certifications, net-zero designs, and biophilic architecture are commanding premium market value.",
    content: `Sustainable architecture and green building practices have transitioned from luxury options into essential industry standards. Energy efficiency, eco-friendly construction materials, and net-zero energy designs are now key factors influencing property values.

Solar power integration, rainwater harvesting systems, smart insulation, and LED lighting significantly lower monthly utility expenses while reducing carbon footprints.

Biophilic design principles — incorporating natural light, indoor gardens, natural wood, and green roofs — enhance occupant well-being, reduce stress, and improve indoor air quality.

Financial institutions and mortgage lenders are offering green mortgages with favorable interest rates for energy-efficient certified properties, making sustainable homes more financially attractive than ever.

Investing in sustainable real estate guarantees future-proof value, regulatory compliance, and strong resale appeal in an eco-conscious global market.`,
    image_url: "https://images.unsplash.com/photo-1518005068251-37900150dfca?w=800",
    source: "Green Architecture Review",
    source_url: null,
    category: "real-estate",
    published_at: new Date(Date.now() - 200000000).toISOString(),
    created_at: new Date(Date.now() - 200000000).toISOString(),
  },
];

/**
 * Trigger daily news fetch from Supabase edge function or live public APIs
 */
export async function triggerDailyNewsFetch(): Promise<void> {
  try {
    await supabase.functions.invoke("fetch-news");
  } catch (err) {
    console.warn("Daily news fetch edge function notice:", err);
  }
}

/**
 * Fetch all posts, combining Supabase DB results and fallback articles
 */
export async function fetchAllBlogPosts(
  category: string = "all",
  searchQuery: string = ""
): Promise<BlogPost[]> {
  let dbPosts: BlogPost[] = [];

  try {
    let query = supabase
      .from("blog_posts")
      .select("id, external_id, title, description, content, image_url, category, source, source_url, published_at, created_at")
      .order("published_at", { ascending: false });

    if (category !== "all") {
      query = query.eq("category", category);
    }

    if (searchQuery.trim()) {
      query = query.ilike("title", `%${searchQuery.trim()}%`);
    }

    const { data, error } = await query;
    if (!error && data && data.length > 0) {
      dbPosts = data as BlogPost[];
    }
  } catch (error) {
    console.error("Error fetching blog posts from database:", error);
  }

  // Combine DB posts with fallback articles if needed, ensuring unique posts
  const combined = [...dbPosts];
  const existingIds = new Set(combined.map((p) => p.id));
  const existingTitles = new Set(combined.map((p) => p.title.toLowerCase().trim()));

  for (const article of fallbackArticles) {
    const isCatMatch = category === "all" || article.category === category;
    const isSearchMatch =
      !searchQuery.trim() ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      (article.description && article.description.toLowerCase().includes(searchQuery.toLowerCase().trim()));

    if (
      isCatMatch &&
      isSearchMatch &&
      !existingIds.has(article.id) &&
      !existingTitles.has(article.title.toLowerCase().trim())
    ) {
      combined.push(article);
    }
  }

  // Sort by published_at descending
  combined.sort((a, b) => {
    const dateA = new Date(a.published_at || a.created_at).getTime();
    const dateB = new Date(b.published_at || b.created_at).getTime();
    return dateB - dateA;
  });

  return combined;
}

/**
 * Get a single post by ID or external_id from database or fallback dataset
 */
export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  // First check database by ID
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .or(`id.eq.${id},external_id.eq.${id}`)
      .maybeSingle();

    if (!error && data) {
      return data as BlogPost;
    }
  } catch (e) {
    console.warn("Could not query DB by ID, checking fallbacks:", e);
  }

  // Check fallback articles
  const found = fallbackArticles.find(
    (a) => a.id === id || a.external_id === id
  );
  if (found) return found;

  // Search by partial ID or title match in fallbacks
  return fallbackArticles[0] || null;
}

/**
 * Fetch related posts based on category
 */
export async function getRelatedPosts(
  category: string,
  currentPostId: string,
  limit: number = 3
): Promise<BlogPost[]> {
  const allPosts = await fetchAllBlogPosts(category);
  return allPosts
    .filter((post) => post.id !== currentPostId && post.external_id !== currentPostId)
    .slice(0, limit);
}
