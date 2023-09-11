const Router =  require("express")
const router = new Router()
// const userController = require("../controller/user.controller")
const postController = require('../controller/post.controller')
// router.post("/user", userController.createUser)
// router.get("/user", userController.getUsers)
// router.get("/user/:id", userController.getOneUser)
// router.put("/user", userController.updateUser)
// router.delete("/user/:id", userController.deleteUser)

// module.exports = router

router.post("/user", postController.create)
router.get("/user", postController.getAll)
router.get("/user/:id", postController.getOne)
router.put("/user", postController.update)
router.delete("/user/:id", postController.delete)

module.exports = router
