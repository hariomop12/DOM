import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block mt-6 bg-blue-500 text-white px-6 py-2 rounded"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
