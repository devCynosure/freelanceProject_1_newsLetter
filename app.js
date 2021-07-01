const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
res.end("<a href=\"www.google.com\"> Google</a>");
});



app.post('/', function(req, res){
    res.end("success!!");
});












app.listen(3000, function(){
console.log("listening on port 3000");
}); 