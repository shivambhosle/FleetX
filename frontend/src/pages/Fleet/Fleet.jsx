import DashboardLayout from "../../layouts/DashboardLayout";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";

const vehicles = [
  {
    id: "MH12AB1234",
    driver: "Rahul Sharma",
    type: "Truck",
    status: "Active",
    fuel: "78%",
  },
  {
    id: "MH14CD5678",
    driver: "Amit Singh",
    type: "Van",
    status: "Maintenance",
    fuel: "42%",
  },
  {
    id: "MH01EF9012",
    driver: "Rohan Patil",
    type: "Mini Truck",
    status: "Active",
    fuel: "91%",
  },
  {
    id: "MH05GH3456",
    driver: "Karan Mehta",
    type: "Trailer",
    status: "Inactive",
    fuel: "20%",
  },
];

export default function Fleet() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Fleet Management
            </h1>

            <p className="text-slate-400 mt-2">
              Manage all fleet vehicles
            </p>
          </div>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl text-white font-semibold">
            <Plus size={20} />
            Add Vehicle
          </button>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

          <div className="flex justify-between items-center mb-6">

            <div className="relative w-80">
              <Search
                size={18}
                className="absolute left-3 top-3 text-slate-400"
              />

              <input
                placeholder="Search Vehicle..."
                className="w-full bg-slate-800 rounded-lg pl-10 pr-4 py-3 text-white outline-none"
              />
            </div>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="text-left border-b border-slate-800 text-slate-400">

                  <th className="pb-4">Vehicle</th>

                  <th className="pb-4">Driver</th>

                  <th className="pb-4">Type</th>

                  <th className="pb-4">Fuel</th>

                  <th className="pb-4">Status</th>

                  <th className="pb-4">Actions</th>

                </tr>

              </thead>

              <tbody>

                {vehicles.map((vehicle) => (

                  <tr
                    key={vehicle.id}
                    className="border-b border-slate-800 hover:bg-slate-800 transition"
                  >

                    <td className="py-5 text-white font-medium">
                      {vehicle.id}
                    </td>

                    <td className="text-slate-300">
                      {vehicle.driver}
                    </td>

                    <td className="text-slate-300">
                      {vehicle.type}
                    </td>

                    <td className="text-slate-300">
                      {vehicle.fuel}
                    </td>

                    <td>

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          vehicle.status === "Active"
                            ? "bg-green-500/20 text-green-400"
                            : vehicle.status === "Maintenance"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {vehicle.status}
                      </span>

                    </td>

                    <td>

                      <div className="flex gap-4">

                        <button className="text-blue-400 hover:text-blue-300">
                          <Pencil size={18} />
                        </button>

                        <button className="text-red-400 hover:text-red-300">
                          <Trash2 size={18} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}