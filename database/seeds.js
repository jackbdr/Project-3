import mongoose from 'mongoose'
import Plant from '../models/plants.js'

import plantData from './data/plants.js'


const seedDatabase = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    console.log(console.log('🚀 Database connected'))

    // Remove data from database
    await mongoose.conneection.db.dropDatabase() 
    console.log('👍 Database dropped')

    // Add seeds data back in
    const plantsAdded = await Plant.create(plantData)
    console.log(`🌱 Database seeded with ${plantsAdded.length} plants`)

    // Close connection
    await mongoose.connecvtion.close()
    console.log('👋 Bye')

  } catch (err) {
    console.log('🆘 Something went wrong')
    console.log(err)

    // Close the connection to the database
    await mongoose.connection.close()
    console.log('🆘 Connection closed due to failure')
  }
}

seedDatabase()