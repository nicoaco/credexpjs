const path = require('path');

const mainController = {
index: (req,res)=> res.render(path.resolve(__dirname,'../views/index.ejs')),
nosotros: (req,res)=> res.render(path.resolve(__dirname,'../views/nosotros.ejs')),
contacto: (req,res)=> res.render(path.resolve(__dirname,'../views/contacto.ejs')),
servicios: (req,res)=> res.render(path.resolve(__dirname,'../views/servicios.ejs')),
//asociados: (req,res)=> res.sendFile(path.resolve(__dirname,'../views/asociados.html'))
}; 

module.exports = mainController;




