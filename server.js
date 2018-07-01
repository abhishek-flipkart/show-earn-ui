var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Working on '+ port);
});

app.use(express.static('dist'));