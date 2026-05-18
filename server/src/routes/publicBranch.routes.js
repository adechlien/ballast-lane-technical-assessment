import { Router } from "express";
import {
  getPublicBranch,
  listPublicBranches,
} from "../controllers/branch.controller.js";

const router = Router();

router.get("/", listPublicBranches);
router.get("/:slug", getPublicBranch);

export default router;
