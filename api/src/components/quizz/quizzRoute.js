const controller = require('./quizzController');

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept',
        );
        next();
    });

    app.route('/api/quizz')
        .get(controller.readAll)
        .post(controller.create);
};