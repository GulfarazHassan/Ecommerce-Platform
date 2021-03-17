import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { NotFound, ErrorHandler } from "./middleware/error.js";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());
dotenv.config();
connectDB();

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);
app.use(NotFound);

app.use(ErrorHandler);

const port = 8080;
app.listen(port, () =>
  console.log(
    `App is running in ${process.env.NODE_ENV} on port ${port}`.green.underline
      .bold
  )
);
