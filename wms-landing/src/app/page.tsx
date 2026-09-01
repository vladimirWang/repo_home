import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { AiShowcase } from "@/components/sections/AiShowcase";
import { Performance } from "@/components/sections/Performance";
import { TechStack } from "@/components/sections/TechStack";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/sections/Footer";

// Next.js App Router 默认 Server Component — 最快渲染模式
// 仅 framer-motion 组件通过 "use client" 单独标记
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <AiShowcase />
        <Performance />
        <TechStack />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
