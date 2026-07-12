import DashboardLayout from "../../layouts/DashboardLayout";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const fleetData = [
  { month: "Jan", trips: 42 },
  { month: "Feb", trips: 58 },
  { month: "Mar", trips: 75 },
  { month: "Apr", trips: 63 },
  { month: "May", trips: 81 },
  { month: "Jun", trips: 96 },
];

const statusData = [
  { name: "Active", value: 32 },
  { name: "Maintenance", value: 8 },
  { name: "Inactive", value: 5 },
];

const COLORS = ["#2563EB", "#F59E0B", "#EF4444"];

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Analytics Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Fleet performance and operational insights
          </p>
        </div>

        {/* KPI Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
            <p className="text-slate-400">Fleet Utilization</p>
            <h2 className="text-4xl font-bold text-blue-500 mt-3">89%</h2>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
            <p className="text-slate-400">Trips Completed</p>
            <h2 className="text-4xl font-bold text-green-500 mt-3">415</h2>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
            <p className="text-slate-400">Fuel Efficiency</p>
            <h2 className="text-4xl font-bold text-yellow-500 mt-3">
              18.5 km/L
            </h2>
          </div>

        </div>

        {/* Charts */}

        <div className="grid xl:grid-cols-2 gap-8">

          {/* Bar Chart */}

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

            <h2 className="text-white text-xl font-semibold mb-5">
              Monthly Trips
            </h2>

            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={fleetData}>

                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

                <XAxis dataKey="month" stroke="#94a3b8" />

                <YAxis stroke="#94a3b8" />

                <Tooltip />

                <Bar
                  dataKey="trips"
                  fill="#2563EB"
                  radius={[8,8,0,0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

          {/* Pie Chart */}

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

            <h2 className="text-white text-xl font-semibold mb-5">
              Vehicle Status
            </h2>

            <ResponsiveContainer width="100%" height={320}>

              <PieChart>

                <Pie
                  data={statusData}
                  dataKey="value"
                  outerRadius={110}
                  label
                >

                  {statusData.map((entry,index)=>(
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}