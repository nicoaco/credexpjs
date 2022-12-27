const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const https = require('https');
const mainRoutes = require('./routes/main');
const asociadosRoutes = require('./routes/asociados');

app.use(express.static(path.resolve(__dirname,'../public')));
app.set('view engine', 'ejs');

app.enable('trust proxy')
app.use(function(request, response, next) {

    if (process.env.NODE_ENV != 'development' && !request.secure) {
       return response.redirect("https://" + request.headers.host + request.url);
    }

    next();
})

app.listen(80, console.log('Server running on port 80'));

https.createServer({
    cert: fs.readFileSync('/etc/letsencrypt/live/credisol.coop.ar/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/credisol.coop.ar/privkey.pem')
  },app).listen(443, function(){
     console.log('Servidor https correindo en el puerto 443');
 });

app.use('/', mainRoutes);
app.use('/asociados', asociadosRoutes);

app.use((req, res, next) => {
    res.status(404).render(path.resolve(__dirname,'./views/notFound.ejs'));
   })

