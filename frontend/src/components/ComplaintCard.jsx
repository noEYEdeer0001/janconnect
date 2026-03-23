function ComplaintCard({ title, description, location, category, status, votes, date }) {
  return (
    <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer relative">

      {/* Content */}
      <div>
        <h3 className="font-semibold text-lg mb-2 text-gray-800">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-3">
          {description}
        </p>

        <p className="text-xs text-gray-500 mb-3">
          📍 {location}
        </p>

        {/* Badges */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
            {category}
          </span>

          <span
            className={`px-2 py-1 rounded text-xs font-medium ${
              status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : status === "In Progress"
                ? "bg-blue-100 text-blue-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {status}
          </span>
        </div>

        <p className="text-xs text-gray-400">
          Posted {date}
        </p>
      </div>

      {/* Votes */}
      <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow">
        👍 {votes}
      </div>
    </div>
  )
}

export default ComplaintCard