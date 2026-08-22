import { CreditCard } from "lucide-react";

export type CardData = {
  id: string;
  last4: string;
  exp: string;
  gradient: string;
};

export function CardTile({ card }: { card: CardData }) {
  return (
    <article
      className="relative flex h-[168px] flex-col justify-between overflow-hidden rounded-2xl p-4 text-primary-foreground shadow-[var(--shadow-card)]"
      style={{ backgroundImage: card.gradient }}
    >
      <div className="flex items-start justify-between">
        <span className="grid h-8 w-10 place-items-center rounded-md bg-background/25 backdrop-blur-sm">
          <CreditCard className="h-4 w-4" />
        </span>
        <span className="flex items-center" aria-hidden>
          <span className="h-5 w-5 rounded-full bg-destructive/90" />
          <span className="-ml-2 h-5 w-5 rounded-full bg-warning/90" />
        </span>
      </div>

      <div>
        <p className="font-display text-lg tracking-[0.14em]">
          <span className="opacity-70">•••• •••• ••••</span> {card.last4}
        </p>
        <p className="mt-2 text-[11px] opacity-70">Exp {card.exp}</p>
      </div>
    </article>
  );
}
