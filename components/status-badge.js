export default function StatusBadge({ children }) {
  return (
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600 bg-opacity-20 border border-purple-500">
      <span className="text-purple-400 text-sm">{children}</span>
    </div>
  )
}

