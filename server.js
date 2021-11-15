const express = require('express');
const app = express();
const axios = require('axios');
const port = 3004;

app.get('/', (req, res) => {
    res.json("Root folder.");
})

app.get('/data',(req,res) => {
    axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            res.json(response.data)
        })
        .catch((err) => {
            res.json(err);
        })
})

app.listen(port, () => {
    console.log("server started on port " + port);
});