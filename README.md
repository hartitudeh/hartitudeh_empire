# Hartitudeh Empire

A diversified enterprise web platform for **Hartitudeh Empire**, showcasing three core business divisions:

1. **Hartitudeh Tech Solutions** – Software development, graphic design, video editing, printing, web/mobile apps, and digital innovation.
2. **Hartitudeh CryptoTech & Global Exchange** – Cryptocurrency trading, managed portfolios, Web3 solutions, airdrop campaigns, and crypto education.
3. **Hartitudeh Homes & Properties** – Real estate brokerage, property investment advisory, land sales, and luxury home listings.

---

## Tech Stack

The application is built using modern web development technologies:

- **Frontend Framework:** React (with Vite)
- **Programming Language:** TypeScript
- **Styling:** Tailwind CSS & shadcn/ui
- **Database / Backend:** Supabase (Auth, database tables, storage, and Edge Functions)

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and npm installed.

### Setup and Running Locally

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd hartitudeh_empire
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:8080](http://localhost:8080) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## Supabase Edge Functions Setup

This project uses Supabase Edge Functions (located in the `supabase/functions` directory).

To configure environment variables for the Edge Functions (e.g., API keys for the AI Chat assistant):
```bash
# Set keys in your Supabase project vault
supabase secrets set OPENAI_API_KEY=your_openai_api_key
supabase secrets set OPENROUTER_API_KEY=your_openrouter_api_key
supabase secrets set GEMINI_API_KEY=your_gemini_api_key
```
