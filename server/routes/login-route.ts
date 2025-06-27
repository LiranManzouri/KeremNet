import express from "express";
import LoginController from "../controllers/login-controller";

const router = express.Router();
const loginController = new LoginController();

router.route('/')
    .post(loginController.addNewUser)

// Better practice is to get encrypted info and decrypt in server (using asymmetric encryption).
router.route('/:username&:password')
    .get(loginController.getUserByInfo)

export default router;