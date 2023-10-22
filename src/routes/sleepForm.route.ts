import express from "express";
import {
    getFormDataController,
  updateFormController,
} from "../controllers/sleepForm.controller";
import { validateToken } from "../authMiddleware/jwt";

const router = express.Router();

router.get("/getFormData",validateToken,getFormDataController);
router.post("/update", validateToken, updateFormController);

export default router;
