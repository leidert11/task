const routex = require("express-promise-router");
const userController = require("../controllers/userController");
const router = routex();

router.get("/list",userController.list );
router.post("/create",userController.create );
router.put("/update",userController.update );
router.put("/updatePassword",userController.updatePassword );
router.delete("/delete",userController.delete );


module.exports = router;