import { Router } from "express";
import {
  createSubbranch,
  removeSubbranch,
  updateSubbranch,
} from "../controllers/subbranch.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();

router.use(requireAuth);

router.post("/branches/:branchId/subbranches", createSubbranch);
router.patch(
  "/branches/:branchId/subbranches/:subbranchId",
  updateSubbranch
);
router.delete(
  "/branches/:branchId/subbranches/:subbranchId",
  removeSubbranch
);

export default router;
