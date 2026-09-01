import { Badge } from "@/components/ui/badge";

const stacks = {
  前端: ["React", "Ant Design", "Tailwind CSS", "Vite"],
  后端: ["Bun", "ElysiaJS", "Node.js", "Express"],
  数据: ["PostgreSQL", "MySQL", "Prisma ORM", "Redis"],
  中间件: ["RabbitMQ", "gRPC", "Bull Task Queue"],
  AI: ["RAG", "Agent", "LLM Integration"],
  部署: ["Docker", "Docker Compose", "Nginx"],
};

export function TechStack() {
  return (
    <section id="tech" className="border-t border-border/60 bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            现代化技术栈
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            生产级架构，每一层都经过性能验证。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(stacks).map(([category, items]) => (
            <div
              key={category}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
