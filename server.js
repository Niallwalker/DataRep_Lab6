//server set up
//Question 3 answer 

const express = require('express');
const app = express();
const port = 3000
const path = require('path');
const bodyParser = require("body-parser");
const { allowedNodeEnvironmentFlags } = require('process');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json()) //Code for Parsing Http

app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying!'); //Question 3 answer
})

app.get('/hello/:name', (req, res)=>{ //question 4 answer /hello is another section of the localhost
    console.log(req.params.name)
    res.send('Hello ' + req.params.name)// this is what it reads back if collection successful
})

app.get('/api/movies', (req, res)=>{ //Question 5 answers
    const mymovies =[ //Movies array
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
     ];
        
    res.json({movies:mymovies}); //This collects the array and shares it on the page
});

app.get('/test', (req, res)=>{ //Question 6 answers
    res.sendFile(__dirname + '/index.html'); //link that connects this file to html
})

app.get('/name', (req, res)=>{ //question 7 answer
    res.send('Hello ' + req.query.fname + '' + req.query.lname) //responce once form is filled out

})

app.post('/name', (req, res)=>{ //Question 8 answer Post Method, this ways tidies up the url
    res.send('Hello '+ req.body.fname + '' + req.body.lname)
})    

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})