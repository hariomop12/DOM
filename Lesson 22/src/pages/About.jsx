import { Link } from "react-router-dom";

function About() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-green-600">📖 About Us</h1>
      <p className="text-gray-600 mt-4">We are learning React Router!</p>

      <Link
        to="/"
        className="inline-block mt-8 bg-gray-500 text-white px-4 py-2 rounded"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default About;
