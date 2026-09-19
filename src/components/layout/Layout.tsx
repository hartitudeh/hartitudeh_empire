import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "@/components/BackToTopButton";
import AIChatWidget from "@/components/AIChatWidget";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <BackToTopButton />
      <AIChatWidget />
    </div>
  );
}
