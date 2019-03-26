const express = require('express');
const compress = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const fileUpload = require('express-fileupload');

//Swagger
// const swaggerUi = require("swagger-ui-express");
// const YAML = require("yamljs");
// const swaggerDocument = YAML.load("../../config/swagger/swagger.yaml");
//const swaggerPath = require("../../config/swagger/swagger.yaml")
const sizeLimit = '50mb';

const app = express();

app.use(helmet());
app.use(fileUpload());
app.use(cors());
// Use gzip
app.use(compress());

// get information from html forms
app.use(bodyParser.json({limit: sizeLimit}));
app.use(bodyParser.urlencoded({
	limit: sizeLimit,
	extended: true
}));

// read cookies (needed for auth)
app.use(cookieParser());

//api document
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Make app accessible to others
module.exports = app;