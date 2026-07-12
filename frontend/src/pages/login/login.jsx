import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-900 rounded-xl p-8 shadow-xl border border-slate-800">
        <h1 className="text-4xl font-bold text-blue-500 text-center mb-2">
          FleetX
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Smart Fleet Operations Platform
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full bg-slate-800 text-white rounded-lg px-4 py-3 mb-4 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full bg-slate-800 text-white rounded-lg px-4 py-3 mb-6 outline-none"
        />

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-3 text-white font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}