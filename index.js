const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const {api} = require('./api');
const cors = require('cors');

/** Get port from environment and store in Express. */
const port = process.env.PORT || "3000";
app.set("port", port);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.use('/api', api);


app.use(express.static('../angular/CubanBookingUI/dist/'));


/** Create HTTP server. */
const server = http.createServer(app);

/** Listen on provided port, on all network interfaces. */
server.listen(port);

/** Event listener for HTTP server "listening" event. */
server.on("listening", () => {
    console.log(`Listening on port:: http://localhost:${port}/`);
});





