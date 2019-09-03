
var path = require("path");   
var bodyParser = require('body-parser');  
var mysql = require("mysql");  
var cors = require("cors");
var express = require('express');  


const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'loyaltypoint'
});

// var db = mongo.connect("mongodb://localhost:27017/serp", function(err, response){  
//    if(err){ console.log( err); }  
//    else{ console.log('Connected to ' + db, ' + ', response); }  
// });  
  
con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});
// con.query('SELECT * FROM loyaluser', (err,rows) => {
//   if(err) throw err;

//   console.log('Data received from Db:\n');
//   console.log(rows);
// });
var app = express()  
app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true})); 
   
  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Origin', 'http://13.233.166.104:3000');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret');      
     res.setHeader('Access-Control-Allow-Credentials', true);    
     res.header("Cache-Control", "no-cache, no-store, must-revalidate");
     res.header("Pragma", "no-cache");
     res.header("Expires", 0);

 //res.header(“Access-Control-Allow-Headers”, “Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization”);   
     next();  
 });  

//  var Schema = mongo.Schema;  
  
// var UsersSchema = new Schema({      
//  name: { type: String   },       
//  address: { type: String   },   
// },{ versionKey: false });  
   
  
// var model = mongo.model('tracolearn', UsersSchema, 'tracolearn');  
  
// app.post("/api/SaveUser",function(req,res){   
//  var mod = new model(req.body);  
//  if(req.body.mode =="Save")  
//  {  
//     mod.save(function(err,data){  
//       if(err){  
//          res.send(err);                
//       }  
//       else{        
//           res.send({data:"Record has been Inserted..!!"});  
//       }  
//  });  
// }  
// else   
// {  
//  model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address},  
//    function(err,data) {  
//    if (err) {  
//    res.send(err);         
//    }  
//    else{        
//           res.send({data:"Record has been Updated..!!"});  
//      }  
//  });  
  
  
// }  
//  })  
  
//  app.post("/api/deleteUser",function(req,res){      
//     model.remove({ _id: req.body.id }, function(err) {    
//      if(err){    
//          res.send(err);    
//      }    
//      else{      
//             res.send({data:"Record has been Deleted..!!"});               
//         }    
//  });    
//    })  
  
  
app.use(cors({
  origin: true,
  credentials: true
}));
var movies = [
  { "title": "C" },
  { "title": "Star Wars" },
  { "title": "Batman Begins" },
  { "title": "vikas bhutani" }
];
 app.get("/api/getUser",function(req,res){  
   
  res.status(200).send(movies)
      });
app.post("/api/saveuser",function(req,res){  
        var uname=req.body.username;
        var pwd=req.body.password;
        var email=req.body.email;
        var mobile=req.body.mobile;
       con.query("insert into loyaluser(username,pass,email,mobile) values('"+uname+"','"+pwd+"','"+email+"','"+mobile+"')", (err,rows) => {
      if(err) throw err;
    });
  res.status(200).send("User Added")
});
app.post("/api/loginuser",function(req,res){  
    var uname=req.body.username;
    var pwd=req.body.password;
   res= con.query("select count(1) from  where username='"+uname+"' and pass="+pwd+"'", (err,rows) => {
    if(err) throw err;
    });
    res.status(200).send(res)
});
app.listen(3000, function () {  
    
 console.log('Example app listening on port 8080!')  
})  