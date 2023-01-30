const platos = require('../database');

module.exports={
    index: function(req, res, next) {
        res.render('index', { 
          platos,
          title: 'Pimienta & Sal' });
    }
}