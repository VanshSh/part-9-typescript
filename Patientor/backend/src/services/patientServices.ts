import patientsData from "../../data/pateints"
import { PatientWithoutSSN } from "../types"

const PatientDataWithoutSSN: PatientWithoutSSN[] = patientsData


const getAll = (): PatientWithoutSSN[] => { 
  
    return PatientDataWithoutSSN.map(({ id, name, occupation, gender, dateOfBirth }) => ({
        id,
        name,
        occupation,
        gender,
        dateOfBirth
      }));
}

export default {
    getAll
}