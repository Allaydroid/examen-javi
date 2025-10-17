"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Plus, Minus } from "lucide-react";
import AppleDocIcon from "@/components/icons/AppleDocIcon"; // ⬅ icono estilo Apple

type SectionDef = { title: string; items: string[] };

const SECTIONS: SectionDef[] = [
  { title: "Getting Started", items: [] },
  {
    title: "Building Your Application",
    items: [
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
    ],
  },
  { title: "API Reference", items: [] },
  { title: "Architecture", items: [] },
  { title: "Community", items: [] },
];

function CollapsibleSection({
  def,
  isOpen,
  onToggle,
  active,
}: {
  def: SectionDef;
  isOpen: boolean;
  onToggle: () => void;
  active?: string;
}) {
  return (
    <div className="select-none">
      {/* Cabecera */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-3 py-2"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-foreground">{def.title}</span>
        {/* + / - completamente negro */}
        <span className="text-foreground">
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      {/* Contenido */}
      {isOpen && def.items.length > 0 && (
        <ul className="ml-3 border-l pl-3">
          {def.items.map((i) => {
            const isActive = active && i === active;
            return (
              <li key={i}>
                <a
                  href="#"
                  className={[
                    "block rounded-md px-3 py-1.5 text-sm",
                    "hover:bg-accent hover:text-accent-foreground",
                    isActive ? "bg-accent text-accent-foreground" : "",
                  ].join(" ")}
                >
                  {i}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function DocsSidebar() {
  // Estado inicial: BYA abierto, resto cerrado.
  const [open, setOpen] = useState<Record<string, boolean>>({
    "Getting Started": false,
    "Building Your Application": true,
    "API Reference": false,
    "Architecture": false,
    "Community": false,
  });

  const toggle = (title: string) =>
    setOpen((s) => ({ ...s, [title]: !s[title] }));

  return (
    <aside className="hidden w-72 shrink-0 border-r bg-background md:block">
      <ScrollArea className="h-screen">
        {/* Header con icono + versión */}
        <div className="p-4 pb-2">
          <div className="flex items-center gap-2">
            {/* Icono estilo Apple (fondo negro + doc blanco) */}
            <AppleDocIcon className="h-8 w-8 text-black" />
            <div>
              <div className="text-sm font-medium leading-tight">Documentation</div>
              <div className="text-xs text-muted-foreground">v1.0.0</div>
            </div>
          </div>

          {/* Buscador */}
          <div className="mt-3">
            <Input placeholder="Search the docs..." />
          </div>
        </div>

        <Separator />

        {/* Secciones colapsables */}
        <nav className="px-1 py-3 space-y-1">
          {SECTIONS.map((def) => (
            <CollapsibleSection
              key={def.title}
              def={def}
              isOpen={!!open[def.title]}
              onToggle={() => toggle(def.title)}
              active={
                def.title === "Building Your Application" ? "Data Fetching" : undefined
              }
            />
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}
