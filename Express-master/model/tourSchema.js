var mongoose= require("mongoose");
var Schema= mongoose.Schema;
var tourschema = new Schema({
	title :String,
	description:String,
	urlToImage:String
})

module.exports = mongoose.model("tour",tourschema)