import express from "express";

import myDB from "../db/database.js";

const router = express.Router();
export const PORT = process.env.PORT || 3000;

router.post("/enterNumber", (req, res) => {
  console.log("POST", req.body);
});

export default router;
