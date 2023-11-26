const hierbaMalaStore   = require('./store.hierbamala')
const smtpServer        = require('../../services/smtp/smtpServer')

function addNewInfoHierbaMala (name,cellphone,product,flavor,quantity) {
    return new Promise( async (resolve,reject)=>{
        let numero = Number(quantity);
        // verifico si es una cantidad válida
        if(isNaN(numero)){
            console.log('No es una cantidad válida');
        }else{
            // enviar notificacion de venta exitosa
            const subject = `Un cliente quiere ordenar ${quantity} ${product} de ${flavor}`
            const body = `
                            <h1>Click en el link</h1>
                            <a href="https://wa.me/${cellphone}">Ir a la conversación</a>
                            <p>${name} con número de celular ${cellphone} quiere ordenar ${quantity} ${product}(s) de ${flavor}</p>
                            <h1>Click en el link</h1>
                            <a href="https://wa.me/${cellphone}">Ir a la conversación</a>
                        `
            await smtpServer.mailer('ronaldblancobalboa@gmail.com',subject,body)
        }
        const actualDate = new Date()
        const info = {name,cellphone,product,flavor,quantity,date:actualDate}
        const infoSaved = await hierbaMalaStore.addInfoHierbaMalaRequest(info)
        resolve(infoSaved)
    })
}

module.exports = {addNewInfoHierbaMala}