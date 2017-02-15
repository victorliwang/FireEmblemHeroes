// Set up
var express = require('express');
var app = express(); // create our app w/ express
var mongoose = require('mongoose'); // mongoose for mongodb
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');

// Configuration
mongoose.connect('mongodb://localhost/FireEmblemHeroes');

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Models
var Ally = mongoose.model('Ally', {
    name: String,
    rarity: Number, //1-5
    level: Number, //1-40
    attribute: String, //red, green, blue, neutral
    weapon: String, //sword, lance, tome, axes, beast, bow, staff, shuriken, etc...
    movement: String,
});

// Routes

// Get reviews
app.get('/api/allies', function(req, res) {

    console.log("fetching allies");

    // use mongoose to get all reviews in the database
    Ally.find(function(err, allies) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(allies); // return all reviews in JSON format
    });
});

// create ally and send back all allies after creation
app.post('/api/allies', function(req, res) {

    console.log("creating ally");

    // create an ally, information comes from request from Ionic
    Ally.create({
        name: req.body.name,
        rarity: req.body.rarity, //1-5
        level: req.body.level, //1-40
        attribute: req.body.attribute, //red, green, blue, neutral
        weapon: req.body.weapon, //sword, lance, tome, axes, beast, bow, staff, shuriken, etc...
        movement: req.body.movement,
    }, function(err, ally) {
        if (err)
            res.send(err);

        // get and return all the allies after you create another
        Ally.find(function(err, allies) {
            if (err)
                res.send(err)
            res.json(allies);
        });
    });

});

// delete a review
app.delete('/api/allies/:ally_id', function(req, res) {
    Ally.remove({
        _id: req.params.ally_id
    }, function(err, ally) {

    });
});


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
