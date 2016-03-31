/**
 * Created by elad.katz on 31/03/2016.
 */

"use strict";
var express = require('express');
var router = express.Router();
var db = require('./db');


/* GET users listing. */
router.get('/', function (req, res, next) {

    db.Category.find().then(result => {
        res.json(result);

    });
});

router.post('/', function (req, res, next) {

    var data = req.body;


    var category = new db.Category(data);
    category.save((result) => {
        res.json(result);
    });


});


module.exports = router;







