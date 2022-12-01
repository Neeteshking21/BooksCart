const express = require('express');
const dummy = require("../Books.json")
const Router = express.Router();


/* Router Will Rediret To Controllers */
/* Temp defining logic here */
Router.route("/Books/:bookName")
      .get((_req, _res, _next) => {
        book_id = _req.params.bookId;
        response = dummy[book_id]
        return _res.send(response).statusCode(200)
      })
      .put((_req, _res, _next) => {
        let body = _req.body
        let required_fields = ["Book_Name", "Author", "Prize"];
        required_fields.forEach((fields) => {
            if(body[fields] === undefined){
                return _res.send({"status": "failed", "message": `${fields} is required`}).status(500)
            }
        })
        dummy["5"] = body;
        return _res.send(dummy).status(200)
      })
      .post((_req, _res, _next) => {
        console.log("here")
        body = _req.body
        let required_fields = ["Book_Name", "Author", "Prize"];
        required_fields.forEach((fields) => {
            if(body[fields] === undefined){
                return _res.send({"status": "failed", "message": `${fields} is required`}).status(500)
            }
        })
        dummy[body.id] = body;
        return _res.send(dummy).status(200)
        _next()
      })
    
module.exports = Router;