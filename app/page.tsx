"use client";

import AppShell from "@/components/app-shell/AppShell";
import { Card } from "@/components/ui/card";
import HelloEffect from "@/components/hello/HelloEffect";
import UploadDropzoneCard from "@/components/upload/UploadDropzoneCard";

export default function DocsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="text-sm text-muted-foreground">
          <span className="mr-2">📄</span> Building Your Application &nbsp;/&nbsp; <b>Data Fetching</b>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Card className="h-40 flex items-center justify-center">
            <HelloEffect />
          </Card>
          <Card className="h-40" />
          <Card className="h-40" />
          <UploadDropzoneCard />
        </div>

        <Card className="h-[520px]" />
      </div>
    </AppShell>
  );
}
