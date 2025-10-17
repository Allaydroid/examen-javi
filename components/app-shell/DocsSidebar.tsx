// components/app-shell/DocsSidebar.tsx
"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Section = ({ title, items }: { title: string; items: string[] }) => (
  <div className="space-y-1">
    <div className="px-3 pt-4 text-sm font-semibold text-muted-foreground">{title}</div>
    <ul className="space-y-1">
      {items.map((i) => (
        <li key={i}>
          <a
            className="block rounded-md px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            {i}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export function DocsSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r bg-background md:block">
      <div className="p-4 text-sm text-muted-foreground">Documentation<br/>v1.0.0</div>
      <Separator />
      <ScrollArea className="h-[calc(100vh-3.5rem)] px-2">
        <nav className="py-2">
          <Section
            title="Building Your Application"
            items={[
              "Routing",
              "Data Fetching",
              "Rendering",
              "Caching",
              "Styling",
              "Optimizing",
              "Configuring",
              "Testing",
              "Authentication",
              "Deploying",
              "Upgrading",
              "Examples",
            ]}
          />
          <Separator className="my-3" />
          <Section title="API Reference" items={[" "]} />
          <Section title="Architecture" items={[" "]} />
          <Section title="Community" items={[" "]} />
        </nav>
      </ScrollArea>
    </aside>
  );
}
