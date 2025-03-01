import express from "express";
import { deleteUser, test, updateUser} from "../controllers/user.controller.js";
import { verifyUser } from "../utils/VerifyUser.js";

const router = express.Router();

router.get("/", test);
router.post("/update/:id", verifyUser,updateUser);
router.delete("/delete/:id", verifyUser,deleteUser);


export default router