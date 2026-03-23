import { useState } from "react"
import Navbar from "../components/Navbar"
import ComplaintCard from "../components/ComplaintCard"
import PollCard from "../components/PollCard"
import { useNavigate } from "react-router-dom"


function Dashboard() {
    const navigate = useNavigate()
    const [polls, setPolls] = useState([
  { id: 1, title: "Improve Public Transportation", votes: 1247 },
  { id: 2, title: "Build Community Centers", votes: 892 },
])
const handleVote = (id) => {
  setPolls(prev =>
    prev.map(p =>
      p.id === id ? { ...p, votes: p.votes + 1 } : p
    )
  )
}
const totalVotes = polls.reduce((sum, p) => sum + p.votes, 0)
{polls.map(p => (
  <PollCard
    key={p.id}
    title={p.title}
    votes={p.votes}
    percent={((p.votes / totalVotes) * 100).toFixed(1)}
    onVote={() => handleVote(p.id)}  // 🔥 THIS IS CRITICAL
  />
))}
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 min-h-screen">
      <Navbar />

      <div className="pt-20 pb-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-8 mb-12 pb-8 border-b border-slate-200/30">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent drop-shadow-lg mb-2">
              Community Dashboard
            </h1>
            <p className="text-lg sm:text-xl text-slate-600/80 max-w-md leading-relaxed">
              View all complaints and participate in active polls
            </p>
          </div>
          <button
            onClick={() => navigate("/create-complaint")}
            className="self-start lg:self-center w-full lg:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-semibold text-lg whitespace-nowrap border border-emerald-200/50 backdrop-blur-sm hover:ring-2 hover:ring-emerald-200/50"
          >
            ➕ New Complaint
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">

          {/* LEFT SIDE - Complaints */}
          <div className="lg:col-span-3">
            <div className="p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-100/50 hover:shadow-3xl transition-all duration-300">
              <div className="items-start pb-8 border-b border-slate-200/30 mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                  📋 Recent Complaints
                </h2>
              </div>

              <div className="space-y-6">
                <ComplaintCard
                  title="Pothole on Main Street causing accidents"
                  description="Large pothole causing traffic issues."
                  location="Main Street, Sector 5"
                  category="Roads"
                  status="Pending"
                  votes={142}
                  date="3/20/2026"
                />

                <ComplaintCard
                  title="Street lights not working"
                  description="Unsafe area due to lights not working."
                  location="Green Valley Colony"
                  category="Electricity"
                  status="In Progress"
                  votes={98}
                  date="3/19/2026"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Polls */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-100/50 hover:shadow-3xl transition-all duration-300">
              <h2 className="text-2xl font-bold pb-6 border-b border-slate-200/30 mb-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                📊 Active Polls
              </h2>

              <div className="space-y-6">
                <PollCard
                  title="Improve Public Transportation"
                  votes={1247}
                  percent={57.6}
                  onVote={() => {}}
                />

                <PollCard
                  title="Build Community Centers"
                  votes={892}
                  percent={42.4}
                  onVote={() => {}}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard

