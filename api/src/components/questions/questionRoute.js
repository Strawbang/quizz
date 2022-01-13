const controller = require('./questionController');

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept',
        );
        next();
    });

    app.route('/api/questionbyid')
        .post(controller.readById);

    app.route('/api/question')
        .post(controller.create)
        .get(controller.readAll);
};