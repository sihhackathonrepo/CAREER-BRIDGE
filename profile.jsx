
import Sidebar from "../../components/Sidebar";

export default function Profile() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-8">
          Student Profile
        </h1>

        <div className="bg-white shadow rounded-xl p-8">

          <div className="grid grid-cols-2 gap-6">

            <input defaultValue="Rahul Sharma" className="border p-3 rounded" />
            <input defaultValue="rahul@email.com" className="border p-3 rounded" />
            <input defaultValue="B.Tech CSE" className="border p-3 rounded" />
            <input defaultValue="2027" className="border p-3 rounded" />
            <input defaultValue="Noida" className="border p-3 rounded" />
            <input defaultValue="8.4 CGPA" className="border p-3 rounded" />

          </div>

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded">
            Save Profile
          </button>

        </div>

      </div>
    </div>
  );
}
