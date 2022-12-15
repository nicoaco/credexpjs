const express = require('express');
const path = require('path');
const app = express();
const mainRoutes = require('./routes/main');
const asociadosRoutes = require('./routes/asociados');

app.use(express.static(path.resolve(__dirname,'../public')));
app.set('view engine', 'ejs');

app.listen(80, console.log('Server running on port 80'));

app.use('/', mainRoutes);
app.use('/asociados', asociadosRoutes);
