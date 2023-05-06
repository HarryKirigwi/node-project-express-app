const express = require("express");

const controllers = require("../controllers/blogControllers");

const router = express.Router();

//Rendering the blogs in the database
router.get("/", controllers.blogs_index);

//Adding blogs to the database
router.post("/", controllers.blogs_create_save);

//Displaying a single blog
router.get("/:id", controllers.blogs_get_id);

//Deleting a single blog
router.delete("/:id", controllers.blogs_delete_id);

module.exports = router;
