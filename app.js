const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", function(req, res){
res.end("<a href=\"www.google.com\"> Google</a>");
});



app.post('/', function(req, res){
    console.log(req.body.email);
    res.end("success");

});












app.listen(3000, function(){
console.log("listening on port 3000");
}); 