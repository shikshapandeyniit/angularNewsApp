/*var express = require('express')
var expect = require('chai').expect;
var app = require('../app.js');
var supertest = require('supertest')
var sinon = require('sinon')
var model =require('../model/tourSchema')
var modelStub = sinon.stub(model,'find')
var server = supertest.agent('http://localhost:3000')

describe('getTestCases',()=>{
	it('respond',function(done){
		modelStub.yields(null,[{title:"gzb" , description:200}])
		supertest(app)
		.get('/tour')
		.expect('Content-Type',/json/)
		.end(function(err,res){
			if(err)return done (err);
			expect(res.body[0].location).to.be.equal("gzb");
			expect(res.body[0].price).to.be.equal(200);
			done();
			
		})
	})


})

*/