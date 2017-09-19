var express = require('express');
var save = express.Router();
var tour = require('../model/tourSchema')

save.post('/tour',(req,res)=>{
	var newTour= new tour();
	newTour.title = req.body.title;
	newTour.description = req.body.description;
	newTour.urlToImage = req.body.urlToImage;
	newTour.save((err,data)=>{
	if(err)
	{
		console.log(err)
	}
	else
	{
		console.log(data)
		res.json(data);
	}
	})
})
module.exports=save;