import { useTheme } from "../Context/ThemeContext";

function Navbar() {
  // Direclty get form context
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav
      className={`px-8 py-4 flex justify-between items-center ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900 shadow"}`}
    >
      <h1 className="text-xl font-bold">MyApp</h1>
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded font-medium
          ${isDark ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}
      >
        {isDark ? "☀️ Light" : "🌙 Dark"}{" "}
      </button>
    </nav>
  );
}

export default Navbar;