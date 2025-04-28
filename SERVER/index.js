const express  = require("express");  
 
const app = express();

app.get("/", (req, res) => {
    return res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
    return res.send(`Welcome ${req.query.name.toUpperCase()}`);
});


app.listen(8000, () => console.log("Server Started!"));