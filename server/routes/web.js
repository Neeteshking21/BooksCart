const express = require('express');
const dummy = require("../Books.json")
const Router = express.Router();


/* Router Will Rediret To Controllers */
/* Temp defining logic here */
Router.route("/login")
      .get((_req, _res, _next) => {
        response = "this is login page"
        return _res.send(response).statusCode(200)
      })
    
module.exports = Router;