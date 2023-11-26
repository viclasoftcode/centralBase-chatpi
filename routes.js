const hierbaMala = require('./components/hierbaMala/network.hierbamala');

const routes = function(server){
    server.use('/api/hierbamala',hierbaMala)
}

module.exports = routes