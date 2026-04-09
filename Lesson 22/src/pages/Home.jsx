import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-gray-700">Home Page</h1>
      <p className="text-gray-600 mt-4">Welcome to my app!</p>
      <div className="mt-8 flex gap-4 justify-center">
        <Link
          to="/about"
          className="text-red-500 hover:underline mt-6 inline-block"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-red-500 hover:underline mt-6 inline-block"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Home;
