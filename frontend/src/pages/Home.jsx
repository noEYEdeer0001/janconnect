import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 min-h-screen transition-all duration-500">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6 transition-all duration-500">
            Voice of People,
            <br className="hidden lg:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
              Power of{" "}
            </span>
            <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
              Data
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600/80 max-w-3xl mx-auto mb-10">
            Connect with your community and government. Report issues, share
            suggestions, and participate in civic decisions that matter.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <Link
              to="/dashboard"
              className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold text-lg"
            >
              View Complaints
            </Link>

            <Link
              to="/dashboard"
              className="border border-blue-500 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 font-semibold text-lg"
            >
              Vote Now
            </Link>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="px-4 sm:px-6 lg:px-8 py-20 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Empowering Civic Engagement
          </h2>
          <p className="text-lg text-gray-600">
            Simple tools to make your voice heard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["📝 Report Issues", "🗳️ Participate", "📊 Track Progress"].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="font-bold text-lg mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">
                Improve your community with real participation.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Make a Difference?
        </h2>

        {/* ✅ FIXED HERE */}
        <Link
          to="/signup"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-all duration-300 shadow"
        >
          Get Started
        </Link>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-6">
        © 2026 JanConnect
      </footer>
    </div>
  )
}

export default Home