import express from "express";
const patientsRouter = express.Router();
import patientServices from "../services/patientServices";


patientsRouter.get('/', (_req, res) => {
    res.send(patientServices.getAll())
})

export default patientsRouter