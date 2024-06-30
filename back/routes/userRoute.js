import express from "express";
import { deleteByUser, getUser, loginUser, logoutUser, registerUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout",  logoutUser);
router.get("/", getUser)
router.delete('/:id', deleteByUser)
export default router;
