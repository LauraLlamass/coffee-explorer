import { Router } from "express";
import { getCoffees, getCoffee } from "../controllers/coffee-controller";

const router = Router();

router.get("/", getCoffees);
router.get("/:id", getCoffee);

export default router;