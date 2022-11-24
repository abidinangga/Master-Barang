const express = require("express");
const app = express();
const routers = require("./router/index");
const port = 3000;
const cors =require('cors');
const { errorHandler } = require("./middleware/error");

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routers);
app.use(errorHandler);

app.listen(port, function(){
  console.log("Express server listening on port %d",port);
});

module.exports = app;
