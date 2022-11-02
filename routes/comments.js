const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - simplified for now
router.post("/createComment/:id", commentsController.createComment);


//router.delete("/deletePost/:id", postsController.deletePost);

router.delete("/deleteComment/:id/:commentId", commentsController.deleteComment)


module.exports = router;