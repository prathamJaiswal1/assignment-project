import express from "express";
import { authenticate } from "../middlewares/authenticate";
import { authorize } from "../middlewares/authorize";
import { Role } from "@prisma/client";
import * as userController from "../controllers/userController";

const router = express.Router();

// Admin route
router.get(
    "/admin-dashboard",
    authenticate,
    authorize([Role.ADMIN]),
    userController.getAdminDashboard
);

// Moderator route
router.get(
    "/moderator-dashboard",
    authenticate,
    authorize([Role.ADMIN, Role.MODERATOR]),
    userController.getModeratorDashboard
);

// User route
router.get(
    "/profile",
    authenticate,
    userController.getUserProfile
);

export default router;
