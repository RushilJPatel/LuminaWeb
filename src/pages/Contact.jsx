import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // EmailJS configuration
    // Replace these with your actual EmailJS credentials
    const serviceId = 'YOUR_SERVICE_ID'
    const templateId = 'YOUR_TEMPLATE_ID'
    const publicKey = 'YOUR_PUBLIC_KEY'

    try {
      // Uncomment and configure when you have EmailJS set up
      /*
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      )
      */
      
      // For now, simulate success
      setTimeout(() => {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 3000)
      }, 1000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800">
          Get In Touch
        </h1>
        <p className="text-center text-slate-600 mb-12 text-lg">
          Have a project in mind? Let's talk about it!
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending'
                ? 'Sending...'
                : status === 'success'
                ? 'Message Sent! ✓'
                : status === 'error'
                ? 'Error - Please Try Again'
                : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-center">
                Thank you! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>

        {/* EmailJS Setup Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">
            EmailJS Setup Required
          </h3>
          <p className="text-sm text-blue-800 mb-3">
            To enable the contact form, you need to:
          </p>
          <ol className="text-sm text-blue-800 list-decimal list-inside space-y-1">
            <li>Create a free account at emailjs.com</li>
            <li>Create an email service and template</li>
            <li>Update the credentials in Contact.jsx (serviceId, templateId, publicKey)</li>
            <li>Uncomment the emailjs.send() code block</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Contact

