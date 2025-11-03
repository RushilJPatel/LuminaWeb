import ProjectCard from '../components/ProjectCard'

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Against The Current',
      description:
        'A modern web application built with React, featuring dynamic content and engaging user experience.',
      imageUrl: null,
      projectUrl: 'https://against-the-current-tau.vercel.app',
    },
    {
      id: 2,
      title: 'College Compass',
      description:
        'An AI-powered platform for college students, helping navigate educational resources and opportunities.',
      imageUrl: null,
      projectUrl: 'https://newengai.vercel.app',
    },
    {
      id: 3,
      title: 'E-commerce Store',
      description:
        'A modern e-commerce platform with shopping cart, payment integration, and admin dashboard.',
      imageUrl: null,
      projectUrl: 'https://shopnow-store.vercel.app',
    },
    {
      id: 4,
      title: 'Curry Leaf Cafe',
      description:
        'A sustainable vegetarian Indian restaurant website featuring menu, reservations, blog, and environmental impact tracking. Built for TSA Webmaster Competition.',
      imageUrl: null,
      projectUrl: 'https://curryleafcafe.onrender.com/realindex.html',
    },
    {
      id: 5,
      title: 'Fitness Studio',
      description:
        'Dynamic fitness studio website with class schedules, trainer profiles, and membership signup.',
      imageUrl: null,
      projectUrl: 'https://fitzone-studio.vercel.app',
    },
    {
      id: 6,
      title: 'SaaS Landing Page',
      description:
        'High-converting landing page for a SaaS product with features, pricing, and testimonials.',
      imageUrl: null,
      projectUrl: 'https://taskflow-saas.vercel.app',
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800">
          My Portfolio
        </h1>
        <p className="text-center text-slate-600 mb-12 text-lg">
          Here are some of my recent projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

