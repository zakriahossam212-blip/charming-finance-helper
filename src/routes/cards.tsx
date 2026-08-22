import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { CardTile, type CardData } from "@/components/cards/CardTile";
import { CashflowChart } from "@/components/cards/CashflowChart";
import { RecentActivity } from "@/components/cards/RecentActivity";
import { AllTransactions } from "@/components/cards/AllTransactions";

const cards: CardData[] = [
  { id: "gold", last4: "5421", exp: "07/28", gradient: "var(--gradient-card-gold)" },
  { id: "ocean", last4: "8547", exp: "07/28", gradient: "var(--gradient-card-ocean)" },
  { id: "violet", last4: "8757", exp: "01/31", gradient: "var(--gradient-card-violet)" },
];

export const Route = createFileRoute("/cards")({
  head: () => ({
    meta: [
      { title: "Cards — Vorix Finance Dashboard" },
      {
        name: "description",
        content:
          "Manage multiple cards, track transactions, monitor spending patterns and view real-time account activity.",
      },
      { property: "og:title", content: "Cards — Vorix Finance Dashboard" },
      {
        property: "og:description",
        content:
          "Manage multiple cards, track transactions, monitor spending patterns and view real-time account activity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CardsPage,
});

function CardsPage() {
  return (
    <DashboardLayout title="Cards">
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Manage multiple cards effortlessly, track transactions, monitor spending patterns, and view
        real-time activity — all designed to simplify your financial control and transparency.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((c) => (
          <CardTile key={c.id} card={c} />
        ))}

        <button className="panel flex h-[168px] flex-col items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <Plus className="h-5 w-5" />
          Add Card
        </button>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.9fr_1fr]">
        <CashflowChart />
        <RecentActivity />
      </div>

      <div className="mt-5">
        <AllTransactions />
      </div>
    </DashboardLayout>
  );
}
