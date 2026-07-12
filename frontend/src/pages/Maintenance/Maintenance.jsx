import DashboardLayout from "../../layouts/DashboardLayout";
import { Plus, Wrench, Calendar } from "lucide-react";

const maintenanceData = [
  {
    vehicle: "MH12AB1234",
    service: "Engine Oil Change",
    date: "10 Jul 2026",
    status: "Completed",
  },
  {
    vehicle: "MH14CD5678",
    service: "Brake Inspection",
    date: "12 Jul 2026",
    status: "Scheduled",
  },
  {
    vehicle: "MH01EF9012",
    service: "Tyre Replacement",
    date: "09 Jul 2026",
    status: "In Progress",
  },
];

export default function Maintenance() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Maintenance
            </h1>

            <p className="text-slate-400 mt-2">
              Monitor vehicle servicing and repairs
            </p>
          </div>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl">
            <Plus size={20} />
            Schedule Service
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {maintenanceData.map((item) => (
            <div
              key={item.vehicle}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >

              <div className="flex justify-between items-center mb-5">
                <Wrench className="text-blue-500" size={30} />

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    item.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : item.status === "Scheduled"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-white">
                {item.vehicle}
              </h2>

              <p className="text-slate-400 mt-3">
                {item.service}
              </p>

              <div className="flex items-center gap-2 mt-5 text-slate-300">
                <Calendar size={18} />
                {item.date}
              </div>

            </div>
          ))}

        </div>

      </div>
    </DashboardLayout>
  );
}