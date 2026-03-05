import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, TrendingDown, RefreshCw, ExternalLink, Search, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  market_cap_rank: number;
  high_24h: number;
  low_24h: number;
  circulating_supply: number;
  total_supply: number;
  ath: number;
  ath_change_percentage: number;
  sparkline_in_7d?: {
    price: number[];
  };
}

interface CoinDetails {
  id: string;
  symbol: string;
  name: string;
  image: { large: string };
  description: { en: string };
  market_data: {
    current_price: { usd: number };
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_30d: number;
    market_cap: { usd: number };
    total_volume: { usd: number };
    high_24h: { usd: number };
    low_24h: { usd: number };
    circulating_supply: number;
    total_supply: number;
    ath: { usd: number };
    ath_change_percentage: { usd: number };
    market_cap_rank: number;
  };
  links: {
    homepage: string[];
    blockchain_site: string[];
  };
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

// Format large numbers
const formatNumber = (num: number): string => {
  if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
  return `$${num.toLocaleString()}`;
};

// Format price based on value
const formatPrice = (price: number): string => {
  if (price >= 1000) return `$${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  if (price >= 1) return `$${price.toFixed(2)}`;
  if (price >= 0.01) return `$${price.toFixed(4)}`;
  return `$${price.toFixed(6)}`;
};

// Format supply numbers
const formatSupply = (num: number): string => {
  if (num >= 1e12) return `${(num / 1e12).toFixed(2)}T`;
  if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(2)}K`;
  return num.toLocaleString();
};

export default function LiveCryptoMarket() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [searchResults, setSearchResults] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCoin, setSelectedCoin] = useState<CoinDetails | null>(null);
  const [coinDetailsLoading, setCoinDetailsLoading] = useState(false);
  const [showCoinModal, setShowCoinModal] = useState(false);

  const fetchCryptoData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false&price_change_percentage=24h"
      );
      
      if (!response.ok) {
        throw new Error("Failed to fetch crypto data");
      }
      
      const data = await response.json();
      setCryptoData(data);
      setLastUpdated(new Date());
    } catch (err) {
      setError("Unable to fetch live data. Please try again later.");
      console.error("Crypto fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const searchCoins = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setSearchLoading(true);
    try {
      // First search for coins
      const searchResponse = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(query)}`
      );
      
      if (!searchResponse.ok) throw new Error("Search failed");
      
      const searchData = await searchResponse.json();
      const coinIds = searchData.coins.slice(0, 10).map((c: { id: string }) => c.id).join(",");
      
      if (!coinIds) {
        setSearchResults([]);
        return;
      }

      // Get market data for the found coins
      const marketResponse = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`
      );
      
      if (!marketResponse.ok) throw new Error("Market data fetch failed");
      
      const marketData = await marketResponse.json();
      setSearchResults(marketData);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setSearchLoading(false);
    }
  };

  const fetchCoinDetails = async (coinId: string) => {
    setCoinDetailsLoading(true);
    setShowCoinModal(true);
    
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      );
      
      if (!response.ok) throw new Error("Failed to fetch coin details");
      
      const data = await response.json();
      setSelectedCoin(data);
    } catch (err) {
      console.error("Coin details error:", err);
    } finally {
      setCoinDetailsLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
    
    // Auto-refresh every 60 seconds
    const interval = setInterval(fetchCryptoData, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      searchCoins(searchQuery);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const displayData = searchQuery.trim() ? searchResults : cryptoData;

  return (
    <section id="crypto-market" className="py-24 bg-card">
      <div className="container px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.span variants={fadeInUp} className="text-gold font-medium tracking-wide uppercase text-sm">
            Live Market Data
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mt-4 mb-4">
            Live Crypto Market
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Real-time cryptocurrency prices powered by CoinGecko API
          </motion.p>
          
          {/* Search Bar */}
          <motion.div variants={fadeInUp} className="max-w-md mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search any cryptocurrency..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 bg-background border-border"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchLoading && (
              <p className="text-sm text-muted-foreground mt-2">Searching...</p>
            )}
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchCryptoData}
              disabled={loading}
              className="gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            {lastUpdated && (
              <span className="text-sm text-muted-foreground">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </span>
            )}
          </motion.div>
        </motion.div>

        {error ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-destructive mb-4">{error}</p>
            <Button onClick={fetchCryptoData} variant="outline">
              Try Again
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {loading
              ? Array.from({ length: 12 }).map((_, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="p-6 rounded-2xl bg-background border border-border animate-pulse"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-muted" />
                      <div className="flex-1">
                        <div className="h-4 bg-muted rounded w-20 mb-2" />
                        <div className="h-3 bg-muted rounded w-12" />
                      </div>
                    </div>
                    <div className="h-6 bg-muted rounded w-24 mb-2" />
                    <div className="h-4 bg-muted rounded w-16" />
                  </motion.div>
                ))
              : displayData.map((crypto, index) => (
                  <motion.div
                    key={crypto.id}
                    variants={fadeInUp}
                    onClick={() => fetchCoinDetails(crypto.id)}
                    className="group p-6 rounded-2xl bg-background border border-border hover:border-gold/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={crypto.image}
                        alt={crypto.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-bold truncate">{crypto.name}</h3>
                        <p className="text-sm text-muted-foreground uppercase">{crypto.symbol}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">#{crypto.market_cap_rank || index + 1}</span>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-2xl font-bold">{formatPrice(crypto.current_price)}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center gap-1 ${
                        crypto.price_change_percentage_24h >= 0 
                          ? "text-green-500" 
                          : "text-red-500"
                      }`}>
                        {crypto.price_change_percentage_24h >= 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span className="font-medium">
                          {crypto.price_change_percentage_24h >= 0 ? "+" : ""}
                          {crypto.price_change_percentage_24h?.toFixed(2) || "0.00"}%
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">24h</span>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Market Cap</span>
                        <span className="font-medium">{formatNumber(crypto.market_cap)}</span>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-muted-foreground">Volume 24h</span>
                        <span className="font-medium">{formatNumber(crypto.total_volume)}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gold mt-3 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                      Click for details
                    </p>
                  </motion.div>
                ))}
          </motion.div>
        )}

        {searchQuery && displayData.length === 0 && !searchLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No coins found for "{searchQuery}"</p>
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Data provided by{" "}
            <a
              href="https://www.coingecko.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline inline-flex items-center gap-1"
            >
              CoinGecko
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
          <Button variant="gold" asChild>
            <a href="/contact">
              Start Trading With Us
              <TrendingUp className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Coin Details Modal */}
      <Dialog open={showCoinModal} onOpenChange={setShowCoinModal}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border">
          {coinDetailsLoading ? (
            <div className="flex items-center justify-center py-12">
              <RefreshCw className="w-8 h-8 animate-spin text-gold" />
            </div>
          ) : selectedCoin ? (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-4">
                  <img
                    src={selectedCoin.image.large}
                    alt={selectedCoin.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <span className="font-display text-2xl">{selectedCoin.name}</span>
                    <span className="text-muted-foreground ml-2 uppercase">({selectedCoin.symbol})</span>
                  </div>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Price Section */}
                <div className="p-4 rounded-xl bg-card border border-border">
                  <p className="text-3xl font-bold mb-2">
                    {formatPrice(selectedCoin.market_data.current_price.usd)}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className={`flex items-center gap-1 ${
                      selectedCoin.market_data.price_change_percentage_24h >= 0 
                        ? "text-green-500" 
                        : "text-red-500"
                    }`}>
                      {selectedCoin.market_data.price_change_percentage_24h >= 0 ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span className="font-medium">
                        {selectedCoin.market_data.price_change_percentage_24h?.toFixed(2)}% (24h)
                      </span>
                    </div>
                    <div className={`flex items-center gap-1 ${
                      selectedCoin.market_data.price_change_percentage_7d >= 0 
                        ? "text-green-500" 
                        : "text-red-500"
                    }`}>
                      <span className="font-medium">
                        {selectedCoin.market_data.price_change_percentage_7d?.toFixed(2)}% (7d)
                      </span>
                    </div>
                    <div className={`flex items-center gap-1 ${
                      selectedCoin.market_data.price_change_percentage_30d >= 0 
                        ? "text-green-500" 
                        : "text-red-500"
                    }`}>
                      <span className="font-medium">
                        {selectedCoin.market_data.price_change_percentage_30d?.toFixed(2)}% (30d)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Market Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Market Cap Rank</p>
                    <p className="text-xl font-bold">#{selectedCoin.market_data.market_cap_rank}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Market Cap</p>
                    <p className="text-xl font-bold">{formatNumber(selectedCoin.market_data.market_cap.usd)}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-sm text-muted-foreground mb-1">24h High</p>
                    <p className="text-xl font-bold text-green-500">{formatPrice(selectedCoin.market_data.high_24h.usd)}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-sm text-muted-foreground mb-1">24h Low</p>
                    <p className="text-xl font-bold text-red-500">{formatPrice(selectedCoin.market_data.low_24h.usd)}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Volume (24h)</p>
                    <p className="text-xl font-bold">{formatNumber(selectedCoin.market_data.total_volume.usd)}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-sm text-muted-foreground mb-1">All Time High</p>
                    <p className="text-xl font-bold">{formatPrice(selectedCoin.market_data.ath.usd)}</p>
                    <p className="text-xs text-red-500">{selectedCoin.market_data.ath_change_percentage.usd?.toFixed(1)}% from ATH</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Circulating Supply</p>
                    <p className="text-xl font-bold">{formatSupply(selectedCoin.market_data.circulating_supply)}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Total Supply</p>
                    <p className="text-xl font-bold">
                      {selectedCoin.market_data.total_supply 
                        ? formatSupply(selectedCoin.market_data.total_supply) 
                        : "∞"}
                    </p>
                  </div>
                </div>

                {/* Description */}
                {selectedCoin.description.en && (
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-sm text-muted-foreground mb-2">About {selectedCoin.name}</p>
                    <p 
                      className="text-sm leading-relaxed line-clamp-4"
                      dangerouslySetInnerHTML={{ 
                        __html: selectedCoin.description.en.split('. ').slice(0, 3).join('. ') + '.' 
                      }}
                    />
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-4">
                  {selectedCoin.links.homepage[0] && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={selectedCoin.links.homepage[0]} target="_blank" rel="noopener noreferrer">
                        Website
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  )}
                  <Button variant="gold" size="sm" asChild>
                    <a href="/contact">
                      Trade {selectedCoin.symbol.toUpperCase()}
                    </a>
                  </Button>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
