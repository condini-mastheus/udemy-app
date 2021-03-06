const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setup-controller');
const apiController = require('./controllers/api-controller');

const app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString(), {}).then(() => {}, (err) => { 
    console.log(err);
});

setupController(app);
apiController(app);

app.listen(port);
