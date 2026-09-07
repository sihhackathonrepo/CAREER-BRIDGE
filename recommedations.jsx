
import Sidebar from "../../components/Sidebar";

const recommendations = [
  ["AI Internship", "94% Match"],
  ["Data Analyst Intern", "91% Match"],
  ["React Developer", "88% Match"]
];

export default function Recommendations() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-8">
          Recommended For You
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          {recommendations.map(([title, match]) => (
            <div key={title} className="bg-white rounded-xl shadow p-6">

              <h2 className="font-bold text-xl">{title}</h2>
              <p className="text-blue-600">{match}</p>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                View Opportunity
              </button>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
