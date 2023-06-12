require('dotenv').config({path: "../.env"});
const http = require('http');
const app = require('./app/app');
const mongoose = require('mongoose');

const connectDB = (connectionStr) => {
    console.log(connectionStr);
    return mongoose.connect(connectionStr)
}
const PORT = process.env.PORT || 8001;

const server = http.createServer(app);

connectDB(`${process.env.DB_STRING}/${process.env.DB_NAME}`)
    .then(() => {
        console.log('MongoDB Connected!!');
        server.listen(PORT, () => {
            console.log(`Server is connected on PORT: ${PORT}`);
        })
    })
    .catch((e) => console.log(e))