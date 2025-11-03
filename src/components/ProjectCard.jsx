import { Link } from 'react-router-dom'

function ProjectCard({ title, description, imageUrl, projectUrl }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-white text-4xl font-bold opacity-50">
            {title.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <Link
          to={projectUrl}
          className="inline-block text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          View Project →
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard

