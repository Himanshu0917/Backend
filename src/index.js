import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB CONNECTION FAILED ", err);
  });

// import express from "express";
// const app = expresss()(async () => {
//   try {
//     await mongoose.connect("${process.env.MONGODB_URI}");
//     app.on("error", (error) => {
//       console.log("Err", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log("App is listening on port ${process.env.PORT}");
//     });
//   } catch (error) {
//     console.error("ERROR:", error);
//     throw error;
//   }
// })();
