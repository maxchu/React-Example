"use strict";

let express = require('express'),
    compression = require('compression'),
    content = require('./server/content'),
    app = express();

app.set('port', process.env.PORT || 5000);

app.use(compression());

//app.use('/', express.static(__dirname + '/build'));

// Adding CORS support
app.all('*', function (req, res, next) {
    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
        next();
    }
});

console.log(content.getContent);
app.get('/content', content.getContent);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});