require('dotenv').config()
console.log("Chai");
var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('helulo world')
}) 
app.get('/twitter',(req,res)=>{
  res.send('hiteshdotcom')
})

app.listen(process.env.PORT,()=>{
  console.log(`Example app listeningon port ${port}`)
}) 