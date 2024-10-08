const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// OAuth2 client setup
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  "YOUR_CLIENT_ID", // Replace with your Client ID
  "YOUR_CLIENT_SECRET", // Replace with your Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

// Set the refresh token
oauth2Client.setCredentials({
  refresh_token: "YOUR_REFRESH_TOKEN" // Replace with your Refresh Token
});

// POST route to handle the email subscription
app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  // Get the access token
  oauth2Client.getAccessToken().then(({ token }) => {
    // Nodemailer transport configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'mailwajirapani@gmail.com@gmail.com', 
        clientId: "518345421830-jpub607crh57d9eo9mlrmmhkerfcjpjk.apps.googleusercontent.com", 
        clientSecret: "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", 
        refreshToken: "1//047Qj0CvE2KuBCgYIARAAGAQSNwF-L9Ir1abIBa0xPhqY77uzTv6TggPlUoTK48C6nKXzPVjLPzECVZnW2dD_fmZRO2qnsiFAHVc", 
        accessToken: token,
      }
    });

    // Email options
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Welcome to DEV@Deakin Newsletter',
      text: `Thank you for subscribing, ${email}!`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error:', error);
        return res.status(500).send('Failed to send email');
      }
      res.status(200).send('Subscription successful, welcome email sent!');
    });
  }).catch((error) => {
    console.error('Failed to get access token:', error);
    res.status(500).send('Failed to send email');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
