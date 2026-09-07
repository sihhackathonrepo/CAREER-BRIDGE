
import Navbar from "../components/Navbar";

export default function Register() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center bg-gray-100">

        <div className="bg-white p-8 rounded-xl shadow-xl w-[500px]">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Create Account
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <input placeholder="Full Name" className="border p-3 rounded" />
            <input placeholder="Email" className="border p-3 rounded" />
            <input placeholder="College" className="border p-3 rounded" />
            <input placeholder="Branch" className="border p-3 rounded" />
            <input placeholder="Graduation Year" className="border p-3 rounded" />
            <input placeholder="Phone" className="border p-3 rounded" />

          </div>

          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg">
            Register
          </button>

        </div>
      </div>
    </>
  );
}
