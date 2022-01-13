const app = require('./app');
const http = require('http');
const port = process.env.PORT || 8080;


//http server
const httpServer = http.createServer(app);

httpServer.listen(port, () => {
    console.log(`Server http is running on port ${port}.`)
})

module.exports = {
    httpServer,
};