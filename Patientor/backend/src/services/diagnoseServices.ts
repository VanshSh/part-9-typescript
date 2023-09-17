import { Diagnosis } from "../types"
import diagnosesData from "../../data/diagnoses"


const diagnoses: Diagnosis[] = diagnosesData

const getAll = (): Diagnosis[] => { 
    return diagnoses
}

export default {
    getAll
}