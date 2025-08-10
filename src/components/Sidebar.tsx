import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Wallet,
  CreditCard,
  Calendar,
  TrendingUp,
  Settings,
  HelpCircle,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, href: "#", active: true },
  { name: "Members", icon: Users, href: "#" },
  { name: "Contributions", icon: Wallet, href: "#" },
  { name: "Loans", icon: CreditCard, href: "#" },
  { name: "Meetings", icon: Calendar, href: "#" },
  { name: "Reports", icon: TrendingUp, href: "#" },
];

const secondaryNavigation = [
  { name: "Settings", icon: Settings, href: "#" },
  { name: "Help & Support", icon: HelpCircle, href: "#" },
];

export function Sidebar() {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-card border-r">
        <div className="flex-1 flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant={item.active ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  item.active && "bg-primary/10 text-primary hover:bg-primary/20"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Button>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-border p-4">
          <div className="flex-1 w-full">
            {secondaryNavigation.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start mb-1"
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}