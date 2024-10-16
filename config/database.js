const mongoose = require('mongoose');
const dotenv = require('dotenv');
// import donenv from 'dotenv'

dotenv.config();

const dbConnect = async () => {
    try {
        const result = await mongoose.connect(process.env.MONGO_URL)
        console.log('Database connected');
    } catch (error) {
        console.log("ERROR OCCURED WHILE CONNECTING TO MONGODB DATABASE")
        console.log(error);
    }
}


module.exports = dbConnect;