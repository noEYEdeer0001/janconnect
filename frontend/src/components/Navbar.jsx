import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 shadow-sm z-50 h-14 px-4 lg:px-8 flex items-center justify-between">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 group">
        <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center rounded-xl shadow-md hover:scale-105 transition-transform duration-200">
          J
        </div>
        <h1 className="font-bold text-xl md:text-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-slate-900 bg-clip-text text-transparent hover:translate-x-1 transition-transform duration-200">
          JanConnect
        </h1>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        <Link 
          to="/dashboard" 
          className="relative text-slate-800 hover:text-slate-900 font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 aria-[current=page]:bg-blue-50 aria-[current=page]:text-blue-600 aria-[current=page]:font-bold aria-[current]:ring-2 aria-[current]:ring-blue-200 aria-[current]:shadow-md"
        >
          Dashboard
        </Link>

        <Link 
          to="/" 
          className="relative text-slate-800 hover:text-slate-900 font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 aria-[current=page]:bg-blue-50 aria-[current=page]:text-blue-600 aria-[current=page]:font-bold aria-[current]:ring-2 aria-[current]:ring-blue-200 aria-[current]:shadow-md"
        >
          Home
        </Link>

        {/* ✅ ONLY ONE WORKING SIGNUP BUTTON */}
        <Link
          to="/signup"
          className="btn-focus bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 font-semibold text-sm hover:-translate-y-0.5"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 text-slate-800 hover:text-slate-900 hover:rotate-90">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

    </nav>
  )
}

export default Navbar