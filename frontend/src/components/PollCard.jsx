function PollCard({ title, votes, percent, onVote }) {
  return (
    <div
      onClick={onVote}
      className="group relative bg-white/90 backdrop-blur-md p-5 lg:p-7 rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-emerald-500/30 border border-slate-200/70 hover:border-emerald-400/60 hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col justify-between"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-emerald-400/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
      
      {/* Gradient wave top */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-emerald-500/30 origin-top opacity-50 group-hover:opacity-80 transition-all duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        <h3 className="font-semibold text-lg lg:text-xl mb-4 pr-10 leading-tight line-clamp-2 text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Enhanced Progress bar */}
        <div className="relative mb-6">
          <div className="w-full bg-slate-100/70 backdrop-blur-sm h-3 lg:h-4 rounded-2xl overflow-hidden shadow-sm border border-slate-200/60">
            <div
              className="relative h-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-600 rounded-2xl shadow-md shadow-emerald-400/40 overflow-hidden flex items-center justify-between px-3 group-hover:shadow-emerald-500/50 transition-all duration-700"
              style={{ width: `${percent}%` }}
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-80 -skew-x-6" />
              
              {/* Percent badge */}
              {percent > 15 && (
                <span className="relative z-10 text-xs font-bold text-white drop-shadow-md bg-black/30 px-2 py-0.5 rounded-full">
                  {percent}%
                </span>
              )}
            </div>
          </div>
          
          {/* Progress label */}
          <div className="flex justify-between items-center mt-2 text-sm">
            <span className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              {votes} votes
            </span>
            <span className="font-bold text-base text-emerald-600 drop-shadow-md bg-emerald-50/80 px-3 py-1 rounded-xl shadow-sm group-hover:scale-105 transition-all duration-200">
              {percent}%
            </span>
          </div>
        </div>

        {/* Action prompt */}
        <div className="pt-3 border-t border-slate-200/60 mt-auto">
          <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-2.5 px-5 rounded-2xl font-semibold text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-98 transition-all duration-300 border border-emerald-400/50 backdrop-blur-sm group-hover:ring-2 group-hover:ring-emerald-400/30">
            Vote Now →
          </button>
        </div>
      </div>
    </div>
  )
}

export default PollCard
