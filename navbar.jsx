
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-700">CareerBridge</h1>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/internships">Internships</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/login">Login</Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
