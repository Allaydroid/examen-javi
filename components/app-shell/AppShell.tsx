import { DocsSidebar } from "./DocsSidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <DocsSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
