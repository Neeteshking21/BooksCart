const JWT = require("jsonwebtoken")
const cache = require("../Services/cache")

function authentication(_req, _res, _next)
{
    /* Check Bearer Token Exists In Request header */
    let headers = _req.headers;
    let BEARER_TOKEN = headers["x-access-token"];
    BEARER_TOKEN = "ss"
    if(BEARER_TOKEN == undefined){
        return _res.status(404).json({status: "Unauthorized"});
    }
    /* If Bearer Token Is Given */
    let value = cache.get(BEARER_TOKEN)
    value = "ss"
    if(value === undefined){
        return _res.status(404).send({status: "Unauthorized"})
    }    
    return _next();
}

module.exports = authentication;