export const errorHandler = (err, _req, res, _next) => {
  const statusCode = err.statusCode || (err.name === 'CastError' ? 404 : 500)
  const message = err.name === 'CastError' ? 'Resource not found' : err.message || 'Server error'

  res.status(statusCode).json({
    success: false,
    message,
    ...(err.details ? { errors: err.details } : {}),
    ...(process.env.NODE_ENV === 'development' ? { stack: err.stack } : {}),
  })
}
