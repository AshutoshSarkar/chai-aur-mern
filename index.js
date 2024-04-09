const express = require('express');
require('dotenv').config();
const app = express();

app.get('/home', (req, res) => {
  res.send('Hello Ashutosh!');
});

app.get('/about', (req, res) => {
    res.send('About page');
    });

app.get('/contact', (req, res) => {
    res.send('Contact page');
    });

const port=process.env.PORT 
app.listen(port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});