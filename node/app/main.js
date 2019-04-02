var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var db_creds = {
    host:'localhost',
    user:'mngr',
    database:'mngr',
    password:'mngr',
    port:3306
};
var connection = mysql.createConnection(db_creds);

var app = express();


app.use(express.static(path.join(__dirname, '../../angular/mngr-frontend/dist/mngr-frontend')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(request,result){
    result.write(path.join(__dirname, '../../angular/mngr-frontend/dist'));
    result.end();
});

app.post('/login',(request, result) => {
    var email = request.body.email;
    var password = request.body.password;

    //check if user exist

    connection.connect((err)=>{
       if(err){
           result.send({message:'there-was-an-error'});
       }else{
           connection.query('SELECT user_id,first_name,last_name,email FROM users WHERE email = "'+email+'" and password = "'+password+'"',null,(error,results) => {
               console.log(results);
               result.send({message:'success',user_data:results});
           });
       }
    });
});

app.post('/register',(request, result) => {
    let email = request.body.email;
    let password = request.body.password;
    let password_comfirmation = request.body.confirm_password;
    let first_name = request.body.first_name;
    let last_name = request.body.last_name

    let allIsWell = password===password_comfirmation;

    connection.connect((err)=>{
        if(err){
            result.send({message:'there-was-an-error'});
        }else{
            if(allIsWell){
                connection.query('INSERT INTO users(first_name, last_name, email, password) VALUES("'+first_name+'","'+last_name+'","'+email+'","'+password+'")',null,(error,results,fields)=>{
                    if(error){
                        throw error;
                    }else{
                        result.send({message:'success'});
                    }
                });
            }else{
                result.send({message:'confirm-password'});
            }
        }
    });
});

//save task
app.post('/task/create',(request,response) => {
    const creator = request.body.task.creator;
    const assignee = request.body.task.assignee;
    const task = request.body.task.task;
    const description = request.body.task.description;
    const priority = request.body.task.priority;
    const created_at = request.body.task.created_at;
    connection.query('INSERT INTO tasks VALUES ?',{creator,assignee,task,description,priority,created_at},(err, results, fields) => {
        if(err){
            throw err;
        }else{
            response.send({
                message:'success'
            });
        }
    });
});
http.createServer(app).listen(3000  ,function(){
    console.log('app running');
});