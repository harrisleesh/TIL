const express = require('express');

//constants
const PORT = 8080;

//APP
const app = express();
app.get('/', (req,res) => {
    res.send("Hello World")
});

app.listen(PORT);
console.log('server is running');
