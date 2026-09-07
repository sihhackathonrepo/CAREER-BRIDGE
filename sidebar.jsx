
import { NavLink } from "react-router-dom";

const links = [
  ["Dashboard", "/student/dashboard"],
  ["Profile", "/student/profile"],
  ["Skills", "/student/skills"],
  ["Skill Gap", "/student/skill-gap"],
  ["Recommendations", "/student/recommendations"],
  ["Applications", "/student/applications"]
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white min-h-screen p-6">

      <h2 className="text-2xl font-bold mb-8">Student Portal</h2>

      {links.map(([name, path]) => (
        <NavLink
          key={name}
          to={path}
          className="block py-3 px-4 rounded hover:bg-blue-700"
        >
          {name}
        </NavLink>
      ))}

    </div>
  );
}
