'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const path = require('path');
const port = process.env.PORT || 3000;

const client = require('./routes/client');

app.set('views', __dirname + '/public/views');
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', client);

http.listen(port, () => {
    console.log('listening on 3 Stacks');
});
