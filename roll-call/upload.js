const IncomingForm = require('formidable').IncomingForm
const AWS = require('aws-sdk');
const s3Requirements = require('./awsS3');
const fs = require('fs')
const db = require('./database/index')

const BUCKET_NAME = 'rollcall.vikas';
const IAM_USER_KEY = s3Requirements.AccessKeyID;
const IAM_USER_SECRET = s3Requirements.SecretAccessKey;

function uploadToS3(file) {
  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME
  });
  s3bucket.createBucket(function () {
      var params = {
        Bucket: BUCKET_NAME,
        Key: file.name,
        Body: fs.readFileSync(file.path)
      };
      s3bucket.upload(params, function (err, data) {
        if (err) {
          console.log('error in callback');
          console.log(err);
        }
        console.log('success');
        let currDate = new Date();
        currDate = JSON.stringify(currDate);
        db.insertFile(file.name, data.Location, currDate, (err, results) => {
          if(err){
            console.log(err);
          }else{
            console.log(results);
          }
        });
      });
  });
}


module.exports = function upload(req, res) {
  var form = new IncomingForm()

  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    uploadToS3(file);
  })
  form.on('end', () => {
    res.json()
  })
  form.parse(req)
}