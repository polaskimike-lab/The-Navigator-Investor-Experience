import { NAVIGATOR_PLATFORM } from "@/lib/platform/constants";

export function PlatformShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-obsidian text-white">
      <div className="fixed inset-0 grid-field opacity-40 pointer-events-none" />
      <div className="relative z-10">{children}</div>
      <footer className="relative z-10 border-t border-line px-5 py-8 text-center text-xs text-slate-500">
        {NAVIGATOR_PLATFORM.name} · {NAVIGATOR_PLATFORM.category} · {NAVIGATOR_PLATFORM.tagline}
      </footer>
    </main>
  );
}
