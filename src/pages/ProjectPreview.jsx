import { useParams, Link } from 'react-router-dom'
import BrowserFrame from '../components/BrowserFrame'

function ProjectPreview() {
  const { id } = useParams()

  const projects = {
    1: {
      title: 'E-commerce Store',
      component: <EcommercePreview />,
    },
    2: {
      title: 'Restaurant Website',
      component: <RestaurantPreview />,
    },
    3: {
      title: 'Fitness Studio',
      component: <FitnessPreview />,
    },
    4: {
      title: 'Portfolio Website',
      component: <PhotographerPreview />,
    },
    5: {
      title: 'SaaS Landing Page',
      component: <SaaSPreview />,
    },
    6: {
      title: 'Non-Profit Organization',
      component: <NonProfitPreview />,
    },
  }

  const project = projects[id]

  if (!project) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-blue-600 hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link
            to="/portfolio"
            className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2 mb-4"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            {project.title}
          </h1>
        </div>

        <BrowserFrame title={project.title}>
          {project.component}
        </BrowserFrame>
      </div>
    </section>
  )
}

// E-commerce Store Preview
function EcommercePreview() {
  return (
    <div className="p-6">
      <nav className="flex justify-between items-center mb-8 pb-4 border-b">
        <div className="text-2xl font-bold text-blue-600">ShopNow</div>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Cart (3)</a>
        </div>
      </nav>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-64 rounded-lg flex items-center justify-center text-white text-4xl font-bold">
          Summer Sale - 50% Off
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border rounded-lg p-4">
            <div className="bg-slate-200 h-32 rounded mb-3"></div>
            <h3 className="font-semibold mb-1">Product {i}</h3>
            <p className="text-sm text-slate-600 mb-2">$49.99</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded text-sm">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// Restaurant Website Preview
function RestaurantPreview() {
  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-8 rounded-lg mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Bella Vista</h1>
        <p className="text-xl">Authentic Italian Cuisine</p>
      </div>

      <nav className="flex justify-center gap-6 mb-8 pb-4 border-b">
        <a href="#" className="hover:text-blue-600">Menu</a>
        <a href="#" className="hover:text-blue-600">Reservations</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Today's Special</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold">Margherita Pizza</h3>
              <p className="text-sm text-slate-600">$18.99</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold">Spaghetti Carbonara</h3>
              <p className="text-sm text-slate-600">$22.99</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold">Tiramisu</h3>
              <p className="text-sm text-slate-600">$9.99</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-lg p-4">
          <h3 className="font-semibold mb-3">Make a Reservation</h3>
          <button className="w-full bg-orange-500 text-white py-2 rounded">
            Book Table
          </button>
        </div>
      </div>
    </div>
  )
}

// Fitness Studio Preview
function FitnessPreview() {
  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-2">FitZone Studio</h1>
        <p className="text-xl">Transform Your Body, Transform Your Life</p>
      </div>

      <nav className="flex gap-6 mb-8 pb-4 border-b">
        <a href="#" className="hover:text-indigo-600">Classes</a>
        <a href="#" className="hover:text-indigo-600">Trainers</a>
        <a href="#" className="hover:text-indigo-600">Schedule</a>
        <a href="#" className="hover:text-indigo-600">Membership</a>
      </nav>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {['Yoga', 'HIIT', 'Pilates'].map((classType) => (
          <div key={classType} className="border rounded-lg p-4 text-center">
            <div className="bg-indigo-100 h-24 rounded mb-3 flex items-center justify-center">
              <span className="text-2xl">🧘</span>
            </div>
            <h3 className="font-semibold mb-2">{classType}</h3>
            <p className="text-sm text-slate-600 mb-3">Mon-Fri 6:00 AM</p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded text-sm">
              Join Class
            </button>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Start Your Journey Today</h2>
        <button className="mt-4 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold">
          Get Membership
        </button>
      </div>
    </div>
  )
}

// Photographer Portfolio Preview
function PhotographerPreview() {
  return (
    <div className="p-6">
      <div className="text-center mb-8 pb-8 border-b">
        <h1 className="text-4xl font-bold mb-2">Alex Morgan</h1>
        <p className="text-xl text-slate-600">Professional Photographer</p>
      </div>

      <nav className="flex justify-center gap-6 mb-8">
        <a href="#" className="hover:text-blue-600">Gallery</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Blog</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>

      <div className="grid grid-cols-3 gap-2 mb-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="aspect-square bg-gradient-to-br from-blue-400 to-purple-400 rounded"
          ></div>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Featured Work</h2>
        <div className="bg-slate-200 h-48 rounded-lg mb-4"></div>
        <p className="text-slate-600">Portrait Photography Series 2024</p>
      </div>
    </div>
  )
}

// SaaS Landing Page Preview
function SaaSPreview() {
  return (
    <div className="p-6">
      <nav className="flex justify-between items-center mb-8 pb-4 border-b">
        <div className="text-2xl font-bold text-blue-600">TaskFlow</div>
        <div className="flex gap-4">
          <a href="#" className="text-sm hover:text-blue-600">
            Features
          </a>
          <a href="#" className="text-sm hover:text-blue-600">
            Pricing
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
            Sign Up
          </button>
        </div>
      </nav>

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          Manage Your Team's Workflow
        </h1>
        <p className="text-xl text-slate-600 mb-6">
          The all-in-one project management tool for modern teams
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold">
            Start Free Trial
          </button>
          <button className="border border-slate-300 px-8 py-3 rounded-lg font-semibold">
            Watch Demo
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {['Automation', 'Analytics', 'Collaboration'].map((feature) => (
          <div key={feature} className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold mb-2">{feature}</h3>
            <p className="text-sm text-slate-600">
              Powerful tools to streamline your workflow
            </p>
          </div>
        ))}
      </div>

      <div className="bg-slate-100 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Simple Pricing</h2>
        <p className="text-4xl font-bold text-blue-600 mb-2">$29<span className="text-lg text-slate-600">/month</span></p>
        <button className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold">
          Get Started
        </button>
      </div>
    </div>
  )
}

// Non-Profit Organization Preview
function NonProfitPreview() {
  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Earth Guardians</h1>
        <p className="text-xl">Protecting Our Planet, One Action at a Time</p>
      </div>

      <nav className="flex justify-center gap-6 mb-8 pb-4 border-b">
        <a href="#" className="hover:text-green-600">About</a>
        <a href="#" className="hover:text-green-600">Programs</a>
        <a href="#" className="hover:text-green-600">Events</a>
        <a href="#" className="hover:text-green-600">Donate</a>
        <a href="#" className="hover:text-green-600">Volunteer</a>
      </nav>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold">Beach Cleanup Day</h3>
            <p className="text-sm text-slate-600">March 15, 2024 - 9:00 AM</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold">Tree Planting Initiative</h3>
            <p className="text-sm text-slate-600">March 22, 2024 - 10:00 AM</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Make a Donation</h3>
          <p className="text-slate-600 mb-4">Support our mission</p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold">
            Donate Now
          </button>
        </div>
        <div className="bg-teal-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Volunteer With Us</h3>
          <p className="text-slate-600 mb-4">Join our community</p>
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectPreview

