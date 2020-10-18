var express = require('express'),
    bodyParser = require('body-parser'),
    movies = require('../routes/movies'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/movies', movies.findAll);
app.get('/mymovies', movies.findByOwnCountry);
app.get('/movies/:country', movies.findByCountry);

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
