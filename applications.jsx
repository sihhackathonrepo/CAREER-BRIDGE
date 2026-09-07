
import Sidebar from "../../components/Sidebar";

const applications = [
  ["Infosys AI Intern", "Under Review"],
  ["TCS Data Analyst", "Shortlisted"],
  ["Google SWE", "Applied"]
];

export default function Applications() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-8">
          My Applications
        </h1>

        <div className="bg-white rounded-xl shadow">

          {applications.map(([job, status]) => (
            <div
              key={job}
              className="flex justify-between p-5 border-b"
            >
              <span>{job}</span>
              <span className="font-semibold text-blue-600">
                {status}
              </span>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
