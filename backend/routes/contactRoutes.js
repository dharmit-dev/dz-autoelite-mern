import express from 'express'
import { body } from 'express-validator'
import { createContact } from '../controllers/contactController.js'
import { validateRequest } from '../middleware/validateRequest.js'

const router = express.Router()

router.post(
  '/',
  [
    body('name').trim().isLength({ min: 2, max: 80 }).withMessage('Name must be between 2 and 80 characters').escape(),
    body('email').trim().isEmail().withMessage('A valid email is required').normalizeEmail(),
    body('message').trim().isLength({ min: 12, max: 1200 }).withMessage('Message must be between 12 and 1200 characters').escape(),
  ],
  validateRequest,
  createContact,
)

export default router
