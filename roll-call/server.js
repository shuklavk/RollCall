const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const db = require('./database/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// An api endpoint that returns a short list of items
app.get('/api/getEmailList', (req,res) => {
    db.selectAll((err, response) => {
      if(err){
        console.log(err);
      }else{
        const arrOfEmail = response.map(ele => {
          return ele.email;
        })
        res.send(arrOfEmail);
      }
    })

    // res.json(list);
    console.log('Sent list of emails');
});

app.post('/api/newUser', (req,res) => {
  console.log(req.body);
  db.insertPerson(req.body,(err, success) => {
    if(err){
      console.log(err);
    }else{
      res.send(success);
    }
  })
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);