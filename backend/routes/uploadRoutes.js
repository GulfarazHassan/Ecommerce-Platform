import path from "path";
import express from "express";
import multer from "multer";
import { uploadFile, getFileStream } from "./s3.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), async (req, res) => {
  const file = req.file;

  // apply filter
  // resize

  const result = await uploadFile(file);
  res.send(result.Location);
});

export default router;
