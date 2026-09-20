# EmailJS Setup Guide for Quote Form

This guide will help you set up EmailJS to send form submissions from your React application to your Gmail inbox.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create an Email Service

1. After logging in, go to the **Email Services** section
2. Click **Add New Service**
3. Select **Gmail** as your email service
4. Click **Connect Account** and authorize EmailJS to access your Gmail
5. Give your service a name (e.g., "Gmail Service")
6. Copy the **Service ID** - you'll need this for your environment variables

## Step 3: Create an Email Template

1. Go to the **Email Templates** section
2. Click **Create New Template**
3. Give your template a name (e.g., "Quote Request Template")
4. Copy the **Template ID** - you'll need this for your environment variables

### Template Subject
```
New Quote Request from {{fullName}}
```

### Template Content (HTML)
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #A44C4C; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #A44C4C; }
        .value { margin-top: 5px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Demande de Devis</h1>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Nom complet:</div>
                <div class="value">{{fullName}}</div>
            </div>
            <div class="field">
                <div class="label">Email:</div>
                <div class="value">{{businessEmail}}</div>
            </div>
            <div class="field">
                <div class="label">Type de service:</div>
                <div class="value">{{serviceType}}</div>
            </div>
            <div class="field">
                <div class="label">Budget estimé:</div>
                <div class="value">{{estimatedBudget}}</div>
            </div>
            <div class="field">
                <div class="label">Description du projet:</div>
                <div class="value">{{projectDescription}}</div>
            </div>
        </div>
        <div class="footer">
            <p>Cette demande a été envoyée via le formulaire de contact de votre site.</p>
        </div>
    </div>
</body>
</html>
```

### Template Variables
Make sure these variables are defined in your template:
- `{{fullName}}` - Full name of the sender
- `{{businessEmail}}` - Email address of the sender
- `{{serviceType}}` - Type of service requested
- `{{estimatedBudget}}` - Estimated budget
- `{{projectDescription}}` - Project description
- `{{reply_to}}` - This is crucial for the "Reply" button in Gmail

### Reply-To Configuration
1. In the template settings, ensure the **Reply To** field is set to `{{reply_to}}`
2. This ensures that when you click "Reply" in Gmail, it will reply to the sender's email

## Step 4: Get Your Public Key

1. Go to **Account Settings** → **General**
2. Copy your **Public Key** (also called API Key)
3. You'll need this for your environment variables

## Step 5: Configure Environment Variables

Update your `.env` file with your EmailJS credentials:

```env
SKIP_PREFLIGHT_CHECK=true
DISABLE_ESLINT_PLUGIN=true

# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

Replace the placeholder values with your actual EmailJS credentials.

## Step 6: Install EmailJS Package

Run the following command in your project directory:

```bash
npm install @emailjs/browser
```

Or if you use yarn:

```bash
yarn add @emailjs/browser
```

## Step 7: File Attachment Setup (Optional)

If you want to support file attachments:

1. In your EmailJS template, enable **File Attachments** in the template settings
2. The current implementation uses base64 encoding for file attachments
3. Note: EmailJS free tier has limitations on file size (typically 1MB per file)

## Step 8: Test Your Setup

1. Restart your development server after updating the `.env` file
2. Open your application and test the quote form
3. Check your Gmail inbox for the test email
4. Verify that clicking "Reply" sends the email to the correct sender address

## Troubleshooting

### Common Issues:

1. **"EmailJS configuration is missing" error**
   - Ensure all three environment variables are set in `.env`
   - Restart your development server after updating `.env`

2. **Email not received**
   - Check your Gmail spam folder
   - Verify your EmailJS service is connected to Gmail
   - Check EmailJS dashboard for error logs

3. **Reply button doesn't work correctly**
   - Ensure `reply_to` variable is set to the sender's email
   - Check that the template's Reply-To field is configured as `{{reply_to}}`

4. **File attachment not working**
   - Verify file attachment is enabled in EmailJS template settings
   - Check file size limits (free tier: 1MB)
   - Ensure the file is properly converted to base64

## Security Notes

- Never commit your `.env` file to version control
- Add `.env` to your `.gitignore` file
- For production, use environment variables provided by your hosting platform
- EmailJS free tier has monthly limits (200 emails/month)

## Production Deployment

When deploying to production:

1. Set the environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Use the same variable names: `REACT_APP_EMAILJS_SERVICE_ID`, `REACT_APP_EMAILJS_TEMPLATE_ID`, `REACT_APP_EMAILJS_PUBLIC_KEY`
3. Test the form in your production environment

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/tutorial/adding-contact-form-to-react-website)
- [EmailJS Pricing](https://www.emailjs.com/pricing)
