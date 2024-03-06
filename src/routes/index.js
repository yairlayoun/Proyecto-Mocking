import express from "express";
import usersController from "../dao/fileSystem/controllers/user/userController.js";

const router = (app) => {
  app.use("/users", usersController);
};

router.get("/", (req, res) => {
  let data = {
    layout: "nofound",
  };
  res.render("index", data);
});

export default router;
