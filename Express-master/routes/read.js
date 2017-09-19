var express = require ('express');
var read = express.Router();
var tour= require('../model/tourSchema')


read.get('/tour',(req,res)=>{
	tour.find((err,data)=>{
		if(err)
		{
			console.log("error in get method")
		}
		else
		{
			console.log("get method");
		  res.json(data);
	  }
		})
})

module.exports= read;