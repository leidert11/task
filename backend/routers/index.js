const routex = require("express-promise-router");
const user = require("./user");
const router = routex();

router.use("/user", user);

module.exports = router;
