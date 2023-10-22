import  express from "express";
import { loginController, registerController } from "../controllers/auth.controller";
import { validateToken } from "../authMiddleware/jwt";

const router = express.Router()

router.post("/register",registerController);
router.post("/login",loginController);


 export default router;