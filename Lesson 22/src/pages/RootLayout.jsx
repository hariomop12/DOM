import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-slate-900">
        <Outlet />  
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2025 MyApp
      </footer>
    </div>
  );
}

export default RootLayout;
