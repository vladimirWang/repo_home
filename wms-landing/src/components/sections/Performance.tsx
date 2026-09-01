"use client";

import { motion } from "framer-motion";
import { Activity, Gauge, Rocket, Shield } from "lucide-react";

const stats = [
  { icon: Rocket, value: "995ms", label: "FCP 首屏渲染", hint: "Core Web Vitals" },
  { icon: Gauge, value: "990ms", label: "LCP 最大内容绘制", hint: "Core Web Vitals" },
  { icon: Shield, value: "99.9%", label: "大文件上传成功率", hint: "3GB 分片 + 断点续传" },
  { icon: Activity, value: "10k+", label: "并发 SKU 实时查询", hint: "Redis 缓存加速" },
];

export function Performance() {
  return (
    <section id="performance" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            硬核性能，开箱即用
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            从数据库索引到前端渲染，全链路性能调优，保证大表大数据量下丝滑体验。
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-start rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="text-3xl font-extrabold tracking-tight md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium">{s.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.hint}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
