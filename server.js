const express = require("express");
const app =  express();

const HTTP_PORT = process.env.PORT || 8080;

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Yashkumar kanubhai patel-113150239");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);