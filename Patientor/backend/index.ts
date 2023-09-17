import express from 'express';
const cors = require('cors')
import diagnoseRouter from "./src/routes/diagnoses"
import patientsRouter from "./src/routes/patients"
const app = express();
app.use(express.json());

const PORT = 3001;
app.use(cors());


// Checking route
app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diagnoses', diagnoseRouter);
app.use('/api/patients', patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});