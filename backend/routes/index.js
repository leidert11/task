const routex = require('express-promise-router');
const task = require("./task");
const user = require("./user");
const router = routex();

router.use("/task", task);
router.use("/user", user);

module.exports = router;
