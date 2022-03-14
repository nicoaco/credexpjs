const path = require('path');

const asociadosController = {
asociados: (req,res)=> res.render(path.resolve(__dirname,'../views/asociados.ejs'))
}; 

module.exports = asociadosController;
