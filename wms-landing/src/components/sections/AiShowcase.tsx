"use client";

import { motion } from "framer-motion";
import { Brain, TrendingUp, AlertTriangle, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [
  {
    icon: AlertTriangle,
    title: "异常库存预警",
    desc: "AI 实时扫描 SKU 波动，自动标记超储 / 滞销风险。",
  },
  {
    icon: TrendingUp,
    title: "销量预测",
    desc: "结合季节、节日、渠道趋势，未来 90 天销量误差 < 15%。",
  },
  {
    icon: Lightbulb,
    title: "智能采购建议",
    desc: "基于库存水位 + 销售预测，自动生成最优补货计划。",
  },
];

export function AiShowcase() {
  return (
    <section id="ai" className="border-t border-border/60 bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left — animated visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                <span className="font-semibold">AI 智能洞察</span>
              </div>

              {/* Fake AI conversation / streaming output */}
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                  <span className="mt-0.5 text-xs text-muted-foreground">Q</span>
                  <span>哪些 SKU 在 Q3 出现异常波动？</span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-3"
                >
                  <span className="mt-0.5 rounded bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
                    AI
                  </span>
                  <div className="space-y-2">
                    <p>检测到 3 个 SKU 异常：</p>
                    <ul className="list-disc space-y-1 pl-4 text-muted-foreground">
                      <li>SKU-0087 周转率下降 42%（疑似滞销）</li>
                      <li>SKU-1203 近 7 天出库暴增 180%</li>
                      <li>SKU-0456 库存低于安全线 35%</li>
                    </ul>
                    <p className="text-primary">→ 建议：立即对 SKU-0456 触发补货</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-4 rounded-xl border border-border bg-background p-4 shadow-lg"
            >
              <div className="text-xs text-muted-foreground">预测准确率</div>
              <div className="text-2xl font-bold text-primary">92.4%</div>
            </motion.div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              AI 驱动，让数据自己说话
            </h2>
            <p className="text-base text-muted-foreground md:text-lg">
              内置 RAG 语义检索，对接企业私有数据。RabbitMQ 异步队列解耦计算密集型任务，
              前端实时进度追踪，AI 分析永不阻塞主流程。
            </p>

            <ul className="space-y-4 pt-2">
              {insights.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            <Button variant="outline" className="group">
              了解 AI 能力详情
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
