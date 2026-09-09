import express from "express";
import { getAllContacts, getMessagesByUserId, sendMessage, getchatPartners } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";


const router = express.Router();

router.use(arcjetProtection, protectRoute); // Apply authentication protection to all routes in this router

router.get("/contacts", getAllContacts);
router.get("/chats", getchatPartners);
router.get("/:id", getMessagesByUserId);
router.post("/send/:id", sendMessage);



export default router;