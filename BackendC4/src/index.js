require('dotenv').config()

const app = require('./app')
require('./database')

async function main(){
    await app.listen(app.get('port'))
    console.log('El servidor esta corriendo en le puerto ' + app.get('port'))
}

main()