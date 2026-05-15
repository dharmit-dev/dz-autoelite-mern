import Contact from '../models/Contact.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const createContact = asyncHandler(async (req, res) => {
  const contact = await Contact.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  })

  res.status(201).json({
    success: true,
    message: 'Inquiry received. Our concierge team will contact you shortly.',
    data: {
      id: contact._id,
      name: contact.name,
      email: contact.email,
      createdAt: contact.createdAt,
    },
  })
})
