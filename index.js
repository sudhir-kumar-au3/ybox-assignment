const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const competitionRoute = require('./routes/competitionRoute')
// middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

//routes
app.use('/', competitionRoute);
// output listening port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});