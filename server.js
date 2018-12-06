var express = require("express");
var app = express(); // function olarak kullandık
var PORT = 3000;
//localhost:3000
/*
app.get("/",function(req,res){
    res.send("merhaba express!!!");
})
*/

/*var middleleware ={
    requireAuthentication : function(req, res, next){
        console.log("özel root girildi!!");
        next();
    }, 
    logger : function(req,res,next){
        console.log(req.method + " " + req.originalUrl);
        next();
    }
}
*/

var middleleware = require("./middleware");

app.use(middleleware.logger);

app.get("/hakkimda",middleleware.requireAuthentication, function(req,res){
    res.send("Hakkımda sayfası");
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT , function(){
    console.log("Express server " + PORT + "nolu portta çalışıyor...");
});