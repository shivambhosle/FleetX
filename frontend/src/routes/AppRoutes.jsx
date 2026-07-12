import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Fleet from "../pages/Fleet/Fleet";
import Drivers from "../pages/Drivers/Drivers";
import Trips from "../pages/Trips/Trips";
import Maintenance from "../pages/Maintenance/Maintenance";
import Expenses from "../pages/Expenses/Expenses";
import Analytics from "../pages/Analytics/Analytics";
import Reports from "../pages/Reports/Reports";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/fleet" element={<Fleet />} />

      <Route path="/drivers" element={<Drivers />} />

      <Route path="/trips" element={<Trips />} />

      <Route path="/maintenance" element={<Maintenance />} />

      <Route path="/expenses" element={<Expenses />} />

      <Route path="/analytics" element={<Analytics />} />

      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
}