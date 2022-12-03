var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var host = 'localhost';
var port = 3000;

app.use(function (req, res, next) {
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/index.html', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end;
});

app.get('/about.html', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end;
});

app.get('/services.html', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end;
});

app.get('/contact.html', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end;
});

if (module === require.main) {
    // Start the server
    const server = app.listen(8080, () => {
        const port = server.address().port;
        console.log(`App listening on port ${port}`);
    });
}

module.exports = app;