import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white p-10 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page not found.</p>
      <Link to="/" className="px-6 py-3 bg-white text-blue-600 rounded font-semibold hover:bg-gray-100">
        Go Back to Home
      </Link>
    </div>
  );
}