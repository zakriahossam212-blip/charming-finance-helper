import { Clock, Info, MoreVertical } from "lucide-react";

type Item = {
  name: string;
  action: string;
  time: string;
  initials: string;
  tone: string;
};

const groups: { label: string; items: Item[] }[] = [
  {
    label: "Today",
    items: [
      {
        name: "Darlene Robertson",
        action: "Updated Account S.",
        time: "14:05 AM",
        initials: "DR",
        tone: "var(--gradient-card-gold)",
      },
      {
        name: "Marvin McKinney",
        action: "Recent Transaction",
        time: "16:10 AM",
        initials: "MM",
        tone: "var(--gradient-card-ocean)",
      },
      {
        name: "Darrell Steward",
        action: "Transferred Funds to",
        time: "18:14 AM",
        initials: "DS",
        tone: "var(--gradient-card-violet)",
      },
    ],
  },
  {
    label: "Yesterday",
    items: [
      {
        name: "Devon Lane",
        action: "added a new savings…",
        time: "12:48 AM",
        initials: "DL",
        tone: "var(--gradient-primary)",
      },
      {
        name: "Jenny Wilson",
        action: "Requested a payout",
        time: "09:22 AM",
        initials: "JW",
        tone: "var(--gradient-card-ocean)",
      },
    ],
  },
];

export function RecentActivity() {
  return (
    <section className="panel flex flex-col p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span>Recent Activity</span>
          <Info className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
        <button
          aria-label="Activity options"
          className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 space-y-5 overflow-y-auto pr-1">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="text-[11px] text-muted-foreground">{group.label}</p>
            <ul className="mt-3 space-y-4">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-start gap-3">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[11px] font-semibold text-primary-foreground"
                    style={{ backgroundImage: item.tone }}
                  >
                    {item.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm">
                      <span className="font-medium">{item.name}</span>{" "}
                      <span className="text-muted-foreground">{item.action}</span>
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {item.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
