import mongoose from 'mongoose'
import Plant from '../models/plants.js'
import User from '../models/users.js'

import plantData from './data/plants.js'
import userData from './data/users.js'

import 'dotenv/config'


const seedDatabase = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    console.log(console.log('🚀 Database connected'))

    // Remove data from database
    await mongoose.connection.db.dropDatabase()
    console.log('🍎 Database dropped')

    // add users
    const usersAdded = await User.create(userData)

    // adding a user field to each of the giants in the giantsData array
    const plantsWithOwners = plantData.map(plant => {
      return { ...plant, addedBy: usersAdded[0]._id }
    })

    // Add seeds data back in
    const plantsAdded = await Plant.create(plantsWithOwners)
    console.log(`🌱 Database seeded with ${plantsAdded.length} plants.`)

    // Close connection
    await mongoose.connection.close()
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