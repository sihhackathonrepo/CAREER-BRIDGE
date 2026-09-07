
import Navbar from "../components/Navbar";

const jobs = [
  {
    company: "Google",
    role: "Software Engineer",
    location: "Bangalore",
    salary: "₹18 LPA"
  },
  {
    company: "Microsoft",
    role: "Cloud Engineer",
    location: "Hyderabad",
    salary: "₹16 LPA"
  }
];

export default function Jobs() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-12 px-6">

        <h1 className="text-4xl font-bold mb-8">Jobs</h1>

        <div className="grid md:grid-cols-2 gap-6">

          {jobs.map((job) => (
            <div key={job.role} className="bg-white shadow rounded-xl p-6">

              <h2 className="font-bold text-xl">{job.role}</h2>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p className="font-semibold">{job.salary}</p>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                View Job
              </button>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}
