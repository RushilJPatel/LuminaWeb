import { Link } from 'react-router-dom'

function Services() {
  const services = [
    {
      title: 'Basic Website Package',
      description:
        'Perfect for small businesses getting started online. Includes a responsive website with up to 5 pages, contact form, and basic SEO setup.',
      features: [
        'Up to 5 pages',
        'Mobile responsive design',
        'Contact form',
        'Basic SEO optimization',
        'Social media integration',
      ],
      price: 'Starting at $150',
    },
    {
      title: 'Custom Design Package',
      description:
        'Tailored solutions for businesses that need a unique design and advanced features. Includes custom branding, animations, and advanced functionality.',
      features: [
        'Unlimited pages',
        'Custom design & branding',
        'Advanced animations',
        'CMS integration',
        'Advanced SEO',
        'Performance optimization',
      ],
      price: 'Starting at $300',
    },
    {
      title: 'E-commerce Setup',
      description:
        'Complete e-commerce solution with shopping cart, payment processing, inventory management, and admin dashboard.',
      features: [
        'Product catalog',
        'Shopping cart & checkout',
        'Payment gateway integration',
        'Inventory management',
        'Order tracking',
        'Admin dashboard',
      ],
      price: 'Starting at $500',
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800">
          Services
        </h1>
        <p className="text-center text-slate-600 mb-12 text-lg">
          Choose the package that fits your needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6">{service.description}</p>

              <ul className="mb-6 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-2xl font-bold text-blue-600 mb-4">
                  {service.price}
                </p>
                <Link
                  to="/contact"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

