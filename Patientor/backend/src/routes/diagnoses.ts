import express from 'express';
const diagnoseRouter = express.Router();
import diagnoseServices from '../services/diagnoseServices';

diagnoseRouter.get('/', (_req, res)=> {
  res.send(diagnoseServices.getAll());
});

export default diagnoseRouter;