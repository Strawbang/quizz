const questionsService = require('./questionsService');

const create = async (req, res) => {
    try {
        const response = await questionsService.create(req.body);
        await res.status(response.status).send(response.data);
    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};

const read = async (req, res) => {
    try {
        const response = await questionsService.read(req.body);
        await res.status(response.status).send(response.data);
    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};

const readById = async (req, res) => {
    try {
        const response = await questionsService.readById(req.body);
        await res.status(response.status).send(response.data);
    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};

const readAll = async (req, res) => {
    try {
        const response = await questionsService.readAll();
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
    readById,
    readAll,
}