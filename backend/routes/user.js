const routex = require("express-promise-router");
const userController = require("../controllers/userController");
const router = routex();

router.get("/list",userController.list );
router.post("/create",userController.create );
router.get("/update",userController.update );
router.get("/updatePassword",userController.updatePassword );
router.get("/delete",userController.delete );


module.exports = router;