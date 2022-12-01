const express = require("express")
const BKApp = express()
const BKRouter = express.Router()
const cache = require("./Services/cache")
const auth = require("./middlware/auth")
const apiRoutes = require("../server/routes/api")
const webRoutes = require("../server/routes/web")
/**
 * Importatnt Middlwares for app 
*/
BKApp.use(express.json())
BKApp.all("*", auth)

/**
 * Directing Routes From Here
 * @web    domain/{?}
 * @api    domain/api/{?}
*/

BKApp.use('/api/', apiRoutes)
BKApp.use('/', webRoutes)

/* Run Backend Server */
const PORT = process.env.APP_PORT || 8000
BKApp.listen(PORT, () => {
    console.log(`Server Is Running on http://127.0.0.1:${PORT}`)
})

