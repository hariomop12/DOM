import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-purple-600">📞 Contact</h1>
      <p className="text-gray-600 mt-4">Email: hariom@example.com</p>

      <Link
        to="/"
        className="inline-block mt-8 bg-gray-500 text-white px-4 py-2 rounded"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default Contact;
