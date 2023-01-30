const fs = require ("fs");
const platos = JSON.parse(
    fs.readFileSync("./database/platos.json", 'utf-8')
    );

module.exports = platos;    