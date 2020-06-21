const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const appConfig = require('./appConfig');
const mongoose = require('mongoose');
const cors = require('cors')
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const routeLoggerMiddleware = require('./middlewares/appErrorHandler');
const globalErrorMiddleware = require('./middlewares/appErrorHandler');

//middlewares
app.use(morgan('combined'));
app.use(helmet())
app.use(bodyParser.json({
    limit: appConfig.maxUploadLimit
}));
app.use(bodyParser.urlencoded({ 
    limit: appConfig.maxUploadLimit,
    parameterLimit: appConfig.parameterLimit,
    extended: false 
}));
app.use(cookieParser());

app.use(globalErrorMiddleware.globalErrorHandler);
app.use(cors())

//To restrict API number of calls
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 50000, // limit each IP to 500 requests per windowMs
    message: "Too many request. Please try after one minute"
});
app.use(limiter);

//static files
app.use(express.static(path.join(__dirname, 'client')));

//register schema
require('./modules/student/studentModel');
require('./modules/address/adressModel');

//register routes
let baseUrl = `${appConfig.apiVersion}`
app.use(`${baseUrl}/student`, require('./modules/student/studentRoute'));
app.use(`${baseUrl}/address`, require('./modules/address/addressRoute'));


app.use(routeLoggerMiddleware.globalNotFoundHandler);
//mongoDB connection
const connect = mongoose.connect(appConfig.mongoURI,
    {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex: true, 
      useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.listen(port = appConfig.port, () => {
  console.log(`Server Running at ${port}`)
});