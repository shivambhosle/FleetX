import DashboardLayout from "../../layouts/DashboardLayout";
import { Plus, Search, MapPin, Clock } from "lucide-react";

const trips = [
  {
    id: "TRP-1001",
    vehicle: "MH12AB1234",
    driver: "Rahul Sharma",
    source: "Mumbai",
    destination: "Pune",
    status: "In Transit",
    eta: "2 hrs",
  },
  {
    id: "TRP-1002",
    vehicle: "MH14CD5678",
    driver: "Amit Singh",
    source: "Nashik",
    destination: "Mumbai",
    status: "Completed",
    eta: "-",
  },
  {
    id: "TRP-1003",
    vehicle: "MH01EF9012",
    driver: "Rohan Patil",
    source: "Nagpur",
    destination: "Aurangabad",
    status: "Scheduled",
    eta: "Tomorrow",
  },
];

export default function Trips() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-4xl font-bold text-white">
              Trips
            </h1>

            <p className="text-slate-400 mt-2">
              Plan and monitor all fleet trips
            </p>
          </div>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl text-white font-semibold">
            <Plus size={20} />
            Create Trip
          </button>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <div className="relative w-80 mb-6">

            <Search
              size={18}
              className="absolute left-3 top-3 text-slate-400"
            />

            <input
              placeholder="Search Trip..."
              className="w-full bg-slate-800 text-white rounded-lg py-3 pl-10 pr-4 outline-none"
            />

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b border-slate-800 text-left text-slate-400">

                  <th className="pb-4">Trip ID</th>
                  <th className="pb-4">Vehicle</th>
                  <th className="pb-4">Driver</th>
                  <th className="pb-4">Route</th>
                  <th className="pb-4">ETA</th>
                  <th className="pb-4">Status</th>

                </tr>

              </thead>

              <tbody>

                {trips.map((trip) => (

                  <tr
                    key={trip.id}
                    className="border-b border-slate-800 hover:bg-slate-800"
                  >

                    <td className="py-5 text-white font-semibold">
                      {trip.id}
                    </td>

                    <td className="text-slate-300">
                      {trip.vehicle}
                    </td>

                    <td className="text-slate-300">
                      {trip.driver}
                    </td>

                    <td className="text-slate-300">

                      <div className="flex items-center gap-2">

                        <MapPin size={16} />

                        {trip.source}

                        →

                        {trip.destination}

                      </div>

                    </td>

                    <td className="text-slate-300">

                      <div className="flex items-center gap-2">

                        <Clock size={16} />

                        {trip.eta}

                      </div>

                    </td>

                    <td>

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          trip.status === "Completed"
                            ? "bg-green-500/20 text-green-400"
                            : trip.status === "In Transit"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {trip.status}
                      </span>

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