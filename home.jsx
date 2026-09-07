
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Academia-Industry Collaboration Portal
          </h1>

          <p className="mt-6 text-xl max-w-2xl">
            AI-powered Skill Mapping, Internship Recommendations
            and Placement Platform.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              to="/internships"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
            >
              Find Internships
            </Link>

            <Link
              to="/jobs"
              className="border border-white px-6 py-3 rounded-lg"
            >
              Explore Jobs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          How CareerBridge Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Create Student Profile",
            "AI Skill Mapping",
            "Skill Gap Analysis",
            "Get Recommendations",
            "Apply for Internships",
            "Placement & Feedback",
          ].map((item) => (
            <div
              key={item}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}

        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-4xl font-bold text-blue-700">50K+</h2>
            <p>Students</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-700">500+</h2>
            <p>Companies</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-700">12K+</h2>
            <p>Internships</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-700">8K+</h2>
            <p>Placements</p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
