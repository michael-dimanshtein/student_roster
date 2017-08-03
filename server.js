var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



//define a get route that returns a welcome message

app.get('/', function(req,res) {
    res.send('GET SOME');
})

//get route to return three stooges

var roster =[
    {
        name: 'Larry'
    },
    {
        name: 'Curly'
    },
    {
        name: 'Moe'
    }
];

app.get('/students', function(req,res){
    res.json(roster);
});

//return a student by id
app.get('/students/:studentId', function(req,res){
    res.json(roster[req.params.studentId]);
});

app.post('/add', function(req,res){
    if (req.body.name){
        roster.push(req.body);
        res.send("student added");
    } else{
        res.send('You wrong, Please. Enter data next time');
        console.log('You wrong, Please. Enter data next time');
    }
})

app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`);
});

