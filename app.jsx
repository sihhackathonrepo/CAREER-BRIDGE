
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Internships from "./pages/Internships";
import Jobs from "./pages/Jobs";

import StudentDashboard from "./pages/student/StudentDashboard";
import Profile from "./pages/student/Profile";
import Skills from "./pages/student/Skills";
import SkillGap from "./pages/student/SkillGap";
import Recommendations from "./pages/student/Recommendations";
import Applications from "./pages/student/Applications";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/jobs" element={<Jobs />} />

        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/skills" element={<Skills />} />
        <Route path="/student/skill-gap" element={<SkillGap />} />
        <Route path="/student/recommendations" element={<Recommendations />} />
        <Route path="/student/applications" element={<Applications />} />

      </Routes>
    </BrowserRouter>
  );
}
