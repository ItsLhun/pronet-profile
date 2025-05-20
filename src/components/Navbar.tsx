export const Navbar = () => {
  return (
    <nav className="bg-content-surface border-b border-border">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-lg font-semibold text-text">ProProfile</span>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-text-muted hover:text-text">
            Home
          </a>
          <a href="#" className="text-text-muted hover:text-text">
            Network
          </a>
          <a href="#" className="text-text-muted hover:text-text">
            Jobs
          </a>
          <a href="#" className="text-text-muted hover:text-text">
            Messages
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-text-muted">🔔</span>
          <span className="text-sm text-text-muted">👤</span>
        </div>
      </div>
    </nav>
  )
}
