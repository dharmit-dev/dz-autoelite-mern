import express from 'express'
import { query, param } from 'express-validator'
import { getCarById, getCars } from '../controllers/carController.js'
import { validateRequest } from '../middleware/validateRequest.js'

const router = express.Router()

router.get(
  '/',
  [
    query('brand').optional().trim().escape(),
    query('fuelType').optional().trim().escape(),
    query('transmission').optional().trim().escape(),
    query('search').optional().trim().isLength({ max: 80 }).withMessage('Search must be under 80 characters').escape(),
    query('minPrice').optional().isFloat({ min: 0 }).withMessage('Minimum price must be a positive number'),
    query('maxPrice').optional().isFloat({ min: 0 }).withMessage('Maximum price must be a positive number'),
    query('sort').optional().isIn(['newest', 'price_asc', 'price_desc']).withMessage('Sort value is not supported'),
  ],
  validateRequest,
  getCars,
)

router.get(
  '/:id',
  [param('id').isMongoId().withMessage('Car id is invalid')],
  validateRequest,
  getCarById,
)

export default router
