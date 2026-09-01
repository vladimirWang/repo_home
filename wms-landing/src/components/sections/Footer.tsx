import Link from "next/link";
import { Boxes } from "lucide-react";

const footerLinks = [
  {
    title: "产品",
    items: [
      { label: "核心特性", href: "#features" },
      { label: "AI 智能分析", href: "#ai" },
      { label: "性能指标", href: "#performance" },
      { label: "技术栈", href: "#tech" },
    ],
  },
  {
    title: "资源",
    items: [
      { label: "产品文档", href: "#" },
      { label: "API 参考", href: "#" },
      { label: "部署指南", href: "#" },
      { label: "更新日志", href: "#" },
    ],
  },
  {
    title: "公司",
    items: [
      { label: "关于我们", href: "#" },
      { label: "联系我们", href: "#contact" },
      { label: "隐私政策", href: "#" },
      { label: "服务条款", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Boxes className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight">StockFlow</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              AI 驱动的企业级仓库管理系统，让供应链更智能、更高效。
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-semibold">{group.title}</h4>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} StockFlow. All rights reserved.</div>
          <div>Made with Next.js · Tailwind CSS · Framer Motion</div>
        </div>
      </div>
    </footer>
  );
}
