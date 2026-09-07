
import Sidebar from "../../components/Sidebar";

const gaps = [
  ["Python", 90],
  ["React", 80],
  ["Cloud", 40],
  ["AI", 55],
  ["Data Visualization", 30]
];

export default function SkillGap() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-8">
          Skill Gap Analysis
        </h1>

        <div className="bg-white rounded-xl shadow p-8">

          {gaps.map(([skill, value]) => (
            <div key={skill} className="mb-6">

              <div className="flex justify-between">
                <span>{skill}</span>
                <span>{value}%</span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded mt-2">
                <div
                  className="bg-blue-600 h-3 rounded"
                  style={{ width: `${value}%` }}
                />
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
