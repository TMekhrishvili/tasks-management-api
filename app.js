const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const tasks = require('./routes/tasks');
require('dotenv').config();


// middlewares
app.use(express.json());
app.use('/api/v1', tasks);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, console.log(`server is listening on port ${process.env.PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();