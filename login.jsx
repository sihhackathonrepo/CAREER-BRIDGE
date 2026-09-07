
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center bg-gray-100">

        <div className="bg-white p-8 rounded-xl shadow-xl w-96">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Welcome Back
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-6"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Login
          </button>

        </div>
      </div>
    </>
  );
}
