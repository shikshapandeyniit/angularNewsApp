var express= require('express');
var remove=express.Router();
var tour = require('../model/tourSchema')

remove.delete('/tour/:id',(req,res)=>{
	tour.findOneAndRemove({
		_id: req.params.id
	},(err,data)=>{
		if(err){
			console.log("error in delete method")
		}
		else{
			console.log("delete method")
			res.json(data)
		}
	})
})

module.exports= remove;