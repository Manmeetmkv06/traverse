
const nodemailer = require('nodemailer');

// Set up your SMTP configuration (Gmail example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mehak28042005@gmail.com',  // Replace with your email
    pass: 'bqlf owrk pgtp sfht',      // Use an app password instead of your Gmail password (if using Gmail)
  },
});

// Define the email options
const mailOptions = {
  from: 'mehak28042005@gmail.com', // Replace with your email
  to: 'mishikabansal603@gmail.com', // Replace with a test recipient email
  subject: 'Cancellation Email from Nodemailer',
  text: 'This is a cancellation email sent from Nodemailer. hellllo',
  html: '<h1>Your tour has been successfully canceled.Thank You for booking with us....</h1>',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error sending test email:', error);
  }
  console.log('Test email sent:', info.response);
});