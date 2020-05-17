import express from 'express';
import signup from '../controllers/signup.controller';

const router = express.Router();
export default app => {

  router.post("/", signup.create);
  console.log(signup.create)

  app.use("/", router);
}