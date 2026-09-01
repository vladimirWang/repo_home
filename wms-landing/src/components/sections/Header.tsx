import Link from "next/link";
import { Boxes, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "产品特性", href: "#features" },
  { label: "AI 智能分析", href: "#ai" },
  { label: "性能指标", href: "#performance" },
  { label: "技术栈", href: "#tech" },
  { label: "联系我们", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Boxes className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">StockFlow</span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            登录
          </Button>
          <Button size="sm">免费试用</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
