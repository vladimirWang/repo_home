"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="contact" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl bg-primary p-10 text-primary-foreground md:p-16"
        >
          {/* Decorative circles */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-2xl"
          />

          <div className="relative flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              准备好升级你的仓库了吗？
            </h2>
            <p className="max-w-xl text-base text-primary-foreground/80 md:text-lg">
              立即开始 14 天免费试用，或联系我们获取定制化方案演示。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button
                size="lg"
                variant="secondary"
                className="group border-0"
              >
                免费开始
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                预约演示
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
