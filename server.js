const express = require('express');
const app = express();
const fs = require('fs');
const request = require('request');

app.use(express.static('public'))
// handle get request


app.get('/', (req,res)=>{

    // reads the index.html file and sends it over
    fs.readFile('./views/index.html', 'utf8', (err,data)=>{
        // PROMPT: use fs to read quizQuestions.json and send back
            // data should be from quizQuestions.json
        console.log(data)
        res.send(data)
    })
})

app.get('/moreQuestions', (req,res)=>{

    // PROMPT: use request module to get data from the API endpoint: 'https://opentdb.com/api.php?amount=10'
    res.send('success?')
})


app.listen(3000, ()=>{
    console.log('listening on 3000');
})