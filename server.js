const http = require('http');
const debug = require('debug')('node-angular');
const app = require('./backend/app');

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
	console.log("Listening on http://localhost:" + PORT);
});
