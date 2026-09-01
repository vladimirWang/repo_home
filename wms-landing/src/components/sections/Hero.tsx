"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <motion.div
          className="absolute -top-20 right-[-10%] h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-violet-400/20 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <Badge variant="secondary" className="w-fit gap-2">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            企业级 AI WMS 平台
          </Badge>

          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-primary">StockFlow</span>
            <br />
            <span className="text-foreground">
              让库存管理
              <br />
              变简单
            </span>
          </h1>

          <p className="max-w-lg text-lg text-muted-foreground">
            面向现代供应链的端到端智能仓库管理系统。实时库存、AI 销售预测、智能采购建议，从入库到出库全链路自动化。
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button size="lg" className="group">
              开始免费试用
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              查看文档
            </Button>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              99.9% 服务可用
            </div>
            <div>●</div>
            <div>已服务 200+ 企业客户</div>
          </div>
        </motion.div>

        {/* Right — visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto aspect-square w-full max-w-lg"
        >
          {/* Decorative card mockup */}
          <div className="relative h-full w-full rounded-2xl border border-border bg-card/60 p-6 shadow-2xl backdrop-blur">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-muted-foreground">库存概览 · Q3</span>
            </div>
            {/* Fake chart */}
            <div className="mt-4 flex h-48 items-end gap-2">
              {[40, 65, 48, 80, 55, 92, 70, 88, 60, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.05 }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-primary/60 to-primary"
                />
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: "SKU 总数", value: "12,480" },
                { label: "在库价值", value: "¥8.2M" },
                { label: "周转率", value: "6.8x" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border/70 bg-muted/30 p-3"
                >
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                  <div className="mt-1 text-base font-bold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
