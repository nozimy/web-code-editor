var Category = require('../models/category').Category;
var ServiceProduct = require('../models/serviceproduct').ServiceProduct;
var Product = require('../models/product').Product;
var util = require('util');
var async = require('async');
var Workshop = require('../models/workshop').Workshop;
var Page = require('../models/page').Page;
var postdata = require('postdata');
var mongoose = require('../lib/mongoose');
exports.get = function(req, res) {
	Page.find({}, function(err, articles) {
		if (!err) {
			console.log(articles);
			res.render('managerpages', {
				articles: articles
			});
		}
	});
};

exports.post = function(req, res) {
	postdata(req, res, function (err, data) {
		console.log(data);
		var page = new Page({
			pagetitle: data.title,
			alias: data.alias,
			content: data.body,
			source: data.source
		})
		page.save(function() {
			res.send();
		})
	});
};