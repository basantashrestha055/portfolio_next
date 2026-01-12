import { mailTemplate } from './emailTemplate.js';

import { resend } from '@/lib/resend';

export const sendMail = async ({
  firstname,
  lastname,
  email,
  phone,
  message,
}) => {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'basanta.shrestha055@gmail.com',
    subject: 'Contact Form Submission',
    html: mailTemplate(firstname, lastname, email, phone, message),
  });

  if (error) {
    console.log('Error sending email:', error.message);
    throw new Error('Failed to send email. Please try again.');
  }

  console.log('Email sent successfully:', data);
};
