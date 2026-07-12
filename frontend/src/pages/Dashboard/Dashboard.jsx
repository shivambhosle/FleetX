import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/cards/StatCard";

import {
  Truck,
  Users,
  Route,
  Wrench,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Vehicles",
      value: 48,
      subtitle: "4 added today",
      icon: Truck,
      color: "bg-blue-600",
    },
    {
      title: "Active Drivers",
      value: 31,
      subtitle: "2 on leave",
      icon: Users,
      color: "bg-green-600",
    },
    {
      title: "Active Trips",
      value: 18,
      subtitle: "6 completing today",
      icon: Route,
      color: "bg-orange-500",
    },
    {
      title: "Maintenance",
      value: 5,
      subtitle: "Needs attention",
      icon: Wrench,
      color: "bg-red-600",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}

        <div>
          <h1 className="text-4xl font-bold text-white">
            Fleet Command Center
          </h1>

          <p className="text-slate-400 mt-2">
            Welcome to FleetX Smart Fleet Operations Platform
          </p>
        </div>

        {/* KPI Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              subtitle={stat.subtitle}
              icon={stat.icon}
              color={stat.color}
            />
          ))}

        </div>

        {/* Dashboard Grid */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Fleet Overview */}

          <div className="xl:col-span-2 bg-slate-900 rounded-2xl border border-slate-800 p-6">

            <h2 className="text-xl font-semibold text-white mb-6">
              Fleet Overview
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Available Vehicles
                </span>

                <span className="text-green-400 font-semibold">
                  26
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  On Trip
                </span>

                <span className="text-blue-400 font-semibold">
                  18
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Under Maintenance
                </span>

                <span className="text-red-400 font-semibold">
                  4
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Fuel Efficiency
                </span>

                <span className="text-yellow-400 font-semibold">
                  18.5 km/L
                </span>
              </div>

            </div>

          </div>

          {/* Recent Activity */}

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

            <h2 className="text-xl font-semibold text-white mb-6">
              Recent Activity
            </h2>

            <div className="space-y-5">

              <div>
                <p className="text-white">
                  MH12AB1234 assigned
                </p>

                <span className="text-slate-500 text-sm">
                  2 mins ago
                </span>
              </div>

              <div>
                <p className="text-white">
                  Driver Rahul checked in
                </p>

                <span className="text-slate-500 text-sm">
                  15 mins ago
                </span>
              </div>

              <div>
                <p className="text-white">
                  Maintenance Completed
                </p>

                <span className="text-slate-500 text-sm">
                  1 hour ago
                </span>
              </div>

              <div>
                <p className="text-white">
                  Fuel log updated
                </p>

                <span className="text-slate-500 text-sm">
                  Today
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}