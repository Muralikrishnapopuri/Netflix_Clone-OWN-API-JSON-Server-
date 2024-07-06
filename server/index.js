const express = require("express");
const cors = require("cors");
const movies = require("./movies.json");
const genres = require("./lag.json");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));



app.get("/krishdb",(req,res) =>{
    return res.json(movies);
});


app.get("/krishdb/genres",(req,res) =>{
    return res.json(genres);
});

app.get("/krishdb/genre/telugu", (req,res) => {
    var telugu = [];
    fetch('https://krishdb.onrender.com/krishdb')
    .then(function(response){
        return response.json();
    })
    .then(function(movies){
        movies.map(function(movie){
            if(movie.lag==="telugu"){
                return telugu.push(movie);
            }
        })
    })
})


// app.get("/krishdb/posters",(req,res) =>{
//     var posters = [];
//     movies.map(movie => {
//         posters.push(movie.poster);
//     } );
//     return res.json(posters);
// });




const PORT = process.env.PORT;
app.listen(PORT,() =>console.log("server started ... "));