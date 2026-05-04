import express from "express";
import { storeUser, getAllUsers,deleteUser} from "../controllers/userController.js";

const router = express.Router();

router.post("/store", storeUser);
router.get("/all", getAllUsers);
router.delete("/:id", deleteUser);

export default router;