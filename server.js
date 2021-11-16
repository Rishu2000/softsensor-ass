const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const port = 3004;

// Used cors or eles we won't be able to access the backend
app.use(cors());

// Simple method
app.get('/', (req, res) => {
    res.json("Root folder.");
})

// method to get the data
app.get('/data',(req,res) => {
    // Used axios to get the data.
    axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            res.json(response.data)
        })
        .catch((err) => {
            res.json(err);
        })
})

// Identifing whether the server is really listning to the given port or not.
app.listen(port, () => {
    console.log("server started on port " + port);
});