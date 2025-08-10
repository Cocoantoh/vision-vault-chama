import { FinancialCard } from "@/components/FinancialCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  DollarSign,
  Users,
  CreditCard,
  TrendingUp,
  Plus,
  ArrowUpRight,
  Calendar,
} from "lucide-react";

export function Dashboard() {
  const stats = [
    {
      title: "Total Savings",
      value: "KSH 2,450,000",
      change: "+12.5% from last month",
      changeType: "positive" as const,
      icon: DollarSign,
    },
    {
      title: "Active Members",
      value: "24",
      change: "+2 new this month",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Outstanding Loans",
      value: "KSH 890,000",
      change: "-5.2% from last month",
      changeType: "positive" as const,
      icon: CreditCard,
    },
    {
      title: "Monthly Growth",
      value: "15.3%",
      change: "+2.1% from target",
      changeType: "positive" as const,
      icon: TrendingUp,
    },
  ];

  const recentContributions = [
    { member: "Alice Wanjiku", amount: "KSH 5,000", date: "Today" },
    { member: "James Mwangi", amount: "KSH 3,500", date: "Yesterday" },
    { member: "Grace Akinyi", amount: "KSH 5,000", date: "2 days ago" },
    { member: "David Kiprotich", amount: "KSH 4,000", date: "3 days ago" },
  ];

  const pendingLoans = [
    { member: "Sarah Njeri", amount: "KSH 50,000", purpose: "Business expansion" },
    { member: "Peter Ochieng", amount: "KSH 30,000", purpose: "School fees" },
    { member: "Mary Wangui", amount: "KSH 25,000", purpose: "Emergency" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here's what's happening with your SACCO today.
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Meeting
          </Button>
          <Button variant="financial">
            <Plus className="mr-2 h-4 w-4" />
            New Transaction
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <FinancialCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Contributions */}
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Contributions</CardTitle>
            <Button variant="ghost" size="sm">
              View all
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentContributions.map((contribution, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{contribution.member}</p>
                    <p className="text-sm text-muted-foreground">{contribution.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-growth">{contribution.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Loan Requests */}
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Pending Loans</CardTitle>
            <Button variant="ghost" size="sm">
              Review all
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingLoans.map((loan, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{loan.member}</p>
                    <p className="font-semibold">{loan.amount}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{loan.purpose}</p>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="success" className="h-7 text-xs">
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="h-7 text-xs">
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Savings Goal Progress */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Monthly Goal Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Target: KSH 100,000</span>
                <span>78%</span>
              </div>
              <Progress value={78} className="h-2" />
              <p className="text-xs text-muted-foreground">
                KSH 22,000 remaining to reach monthly target
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Annual Target</span>
                <span>45%</span>
              </div>
              <Progress value={45} className="h-2" />
              <p className="text-xs text-muted-foreground">
                6 months remaining in current cycle
              </p>
            </div>

            <Button variant="outline" className="w-full">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Detailed Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}