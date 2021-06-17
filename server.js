const http = require('http');
const debug = require('debug')('node-angular');
const app = require('./backend/app');


app.listen(process.env.PORT || 4200, function(){
  console.log("Node app is running at localhost:" + app.get('port'));
});
