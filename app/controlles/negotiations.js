const { httpError } = require('../helpers/handleError')
const negotiationModel = require('../models/negotiations')

const createItems = async (req, res) => {
    try {
        const negotiations = req.body.data; // Aquí esperamos un array de objetos
        
        const resDetails = await negotiationModel.insertMany(negotiations);

        res.send({ data: resDetails });
    } catch (e) {
        httpError(res, e);
    }
}

module.exports = { createItems }