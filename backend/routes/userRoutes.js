import express from "express";
import { storeUser, getAllUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/store", storeUser);
router.get("/all", getAllUsers);

export default router;