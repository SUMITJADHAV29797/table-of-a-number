const express = require ("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})
app.post("/", function (req, res) {
  var num = Number(req.body.number);
  var tableofnumber = [];
  for (i=1; i<11; i++) {
    tableofnumber.push(num * i);
  }

  var output = '<h1>Table</h1>';
  for (i=0; i<10; i++) {
    output += '<h1>'+tableofnumber[i]+'</h1>';
  }
  console.log("output:", output);
  res.send(output);
})
app.listen(3000, function(){
  console.log("server is up");
})
