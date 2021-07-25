const express = require('express');
const app = express();
const path = require('path')


app.use('/', require('./controller/routes'));
app.use('/public', express.static(path.join(__dirname, './public')))
app.set('view engine', 'pug');

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});