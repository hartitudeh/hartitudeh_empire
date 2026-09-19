import Layout from "@/components/layout/Layout";
import { motion } from "motion/react";
import { Shield, Clock, FileText, ChevronRight, Mail, Phone, MapPin, Building2, Coins, Cpu, CheckCircle2 } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="pt-32 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header Banner */}
          <motion.div {...fadeInUp} className="mb-12 border-b border-border pb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amber-500" />
                Legal & Governance Standard
              </span>
              <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                Est. Reading Time: 35 Minutes
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Comprehensive Global <span className="text-gradient-gold">Privacy Policy</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed mb-6">
              This master policy outlines the legal framework, operational protocols, data governance policies, and technical standards enforced across all operations, business divisions, subsidiaries, digital platforms, and cross-border operations of HARTITUDEH EMPIRE.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground pt-4 border-t border-border/40">
              <div><strong className="text-foreground">Effective Date:</strong> March 5, 2026</div>
              <div><strong className="text-foreground">Document Version:</strong> 4.2.0 (Full Enterprise Audit)</div>
              <div><strong className="text-foreground">Governance Authority:</strong> Group Data Protection Office</div>
            </div>
          </motion.div>

          {/* Quick Nav / Table of Contents */}
          <motion.div {...fadeInUp} className="mb-14 p-8 rounded-3xl bg-card border border-border shadow-sm">
            <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-500" />
              Table of Contents & Quick Navigation Index
            </h2>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <a href="#section-1" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 1. Executive Summary & Scope of Policy
              </a>
              <a href="#section-2" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 2. Key Legal Definitions & Interpretations
              </a>
              <a href="#section-3" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 3. Information We Collect (Full Taxonomy)
              </a>
              <a href="#section-4" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 4. Legal Bases for Processing Data (GDPR/NDPA)
              </a>
              <a href="#section-5" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 5. Division-Specific Data Frameworks
              </a>
              <a href="#section-6" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 6. Cookies, Pixels & Web Telemetry Matrix
              </a>
              <a href="#section-7" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 7. Detailed Purposes of Data Processing
              </a>
              <a href="#section-8" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 8. Automated Profiling & Risk Scoring
              </a>
              <a href="#section-9" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 9. Third-Party Disclosures & Sub-Processors
              </a>
              <a href="#section-10" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 10. Cross-Border International Data Transfers
              </a>
              <a href="#section-11" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 11. Data Retention & Archival Schedules
              </a>
              <a href="#section-12" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 12. Security Architecture & Breach Protocol
              </a>
              <a href="#section-13" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 13. Comprehensive User Privacy Rights
              </a>
              <a href="#section-14" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 14. Regional Regulatory Addenda (GDPR/CCPA/NDPA)
              </a>
              <a href="#section-15" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 15. Minors & Vulnerable Persons Policy
              </a>
              <a href="#section-16" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-amber-500/70" /> 16. DPO Contact Details & Dispute Resolution
              </a>
            </div>
          </motion.div>

          {/* Main Body Policy Documents */}
          <motion.div {...fadeInUp} className="space-y-14 text-foreground/90 leading-relaxed text-base">
            {/* Section 1 */}
            <section id="section-1" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">1</span>
                Executive Summary & Operational Scope of Policy
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At <strong>HARTITUDEH EMPIRE</strong> ("the Empire," "Company," "we," "us," or "our"), privacy, confidentiality, and data protection are fundamental pillars of our global business philosophy. As a multi-sector conglomerate operating across custom enterprise software engineering, Web3 cryptocurrency exchange infrastructure, and luxury real estate acquisition and advisory, we collect, process, manage, and safeguard significant volumes of sensitive commercial, personal, financial, and technical data.
                </p>
                <p>
                  This Privacy Policy applies universally to all individuals, corporate entities, clients, prospective customers, website visitors, mobile application users, software API consumers, property buyers/tenants, cryptocurrency traders, and partners (collectively referred to as "Users," "Data Subjects," "you," or "your") who interact with any platform, application, service, physical office, or legal entity under the HARTITUDEH EMPIRE corporate ecosystem.
                </p>
                <p>
                  By accessing our platforms, registering an account, submitting inquiries, executing financial or real estate contracts, or communicating with our team, you explicitly acknowledge that you have thoroughly read, comprehended, and agreed to the data handling practices described in this exhaustive document. If you do not agree with any provision contained herein, you must immediately cease all access to our services and platforms.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">2</span>
                Key Legal Definitions & Interpretations
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>To ensure absolute clarity across jurisdictional boundaries, the following terms shall carry defined legal meanings throughout this policy:</p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="p-4 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground block mb-1">Personal Data / Personal Information:</strong> Any information relating to an identified or identifiable natural person ("Data Subject") who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, identification number, location data, an online identifier, or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural, or social identity of that natural person.
                  </li>
                  <li className="p-4 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground block mb-1">Data Controller:</strong> The legal entity—specifically Hartitudeh Empire and its designated corporate affiliates—which determines the purposes and means of the processing of Personal Data.
                  </li>
                  <li className="p-4 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground block mb-1">Data Processor / Sub-Processor:</strong> Any natural or legal person, public authority, agency, or other body which processes Personal Data on behalf of the Data Controller.
                  </li>
                  <li className="p-4 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground block mb-1">Processing:</strong> Any operation or set of operations performed on Personal Data or on sets of Personal Data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment, combination, restriction, erasure, or destruction.
                  </li>
                  <li className="p-4 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground block mb-1">Biometric Data:</strong> Personal data resulting from specific technical processing relating to the physical, physiological, or behavioral characteristics of a natural person, such as facial images, fingerprint scans, or iris recognition data used for identity verification.
                  </li>
                  <li className="p-4 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground block mb-1">Blockchain / On-Chain Data:</strong> Immutable public digital records, public cryptographic wallet addresses, smart contract execution logs, and transaction hashes recorded on distributed ledger networks (such as Ethereum, Bitcoin, Solana, and Binance Smart Chain).
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">3</span>
                Information We Collect (Comprehensive Taxonomy)
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Because HARTITUDEH EMPIRE operates across three distinct industry verticals, the nature and volume of data collected vary based on the specific service division you interact with. We categorize our data collection into the following detailed streams:
                </p>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">3.1 Personally Identifiable Information (PII) Provided Directly</h3>
                  <p>When you create an account, request a software proposal, register for real estate inspections, or onboard onto our cryptocurrency exchange platform, we collect:</p>
                  <ul className="list-disc list-inside space-y-1.5 mt-2 pl-4">
                    <li>Full legal name, aliases, date of birth, gender, nationality, and legal domicile.</li>
                    <li>Primary email address, alternative recovery email, verified telephone numbers, physical residential address, and postal code.</li>
                    <li>Government-issued identification credentials (e.g., International Passport numbers, National Identification Numbers [NIN], Tax Identification Numbers [TIN], Driver's License details, and Voters Card numbers).</li>
                    <li>Proof of address documentation (e.g., utility bills, bank statements, affidavit of residence issued within the preceding 90 days).</li>
                    <li>Corporate entity data (for B2B technology or commercial real estate clients), including Certificate of Incorporation, Memorandum & Articles of Association, Beneficial Ownership Registers, and Board Resolution documents.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">3.2 Financial, KYC & Anti-Money Laundering (AML) Data</h3>
                  <p>To adhere to global financial regulations, anti-money laundering (AML) laws, and counter-terrorist financing (CTF) protocols:</p>
                  <ul className="list-disc list-inside space-y-1.5 mt-2 pl-4">
                    <li>Banking details, Bank Verification Numbers (BVN), IBANs, SWIFT/BIC codes, account holder details, and card transaction tokens.</li>
                    <li>Source of wealth documentation, employment status, annual income bracket, tax residency declarations, and accreditation status for high-value transactions.</li>
                    <li>Live 3D liveness biometric video captures, high-resolution facial photo verification scans, and selfie checks processed during automated KYC verification workflows.</li>
                    <li>Politically Exposed Persons (PEP) status checks, international sanctions list screening results (OFAC, EU, UN, UK Sanctions list matches), and risk scoring results.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">3.3 Digital Telemetry, Device & Technical System Data</h3>
                  <p>When you browse our websites, interact with our mobile applications, or connect via our developer APIs:</p>
                  <ul className="list-disc list-inside space-y-1.5 mt-2 pl-4">
                    <li>Internet Protocol (IP) address, Internet Service Provider (ISP), geographic location data down to city/metro resolution, and timezone parameters.</li>
                    <li>Device hardware profile: operating system build, browser family and version, screen resolution, GPU specs, device model, and unique device identifiers (e.g., IDFA, Android Advertising ID).</li>
                    <li>System telemetry logs: page request timestamps, full clickstream path, session duration, scroll depth, error stack traces, API response times, referrer headers, and navigation patterns.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">3.4 Web3, Blockchain & Cryptographic Data</h3>
                  <p>In connection with Hartitudeh CryptoTech & Global Exchange operations:</p>
                  <ul className="list-disc list-inside space-y-1.5 mt-2 pl-4">
                    <li>Public blockchain wallet addresses (e.g., ERC-20, BEP-20, Solana, Bitcoin wallet public keys).</li>
                    <li>On-chain transaction logs, smart contract interaction records, gas fees paid, token balances, deposit/withdrawal histories, and staking participation metrics.</li>
                    <li>P2P exchange order books, trade execution timestamps, dispute escalation logs, and peer rating feedback.</li>
                    <li>Non-custodial or custodial wallet association identifiers, signature verification records, and IP-to-wallet session tokens.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">3.5 Real Estate & Property Transaction Data</h3>
                  <p>In connection with Hartitudeh Homes & Properties advisory, sales, and management:</p>
                  <ul className="list-disc list-inside space-y-1.5 mt-2 pl-4">
                    <li>Property preferences, budget caps, preferred geographical locations, intended property usage (residential vs. commercial vs. agricultural).</li>
                    <li>Legal title deeds, C of O (Certificate of Occupancy) verification requests, Governor's Consent documentation, land survey plans, and deed of assignment history.</li>
                    <li>Physical site inspection logs, video tour attendance records, power of attorney filings, and lease contract records.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">4</span>
                Legal Bases for Processing Data (GDPR / NDPA Alignment)
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We process your Personal Data strictly in compliance with applicable global data protection regulations (including the EU/UK General Data Protection Regulation [GDPR] and the Nigeria Data Protection Act [NDPA]). Our legal processing activities are grounded on four mandatory bases:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="p-5 rounded-2xl bg-background border border-border/80">
                    <h3 className="font-bold text-foreground mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500" /> Performance of a Contract
                    </h3>
                    <p className="text-sm">
                      Processing is necessary to execute binding service agreements, issue software licenses, fulfill property transactions, process crypto exchange orders, or deliver software architecture deliverables requested by you.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-background border border-border/80">
                    <h3 className="font-bold text-foreground mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500" /> Statutory & Regulatory Compliance
                    </h3>
                    <p className="text-sm">
                      Processing is mandatory to comply with statutory anti-money laundering laws, tax reporting directives, financial intelligence mandates, fraud prevention frameworks, and legal audit duties.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-background border border-border/80">
                    <h3 className="font-bold text-foreground mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500" /> Legitimate Business Interests
                    </h3>
                    <p className="text-sm">
                      Processing is conducted to optimize infrastructure performance, enforce platform cybersecurity, prevent corporate fraud, conduct internal auditing, expand market services, and protect corporate IP.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-background border border-border/80">
                    <h3 className="font-bold text-foreground mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500" /> Explicit Data Subject Consent
                    </h3>
                    <p className="text-sm">
                      Where specific processing activities require consent (such as opt-in marketing newsletters, non-essential analytical cookies, or third-party promotional integrations), we obtain clear, affirmative consent which can be withdrawn at any time.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">5</span>
                Division-Specific Data Handling Frameworks
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="p-6 rounded-2xl bg-background border border-border/80">
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-amber-500" /> 5.1 Hartitudeh Tech Solutions
                  </h3>
                  <p className="text-sm leading-relaxed mb-3">
                    In our enterprise software and technology vertical, we act as both Data Controller and Data Processor for client source code, SaaS database instances, and user analytics. Client code repositories, database schemas, and proprietary business logic remain 100% strictly confidential. We enforce zero-retention policies on client customer data stored in temporary staging/dev environments post-project deployment.
                  </p>
                  <ul className="list-disc list-inside text-xs space-y-1 pl-2">
                    <li>Strict non-disclosure agreements (NDAs) govern all code check-ins.</li>
                    <li>Automated SAST/DAST security scanning logs are purged after 60 days.</li>
                    <li>Client staging servers are wiped clean within 30 days of final sign-off.</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-background border border-border/80">
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    <Coins className="w-5 h-5 text-amber-500" /> 5.2 Hartitudeh CryptoTech & Global Exchange
                  </h3>
                  <p className="text-sm leading-relaxed mb-3">
                    Due to the pseudo-anonymous and immutable nature of blockchain ledgers, users acknowledge that transactions broadcast onto public blockchains (Bitcoin, Ethereum, etc.) are permanently recorded and cannot be modified or erased by Hartitudeh Empire. However, off-chain ledger mappings, P2P chat histories, and KYC identification vaults are stored in air-gapped, encrypted database clusters compliant with ISO 27001 standards.
                  </p>
                  <ul className="list-disc list-inside text-xs space-y-1 pl-2">
                    <li>Cold wallet seed phrases are never stored or accessible by our software servers.</li>
                    <li>P2P trade dispute evidence (screenshots, receipts) is encrypted with AES-256 keys.</li>
                    <li>KYC biometric video verification data is processed by ISO-certified identity partners.</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-background border border-border/80">
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-amber-500" /> 5.3 Hartitudeh Homes & Properties
                  </h3>
                  <p className="text-sm leading-relaxed mb-3">
                    Real estate acquisition involves statutory land registration, Governor's Consent approvals, tax clearance filings, and legal conveyancing. Title documents and identity credentials submitted for real estate deals are shared exclusively with certified legal solicitors, land registries, state survey offices, and accredited financial institutions handling escrow or mortgage perfection.
                  </p>
                  <ul className="list-disc list-inside text-xs space-y-1 pl-2">
                    <li>Deed documents are archived in fireproof, restricted-access physical & digital vaults.</li>
                    <li>Property buyer tax clearance copies are retained for 7 years per statutory tax requirements.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">6</span>
                Cookies, Pixels & Web Telemetry Matrix
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our websites and portals utilize cookies, web beacons, local storage tokens, and session analytics tools to maintain session state, secure trading dashboards, analyze visitor metrics, and personalize experience.
                </p>

                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-xs text-left border-collapse border border-border rounded-xl">
                    <thead>
                      <tr className="bg-background border-b border-border text-foreground font-bold">
                        <th className="p-3">Cookie Category</th>
                        <th className="p-3">Purpose</th>
                        <th className="p-3">Lifespan</th>
                        <th className="p-3">Type / Essential Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      <tr>
                        <td className="p-3 font-semibold text-foreground">Strictly Necessary</td>
                        <td className="p-3">User authentication, session token persistence, CSRF security, P2P escrow state keeping.</td>
                        <td className="p-3">Session to 7 Days</td>
                        <td className="p-3 text-amber-500 font-bold">Mandatory (Cannot be disabled)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-foreground">Performance & Analytics</td>
                        <td className="p-3">Aggregated traffic analysis, page load metrics, bounce rate diagnosis via anonymized analytics.</td>
                        <td className="p-3">30 Days to 2 Years</td>
                        <td className="p-3">Optional (User Consent Opt-in)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-foreground">Functional Preferences</td>
                        <td className="p-3">Language selection, theme settings (Dark/Light), currency unit preferences.</td>
                        <td className="p-3">1 Year</td>
                        <td className="p-3">Optional (User Preference)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-foreground">Security & Anti-Fraud</td>
                        <td className="p-3">Bot detection, rate limiting, suspicious IP fingerprinting, DDoS defense tracking.</td>
                        <td className="p-3">90 Days</td>
                        <td className="p-3 text-amber-500 font-bold">Mandatory Security Standard</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">7</span>
                Detailed Operational Purposes of Data Processing
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>We process your data exclusively for explicit, legitimate, and lawful commercial purposes:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Account Onboarding & Identity Provisioning:</strong> Setting up user profiles, performing multi-factor authentication setup, and verifying user identity.</li>
                  <li><strong>Service Provisioning & Trade Execution:</strong> Processing enterprise software contracts, finalizing property sale deeds, and executing crypto buys, sells, and staking transactions.</li>
                  <li><strong>Regulatory & AML Compliance:</strong> Fulfilling mandatory reporting duties under financial intelligence regulations, anti-tax evasion rules, and legal court orders.</li>
                  <li><strong>Customer Support & Dispute Escalation:</strong> Resolving support tickets, managing live chat queries, facilitating P2P trade arbitration, and investigating transaction discrepancies.</li>
                  <li><strong>Platform Optimization & Security Auditing:</strong> Monitoring server stability, patching vulnerabilities, executing penetration testing, and detecting unauthorized access attempts.</li>
                  <li><strong>Marketing & Corporate Announcements:</strong> Sending newsletter updates, product releases, property listing notifications, and promotional offers (strictly with opt-in consent).</li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">8</span>
                Automated Profiling, AI Telemetry & Risk Scoring
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To protect our cryptocurrency exchange platforms and financial transaction gateways from cybercrime, syndicate fraud, and illicit wallet laundering, HARTITUDEH EMPIRE employs automated fraud detection engines and machine learning risk-scoring tools.
                </p>
                <p>
                  These automated systems evaluate incoming transactions against predefined risk parameters (such as rapid high-volume transfers from blacklisted mixer smart contracts, sudden geographic IP shifts, or mismatched biometric captures). If an automated system flags a transaction as high-risk, your account may be temporarily restricted pending human compliance review. You hold the right to request manual human review of any automated risk decision.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">9</span>
                Third-Party Disclosures & Sub-Processor Ecosystem
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  HARTITUDEH EMPIRE strictly forbids selling, renting, or leasing your personal information to third-party data brokers or marketing agencies. We share data only with audited sub-processors bound by robust Data Processing Agreements (DPAs):
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Cloud Infrastructure Providers:</strong> AWS, Google Cloud Platform (GCP), and Vercel for encrypted database hosting and content delivery.</li>
                  <li><strong>Identity & KYC Verification Partners:</strong> Accredited identity verification providers for automated facial biometric checks and global sanctions screening.</li>
                  <li><strong>Payment Gateways & Banking Partners:</strong> Central Bank-licensed payment processors, commercial banks, and escrow agents handling fiat settlements.</li>
                  <li><strong>Legal, Tax & Audit Professionals:</strong> Chartered accountants, external legal counsel, and regulatory compliance auditors bound by professional legal privilege.</li>
                  <li><strong>Law Enforcement & Judicial Authorities:</strong> Validly subpoenaed law enforcement bodies, tax authorities, or regulatory commissions when compelled by lawful court order.</li>
                </ul>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">10</span>
                Cross-Border International Data Transfers
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As an enterprise serving clients across multiple continents, your personal data may be transferred to, processed, and stored on servers located outside of your state, province, or home country. 
                </p>
                <p>
                  When transferring Personal Data across borders (for instance, from the EEA or Nigeria to global cloud servers), we ensure adequate legal protections are enforced by relying on Standard Contractual Clauses (SCCs) approved by the European Commission, Nigeria Data Protection Commission (NDPC) transfer frameworks, and binding enterprise DPAs.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">11</span>
                Data Retention, Archival & Secure Destruction Schedules
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We retain Personal Data only for as long as necessary to fulfill the operational purposes outlined herein or to satisfy statutory legal, accounting, tax, and anti-money laundering mandates.
                </p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="p-3 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground">KYC, Identification & Financial Logs:</strong> Retained for a mandatory statutory period of <strong>7 to 10 years</strong> following account closure or contract termination in compliance with global AML legislation.
                  </li>
                  <li className="p-3 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground">Real Estate Titles & Conveyancing Contracts:</strong> Retained for <strong>15 years to indefinitely</strong> to preserve property chain of title integrity.
                  </li>
                  <li className="p-3 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground">Technical Server Telemetry & Web Logs:</strong> Automatically purged or anonymized after <strong>90 to 180 days</strong>.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">12</span>
                Security Architecture, Encryption & Incident Protocol
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We employ multi-layered technical, physical, and administrative defenses to safeguard data against accidental loss, unauthorized access, destruction, or alteration:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground block mb-1">Cryptographic Standards</strong>
                    <p className="text-xs">All sensitive data in transit is encrypted using TLS 1.3 protocols. Databases at rest are encrypted using AES-256 standards with hardware security module (HSM) key management.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground block mb-1">Access Control & Zero Trust</strong>
                    <p className="text-xs">Role-based access control (RBAC), mandatory Hardware Security Key / 2FA authentication, and zero-trust perimeter controls limit employee access to data on a strict need-to-know basis.</p>
                  </div>
                </div>
                <p className="text-sm pt-2">
                  In the unlikely event of a verified data breach impacting your Personal Data, HARTITUDEH EMPIRE will notify affected Data Subjects and relevant regulatory authorities within <strong>72 hours</strong> of confirmation, in strict adherence to statutory breach notification requirements.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">13</span>
                Comprehensive Data Subject Rights & Exercise Guide
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Depending on your jurisdiction, you possess standard statutory privacy rights regarding your data:</p>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground">Right of Access (Subject Access Request - SAR):</strong> You have the right to request a complete copy of the Personal Data we hold about you.
                  </div>
                  <div className="p-4 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground">Right to Rectification:</strong> You may request immediate correction of inaccurate or incomplete personal records.
                  </div>
                  <div className="p-4 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground">Right to Erasure ("Right to be Forgotten"):</strong> You may request deletion of your Personal Data, provided statutory retention rules (such as AML financial logs) do not override erasure.
                  </div>
                  <div className="p-4 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground">Right to Data Portability:</strong> You may request your personal data exported in a structured, machine-readable format (JSON or CSV).
                  </div>
                  <div className="p-4 rounded-xl bg-background border border-border/70">
                    <strong className="text-foreground">Right to Object & Withdraw Consent:</strong> You can opt out of direct marketing or withdraw processing consent at any time without penalty.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 14 */}
            <section id="section-14" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">14</span>
                Regional Regulatory Addenda (GDPR / CCPA / NDPA)
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-bold text-foreground">Nigeria Data Protection Act (NDPA 2023) Notice</h3>
                <p>
                  For Data Subjects located in Nigeria, processing complies strictly with the Nigeria Data Protection Act 2023. You have the right to lodge formal privacy complaints directly with the Nigeria Data Protection Commission (NDPC).
                </p>
                <h3 className="text-lg font-bold text-foreground mt-4">European Economic Area (EEA) & UK GDPR Notice</h3>
                <p>
                  Data subjects in the EEA and UK benefit from full GDPR protections. Our designated Data Protection Officer oversees all processing operations targeting residents within these jurisdictions.
                </p>
                <h3 className="text-lg font-bold text-foreground mt-4">California Consumer Privacy Act (CCPA / CPRA) Addendum</h3>
                <p>
                  California residents have the right to opt out of the sale or sharing of personal data (HARTITUDEH EMPIRE does not sell personal data), request specific disclosures, and exercise non-discrimination rights.
                </p>
              </div>
            </section>

            {/* Section 15 */}
            <section id="section-15" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">15</span>
                Protection of Minors & Vulnerable Persons
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our services are strictly directed to individuals aged 18 years or older (or the legal age of majority in your jurisdiction). We do not knowingly collect, request, or solicit personal data from minors under 18. If we discover that a minor under 18 has submitted personal information, we will immediately purge the record from our servers.
                </p>
              </div>
            </section>

            {/* Section 16 */}
            <section id="section-16" className="scroll-mt-32 p-8 rounded-3xl bg-card/60 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-sm border border-amber-500/30">16</span>
                DPO Contact Details, Dispute Resolution & Amendments
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  If you have questions, formal Subject Access Requests (SAR), or concerns regarding this Privacy Policy, please contact our Group Data Protection Office:
                </p>

                <div className="p-6 rounded-2xl bg-background border border-border/80 space-y-3 text-sm">
                  <div className="font-bold text-foreground text-base">HARTITUDEH EMPIRE — Group Data Protection Office</div>
                  <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-amber-500 flex-shrink-0" /> Email: info@hartitudehempire.com</div>
                  <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-amber-500 flex-shrink-0" /> Phone: +2347083777336, +2348112989898</div>
                  <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> Corporate Address: Hartitudeh Empire Headquarters, Nigeria & Global Operations</div>
                </div>

                <p className="text-xs text-muted-foreground pt-4 border-t border-border/40">
                  HARTITUDEH EMPIRE reserves the right to modify or amend this Privacy Policy at any time. Material updates will be highlighted on this page with a revised version date. Continued usage of our services after updates constitutes binding acceptance of the revised Privacy Policy.
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
