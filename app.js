var express = require('express');
var app = express();

app.get('/',function(req,res) {
  console.log("Hello World!! Test20!");
  res.send("Hello World!! Test20!");
});

app.listen(4000);
