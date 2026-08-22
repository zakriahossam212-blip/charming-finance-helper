import {
  ArrowLeftRight,
  CreditCard,
  LayoutDashboard,
  Receipt,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  to: string;
  icon: LucideIcon;
  expandable?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard },
  { label: "Payment", to: "/payment", icon: Wallet },
  { label: "Cards", to: "/cards", icon: CreditCard },
  { label: "Transactions", to: "/transactions", icon: ArrowLeftRight, expandable: true },
  { label: "Taxes", to: "/taxes", icon: Receipt },
  { label: "Users", to: "/users", icon: Users },
];
