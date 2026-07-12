import DashboardLayout from "../../layouts/DashboardLayout";
import { Plus, Search, Phone, Mail } from "lucide-react";

const drivers = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "+91 9876543210",
    email: "rahul@fleetx.com",
    vehicle: "MH12AB1234",
    status: "Available",
  },
  {
    id: 2,
    name: "Amit Singh",
    phone: "+91 9123456780",
    email: "amit@fleetx.com",
    vehicle: "MH14CD5678",
    status: "On Trip",
  },
  {
    id: 3,
    name: "Rohan Patil",
    phone: "+91 9988776655",
    email: "rohan@fleetx.com",
    vehicle: "MH01EF9012",
    status: "Leave",
  },
];

export default function Drivers() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Drivers
            </h1>

            <p className="text-slate-400 mt-2">
              Manage all fleet drivers
            </p>

          </div>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl text-white font-semibold">
            <Plus size={20}/>
            Add Driver
          </button>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <div className="relative w-80 mb-6">

            <Search
              size={18}
              className="absolute left-3 top-3 text-slate-400"
            />

            <input
              placeholder="Search Driver..."
              className="w-full bg-slate-800 text-white rounded-lg py-3 pl-10 pr-4 outline-none"
            />

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {drivers.map((driver)=>(

              <div
                key={driver.id}
                className="bg-slate-800 rounded-xl p-5 border border-slate-700"
              >

                <h2 className="text-xl font-semibold text-white">
                  {driver.name}
                </h2>

                <div className="mt-5 space-y-3">

                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone size={16}/>
                    {driver.phone}
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail size={16}/>
                    {driver.email}
                  </div>

                  <div className="text-slate-400">
                    Vehicle : {driver.vehicle}
                  </div>

                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm mt-3 ${
                      driver.status==="Available"
                      ?"bg-green-500/20 text-green-400"
                      :driver.status==="On Trip"
                      ?"bg-blue-500/20 text-blue-400"
                      :"bg-red-500/20 text-red-400"
                    }`}
                  >
                    {driver.status}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}