  export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
  }
  
  export interface Patient {
    id: string;
    name: string;
    occupation: string;
    gender: string;
    ssn: string;
    dateOfBirth?: string;
  }
  
export type PatientWithoutSSN = Pick<Patient, "id" | "name" | "occupation" | "gender" | "dateOfBirth" >