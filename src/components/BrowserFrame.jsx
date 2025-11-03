function BrowserFrame({ children, title = 'Website Preview' }) {
  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
      {/* Browser Chrome */}
      <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 mx-4 bg-white rounded px-4 py-1.5 text-sm text-slate-600 border border-slate-300">
          <span className="text-slate-400">https://</span>
          {title.toLowerCase().replace(/\s+/g, '-')}.com
        </div>
      </div>
      {/* Website Content */}
      <div className="bg-white">{children}</div>
    </div>
  )
}

export default BrowserFrame

