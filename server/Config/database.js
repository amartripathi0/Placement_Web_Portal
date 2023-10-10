const mongoose = require('mongoose')
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/JOE ", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => { console.log("DB Conncetion Suceesful") })
        .catch((error) => {
            console.log("Issue in DB Conection")
            console.log(error.message)
            process.exit(1)
        })
}
module.exports = dbConnect;
