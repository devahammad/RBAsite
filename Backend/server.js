const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // For making HTTP requests

const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
    // Extract form data from the request body
    const { username, email, mobile, message } = req.body;

    // Prepare message to send to Telegram
    const messageToTelegram = `New Contact Form Submission:\n\nName: ${username}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`;

    // Replace with your Telegram bot API endpoint
    const telegramApiUrl = 'https://api.telegram.org/bot7000835701:AAFZfPlO7R9n55pSORl1iIDWh29AVjHOZBo/sendMessage';

    // Send the message to Telegram using axios
    axios.post(telegramApiUrl, {
        chat_id: '5405301126', // Specify the chat ID here
        text: messageToTelegram
    })
    .then(response => {
        if (response.data.ok) {
            res.status(200).json({ success: true, message: 'Form submitted successfully!' });
        } else {
            res.status(500).json({ success: false, message: 'Form submission failed.' });
        }
    })
    .catch(error => {
        console.error('Error sending message to Telegram:', error);
        res.status(500).json({ success: false, message: 'An error occurred while submitting the form.' });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
