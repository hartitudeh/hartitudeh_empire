import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface NewsArticle {
  title: string
  description: string
  content: string
  url: string
  image: string
  publishedAt: string
  source: {
    name: string
    url: string
  }
}

interface GNewsResponse {
  totalArticles: number
  articles: NewsArticle[]
}

const categories = [
  { query: 'technology software', category: 'tech' },
  { query: 'cryptocurrency bitcoin blockchain', category: 'crypto' },
  { query: 'real estate property housing', category: 'real-estate' },
]

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const gnewsApiKey = Deno.env.get('GNEWS_API_KEY')

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // If no API key, use mock data for demonstration
    if (!gnewsApiKey) {
      console.log('No GNews API key found, using mock data')
      
      const mockArticles = [
        // Tech articles
        {
          external_id: 'tech-1',
          title: 'The Future of AI: How Machine Learning is Transforming Industries',
          description: 'Artificial intelligence continues to revolutionize how businesses operate, from healthcare to finance.',
          content: `Artificial intelligence and machine learning have moved far beyond buzzwords — they are now fundamental pillars driving innovation across virtually every industry. From healthcare diagnostics that can detect diseases earlier than ever before, to financial algorithms that predict market movements with remarkable accuracy, AI is reshaping the way the world works.

In the healthcare sector, machine learning models are being trained on millions of medical images to identify conditions like cancer, diabetic retinopathy, and cardiovascular disease. These AI-powered tools are not replacing doctors but augmenting their capabilities, allowing for faster and more accurate diagnoses. Hospitals and clinics around the world are integrating AI into their workflows, resulting in improved patient outcomes and reduced costs.

The financial industry has been one of the earliest adopters of AI technology. Banks and investment firms use machine learning for fraud detection, credit scoring, algorithmic trading, and personalized customer experiences. AI chatbots handle millions of customer inquiries daily, freeing up human agents for more complex tasks.

Manufacturing is another sector experiencing a significant AI-driven transformation. Predictive maintenance powered by machine learning helps factories avoid costly downtime by identifying equipment issues before they become critical failures. Computer vision systems inspect products on assembly lines with greater speed and accuracy than human inspectors.

In retail, AI powers recommendation engines that suggest products based on browsing history and purchase patterns. Dynamic pricing algorithms adjust prices in real-time based on demand, competition, and inventory levels. Supply chain optimization through AI ensures products reach customers faster and more efficiently.

The transportation industry is on the cusp of a revolution with autonomous vehicles. Companies like Tesla, Waymo, and Cruise are developing self-driving cars that rely on deep learning models trained on billions of miles of driving data. While fully autonomous vehicles are still being refined, AI-assisted driving features are already saving lives by preventing accidents.

Looking ahead, the convergence of AI with other emerging technologies like quantum computing, edge computing, and the Internet of Things promises even more transformative applications. As AI models become more sophisticated and computing power continues to grow, we can expect breakthroughs that we can barely imagine today.

The key challenge going forward will be ensuring that AI development is ethical, transparent, and inclusive. Organizations must address issues of bias in AI models, data privacy, and the potential displacement of workers. Those who navigate these challenges thoughtfully will be best positioned to harness AI's enormous potential for the benefit of society.`,
          image_url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
          source: 'Tech Today',
          source_url: 'https://example.com/tech-article-1',
          category: 'tech',
          published_at: new Date().toISOString(),
        },
        {
          external_id: 'tech-2',
          title: 'Web Development Trends to Watch in 2025',
          description: 'From AI-powered development tools to new frameworks, the web development landscape is evolving rapidly.',
          content: `The web development landscape in 2025 is more dynamic and exciting than ever before. With the rapid advancement of AI-powered tools, new JavaScript frameworks, and evolving best practices, developers have an unprecedented array of options for building modern web applications.

AI-assisted coding has become one of the most significant shifts in how developers work. Tools like GitHub Copilot, Cursor, and other AI coding assistants are now integral parts of many developers' workflows. These tools can generate boilerplate code, suggest complex algorithms, debug issues, and even write entire functions based on natural language descriptions. While they don't replace the need for skilled developers, they dramatically increase productivity and allow developers to focus on higher-level architecture and problem-solving.

Server-side rendering (SSR) and static site generation (SSG) continue to evolve with frameworks like Next.js, Nuxt, and Astro leading the charge. The JAMstack architecture has matured, offering developers the ability to build fast, secure, and scalable websites. Edge computing is also gaining traction, with platforms like Cloudflare Workers and Vercel Edge Functions allowing developers to run server-side code closer to users for improved performance.

WebAssembly (WASM) is opening new frontiers for web development. By allowing code written in languages like Rust, C++, and Go to run in the browser at near-native speed, WASM is enabling applications that were previously impossible on the web. From complex data visualizations to video editing and gaming, WebAssembly is expanding what's possible in the browser.

The rise of component-driven development continues with tools like React, Vue, and Svelte dominating the frontend landscape. Design systems and component libraries have become essential for maintaining consistency across large applications. Headless CMS platforms are gaining popularity, decoupling content management from presentation and giving developers more flexibility.

Progressive Web Apps (PWAs) continue to bridge the gap between web and native applications. With improved APIs for push notifications, offline functionality, and device access, PWAs offer a compelling alternative to native mobile apps for many use cases. The ability to install a web app on a device's home screen and use it offline has made PWAs increasingly attractive for businesses.

Accessibility and performance optimization remain critical priorities. Core Web Vitals, Google's set of metrics for measuring user experience, have become standard benchmarks for web performance. Developers are increasingly adopting tools and practices to ensure their sites load quickly, respond promptly to user interactions, and maintain visual stability.

The future of web development is one of convergence — where AI, edge computing, WebAssembly, and modern frameworks come together to create experiences that are faster, more accessible, and more engaging than ever before.`,
          image_url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
          source: 'Dev Weekly',
          source_url: 'https://example.com/tech-article-2',
          category: 'tech',
          published_at: new Date(Date.now() - 86400000).toISOString(),
        },
        {
          external_id: 'tech-3',
          title: 'Cloud Computing: The Backbone of Modern Enterprise',
          description: 'How cloud infrastructure is enabling businesses to scale faster and more efficiently than ever before.',
          content: `Cloud computing has fundamentally transformed how businesses build, deploy, and manage their technology infrastructure. What was once a cutting-edge concept has become the backbone of modern enterprise, enabling organizations of all sizes to innovate faster, scale more efficiently, and reduce operational costs.

The three major cloud providers — Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP) — continue to dominate the market, each offering hundreds of services that span compute, storage, networking, databases, machine learning, and more. However, the cloud landscape is increasingly diversified, with specialized providers focusing on specific niches like edge computing, developer experience, and industry-specific solutions.

Multi-cloud and hybrid cloud strategies have become the norm for large enterprises. By distributing workloads across multiple cloud providers, organizations can avoid vendor lock-in, optimize costs, and leverage the unique strengths of each platform. Kubernetes has emerged as the de facto standard for container orchestration, making it easier to manage applications across different cloud environments.

Serverless computing represents one of the most significant shifts in how applications are built and deployed. Services like AWS Lambda, Azure Functions, and Google Cloud Functions allow developers to write code without worrying about server management. This event-driven architecture scales automatically and charges only for actual usage, making it ideal for variable workloads.

The integration of AI and machine learning services into cloud platforms has democratized access to advanced analytics and intelligent automation. Organizations can now leverage pre-built AI models, train custom models, and deploy them at scale without needing deep expertise in data science. This has led to a proliferation of AI-powered applications across industries.

Cloud-native development practices, including microservices architecture, DevOps, and continuous integration/continuous deployment (CI/CD), have become standard methodologies. These practices enable faster development cycles, more reliable deployments, and easier maintenance of complex applications.

Security in the cloud remains a top priority, with providers investing heavily in compliance certifications, encryption, identity management, and threat detection. The shared responsibility model — where providers secure the infrastructure and customers secure their data and applications — requires organizations to adopt robust security practices.

As we look to the future, emerging trends like edge computing, quantum computing as a service, and sustainable cloud practices will continue to shape the evolution of cloud computing. The organizations that master cloud technology will have a significant competitive advantage in the digital economy.`,
          image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
          source: 'Cloud Insider',
          source_url: 'https://example.com/tech-article-3',
          category: 'tech',
          published_at: new Date(Date.now() - 172800000).toISOString(),
        },
        {
          external_id: 'tech-4',
          title: 'Cybersecurity in 2025: Protecting Your Digital Assets',
          description: 'With rising cyber threats, organizations must adopt advanced security measures to safeguard their data.',
          content: `In an increasingly connected world, cybersecurity has never been more critical. The year 2025 has brought new challenges and threats that require organizations and individuals alike to be more vigilant than ever in protecting their digital assets.

Ransomware attacks continue to be one of the most prevalent and damaging cyber threats. Criminal organizations have become more sophisticated in their tactics, targeting critical infrastructure, healthcare systems, and government agencies. The rise of Ransomware-as-a-Service (RaaS) has lowered the barrier to entry for cybercriminals, making it easier for less technically skilled attackers to launch devastating campaigns.

Zero Trust Architecture has emerged as the leading security framework for modern organizations. The principle of "never trust, always verify" means that every user, device, and application must be authenticated and authorized before being granted access to resources. This approach represents a fundamental shift from traditional perimeter-based security models that assumed everything inside the network was trustworthy.

Artificial intelligence is playing a dual role in cybersecurity — both as a tool for defenders and as a weapon for attackers. AI-powered security systems can detect anomalies, predict threats, and respond to incidents faster than human analysts. However, attackers are also using AI to craft more convincing phishing emails, generate deepfakes, and identify vulnerabilities in systems more efficiently.

Supply chain attacks have become a major concern following high-profile incidents that compromised widely-used software. Organizations are now scrutinizing their software supply chains more carefully, adopting practices like Software Bill of Materials (SBOM) and rigorous vendor security assessments.

The growing adoption of Internet of Things (IoT) devices has expanded the attack surface significantly. From smart home devices to industrial sensors, many IoT devices have minimal security features, making them attractive targets for cybercriminals. Securing these devices requires a combination of better manufacturing standards, network segmentation, and continuous monitoring.

Privacy regulations continue to evolve worldwide, with new laws and frameworks being introduced to protect individuals' personal data. Organizations must navigate a complex landscape of regulations, from GDPR in Europe to various state-level privacy laws in the United States. Compliance is not just a legal requirement but a business imperative, as consumers increasingly choose to do business with companies they trust to protect their data.

The cybersecurity skills gap remains a significant challenge, with millions of positions unfilled globally. Organizations are addressing this through training programs, automation, and managed security services. Building a security-aware culture within organizations is essential for creating a resilient defense against cyber threats.`,
          image_url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
          source: 'Security Now',
          source_url: 'https://example.com/tech-article-4',
          category: 'tech',
          published_at: new Date(Date.now() - 259200000).toISOString(),
        },
        {
          external_id: 'tech-5',
          title: '5G Networks: Revolutionizing Connectivity Worldwide',
          description: 'The rollout of 5G is transforming how we connect, enabling faster speeds and new possibilities.',
          content: `The global rollout of 5G networks represents one of the most significant technological advancements in telecommunications history. With speeds up to 100 times faster than 4G, ultra-low latency, and the ability to connect millions of devices simultaneously, 5G is unlocking possibilities that were previously unimaginable.

For consumers, 5G means lightning-fast download speeds, seamless video streaming in 4K and 8K resolution, and lag-free gaming experiences. Mobile users can download entire movies in seconds and enjoy video calls without buffering or delays. The improved connectivity is also enhancing augmented reality (AR) and virtual reality (VR) experiences on mobile devices.

The real transformative power of 5G, however, lies in its industrial applications. Smart factories are leveraging 5G's ultra-low latency for real-time monitoring and control of manufacturing processes. Autonomous robots can communicate with each other and central control systems with minimal delay, enabling more efficient and flexible production lines.

In healthcare, 5G is enabling remote surgery, where surgeons can operate on patients from thousands of miles away using robotic systems. The low latency of 5G networks ensures that there is virtually no delay between the surgeon's movements and the robot's actions. Telemedicine consultations have become more immersive and reliable, expanding access to healthcare in rural and underserved areas.

The automotive industry is another major beneficiary of 5G technology. Connected vehicles can communicate with each other and with road infrastructure in real-time, improving safety and traffic efficiency. Vehicle-to-Everything (V2X) communication is a critical enabler of autonomous driving, allowing self-driving cars to make split-second decisions based on data from their surroundings.

Smart cities are leveraging 5G to improve urban services and quality of life. From intelligent traffic management systems that reduce congestion to connected street lighting that adjusts based on conditions, 5G is making cities more efficient and sustainable. Environmental monitoring sensors powered by 5G provide real-time data on air quality, noise levels, and other factors that affect urban living.

The entertainment industry is being transformed by 5G with immersive experiences like cloud gaming, live-streamed concerts in VR, and interactive sports viewing with multiple camera angles and real-time statistics. Content creators are taking advantage of 5G's capabilities to deliver richer, more engaging experiences to audiences.

While the rollout of 5G continues to progress, challenges remain, including the need for massive infrastructure investment, spectrum allocation, and addressing coverage gaps in rural areas. However, the long-term benefits of 5G for economic growth, innovation, and quality of life make it one of the most important technology investments of our time.`,
          image_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
          source: 'Network World',
          source_url: 'https://example.com/tech-article-5',
          category: 'tech',
          published_at: new Date(Date.now() - 345600000).toISOString(),
        },
        {
          external_id: 'tech-6',
          title: 'The Rise of No-Code Platforms for Business Innovation',
          description: 'No-code tools are empowering non-developers to build powerful applications and automate workflows.',
          content: `The no-code movement is democratizing software development, enabling individuals without traditional programming skills to build sophisticated applications, automate complex workflows, and bring their ideas to life faster than ever before.

No-code platforms like Lovable, Bubble, Webflow, and Airtable have evolved significantly, offering capabilities that rival custom-coded solutions. These platforms provide visual interfaces, drag-and-drop builders, and pre-built components that allow users to create everything from simple landing pages to complex enterprise applications without writing a single line of code.

For businesses, the appeal of no-code is clear: reduced development costs, faster time-to-market, and the ability to iterate quickly based on feedback. Small businesses and startups that previously couldn't afford custom software development can now build the tools they need to compete with larger organizations. Enterprise teams are using no-code platforms to build internal tools, dashboards, and automation workflows that would traditionally require months of development.

The integration capabilities of modern no-code platforms are particularly impressive. Most platforms offer connections to hundreds of third-party services, APIs, and databases, allowing users to build applications that interact with existing business systems seamlessly. This interoperability makes no-code solutions viable for real-world business applications, not just prototypes.

Workflow automation is one of the most popular use cases for no-code tools. Platforms like Zapier, Make, and Power Automate allow users to create automated workflows that connect different applications and services. From automatically sending follow-up emails to syncing data between CRM and accounting systems, these automations save hours of manual work every week.

The rise of AI within no-code platforms is taking the movement to the next level. AI-powered features can generate content, analyze data, make recommendations, and even create application logic based on natural language descriptions. This convergence of AI and no-code is making it possible for anyone to build intelligent, data-driven applications.

However, the no-code movement is not without its challenges. As applications grow in complexity, users may encounter limitations in customization, performance, and scalability. Vendor lock-in is another concern, as applications built on proprietary platforms can be difficult to migrate to other solutions. Security and compliance considerations also need careful attention, especially for applications handling sensitive data.

Despite these challenges, the no-code movement shows no signs of slowing down. As platforms continue to mature and AI capabilities expand, the line between what can be built with code and without code will continue to blur. The future belongs to a hybrid approach where no-code tools handle the majority of development tasks, with custom code stepping in for specialized requirements.`,
          image_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
          source: 'Innovation Hub',
          source_url: 'https://example.com/tech-article-6',
          category: 'tech',
          published_at: new Date(Date.now() - 432000000).toISOString(),
        },
        // Crypto articles
        {
          external_id: 'crypto-1',
          title: 'Bitcoin ETFs See Record Inflows as Institutional Interest Grows',
          description: 'Major financial institutions are increasingly allocating resources to cryptocurrency investments.',
          content: `The approval and subsequent launch of Bitcoin Exchange-Traded Funds (ETFs) has marked a watershed moment in the cryptocurrency industry. For the first time, institutional and retail investors can gain exposure to Bitcoin through traditional brokerage accounts, without the complexities of managing private keys, wallets, and crypto exchanges.

Since their launch, Bitcoin ETFs have attracted billions of dollars in inflows, far exceeding the most optimistic projections. Major asset managers like BlackRock, Fidelity, and Invesco have seen unprecedented demand for their Bitcoin ETF products. This institutional adoption represents a fundamental shift in how the financial establishment views cryptocurrency — from a speculative curiosity to a legitimate asset class.

The impact on Bitcoin's price and market dynamics has been significant. Consistent ETF inflows have created steady buying pressure, contributing to price stability and reducing the extreme volatility that has historically characterized the cryptocurrency market. This reduced volatility, in turn, makes Bitcoin more attractive to risk-averse institutional investors, creating a positive feedback loop.

Beyond Bitcoin, the success of Bitcoin ETFs has opened the door for other cryptocurrency-related financial products. Ethereum ETFs have followed, and there is growing speculation about future products covering a broader range of digital assets. These developments are creating a more mature and accessible cryptocurrency investment ecosystem.

The implications for the broader financial system are profound. Traditional financial advisors are now incorporating Bitcoin allocation into their clients' portfolios, typically recommending a 1-5% allocation as a diversification strategy. Pension funds, endowments, and sovereign wealth funds are exploring cryptocurrency investments, potentially bringing trillions of dollars into the digital asset market.

Custody solutions have evolved to meet institutional standards, with regulated custodians offering insurance, compliance reporting, and the security controls that large institutions require. This infrastructure development is crucial for continued institutional adoption.

The regulatory landscape is also evolving in response to increased institutional participation. Regulators worldwide are developing frameworks that balance innovation with investor protection. Clear regulatory guidelines are providing the certainty that institutions need to participate confidently in the cryptocurrency market.

Looking ahead, the convergence of traditional finance and cryptocurrency is expected to accelerate. Tokenized securities, central bank digital currencies (CBDCs), and the integration of blockchain technology into existing financial infrastructure will further blur the lines between traditional and digital finance.`,
          image_url: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800',
          source: 'Crypto News',
          source_url: 'https://example.com/crypto-article-1',
          category: 'crypto',
          published_at: new Date().toISOString(),
        },
        {
          external_id: 'crypto-2',
          title: 'DeFi Revolution: How Decentralized Finance is Changing Banking',
          description: 'Decentralized finance protocols are offering alternatives to traditional banking services.',
          content: `Decentralized Finance, commonly known as DeFi, represents one of the most innovative and disruptive applications of blockchain technology. By leveraging smart contracts on networks like Ethereum, Solana, and Avalanche, DeFi protocols are recreating traditional financial services — lending, borrowing, trading, and insurance — without the need for banks, brokers, or other intermediaries.

The total value locked (TVL) in DeFi protocols has grown exponentially, reaching hundreds of billions of dollars. This growth reflects both the increasing sophistication of DeFi protocols and the growing confidence of users in the security and reliability of these platforms. From yield farming to liquidity provision, DeFi offers a range of financial strategies that were previously only accessible to sophisticated institutional investors.

Lending and borrowing protocols like Aave, Compound, and MakerDAO have become the cornerstones of the DeFi ecosystem. Users can deposit cryptocurrency as collateral and borrow against it, or lend their assets to earn interest. These protocols operate 24/7, settle transactions in minutes, and are accessible to anyone with an internet connection — a stark contrast to the limitations of traditional banking.

Decentralized exchanges (DEXs) like Uniswap, SushiSwap, and Curve have transformed how cryptocurrency trading works. Using automated market maker (AMM) models, these platforms allow users to trade tokens directly from their wallets without relying on centralized order books. The liquidity provided by users forms the backbone of these exchanges, and in return, liquidity providers earn fees and rewards.

The concept of yield farming — strategically moving assets between DeFi protocols to maximize returns — has become a sophisticated practice. While early yield farming was characterized by unsustainable returns and significant risks, the ecosystem has matured to offer more stable and predictable yield opportunities. Real yield, generated from actual protocol revenue rather than token emissions, has become a key metric for evaluating DeFi protocols.

Cross-chain interoperability is solving one of DeFi's biggest challenges: fragmented liquidity. Bridge protocols and cross-chain messaging systems allow assets and data to flow between different blockchain networks, creating a more unified and efficient DeFi ecosystem.

Despite its promise, DeFi faces significant challenges, including smart contract vulnerabilities, regulatory uncertainty, and complexity that can be daunting for new users. High-profile hacks and exploits have highlighted the risks involved. However, the industry is responding with better security practices, formal verification of smart contracts, and insurance protocols that protect users against losses.

The future of DeFi is one of convergence with traditional finance. As regulatory frameworks develop and institutional-grade infrastructure emerges, we can expect to see DeFi protocols handling mainstream financial activities, from mortgages to retirement accounts, all powered by blockchain technology.`,
          image_url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
          source: 'Blockchain Daily',
          source_url: 'https://example.com/crypto-article-2',
          category: 'crypto',
          published_at: new Date(Date.now() - 86400000).toISOString(),
        },
        {
          external_id: 'crypto-3',
          title: 'Ethereum 2.0: What the Merge Means for the Future of Crypto',
          description: 'Ethereum\'s transition to proof-of-stake marks a pivotal moment in blockchain technology.',
          content: `Ethereum's transition from proof-of-work to proof-of-stake, known as "The Merge," stands as one of the most significant technological upgrades in the history of blockchain. This monumental shift has fundamentally changed how the Ethereum network operates, with far-reaching implications for the broader cryptocurrency ecosystem.

The Merge eliminated the need for energy-intensive mining, reducing Ethereum's energy consumption by approximately 99.95%. This dramatic improvement has addressed one of the most persistent criticisms of blockchain technology — its environmental impact. Ethereum's shift to proof-of-stake has made it one of the most energy-efficient blockchain networks in operation, setting a new standard for sustainable blockchain infrastructure.

Under the proof-of-stake consensus mechanism, validators stake their ETH as collateral to participate in block validation. This system aligns the incentives of network participants with the health and security of the network. Validators who act honestly are rewarded with transaction fees and newly minted ETH, while those who attempt to attack the network risk losing their staked assets.

The economic implications of The Merge have been profound. With the reduction in new ETH issuance and the burning of transaction fees through EIP-1559, Ethereum has become deflationary during periods of high network activity. This "ultrasound money" narrative has strengthened ETH's value proposition as a store of value, complementing its utility as the fuel for the world's largest smart contract platform.

Staking has become a major economic activity within the Ethereum ecosystem. Individual stakers, staking-as-a-service providers, and liquid staking protocols like Lido and Rocket Pool have created a vibrant staking economy. Liquid staking tokens allow users to earn staking rewards while maintaining liquidity, enabling them to participate in DeFi activities simultaneously.

The Merge was just the first step in Ethereum's ambitious roadmap. Subsequent upgrades, including the implementation of Proto-Danksharding (EIP-4844) and full Danksharding, are focused on dramatically increasing the network's scalability. These upgrades reduce the cost of posting data to Ethereum, benefiting Layer 2 scaling solutions like Optimism, Arbitrum, and zkSync that process transactions off-chain while settling on the Ethereum mainnet.

Layer 2 solutions have flourished in the post-Merge era, offering users fast and affordable transactions while inheriting the security of the Ethereum mainnet. The Layer 2 ecosystem has become a thriving landscape of innovation, with specialized rollups catering to different use cases, from gaming to decentralized finance.

The success of Ethereum's proof-of-stake transition has influenced the broader blockchain industry, with other networks adopting similar consensus mechanisms. As Ethereum continues to execute its roadmap, it is solidifying its position as the foundational layer of the decentralized internet.`,
          image_url: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800',
          source: 'ETH Observer',
          source_url: 'https://example.com/crypto-article-3',
          category: 'crypto',
          published_at: new Date(Date.now() - 172800000).toISOString(),
        },
        {
          external_id: 'crypto-4',
          title: 'NFTs Beyond Art: Real-World Applications of Non-Fungible Tokens',
          description: 'NFT technology is expanding into real estate, identity verification, and supply chain management.',
          content: `Non-Fungible Tokens (NFTs) have evolved far beyond the digital art and collectibles that initially captured the world's attention. While PFP projects and generative art collections remain popular, the underlying technology of NFTs — verifiable digital ownership on the blockchain — is finding transformative applications across numerous industries.

In real estate, NFTs are being used to tokenize property ownership, enabling fractional investment in properties that would otherwise be out of reach for individual investors. By representing property deeds as NFTs on the blockchain, the process of buying, selling, and transferring real estate can be streamlined, reducing paperwork, lowering costs, and increasing transparency. Several jurisdictions are now exploring legal frameworks to support NFT-based property transactions.

The gaming industry has embraced NFTs to create true digital ownership of in-game assets. Players can own, trade, and sell items like weapons, skins, and virtual land across different games and platforms. Play-to-earn models, where players earn NFTs with real-world value through gameplay, have created new economic opportunities, particularly in developing countries.

Identity verification and credentialing represent another promising application of NFT technology. Academic institutions are issuing diplomas and certificates as NFTs, creating tamper-proof records that can be instantly verified by employers. Digital identity solutions using NFTs could give individuals more control over their personal data, allowing them to share verified credentials without exposing unnecessary information.

Supply chain management is being transformed by NFTs that track products from manufacture to delivery. Luxury brands are using NFTs to authenticate products and combat counterfeiting. Consumers can verify the provenance of items by scanning an NFC chip linked to an NFT that contains the product's complete history, including materials used, manufacturing location, and ownership chain.

In the music industry, NFTs are empowering artists to connect directly with fans and monetize their work without traditional intermediaries. Musicians can sell limited edition releases, concert tickets, and exclusive experiences as NFTs, retaining a larger share of revenue and building stronger fan communities. Smart contracts embedded in music NFTs can automatically distribute royalties to all contributors whenever a piece is resold.

Event ticketing is another area where NFTs are making an impact. NFT tickets cannot be counterfeited and can include smart contract functionality that prevents scalping or enables automatic refunds. After an event, NFT tickets can serve as collectible memorabilia or provide holders with exclusive access to future events and content.

The healthcare industry is exploring NFTs for managing medical records, ensuring that patient data is secure, portable, and accessible only to authorized parties. Research data and clinical trial results can be tokenized to ensure integrity and traceability.

As the technology matures and legal frameworks develop, the applications of NFTs will continue to expand, touching virtually every industry that relies on verification, ownership, and transfer of value.`,
          image_url: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800',
          source: 'NFT Digest',
          source_url: 'https://example.com/crypto-article-4',
          category: 'crypto',
          published_at: new Date(Date.now() - 259200000).toISOString(),
        },
        {
          external_id: 'crypto-5',
          title: 'Crypto Regulation: Global Governments Take Action on Digital Assets',
          description: 'Countries worldwide are developing regulatory frameworks for cryptocurrency and digital assets.',
          content: `The regulatory landscape for cryptocurrency and digital assets is undergoing a profound transformation as governments worldwide move from uncertainty to action. After years of debate and deliberation, clear regulatory frameworks are emerging that aim to foster innovation while protecting consumers and maintaining financial stability.

The European Union has led the way with its Markets in Crypto-Assets (MiCA) regulation, which provides a comprehensive framework for the issuance, trading, and custody of digital assets across all EU member states. MiCA establishes licensing requirements for crypto service providers, consumer protection measures, and rules for stablecoins, creating a predictable regulatory environment that has attracted significant investment into the European crypto industry.

In the United States, the regulatory approach has been more fragmented, with multiple agencies — the SEC, CFTC, FinCEN, and state regulators — asserting jurisdiction over different aspects of the crypto industry. However, legislative efforts are underway to create a more unified framework. The ongoing debate about whether certain cryptocurrencies should be classified as securities or commodities has significant implications for how they are regulated and traded.

Asian markets are taking varied approaches to crypto regulation. Japan has been a pioneer in creating a regulated crypto environment, with clear licensing requirements for exchanges and investor protection measures. Singapore has positioned itself as a crypto-friendly hub with progressive regulation that balances innovation with risk management. China, while banning cryptocurrency trading and mining domestically, continues to develop its central bank digital currency (CBDC), the digital yuan.

The regulatory treatment of stablecoins has become a particularly important issue. Given their growing use as a medium of exchange and their potential impact on monetary policy, regulators worldwide are developing specific frameworks for stablecoin issuers. Requirements typically include maintaining adequate reserves, regular auditing, and redemption guarantees.

Anti-money laundering (AML) and know-your-customer (KYC) requirements are being applied more rigorously to the crypto industry. The Financial Action Task Force (FATF) Travel Rule, which requires crypto service providers to share customer information for transactions above certain thresholds, is being implemented in jurisdictions worldwide.

Decentralized finance (DeFi) presents unique regulatory challenges, as the absence of a central entity makes traditional regulatory approaches difficult to apply. Regulators are grappling with questions about how to apply existing financial regulations to autonomous smart contracts and decentralized protocols.

The taxation of cryptocurrency transactions is another area of increasing focus. Tax authorities are implementing reporting requirements for crypto exchanges and investing in tools to track crypto transactions. Clear tax guidelines are helping cryptocurrency users comply with their obligations while also generating revenue for governments.

The global trend is clear: cryptocurrency regulation is here to stay, and the industry is largely welcoming it. Clear rules of the road provide the certainty that institutional investors need to participate, protect consumers from fraud, and help the industry mature into a trusted component of the global financial system.`,
          image_url: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800',
          source: 'Crypto Policy',
          source_url: 'https://example.com/crypto-article-5',
          category: 'crypto',
          published_at: new Date(Date.now() - 345600000).toISOString(),
        },
        {
          external_id: 'crypto-6',
          title: 'Stablecoins: The Bridge Between Traditional Finance and Crypto',
          description: 'Stablecoins are becoming essential infrastructure in the cryptocurrency ecosystem.',
          content: `Stablecoins have emerged as one of the most important innovations in the cryptocurrency space, serving as a critical bridge between the traditional financial system and the digital asset ecosystem. By maintaining a stable value — typically pegged to the US dollar — stablecoins combine the benefits of blockchain technology with the price stability that is essential for everyday financial transactions.

The stablecoin market has grown to represent hundreds of billions of dollars in circulation, with Tether (USDT) and USD Coin (USDC) leading the market. These fiat-backed stablecoins maintain their peg by holding reserves of cash, treasury bonds, and other liquid assets. The transparency and auditability of these reserves has become a key differentiator, with regulated issuers like Circle providing regular attestations of their holdings.

Stablecoins serve multiple critical functions in the crypto ecosystem. They provide a stable store of value for traders looking to preserve gains without converting back to fiat currency. They facilitate fast and inexpensive cross-border payments, enabling remittances that settle in minutes rather than days. They serve as the primary unit of account in DeFi protocols, where they are used for lending, borrowing, and liquidity provision.

The use of stablecoins for international payments and remittances is one of their most impactful applications. In many developing countries, traditional remittance services charge fees of 7-10% on transfers. Stablecoin transfers, by contrast, can be completed for a fraction of that cost, putting more money in the hands of recipients. This has made stablecoins particularly popular in countries with limited banking infrastructure or unstable local currencies.

Algorithmic stablecoins, which maintain their peg through smart contract mechanisms rather than fiat reserves, represent an alternative approach to stable value. While the collapse of Terra's UST highlighted the risks of poorly designed algorithmic systems, new approaches with more robust mechanisms are being developed. Over-collateralized algorithmic stablecoins, like DAI from MakerDAO, have proven more resilient.

Central Bank Digital Currencies (CBDCs) are closely related to the stablecoin ecosystem. Many central banks are developing or piloting their own digital currencies, inspired in part by the success of privately issued stablecoins. CBDCs could coexist with private stablecoins, each serving different use cases and user segments.

The integration of stablecoins into traditional payment systems is accelerating. Major payment processors like Visa and Mastercard are enabling stablecoin payments, and banks are beginning to offer stablecoin custody and settlement services. This integration is bringing the efficiency of blockchain-based payments to mainstream commerce.

Regulatory attention on stablecoins has intensified, with lawmakers recognizing their systemic importance. Proposed regulations typically focus on reserve requirements, redemption rights, and licensing for issuers. As regulatory clarity improves, stablecoins are poised to play an even larger role in the global financial system, potentially becoming the preferred method for digital payments and cross-border transactions.`,
          image_url: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800',
          source: 'DeFi Times',
          source_url: 'https://example.com/crypto-article-6',
          category: 'crypto',
          published_at: new Date(Date.now() - 432000000).toISOString(),
        },
        // Real Estate articles
        {
          external_id: 'realestate-1',
          title: 'Housing Market Update: Trends Shaping Property Investment',
          description: 'Understanding the current real estate landscape and opportunities for investors.',
          content: `The real estate market continues to evolve in fascinating ways, driven by demographic shifts, economic factors, and technological innovation. Understanding these trends is essential for investors looking to make informed decisions and capitalize on emerging opportunities in the property market.

Housing affordability remains a central challenge in many markets worldwide. Rising interest rates have impacted mortgage costs, cooling some overheated markets while creating opportunities for cash buyers and investors with access to alternative financing. The dynamic between housing supply and demand varies significantly by region, with some markets experiencing inventory shortages while others see increasing supply from new construction.

The suburban and secondary market boom that began during the pandemic shows no signs of reversing. Remote and hybrid work arrangements have permanently altered where people want to live, driving demand for properties in smaller cities and suburban areas that offer more space, lower costs, and higher quality of life. Cities like Austin, Nashville, Raleigh, and Boise continue to attract new residents, fueling property value appreciation.

Build-to-rent communities have become one of the fastest-growing segments of the real estate market. These purpose-built rental communities offer single-family homes and townhouses for rent, providing the lifestyle of homeownership without the commitment or down payment. Major institutional investors are pouring billions into this asset class, recognizing the growing demand from households that prefer renting over buying.

Real estate investment trusts (REITs) continue to be a popular vehicle for gaining exposure to the property market. Specialized REITs focusing on data centers, cell towers, healthcare facilities, and industrial warehouses have outperformed traditional office and retail REITs, reflecting shifting economic dynamics. The diversification benefits of REITs make them an attractive component of a balanced investment portfolio.

Sustainable and energy-efficient properties are commanding premium prices as buyers and tenants increasingly prioritize environmental considerations. Green building certifications, solar panels, energy-efficient appliances, and sustainable materials are no longer luxuries but expectations. Properties that meet these standards not only attract higher prices but also benefit from lower operating costs and potential tax incentives.

International real estate investment is expanding as investors seek diversification and higher returns. Markets in Southeast Asia, the Middle East, and parts of Africa are attracting attention from global investors looking for growth opportunities. Cross-border investment has been facilitated by technology platforms that make it easier to research, purchase, and manage properties in foreign markets.

The integration of technology into real estate — commonly known as PropTech — is transforming every aspect of the industry. From virtual property tours and AI-powered valuations to blockchain-based transactions and smart building management systems, technology is making real estate more transparent, efficient, and accessible to a broader range of investors.`,
          image_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
          source: 'Property Insider',
          source_url: 'https://example.com/realestate-article-1',
          category: 'real-estate',
          published_at: new Date().toISOString(),
        },
        {
          external_id: 'realestate-2',
          title: 'Smart Home Technology: The Future of Residential Living',
          description: 'How technology is transforming homes and increasing property values.',
          content: `Smart home technology has evolved from a novelty to a fundamental aspect of modern residential living. Today's smart homes offer unprecedented levels of comfort, security, energy efficiency, and convenience, and the technology is increasingly influencing property values and buyer preferences in the real estate market.

The smart home ecosystem has matured significantly, with platforms like Amazon Alexa, Google Home, Apple HomeKit, and Samsung SmartThings providing centralized control of connected devices. Voice-activated assistants can control lighting, adjust thermostats, lock doors, play music, and manage dozens of other household functions. The integration between devices has improved dramatically, creating seamless experiences that truly enhance daily life.

Energy management is one of the most impactful applications of smart home technology. Smart thermostats like Nest and Ecobee learn household patterns and optimize heating and cooling schedules to reduce energy consumption without sacrificing comfort. Smart lighting systems adjust brightness based on natural light levels and occupancy, further reducing energy waste. Solar panel systems with battery storage and smart inverters allow homeowners to generate, store, and manage their own energy.

Home security has been transformed by smart technology. Video doorbells, smart locks, motion sensors, and integrated alarm systems provide comprehensive security that can be monitored and controlled from anywhere in the world. AI-powered cameras can distinguish between family members, pets, and potential intruders, reducing false alarms and providing more intelligent alerts.

The kitchen has become one of the most connected rooms in the house. Smart refrigerators can track inventory and suggest recipes based on available ingredients. Connected ovens can be preheated remotely and adjusted based on the dish being prepared. Smart dishwashers and washing machines can be scheduled to run during off-peak energy hours, saving money on utility bills.

Health and wellness monitoring is an emerging area of smart home technology. Air quality sensors monitor pollutants, allergens, and humidity levels, automatically adjusting ventilation systems for optimal indoor air quality. Smart mattresses and sleep trackers monitor sleep patterns and adjust bedroom conditions for better rest. Water quality monitors detect contaminants and alert homeowners to potential issues.

From a real estate perspective, smart home features are increasingly influencing buying decisions. Studies show that homes with smart technology sell faster and at higher prices than comparable homes without these features. Buyers, particularly millennials and Gen Z, expect smart home capabilities and are willing to pay a premium for them.

The future of smart homes lies in greater automation and intelligence. As AI becomes more sophisticated and 5G connectivity enables faster and more reliable connections between devices, smart homes will anticipate and respond to residents' needs with minimal input. The concept of ambient computing — where technology fades into the background and simply works — is the ultimate vision for the smart home of tomorrow.`,
          image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          source: 'Home Tech',
          source_url: 'https://example.com/realestate-article-2',
          category: 'real-estate',
          published_at: new Date(Date.now() - 86400000).toISOString(),
        },
        {
          external_id: 'realestate-3',
          title: 'Commercial Real Estate: Adapting to the Post-Pandemic World',
          description: 'How office spaces and retail properties are evolving to meet new demands.',
          content: `The commercial real estate sector is undergoing a fundamental transformation as it adapts to the new realities of a post-pandemic world. The shift to remote and hybrid work, changing consumer behavior, and technological advancement are reshaping every category of commercial property, creating both challenges and opportunities for investors and developers.

The office sector has experienced the most dramatic changes. Traditional office occupancy remains below pre-pandemic levels in most markets, as companies embrace hybrid work models that allow employees to split their time between home and office. This shift has led to a bifurcation in the market: premium, well-located, amenity-rich office buildings continue to attract tenants, while older, less desirable spaces face rising vacancy rates and declining values.

The concept of the office has evolved from a place where work happens to a destination that facilitates collaboration, culture, and connection. Companies are redesigning their offices to emphasize collaborative spaces, meeting rooms, social areas, and wellness amenities, while reducing the footprint dedicated to individual workstations. The flight to quality is driving demand for buildings with cutting-edge technology, sustainability certifications, and exceptional design.

Retail real estate is experiencing its own transformation. While the "retail apocalypse" narrative has been overblown, the sector is undeniably shifting. Experiential retail — stores that offer unique, engaging experiences — is thriving, while commodity retail continues to face pressure from e-commerce. Mixed-use developments that combine retail, residential, office, and entertainment are becoming the preferred model for new development.

The industrial and logistics sector has been the standout performer in commercial real estate. The explosive growth of e-commerce has created insatiable demand for warehouse and distribution space. Last-mile delivery facilities — smaller warehouses located close to population centers — are particularly sought after, as consumers expect ever-faster delivery times. Cold storage facilities for grocery delivery and pharmaceuticals represent another high-growth segment.

Data centers have emerged as a major commercial real estate asset class, driven by the exponential growth of cloud computing, AI, and digital services. The demand for data center space far outstrips supply in many markets, leading to significant investment in new facilities. The energy requirements of data centers are creating both challenges and opportunities, with renewable energy integration becoming a key differentiator.

Healthcare real estate has shown remarkable resilience, supported by demographic trends and the expansion of outpatient care. Medical office buildings, ambulatory surgery centers, and life science laboratories are attracting strong investor interest. The aging population in many developed countries ensures sustained demand for healthcare facilities for decades to come.

Multifamily residential continues to be a favored asset class, driven by strong rental demand and demographic trends. The preference for renting, particularly among younger generations, supports occupancy and rent growth. Purpose-built student housing and senior living facilities represent specialized segments with strong fundamentals.

The key to success in commercial real estate going forward is adaptability. Properties and portfolios that can evolve with changing needs — through flexible spaces, technology integration, and sustainable design — will outperform those that remain static.`,
          image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
          source: 'CRE Weekly',
          source_url: 'https://example.com/realestate-article-3',
          category: 'real-estate',
          published_at: new Date(Date.now() - 172800000).toISOString(),
        },
        {
          external_id: 'realestate-4',
          title: 'Sustainable Building: Green Architecture Reshaping Real Estate',
          description: 'Eco-friendly construction practices are becoming a key factor in property development.',
          content: `Green architecture and sustainable building practices are no longer niche concepts — they have become mainstream imperatives that are fundamentally reshaping the real estate industry. From residential homes to commercial skyscrapers, the integration of sustainable design principles is transforming how buildings are conceived, constructed, and operated.

The urgency of addressing climate change has placed buildings at the center of sustainability discussions. The built environment accounts for approximately 40% of global energy consumption and a similar proportion of carbon emissions. Recognizing this impact, governments, developers, and investors are increasingly prioritizing green building practices as essential components of their climate strategies.

Green building certifications like LEED, BREEAM, and WELL have become important benchmarks for sustainable construction. These frameworks evaluate buildings across multiple dimensions, including energy efficiency, water conservation, indoor air quality, materials sourcing, and occupant wellness. Properties with green certifications consistently command higher rents, higher sale prices, and lower vacancy rates compared to non-certified peers.

Passive design strategies are gaining popularity as architects seek to reduce energy consumption through building design rather than technology alone. Orientation, natural ventilation, thermal mass, high-performance insulation, and strategic glazing can dramatically reduce the need for mechanical heating and cooling. Passive House standards, which originated in Germany, are being adopted worldwide and can reduce energy consumption by up to 90% compared to conventional buildings.

Mass timber construction is emerging as a sustainable alternative to steel and concrete for mid-rise and even high-rise buildings. Cross-laminated timber (CLT) and glulam beams are engineered wood products that offer structural performance comparable to traditional materials while sequestering carbon rather than emitting it. The aesthetic warmth of exposed timber is also valued by occupants, contributing to well-being and productivity.

Net-zero buildings — those that produce as much energy as they consume over the course of a year — are becoming increasingly achievable and economically viable. Advances in solar panel efficiency, battery storage, building management systems, and envelope performance are making net-zero targets realistic for a growing range of building types.

Water conservation and management are critical components of sustainable building design. Rainwater harvesting, greywater recycling, and water-efficient fixtures can reduce consumption by 50% or more. In regions facing water scarcity, these practices are not just environmentally responsible but economically necessary.

The circular economy concept is gaining traction in construction, emphasizing the reuse and recycling of materials to minimize waste. Designing buildings for disassembly — where components can be easily separated and reused at end of life — is an emerging best practice that reduces both waste and the demand for new materials.

Biophilic design, which integrates natural elements into the built environment, is improving occupant health and productivity while creating more attractive spaces. Green walls, indoor gardens, natural materials, and connections to outdoor spaces have been shown to reduce stress, improve cognitive function, and enhance overall well-being.

The financial case for green buildings continues to strengthen as energy costs rise, regulations tighten, and tenants and buyers increasingly demand sustainable properties. Green building is no longer just good for the planet — it's good business.`,
          image_url: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=800',
          source: 'Green Build',
          source_url: 'https://example.com/realestate-article-4',
          category: 'real-estate',
          published_at: new Date(Date.now() - 259200000).toISOString(),
        },
        {
          external_id: 'realestate-5',
          title: 'Real Estate Tokenization: Blockchain Meets Property Investment',
          description: 'How blockchain technology is making property investment more accessible to everyone.',
          content: `Real estate tokenization — the process of converting property ownership into digital tokens on a blockchain — is emerging as one of the most transformative innovations at the intersection of technology and real estate. By fractionalizing property ownership, tokenization is democratizing access to an asset class that has historically been reserved for wealthy individuals and institutional investors.

The concept is straightforward: a property is divided into digital tokens, each representing a fraction of ownership. These tokens can be bought, sold, and traded on blockchain platforms, providing liquidity that traditional real estate investments typically lack. An investor who might not be able to afford an entire property can purchase tokens representing a small percentage of ownership, gaining exposure to rental income and capital appreciation.

The benefits of tokenization extend beyond accessibility. Traditional real estate transactions involve numerous intermediaries — brokers, lawyers, title companies, banks — each adding cost and time to the process. Blockchain-based transactions can streamline these processes, reducing costs and settlement times from weeks to minutes. Smart contracts automatically execute the terms of agreements, ensuring transparency and reducing the potential for disputes.

Several platforms are now offering tokenized real estate investments, ranging from residential properties to commercial buildings and even portfolios of assets. Some platforms focus on specific markets or property types, while others offer diversified portfolios that spread risk across multiple properties and geographies. The minimum investment amounts on these platforms are typically much lower than traditional real estate investments, often starting at just a few hundred dollars.

Regulatory compliance is a critical consideration for tokenized real estate. Tokens that represent ownership in real property are generally classified as securities and must comply with relevant regulations. Security Token Offerings (STOs) have emerged as the regulated framework for issuing tokenized real estate, providing investor protections similar to those in traditional securities markets.

The secondary market for real estate tokens is still developing but growing rapidly. Specialized exchanges and trading platforms are emerging that allow investors to buy and sell real estate tokens, providing the liquidity that has always been the Achilles' heel of real estate investment. As these markets mature, the ease of trading real estate tokens could rival that of trading stocks.

International real estate investment is particularly well-suited to tokenization. By reducing the complexity and cost of cross-border transactions, tokenization makes it easier for investors to diversify their portfolios across different countries and markets. A investor in Lagos can easily own a fraction of a commercial building in London or a residential development in Dubai.

The integration of tokenized real estate with DeFi protocols opens up additional possibilities. Token holders can use their real estate tokens as collateral to borrow funds, earn yield by providing liquidity, or participate in governance decisions about property management. These DeFi applications add utility and value to real estate tokens beyond simple ownership.

While challenges remain — including regulatory uncertainty, the need for standardization, and the education of both investors and the real estate industry — the trajectory of real estate tokenization is clear. As the technology matures and adoption grows, tokenization has the potential to fundamentally transform how real estate is owned, traded, and managed.`,
          image_url: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800',
          source: 'PropTech Today',
          source_url: 'https://example.com/realestate-article-5',
          category: 'real-estate',
          published_at: new Date(Date.now() - 345600000).toISOString(),
        },
        {
          external_id: 'realestate-6',
          title: 'Luxury Real Estate: Top Markets for High-End Property Investment',
          description: 'A look at the most promising luxury property markets around the globe.',
          content: `The luxury real estate market operates by its own rules, driven by ultra-high-net-worth individuals seeking prestigious properties in the world's most desirable locations. Understanding the dynamics of this exclusive market segment provides valuable insights for investors and enthusiasts alike, as luxury property continues to serve as both a lifestyle choice and a sophisticated investment vehicle.

Dubai has emerged as one of the hottest luxury real estate markets globally. The emirate's tax-free environment, world-class infrastructure, and ambitious development projects attract wealthy buyers from around the world. Palm Jumeirah, Downtown Dubai, and the newly developed Dubai Hills Estate feature some of the most extraordinary residential properties available anywhere, from penthouses with panoramic views to sprawling waterfront villas.

London remains a perennial favorite for luxury real estate investors, despite challenges like stamp duty increases and political uncertainty. Neighborhoods like Mayfair, Knightsbridge, Chelsea, and Kensington continue to attract international buyers drawn by the city's cultural offerings, world-class education, and the prestige of owning property in one of the world's great capitals. The weakness of the British pound has also created buying opportunities for foreign investors.

New York City's luxury market has shown remarkable resilience, with trophy properties in Manhattan's most exclusive neighborhoods commanding extraordinary prices. The ultra-luxury segment — properties priced above $10 million — has seen strong demand from both domestic and international buyers. New developments along Billionaires' Row on 57th Street have set new benchmarks for luxury living, with amenities that rival five-star hotels.

Monaco, despite its tiny size, remains the most expensive residential market in the world on a per-square-meter basis. The principality's favorable tax regime, Mediterranean climate, and exclusivity continue to attract the world's wealthiest individuals. Limited supply and strict development restrictions ensure that property values remain elevated.

Emerging luxury markets in Asia are attracting increasing attention. Singapore's luxury segment has seen strong growth, driven by wealthy individuals from across Asia seeking a stable, well-governed city-state. Vietnam, Thailand, and the Philippines are developing luxury resort and residential properties that offer extraordinary value compared to established markets.

The African luxury real estate market, while still nascent, is growing rapidly. Lagos, Accra, Nairobi, and Cape Town are seeing the development of high-end residential and mixed-use projects that cater to a growing class of wealthy Africans and the diaspora. These markets offer significant growth potential as African economies develop and urbanization accelerates.

Sustainability has become an important consideration in the luxury segment, with wealthy buyers increasingly seeking eco-friendly properties. Green certifications, energy-efficient design, and sustainable materials are no longer compromises but expectations in the luxury market. Properties that combine environmental responsibility with exceptional design and amenities command the highest premiums.

Technology integration is another defining feature of modern luxury properties. Smart home systems, private theaters, wellness centers with spa facilities, infinity pools, and car galleries are standard features in ultra-luxury developments. The most exclusive properties offer experiences that transcend traditional residential living, blurring the line between private homes and luxury resorts.

The luxury real estate market is expected to remain strong, driven by growing global wealth, the desire for tangible assets in uncertain times, and the enduring appeal of prestigious addresses. For investors, luxury real estate offers portfolio diversification, potential capital appreciation, and the intangible benefits of owning extraordinary properties in the world's most desirable locations.`,
          image_url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
          source: 'Luxury Living',
          source_url: 'https://example.com/realestate-article-6',
          category: 'real-estate',
          published_at: new Date(Date.now() - 432000000).toISOString(),
        },
      ]

      // Upsert mock articles
      for (const article of mockArticles) {
        await supabase
          .from('blog_posts')
          .upsert(article, { onConflict: 'external_id' })
      }

      return new Response(
        JSON.stringify({ success: true, message: 'Mock data loaded', count: mockArticles.length }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    let totalInserted = 0

    for (const { query, category } of categories) {
      try {
        const response = await fetch(
          `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&max=10&apikey=${gnewsApiKey}`
        )

        if (!response.ok) {
          console.error(`GNews API error for ${category}:`, response.statusText)
          continue
        }

        const data: GNewsResponse = await response.json()

        for (const article of data.articles) {
          const { error } = await supabase.from('blog_posts').upsert(
            {
              external_id: article.url,
              title: article.title,
              description: article.description,
              content: article.content,
              image_url: article.image,
              source: article.source.name,
              source_url: article.url,
              category,
              published_at: article.publishedAt,
            },
            { onConflict: 'external_id' }
          )

          if (error) {
            console.error('Error inserting article:', error)
          } else {
            totalInserted++
          }
        }
      } catch (error) {
        console.error(`Error fetching ${category} news:`, error)
      }
    }

    return new Response(
      JSON.stringify({ success: true, count: totalInserted }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})