const hierbaMalaStore = require('./store.hierbamala')

function addNewInfoHierbaMala (name,cellphone,product,flavor,quantity) {
    return new Promise( async (resolve,reject)=>{
        const actualDate = new Date()
        const info = {name,cellphone,product,flavor,quantity,date:actualDate}
        const infoSaved = await hierbaMalaStore.addInfoHierbaMalaRequest(info)
        resolve(infoSaved)
    })
}

module.exports = {addNewInfoHierbaMala}