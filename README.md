# Lumina Web - Portfolio Website

A modern, responsive portfolio website built with React.js, Tailwind CSS, and React Router.

## Features

- 🎨 Modern, clean design with Tailwind CSS
- 📱 Fully responsive (mobile and desktop)
- 🚀 Fast performance with Vite
- 📄 Multiple pages: Home, About, Portfolio, Services, Contact
- 📧 Contact form ready for EmailJS integration

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **EmailJS** - Contact form backend (optional)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer with social links
│   └── ProjectCard.jsx # Reusable project card component
├── pages/
│   ├── Home.jsx        # Landing page with hero section
│   ├── About.jsx       # About page with skills
│   ├── Portfolio.jsx   # Portfolio grid
│   ├── Services.jsx    # Services and pricing
│   └── Contact.jsx     # Contact form
├── App.jsx             # Main app with routing
├── index.css           # Tailwind CSS imports
└── main.jsx            # React entry point
```

## Customization

### Colors

The default color scheme uses:
- Primary: Blue-600 (`#2563EB`)
- Secondary: Slate-800 (`#1E293B`)
- Background: Slate-50 (`#F8FAFC`)

You can customize colors in `tailwind.config.js` or by updating Tailwind classes in components.

### Content

- Update personal/business information in each page component
- Add your own project images and descriptions in `Portfolio.jsx`
- Modify services and pricing in `Services.jsx`
- Update social media links in `Footer.jsx`

### EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Update these values in `src/pages/Contact.jsx`:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID'
   const templateId = 'YOUR_TEMPLATE_ID'
   const publicKey = 'YOUR_PUBLIC_KEY'
   ```
6. Uncomment the `emailjs.send()` code block in the `handleSubmit` function

## License

This project is open source and available for personal or commercial use.

## Support

For questions or issues, please open an issue on GitHub or contact through the website's contact form.

