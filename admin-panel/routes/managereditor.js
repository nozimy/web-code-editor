var Category = require('../models/category').Category;
var ServiceProduct = require('../models/serviceproduct').ServiceProduct;
var Product = require('../models/product').Product;
var util = require('util');
var async = require('async');
var Workshop = require('../models/workshop').Workshop;
var Article = require('../models/article').Article;
var Page = require('../models/page').Page;
var postdata = require('postdata');
var fs = require('fs');
exports.get = function(req, res) {
	
	fs.readFile(req.query.file, 'utf8', function(err, contents) {
		if (err) {
			console.log(err);		
		}	    
		console.log(contents);
		res.render('managereditor', {file: req.query.file, content: contents});
	});
}
exports.post = function(req, res) {
	postdata(req, res, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            var file = data.file;
            var content = data.content;
            fs.writeFileSync(file, content, 'utf-8');
            res.send({});
    	}
    });
}