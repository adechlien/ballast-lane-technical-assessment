import { Router } from "express";
import {
  createColorToken,
  removeColorToken,
  updateColorToken,
} from "../controllers/colorToken.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();

router.use(requireAuth);

router.post("/subbranches/:subbranchId/tokens", createColorToken);
router.patch("/subbranches/:subbranchId/tokens/:tokenId", updateColorToken);
router.delete("/subbranches/:subbranchId/tokens/:tokenId", removeColorToken);

export default router;
