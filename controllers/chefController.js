
const { Chef } = require('../models');

const chefController = {};

chefController.getProfile = async (req, res) => {

    res.send("Esta api está funcionando correctamente, el endpoint devuelve algo...");
    
}

module.exports = chefController;