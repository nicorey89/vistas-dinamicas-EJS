const platos = require('../database');

module.exports={
    menu: (req, res) => {
        let detalleID = req.params.id;
        let plato = platos.find( plato => plato.id == detalleID)
        return res.render('detalleMenu', {
            plato,
            title: 'Pimienta & Sal'
        })
    }
}