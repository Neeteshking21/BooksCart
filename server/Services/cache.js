const NodeCache = require("node-cache")

/* Add Redis To Provide Caching Service */
const myCache = new NodeCache();
module.exports = myCache;