import { Link } from "@tanstack/react-router";
import { ChevronRight, Flame, Info, Search, X } from "lucide-react";
import { navItems } from "./nav-items";

function SidebarBody({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col justify-between gap-6">
      <div className="relative">
        {/* Purple glow behind the header area */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 right-[-3rem] h-48 w-48 rounded-full opacity-70 blur-2xl"
          style={{ backgroundImage: "var(--gradient-glow)" }}
        />

        <div className="relative flex items-center justify-between gap-2 px-1">
          <Link to="/" onClick={onNavigate} className="flex items-baseline gap-1.5">
            <span className="font-display text-xl font-bold tracking-tight">Vorix</span>
            <span className="flex items-end gap-[3px]" aria-hidden>
              <span className="block h-3 w-[3px] -skew-x-[20deg] rounded-full bg-primary-soft" />
              <span className="block h-4 w-[3px] -skew-x-[20deg] rounded-full bg-primary-soft/70" />
              <span className="block h-5 w-[3px] -skew-x-[20deg] rounded-full bg-primary-soft/40" />
            </span>
          </Link>
          {onNavigate ? (
            <button
              onClick={onNavigate}
              aria-label="Close menu"
              className="grid h-8 w-8 place-items-center rounded-full border border-sidebar-border text-muted-foreground lg:hidden"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
          <button
            aria-label="About Vorix"
            className="hidden h-7 w-7 place-items-center rounded-full border border-sidebar-border bg-surface-2/50 text-muted-foreground transition-colors hover:text-foreground lg:grid"
          >
            <Info className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="relative mt-5 flex items-center gap-2 rounded-xl border border-sidebar-border bg-surface-2/40 px-3 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search"
            aria-label="Search"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <span className="whitespace-nowrap text-[10px] text-muted-foreground">⌘ +K</span>
        </div>

        <p className="mt-7 px-1 text-[11px] font-medium text-muted-foreground">Main Menu</p>

        <nav className="mt-3 space-y-1">
          {navItems.map(({ label, to, icon: Icon, expandable }) => (
            <Link
              key={label}
              to={to}
              onClick={onNavigate}
              activeOptions={{ exact: to === "/" }}
              className="flex w-full items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:border-sidebar-border data-[status=active]:bg-surface-2/40 data-[status=active]:font-medium data-[status=active]:text-sidebar-accent-foreground"
            >
              <Icon className="h-[18px] w-[18px]" />
              <span className="flex-1 text-left">{label}</span>
              {expandable ? <ChevronRight className="h-4 w-4 opacity-60" /> : null}
            </Link>
          ))}
        </nav>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-sidebar-border bg-surface-2/40 p-4">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-80 blur-xl"
          style={{ backgroundImage: "var(--gradient-glow)" }}
        />
        <div className="relative flex items-start gap-3">
          <span
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-primary-foreground"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <Flame className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold">Activate Super</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Unlock all features on Vorix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <aside className="hidden w-[248px] shrink-0 border-r border-sidebar-border bg-sidebar px-4 pb-5 pt-6 lg:block">
        <div className="sticky top-6 h-[calc(100vh-3rem)]">
          <SidebarBody />
        </div>
      </aside>

      {/* Mobile drawer */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[264px] max-w-[85vw] overflow-y-auto border-r border-sidebar-border bg-sidebar px-4 pb-5 pt-6 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarBody onNavigate={onClose} />
      </aside>
    </>
  );
}
