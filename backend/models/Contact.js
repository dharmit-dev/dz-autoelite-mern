import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Email is invalid'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      minlength: 12,
      maxlength: 1200,
    },
  },
  { timestamps: true },
)

export default mongoose.model('Contact', contactSchema)
