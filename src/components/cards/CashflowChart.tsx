import { Calendar, ChevronDown, Info } from "lucide-react";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", value: 620 },
  { month: "Feb", value: 780 },
  { month: "Mar", value: 940 },
  { month: "Jun", value: 700 },
  { month: "Jul", value: 1420 },
  { month: "Aug", value: 860 },
  { month: "Sep", value: 1050 },
  { month: "Oct", value: 720 },
];

const highlight = "Jul";

function CashflowTooltip({ active, payload }: { active?: boolean; payload?: any[] }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-1.5 text-center shadow-lg">
      <p className="font-display text-sm font-semibold">
        ${(payload[0].payload.value / 200).toFixed(1)}
      </p>
      <p className="text-[10px] text-muted-foreground">Income</p>
    </div>
  );
}

export function CashflowChart() {
  return (
    <section className="panel relative overflow-hidden p-5">
      <div
        aria-hidden
        className="glow-surface pointer-events-none absolute -top-24 left-1/4 h-56 w-[420px] max-w-full opacity-50"
      />
      <div className="relative flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span>Cashflow</span>
          <Info className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
        <button className="flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground">
          <Calendar className="h-3.5 w-3.5" />
          Last Month
          <ChevronDown className="h-3 w-3" />
        </button>
      </div>

      <div className="relative mt-6 h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 4, left: -10, bottom: 0 }}>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              domain={[400, 1500]}
              ticks={[400, 600, 800, 1000, 1300, 1500]}
              tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
              tickFormatter={(v: number) => `$${v}`}
            />
            <Tooltip content={<CashflowTooltip />} cursor={{ fill: "var(--muted)", opacity: 0.25 }} />
            <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={44}>
              {data.map((d) => (
                <Cell
                  key={d.month}
                  fill={d.month === highlight ? "var(--primary-soft)" : "var(--surface-2)"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
