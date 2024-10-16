const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const dbConnect = require('./config/database');
const router = require('./routes/user')

dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// db connection
dbConnect()

app.use("/api", router)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});