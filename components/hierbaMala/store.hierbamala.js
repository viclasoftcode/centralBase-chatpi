const ModelHierbaMala = require('./model.hierbamala');

async function addInfoHierbaMalaRequest(info){
    console.log(info,"asdfasdfasdf");
    const newInfo = new ModelHierbaMala(info)
    const infoSaved = newInfo.save()
    return infoSaved
}

module.exports = {addInfoHierbaMalaRequest}