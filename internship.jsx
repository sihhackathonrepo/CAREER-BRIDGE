
import Navbar from "../components/Navbar";

const internships = [
  {
    company: "Infosys",
    role: "AI Intern",
    location: "Remote",
    stipend: "₹20,000"
  },
  {
    company: "TCS",
    role: "Data Analyst Intern",
    location: "Noida",
    stipend: "₹15,000"
  },
  {
    company: "Wipro",
    role: "Web Developer Intern",
    location: "Hybrid",
    stipend: "₹18,000"
  }
];

export default function Internships() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-12 px-6">

        <h1 className="text-4xl font-bold mb-8">Internships</h1>

        <div className="grid md:grid-cols-3 gap-6">

          {internships.map((job) => (
            <div key={job.role} className="bg-white shadow rounded-xl p-6">

              <h2 className="font-bold text-xl">{job.role}</h2>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p className="font-semibold">{job.stipend}</p>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                Apply
              </button>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}
