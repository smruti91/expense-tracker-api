const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');
const userRoute = require('./routes/users/usersRoute');


const app = express();
dotenv.config();
//dbConnect
dbConnect();
//middleware
app.use(express.json());
//routers
app.use('/api/users',userRoute);

//Error handlers
app.use(notFound);
app.use(errorHandler);
module.exports = app;

