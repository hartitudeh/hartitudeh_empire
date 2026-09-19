import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
    const OPENROUTER_API_KEY = Deno.env.get("OPENROUTER_API_KEY");
    const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");

    let url = "";
    let headers: Record<string, string> = { "Content-Type": "application/json" };
    let model = "";

    if (OPENROUTER_API_KEY) {
      url = "https://openrouter.ai/api/v1/chat/completions";
      headers["Authorization"] = `Bearer ${OPENROUTER_API_KEY}`;
      model = "google/gemini-2.5-flash";
    } else if (OPENAI_API_KEY) {
      url = "https://api.openai.com/v1/chat/completions";
      headers["Authorization"] = `Bearer ${OPENAI_API_KEY}`;
      model = "gpt-4o-mini";
    } else if (GEMINI_API_KEY) {
      url = "https://generativelanguage.googleapis.com/v1beta/openai/v1/chat/completions";
      headers["Authorization"] = `Bearer ${GEMINI_API_KEY}`;
      model = "gemini-1.5-flash";
    } else {
      throw new Error("No API key configured. Please set OPENAI_API_KEY, OPENROUTER_API_KEY, or GEMINI_API_KEY in your Deno environment.");
    }

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content: `You are Hartitudeh AI, the friendly virtual assistant for HARTITUDEH EMPIRE — a diversified enterprise with three core divisions:

1. **Hartitudeh Tech Solutions** – Software development, graphic design, video editing, printing, web/mobile apps, and digital innovation.
2. **Hartitudeh CryptoTech & Global Exchange** – Cryptocurrency trading, managed portfolios, Web3 solutions, airdrop campaigns, and crypto education.
3. **Hartitudeh Homes & Properties** – Real estate brokerage, property investment advisory, land sales, and luxury home listings across Nigeria and beyond.

Your role:
- Answer questions about any of these services helpfully and enthusiastically.
- Help potential clients understand what Hartitudeh Empire offers.
- Guide users to the appropriate service page or contact channels when relevant.
- Be professional yet warm, reflecting the brand's luxury and innovation-driven identity.
- If you don't know something specific about a client's project, encourage them to reach out via the Contact page or WhatsApp.
- Keep responses concise but informative.`
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required" }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
