var express = require("express");


var app = express();

app.use(express.static('public'));
app.get("/", function(req, res){
    res.render("index.ejs");
});

app.listen(process.env.PORT, function(){
    console.log("Server running on port 3000");
});
