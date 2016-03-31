/**
 * Created by elad.katz on 31/03/2016.
 */

"use strict";
var express = require('express');
var router = express.Router();

var db = require('./db');

/* GET users listing. */
router.get('/', function (req, res, next) {

    db.Product.find().then(result => {
        res.json(result);

    });
});

router.get('/:id', function (req, res, next) {

    db.Product.findById(req.params.id).then(result => {
        res.json(result);

    });
});


router.post('/', function (req, res, next) {

    var data = req.body;


    var product = new db.Product(data);
    product.save((result) => {
        res.json(result);
    });


});

router.delete('/:id', function (req, res, next) {

    db.Product.remove({"_id" : req.params.id}).then(result => {
        res.json(result);

    });
});

router.put('/:id', function (req, res, next) {


    db.Product.findOneAndUpdate({"_id" : req.params.id}, req.body).then(result => {
        res.json(result);

    });

});


module.exports = router;







