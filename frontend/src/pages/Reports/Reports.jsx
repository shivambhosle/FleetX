import DashboardLayout from "../../layouts/DashboardLayout";
import {
  Download,
  FileSpreadsheet,
  FileText,
  Calendar,
} from "lucide-react";

const reports = [
  {
    title: "Fleet Summary Report",
    description: "Overall fleet utilization and vehicle status.",
    type: "PDF",
  },
  {
    title: "Trip History Report",
    description: "Complete record of completed and ongoing trips.",
    type: "Excel",
  },
  {
    title: "Maintenance Report",
    description: "Scheduled and completed maintenance activities.",
    type: "PDF",
  },
  {
    title: "Fuel Consumption Report",
    description: "Fuel usage and operational expenses.",
    type: "Excel",
  },
];

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-4xl font-bold text-white">
              Reports
            </h1>

            <p className="text-slate-400 mt-2">
              Generate and export operational reports
            </p>
          </div>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl">
            <Calendar size={20} />
            Generate Report
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {reports.map((report) => (
            <div
              key={report.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex justify-between items-center">

                {report.type === "PDF" ? (
                  <FileText className="text-red-400" size={36} />
                ) : (
                  <FileSpreadsheet className="text-green-400" size={36} />
                )}

                <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-sm">
                  {report.type}
                </span>

              </div>

              <h2 className="text-2xl font-semibold text-white mt-5">
                {report.title}
              </h2>

              <p className="text-slate-400 mt-3">
                {report.description}
              </p>

              <button className="mt-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg">
                <Download size={18} />
                Export
              </button>
            </div>
          ))}

        </div>

      </div>
    </DashboardLayout>
  );
}