import express from 'express';
const diagnoseRouter = express.Router();
import data from "../../data/diagnoses"

diagnoseRouter.get('/', (_req, res) => {
  res.send(data);
});

export default diagnoseRouter;