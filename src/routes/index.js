const path = require("path")
const errorRouter= require("express").Router();

errorRouter.use((req, res) => {
 res.status(404).sendFile(path.join(__dirname,'..', '..', 'public', 'errors', '404.html'))
});

errorRouter.use((req, res) => {
    res.status(500).sendFile(path.join(__dirname, "..", "..", "public", "errors", "500.html"))
})

module.exports = errorRouter;
