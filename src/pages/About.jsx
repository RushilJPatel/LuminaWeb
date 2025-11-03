function About() {
  const skills = [
    'React',
    'Tailwind CSS',
    'Figma',
    'JavaScript',
    'TypeScript',
    'Vite',
    'Git',
    'Responsive Design',
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-800">
          About Us
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          {/* Company Logo/Avatar */}
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white text-6xl font-bold shadow-lg flex-shrink-0">
            LWD
          </div>

          {/* About Text */}
          <div className="flex-1">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Lumina Web Design is a team of passionate web developers specializing in creating fast, modern
              websites for small businesses. With a focus on clean code and user
              experience, we help businesses establish a strong online presence.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our design philosophy centers around simplicity, performance, and
              accessibility. We believe every website should be beautiful,
              functional, and accessible to everyone, regardless of their device
              or connection speed.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-slate-800">
            Tools & Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

