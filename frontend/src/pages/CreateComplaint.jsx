import Navbar from "../components/Navbar"
import { useState } from "react"

function CreateComplaint() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/20 min-h-screen">
      <Navbar />

      <div className="pt-20 px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-2xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent drop-shadow-2xl mb-4 leading-tight">
              File a Complaint
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600/90 max-w-lg mx-auto leading-relaxed drop-shadow-sm">
              Report issues in your community and help make a difference
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-xl p-8 lg:p-12 rounded-3xl shadow-2xl border border-slate-200/50 hover:shadow-3xl transition-shadow duration-500 space-y-8">
            
            {/* Title */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Complaint Title
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Potholes on Main Road causing accidents"
                className="w-full btn-focus px-5 py-4 lg:py-5 border-2 border-slate-200/60 rounded-2xl bg-slate-50/50 backdrop-blur-sm text-lg placeholder-slate-500 font-medium focus:border-emerald-400/70 focus:ring-4 ring-emerald-200/50 focus:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:border-slate-300/80"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Category
              </label>
              <select 
                required
                className="w-full btn-focus px-5 py-4 lg:py-5 border-2 border-slate-200/60 rounded-2xl bg-slate-50/50 backdrop-blur-sm text-lg placeholder-slate-500 font-medium focus:border-emerald-400/70 focus:ring-4 ring-emerald-200/50 focus:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:border-slate-300/80 appearance-none bg-no-repeat bg-right pr-12"
              >
                <option value="">Select Category</option>
                <option>Roads & Infrastructure</option>
                <option>Water Supply</option>
                <option>Electricity</option>
                <option>Public Safety</option>
                <option>Waste Management</option>
                <option>Public Transport</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Location
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Main Street, Sector 5, Your City"
                className="w-full btn-focus px-5 py-4 lg:py-5 border-2 border-slate-200/60 rounded-2xl bg-slate-50/50 backdrop-blur-sm text-lg placeholder-slate-500 font-medium focus:border-emerald-400/70 focus:ring-4 ring-emerald-200/50 focus:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:border-slate-300/80 flex items-center"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Description
              </label>
              <textarea
                required
                placeholder="Provide detailed description of the issue..."
                rows="6"
                className="w-full btn-focus px-5 py-4 lg:py-5 border-2 border-slate-200/60 rounded-2xl bg-slate-50/50 backdrop-blur-sm text-lg placeholder-slate-500 font-medium resize-vertical focus:border-emerald-400/70 focus:ring-4 ring-emerald-200/50 focus:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:border-slate-300/80 leading-relaxed"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-200/50">
              <button 
                type="button"
                className="flex-1 sm:flex-none btn-focus border-2 border-slate-300/60 hover:border-slate-400 text-slate-700 hover:text-slate-900 bg-white/80 hover:bg-slate-50/80 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                disabled={isLoading}
                className="flex-1 sm:flex-none btn-focus bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 disabled:from-slate-400 disabled:to-slate-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm border border-emerald-400/50 flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                {isLoading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Complaint
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateComplaint
