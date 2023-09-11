// const express = require('express')
import express from 'express'
const app = express()

app.get("/hello", (_req, res) => {
    res.send('Hello Full Stack!')
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`😇 Server running on PORT:, ${PORT} ` );
})