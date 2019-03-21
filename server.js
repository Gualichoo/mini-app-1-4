const express = require ('express')
const app = express();
const bodyParser = require('body-parser');




app.use(express.static(__dirname + '/client/dist'));
app.use(function(req, res, next) {
  console.log(req.method , req.url, JSON.stringify(req.body));
  next();
});

app.use(bodyParser.json());

app.get('/', function (req,res){
//console.log(res);
  res.status(200);
});

// app.post('/', function (req, res) {
//   res.status(200);
//   res.end();
// });

const port = 3000;

app.listen(port, function (){
  console.log(`listening on port ${port}`);
})


