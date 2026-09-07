
import Sidebar from "../../components/Sidebar";

const skills = [
  "Python",
  "Java",
  "React",
  "SQL",
  "Machine Learning"
];

export default function Skills() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-8">My Skills</h1>

        <div className="bg-white rounded-xl shadow p-8">

          <div className="flex flex-wrap gap-4">

            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}
