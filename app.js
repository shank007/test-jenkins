var express = require('express');
var app = express();

app.get('/',function(req,res) {
  console.log("Hello World!! Test21!");
  res.send("Hello World!! Test21!");
});

app.listen(4000);
