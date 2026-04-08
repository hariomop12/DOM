import { useTheme } from "../Context/ThemeContext";

function Card({ name, role, city }) {
  // this get direclty form context not any prop
  const { isDark } = useTheme();
  return (
    <div
      className={`p-6 rounded-lg shadow-md w-64
      ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="{isDark ? 'text-gray-400' : 'text-gray-800'}">{role}</p>
      <p className="{isDark ? 'text-gray-400' : 'text-gray-800'}">{city}</p>
    </div>
  );
}

export default Card;
