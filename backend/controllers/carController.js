import Car from '../models/Car.js'
import { ApiError } from '../utils/ApiError.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const sortMap = {
  newest: { listedAt: -1, createdAt: -1 },
  price_asc: { price: 1 },
  price_desc: { price: -1 },
}

const serializeCar = (car) => ({
  ...car,
  id: car._id.toString(),
})

export const getCars = asyncHandler(async (req, res) => {
  const { brand, fuelType, transmission, search, minPrice, maxPrice, sort = 'newest' } = req.query
  const query = {}

  if (brand && brand !== 'All') query.brand = brand
  if (fuelType && fuelType !== 'All') query.fuelType = fuelType
  if (transmission && transmission !== 'All') query.transmission = transmission

  if (minPrice || maxPrice) {
    query.price = {}
    if (minPrice) query.price.$gte = Number(minPrice)
    if (maxPrice) query.price.$lte = Number(maxPrice)
  }

  if (search) {
    const safeSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    query.$or = [
      { brand: { $regex: safeSearch, $options: 'i' } },
      { model: { $regex: safeSearch, $options: 'i' } },
      { location: { $regex: safeSearch, $options: 'i' } },
    ]
  }

  const cars = await Car.find(query).sort(sortMap[sort] || sortMap.newest).lean()

  res.json({
    success: true,
    count: cars.length,
    data: cars.map(serializeCar),
  })
})

export const getCarById = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id).lean()

  if (!car) {
    throw new ApiError(404, 'Car not found')
  }

  const similarCars = await Car.find({
    _id: { $ne: car._id },
    $or: [{ brand: car.brand }, { fuelType: car.fuelType }],
  })
    .sort({ listedAt: -1, createdAt: -1 })
    .limit(3)
    .lean()

  res.json({
    success: true,
    data: serializeCar(car),
    similar: similarCars.map(serializeCar),
  })
})
