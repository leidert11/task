const routex = require("express-promise-router");

const router = routex();

router.get("/", (req, res) => {
    res.send("Hello World!");
})

module.exports = router;