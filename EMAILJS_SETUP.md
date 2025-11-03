# EmailJS Setup Guide

Follow these steps to connect your contact form to send emails:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps for your email provider
5. Once connected, you'll see your **Service ID** (copy this)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Contact Form

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
You have a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your Lumina Web contact form.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (also called API Key)
3. Copy this key

## Step 5: Add Environment Variables

Create a `.env` file in your project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important:** Replace the placeholder values with your actual credentials from EmailJS.

## Step 6: Update .gitignore

Make sure `.env` is in your `.gitignore` file (it should already be there) to keep your credentials secure.

## Step 7: Test the Form

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email inbox for the message!

## Troubleshooting

- **Form not sending:** Check that all environment variables are set correctly
- **Email not received:** Check your spam folder and verify EmailJS service connection
- **CORS errors:** Make sure your domain is added to EmailJS allowed domains (Account → General → Allowed Domains)

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Standard support

For production use, consider upgrading if you expect more traffic.

