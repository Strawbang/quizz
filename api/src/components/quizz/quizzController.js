const quizzService = require('./quizzService');

const create = async (req, res) => {
    try {
        const response = await quizzService.create(req.body);
        await res.status(response.status).send(response.data);
    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};

const read = async (req, res) => {
    try {
        const response = await quizzService.read(req.body);
        await res.status(response.status).send(response.data);
    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};

const readAll = async (req, res) => {
    try {
        const response = await quizzService.readAll();
        await res.status(response.status).send(response.data);
    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};

module.exports = {
    create,
    read,
    readAll,
}