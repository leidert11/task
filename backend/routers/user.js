const routex = require("express-promise-router");
const models = require('../models');
const userController = require("../controllers/userController");
const router = routex();

router.post('/list', (req, res, next) => userController.create(models, req, res, next));
router.get('/create', (req, res, next) => userController.list(models, req, res, next));
router.put('/update', (req, res, next) => userController.update(models, req, res, next));
router.put('/updatePassword', (req, res, next) => userController.updatePassword(models, req, res, next));
router.delete('/delete', (req, res, next) => userController.delete(models, req, res, next));



module.exports = router;




