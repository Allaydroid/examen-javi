"use client";

import AppShell from "@/components/app-shell/AppShell";
import { Card } from "@/components/ui/card";
import HelloEffect from "@/components/hello/HelloEffect";
import UploadDropzoneCard from "@/components/upload/UploadDropzoneCard";
import { FileText } from "lucide-react";

export default function DocsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Breadcrumb con icono redondo */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
            <FileText className="h-3.5 w-3.5" />
          </div>
          <div>
            Building Your Application &nbsp;/&nbsp; <b>Data Fetching</b>
          </div>
        </div>

        {/* 4 tarjetas superiores */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Card className="h-40 flex items-center justify-center">
            <HelloEffect />
          </Card>
          <Card className="h-40" />
          <Card className="h-40" />
          <UploadDropzoneCard />
        </div>

        {/* Bloque grande inferior */}
        <Card className="h-[520px]" />
      </div>
    </AppShell>
  );
}
