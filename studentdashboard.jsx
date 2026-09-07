
import Sidebar from "../../components/Sidebar";

export default function StudentDashboard() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100">

        <h1 className="text-3xl font-bold">
          Good Morning, Student 👋
        </h1>

        <div className="grid grid-cols-4 gap-6 mt-8">

          {[
            ["Skills", 14],
            ["Matches", 28],
            ["Applied", 6],
            ["Profile", "82%"]
          ].map(([title, value]) => (
            <div key={title} className="bg-white p-6 rounded-xl shadow">

              <p>{title}</p>
              <h2 className="text-3xl font-bold">{value}</h2>

            </div>
          ))}

        </div>

        <div className="mt-10 bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-4">
            High Demand Skills
          </h2>

          {[
            ["Python", "95% demand"],
            ["AI/ML", "92% demand"],
            ["Data Analytics", "88% demand"],
            ["Cloud Computing", "86% demand"]
          ].map(([skill, demand]) => (
            <div
              key={skill}
              className="flex justify-between py-3 border-b"
            >
              <span>{skill}</span>
              <span className="font-semibold">{demand}</span>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
