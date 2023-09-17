import express from "express";
const patientsRouter = express.Router();
import data from "../../data/pateints"

patientsRouter.get('/', (_req, res) => {
    res.send(data)
})

export default patientsRouter