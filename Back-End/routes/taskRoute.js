const { Router } = require("express");
const {
  getAllTask,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/tackController");

const router = Router();

// Route: /
// method: GET
// PUBLIC
router.get("/", getAllTask);

// Route: /:id
// method: GET
// PUBLIC
router.get("/:id", getOneTask);

// Route: /
// method: POST
// PUBLIC
router.post("/", createTask);

// Route: /:id
// method: PATCH
// PUBLIC
router.patch("/:id", updateTask);

// Route: /:id
// method: DELETE
// PUBLIC
router.delete("/:id", deleteTask);

module.exports = router;
