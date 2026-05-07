const mongoose = require('mongoose');
const urlDB = 'mongodb://localhost:27017/'
const express = require('express');
const path = require('node:path');
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
app.use(express.static(path.join(__dirname, 'client/dist')))
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
})
//app.listen(port, () => {
//  console.log(`Example app listening on port ${port}`)
//  })
export default app
