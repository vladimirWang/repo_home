import {
  Package,
  Truck,
  Users,
  Brain,
  Upload,
  Zap,
  BarChart3,
  FileSpreadsheet,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Package,
    title: "商品与库存",
    description: "多维度 SKU 管理，实时库存快照，批次/序列号全链路追溯。",
  },
  {
    icon: Truck,
    title: "供应商与采购",
    description: "供应商评级、智能采购建议、自动补货触发，降低缺货风险。",
  },
  {
    icon: Zap,
    title: "入库 / 出库",
    description: "高效扫码入库、波次拣货、智能路径规划，提升仓内作业效率。",
  },
  {
    icon: Users,
    title: "客户与订单",
    description: "全渠道订单聚合，自动履约分配，客户画像与复购洞察。",
  },
  {
    icon: Brain,
    title: "AI 智能分析",
    description: "异常库存预警、销量预测、AI 驱动的采购决策建议。",
  },
  {
    icon: Upload,
    title: "大文件断点续传",
    description: "3GB 级 Excel 批量导入，分片上传 + 断点续传，成功率 99.9%。",
  },
  {
    icon: BarChart3,
    title: "可视化报表",
    description: "开箱即用的库存周转率、库龄、呆滞料报表，支持自定义看板。",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel 批量导入",
    description: "标准模板一键同步历史数据，任务进度实时追踪，成功/失败明细可查。",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            一站式覆盖供应链
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            从商品档案到仓库作业，从 AI 预测到可视化报表 — 一个 StockFlow 就够了。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="group transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-4 text-base">{title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
