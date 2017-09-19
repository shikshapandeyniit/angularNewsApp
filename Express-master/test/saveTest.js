var express= require('express');
var should = require('chai').should();
var app = require('../app.js')
var supertest = require('supertest')
var sinon = require('sinon')
var model = require('../model/tourSchema')

var server = supertest.agent("http://localhost:3000")

describe("save method",function(){

	it('respond',function(done){
		supertest(app)
		.post("/tour")
		.send({location:"assam",price:3300})
		.expect('Content-Type',/json/)
		.end(function(err,res){
			if(err) return done(err)
				res.body.should.have.property('location','assam')
			  res.body.should.have.property('price',3300)
			  done();
		})


		
	})
})
