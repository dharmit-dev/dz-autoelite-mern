import dotenv from 'dotenv'
import { connectDB } from '../config/db.js'
import Car from '../models/Car.js'
import { cars } from '../../frontend/src/data/cars.js'

dotenv.config()

const normalizedCars = cars.map(({ id: _legacyId, listedAt, ...car }) => ({
  ...car,
  listedAt: new Date(listedAt),
}))

const seedCars = async () => {
  try {
    await connectDB()
    await Car.deleteMany({})
    const createdCars = await Car.insertMany(normalizedCars, { ordered: true })
    console.log(`Seeded ${createdCars.length} cars into MongoDB Atlas`)
    process.exit(0)
  } catch (error) {
    console.error('Seed failed:', error)
    process.exit(1)
  }
}

seedCars()
