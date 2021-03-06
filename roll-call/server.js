const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const db = require('./database/index');
const upload = require('./upload');
const cors = require('cors');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));


// 9) Here is the /upload in server.js
app.post('/upload', upload)


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

app.get('/api/getUserList', (req,res) => {
  db.selectAll((err, response) => {
    if(err){
      console.log(err);
    }else{
      res.send(response);
    }
  })

  // res.json(list)
});

app.get('/api/getLoginList', (req,res) => {
  db.selectAll((err, response) => {
    if(err){
      console.log(err);
    }else{
      const objOfLoginInfo = {};
      for(let i =0; i < response.length; i++){
        let emailOfUser = (response[i].email);
        let password = response[i].password;
        objOfLoginInfo[emailOfUser] = password;
      }
      res.send(objOfLoginInfo);
    }
  })

  // res.json(list);
  console.log('Sent list of logins');
});

app.get('/api/getClasses', (req,res) => {
  db.selectAllClasses((err, response) => {
    if(err){
      console.log(err);
    }else{
      const arrOfClasses = [];
      for(let i =0; i < response.length; i++){
        let id = response[i].id;
        let classTitle = response[i].classTitle;
        let daysOfClass = response[i].daysOfClass;
        let timeOfClass = response[i].timeOfClass;
        let location = response[i].location;
        let classImage ="";
        let newObj = {id,classTitle,daysOfClass, timeOfClass, location, classImage};
        arrOfClasses.push(newObj);
      }
      res.send(arrOfClasses);
    }
  })

  // res.json(list);
  console.log('Sent list of logins');
});

app.get('/api/getUploadedFiles', (req,res) => {
  db.selectAllFiles((err, response) => {
    if(err){
      console.log(err);
    }else{
      const arrOfFileInfo = [];
      for(let i =0; i < response.length; i++){
        let documentName = (response[i].documentName);
        let documentLink = response[i].documentLink;
        let uploadTime = response[i].uploadTime;
        let tempObj = {documentName, documentLink, uploadTime};
        arrOfFileInfo.push(tempObj);
      }
      res.send(arrOfFileInfo);
    }
  })

  // res.json(list);
  // console.log('Sent list of logins');
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

app.post('/api/newClass', (req,res) => {
  console.log(req.body);
  db.insertClass(req.body,(err, success) => {
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