/**
 * Created by elad.katz on 31/03/2016.
 */

"use strict";

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/comsayv');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    price: Number,
    category: String,
    name: String,
    type: String,
    columns: [Number]
});

var Product = mongoose.model('Product', ProductSchema);

//var p1 = new Product;
//
//p1.name = "name";
//p1.category = "category";
//p1.price = 100;
//p1.type = "type";
//p1.columns = [1,2];

var products =
    [
        {price: 39, category: "טלפון נייח", name: "חבילת בנק 002 דקות יעדים ניידים"},
        {price: 1, category: "שיחות בינלאומיות", name: "סינגפור מבצע תקשורת", type: "perDuration", columns: [2, 1]},
        {price: 1, category: "שיחות בינלאומיות", name: "שוויץ מבצע תקשורת", type: "perDuration", columns: [2, 1]},
        {
            price: 1,
            category: "שיחות בינלאומיות",
            name: "שוויץ -סלולארי מבצע תקשורת",
            type: "perDuration",
            columns: [2, 1]
        },
        {price: 1, category: "שיחות בינלאומיות", name: "בריטניה מבצע תקשורת", type: "perDuration", columns: [2, 1]},
        {price: 1, category: "שיחות בינלאומיות", name: "בריטניה -סלולארי חבילת בנק דקות יעדים ניידים 002"},
        {
            price: 1,
            category: "שיחות בינלאומיות",
            name: "בריטניה -סלולארי חבילת בנק",
            type: "perDuration",
            columns: [2, 1]
        },
        {price: 1, category: "שיחות בינלאומיות", name: "רוסיה מבצע תקשורת", type: "perDuration", columns: [2, 1]},
        {
            price: 1,
            category: "שיחות בינלאומיות",
            name: "רוסיה -סלולארי מבצע תקשורת",
            type: "perDuration",
            columns: [2, 1]
        },
        {price: 1, category: "שיחות בינלאומיות", name: "דרום אפריקה מבצע תקשורת", type: "perDuration", columns: [2, 1]},
        {price: 1, category: "שיחות בינלאומיות", name: "אירלנד מבצע תקשורת", type: "perDuration", columns: [2, 1]},
        {
            price: 1,
            category: "שיחות בינלאומיות",
            name: "דרום אפריקה -סלולארי מבצע תקשורת",
            type: "perDuration",
            columns: [2, 1]
        },
        {price: 1, category: "שיחות בינלאומיות", name: "יוון מבצע תקשורת", type: "perDuration", columns: [2, 1]},
        {price: 1, category: "שיחות בינלאומיות", name: "גרמניה מבצע תקשורת", type: "perDuration", columns: [2, 1]},
        {price: 89, category: "אינטרנט", name: "lsda-04  בנדל", type: 'fixedPrice', columns: [0]},
        {price: 20, category: "אינטרנט", name: "-adsl 40-", type: 'fixedPrice', columns: [0]},
        {price: 20, category: "אינטרנט", name: "lsda-51-מבצע", type: 'fixedPrice', columns: [0]},
        {price: 30, category: "אינטרנט", name: "fix ip 2.5-", type: 'fixedPrice', columns: [0]},


        {price: 20, category: "אינטרנט", name: "5-adsl- יוזר בודד", type: 'fixedPrice', columns: [0]},
        {price: 0, category: "אינטרנט", name: "צריכת חשמל -רבע ארון 4A"},
        {price: 69, category: "אינטרנט", name: "40-adsl בנדל בזק 3 שנים עסקי-קיים"},
        {price: 20, category: "אינטרנט", name: "15-adsl בנדל בזק 3 שנים"},
        {price: 0, category: "אינטרנט", name: "-Easylink EDi חודשי"},
        {price: 10, category: "אינטרנט", name: "1G -תיבת דואר ללקוח ללא יוזר"},
        {price: 0, category: "אינטרנט", name: "אירוח רבע ארון (12U) כולל 4 אמפר חיוב יחסי"},
        {price: 800, category: "אינטרנט", name: "קו תשתית בזק METRO 10M/5"}

    ];


products.forEach(function (p) {
    var product = new Product;
    product.name = p.name;
    product.price = p.price;
    product.category = p.category;
    product.type = p.type;
    product.columns = p.columns;

    product.save();
});







