// const express = require('express')
import express from 'express'
import bodyParser from 'body-parser'
import { bmiArguments, calculateBmi } from './bmiCalculator';
const app = express()
app.use(bodyParser.json())

app.get("/hello", (_req, res) => {
    res.send('Hello Full Stack!')
})

app.get('/bmi', (req, res) => {
    const weight = req.query.weight;
    const height = req.query.height;
  
    if (!weight || !height) {
      res.status(400);
      res.send({ error: 'missing parameter height or weight' });
    } else {
      try {
        const { heightInCm, weightInKg } = bmiArguments(
          Number(height),
          Number(weight)
        );
        const bmi = calculateBmi(heightInCm, weightInKg);
        res.send({
          weight: weightInKg,
          height: heightInCm,
          bmi: bmi
        });
      } catch (e) {
        res.status(400);
        res.send({ error: e.message });
      }
    }
  });

const PORT = 3000
app.listen(PORT, () => {
    console.log(`😇 Server running on PORT:, ${PORT} ` );
})