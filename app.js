const express = require('express');
const db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller')

const app = express();

db.sync();
app.use(require('body-parser'));
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
app.listen(process.env.APP_PORT, function() {
    console.log("App is listening on 4000");
})