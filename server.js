/**
 * Created by pc hp on 30.10.2017.
 */
'use strict';

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const initScript = require('./config/initialize');

let fs = require('fs');
let cors = require('cors');

let swaggerTools = require('swagger-tools');
let jsyaml = require('js-yaml');
let serverPort = process.env.PORT || '3000';


// swaggerRouter configuration
let options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, '/api/controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
let spec = fs.readFileSync(path.join(__dirname,'/api/swagger/swagger.yaml'), 'utf8');
let swaggerDoc = jsyaml.safeLoad(spec);

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/school', {
  promiseLibrary: global.Promise, // require('bluebird')
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
})
  .then(() => {
  console.log('Start Mongoose...');

})
.catch(err => {
  console.log('App starting error: %O', err.stack);
});

const app = express();
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Enable CORS (for swagger editor)
  app.use(cors());

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());


  // Catch all other routes and return the index file
  app.all('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });


});
