import mongoose from 'mongoose'

const carSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: [true, 'Brand is required'],
      trim: true,
      enum: ['BMW', 'Audi', 'Mercedes', 'Toyota', 'Honda', 'Hyundai', 'Ford', 'Volkswagen', 'Kia'],
    },
    model: {
      type: String,
      required: [true, 'Model is required'],
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    year: {
      type: Number,
      required: [true, 'Year is required'],
      min: 2000,
      max: new Date().getFullYear() + 1,
    },
    mileage: {
      type: Number,
      required: [true, 'Mileage is required'],
      min: 0,
      max: 300000,
    },
    fuelType: {
      type: String,
      required: [true, 'Fuel type is required'],
      enum: ['Petrol', 'Diesel', 'Hybrid', 'Electric'],
    },
    transmission: {
      type: String,
      required: [true, 'Transmission is required'],
      enum: ['Manual', 'Automatic'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: 100000,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      minlength: 25,
      maxlength: 700,
    },
    summary: {
      type: String,
      required: [true, 'Summary is required'],
      trim: true,
      maxlength: 180,
    },
    features: {
      type: [String],
      validate: {
        validator: (features) => features.length >= 3,
        message: 'At least three features are required',
      },
    },
    images: {
      type: [String],
      validate: {
        validator: (images) => images.length >= 1,
        message: 'At least one image is required',
      },
    },
    ownership: {
      type: String,
      required: [true, 'Ownership is required'],
      enum: ['First owner', 'Second owner', 'Third owner'],
    },
    availability: {
      type: String,
      required: [true, 'Availability is required'],
      enum: ['Available', 'Reserved', 'Sold'],
      default: 'Available',
    },
    engine: {
      type: String,
      required: [true, 'Engine detail is required'],
      trim: true,
    },
    color: {
      type: String,
      required: [true, 'Color is required'],
      trim: true,
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    inspectionScore: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
      default: 90,
    },
    listedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

carSchema.index({ brand: 1, fuelType: 1, transmission: 1, price: 1 })
carSchema.index({ brand: 'text', model: 'text', description: 'text', location: 'text' })

export default mongoose.model('Car', carSchema)
