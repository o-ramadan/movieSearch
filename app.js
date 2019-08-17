var express = require("express");
app = express();

var request = require("request");
app.set("view engine","ejs");

//Home Page
app.get("/",function(req,res){
    res.render("home");
});

//Page where search results are displayed
app.get("/results",function(req,res){
    var movie = req.query.moviename;
    var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + movie;
    request(url, function(error,response,body){
        if (!error && response.statusCode == 200){          
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});


app.listen(3000,function(){
    console.log("Movie App started");
});