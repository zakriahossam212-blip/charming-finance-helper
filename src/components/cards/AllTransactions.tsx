import { Calendar, ChevronDown, Info, MoreVertical, Trash2 } from "lucide-react";

const rows = [
  { qty: 14, date: "20 July 2025", type: "Transfer", desc: "Service Fee", amount: "$125,52.00", status: "Credit" },
  { qty: 17, date: "24 July 2025", type: "Card Payment", desc: "UI/UX Project", amount: "$747,85.00", status: "Debit" },
  { qty: 20, date: "26 July 2025", type: "Card Payment", desc: "Freelancer Fee", amount: "$625,14.00", status: "Credit" },
  { qty: 26, date: "02 Aug 2025", type: "Transfer", desc: "Subscription", amount: "$212,40.00", status: "Debit" },
  { qty: 31, date: "11 Aug 2025", type: "Card Payment", desc: "Hardware", amount: "$980,00.00", status: "Credit" },
];

export function AllTransactions() {
  return (
    <section className="panel p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span>All Transactions</span>
          <Info className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
        <button className="flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground">
          <Calendar className="h-3.5 w-3.5" />
          This Year
          <ChevronDown className="h-3 w-3" />
        </button>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-xs text-muted-foreground">
              <th className="w-10 pb-3 font-normal">
                <input
                  type="checkbox"
                  aria-label="Select all transactions"
                  className="h-4 w-4 rounded border-border bg-surface-2 accent-[var(--primary)]"
                />
              </th>
              <th className="pb-3 font-normal">Qty.</th>
              <th className="pb-3 font-normal">Date</th>
              <th className="pb-3 font-normal">Type</th>
              <th className="pb-3 font-normal">Description</th>
              <th className="pb-3 font-normal">Approx</th>
              <th className="pb-3 font-normal">Status</th>
              <th className="pb-3 text-right font-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.qty} className="border-t border-border">
                <td className="py-4">
                  <input
                    type="checkbox"
                    aria-label={`Select transaction ${r.qty}`}
                    className="h-4 w-4 rounded border-border bg-surface-2 accent-[var(--primary)]"
                  />
                </td>
                <td className="py-4">{r.qty}</td>
                <td className="py-4 text-muted-foreground">{r.date}</td>
                <td className="py-4 text-muted-foreground">{r.type}</td>
                <td className="py-4 text-muted-foreground">{r.desc}</td>
                <td className="py-4 font-medium">{r.amount}</td>
                <td className="py-4">
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
                      r.status === "Credit"
                        ? "border-success/40 bg-success/10 text-success"
                        : "border-destructive/40 bg-destructive/10 text-destructive"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex items-center justify-end gap-1 text-muted-foreground">
                    <button aria-label="More options" className="grid h-7 w-7 place-items-center rounded-lg transition-colors hover:text-foreground">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                    <button aria-label="Delete transaction" className="grid h-7 w-7 place-items-center rounded-lg transition-colors hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
