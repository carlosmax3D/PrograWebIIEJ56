const mongoose = require('mongoose');
const urlDB = 'mongodb://localhost:27017/'
const express = require('express');
const app = express(); 
const port = process.env.PORT;
const usersRoute = require("./usersRoute");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use('/static', express.static('public'));
app.use('/api/users', usersRoute);
app.get('/api', (req, res) => {
  res.send('Hello World!')
})
app.get(/.*test$/, function(req, res) {
  res.send('<h1>Entraste usando el patron test!</h1>');
});
mongoose.connect(urlDB).then(()=>{
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  })}
).catch(()=>{
  console.dir("Ocurrio un error");
})