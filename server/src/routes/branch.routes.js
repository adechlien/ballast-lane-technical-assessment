import { Router } from "express";
import { createBranch, listMyBranches, publishBranch, removeBranch, unpublishBranch, updateBranch } from "../controllers/branch.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();

router.use(requireAuth);

router.get("/", listMyBranches);
router.post("/", createBranch);
router.patch("/:id", updateBranch);
router.delete("/:id", removeBranch);
router.patch("/:id/publish", publishBranch);
router.patch("/:id/unpublish", unpublishBranch);

export default router;
