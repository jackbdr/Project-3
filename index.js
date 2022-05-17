import express from 'express'
import mongoose from 'mongoose'
import router from './config/router.js'


const logger = (req, res, next) => {
  console.log(`🚨 - Incoming request on ${req.method} - ${req.url}`)
  next()
}


const startServer = async () => {
  const app = express()
  app.use(logger)
  app.use(express.json())
  app.use(router)

  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
  app.listen(process.env.PORT, () => console.log(`🚀 - Server listening on Port ${process.env.PORT}`))
}

startServer()



