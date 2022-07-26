const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

app.set('view engine', 'ejs');
app.set('views', './views');
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.urlencoded());
app.use('/', require('./routes/index'));

app.listen(port, (err) => {
    if (err) {
        console.log("Error in running server: ", err);
        return;
    }
    console.log("Server is running on port: ", port);
});