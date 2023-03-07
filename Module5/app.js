const express = require('express');

const app = express();
let port = 3000;
let host = 'localhost';

app.get('/about', (req,res) => {
    res.send('About page');
});

app.get('/contact', (req,res) => {
    res.send('Contact page');
});

app.get('/contact-us', (req,res) => {
    res.send('/contact');
});

app.get('/contact-me', (req, res) => {
    res.redirect(301, '/contact');
})

app.listen(port, host, () => {
    console.log('The server is running at port', port);

});