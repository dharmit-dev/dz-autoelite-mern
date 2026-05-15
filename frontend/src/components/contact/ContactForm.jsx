import { CheckCircle2, Loader2, Send, TriangleAlert } from 'lucide-react'
import { useState } from 'react'
import { submitContact } from '../../services/carService'
import Button from '../ui/Button'

const initial = {
  name: '',
  email: '',
  message: '',
}

export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverMessage, setServerMessage] = useState('')

  const validate = () => {
    const next = {}

    if (values.name.trim().length < 2) {
      next.name = 'Please enter your full name.'
    }

    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = 'Please enter a valid email address.'
    }

    if (values.message.trim().length < 12) {
      next.message = 'Please share your requirements in a little more detail.'
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const submit = async (event) => {
    event.preventDefault()

    if (!validate()) return

    setLoading(true)
    setServerMessage('')

    try {
      const response = await submitContact(values)

      setLoading(false)
      setSuccess(true)
      setErrors({})
      setServerMessage(response.message)
      setValues(initial)
    } catch (apiError) {
      setLoading(false)

      const apiErrors = apiError.response?.data?.errors

      if (apiErrors?.length) {
        setErrors(
          Object.fromEntries(
            apiErrors.map((item) => [item.field, item.message])
          )
        )
      }

      setServerMessage(
        apiError.response?.data?.message ||
          'Unable to send your request right now. Please try again shortly.'
      )
    }
  }

  return (
    <form
      className="glass rounded-2xl border border-white/10 p-6 sm:p-8"
      onSubmit={submit}
      noValidate
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-platinum">
          Request a premium consultation
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Share your preferred vehicle, budget, or consultation request and our
          team will connect with you.
        </p>
      </div>

      {success && (
        <div className="mb-5 flex gap-3 rounded-xl border border-emerald-300/25 bg-emerald-400/10 p-4 text-sm text-emerald-100">
          <CheckCircle2 className="shrink-0" size={20} />
          <span>
            {serverMessage ||
              'Request received successfully. Our team will contact you shortly.'}
          </span>
        </div>
      )}

      {serverMessage && !success && (
        <div className="mb-5 flex gap-3 rounded-xl border border-rose-300/25 bg-rose-400/10 p-4 text-sm text-rose-100">
          <TriangleAlert className="shrink-0" size={20} />
          <span>{serverMessage}</span>
        </div>
      )}

      {[
        ['name', 'Full name', 'Enter your full name'],
        ['email', 'Email address', 'you@example.com'],
      ].map(([key, label, placeholder]) => (
        <label key={key} className="mb-5 block">
          <span className="mb-2 block text-sm font-medium text-muted">
            {label}
          </span>

          <input
            className={`w-full rounded-xl border bg-ink/80 px-4 py-3 text-platinum outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/20 ${
              errors[key] ? 'border-rose-300/60' : 'border-white/12'
            }`}
            value={values[key]}
            placeholder={placeholder}
            onChange={(event) => {
              setSuccess(false)
              setServerMessage('')
              setValues((current) => ({
                ...current,
                [key]: event.target.value,
              }))
            }}
          />

          {errors[key] && (
            <span className="mt-2 block text-sm text-rose-200">
              {errors[key]}
            </span>
          )}
        </label>
      ))}

      <label className="mb-6 block">
        <span className="mb-2 block text-sm font-medium text-muted">
          Requirements
        </span>

        <textarea
          className={`min-h-40 w-full resize-y rounded-xl border bg-ink/80 px-4 py-3 text-platinum outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/20 ${
            errors.message ? 'border-rose-300/60' : 'border-white/12'
          }`}
          value={values.message}
          placeholder="Example: Looking for a premium SUV under ₹25L, petrol automatic, Ahmedabad delivery preferred."
          onChange={(event) => {
            setSuccess(false)
            setServerMessage('')
            setValues((current) => ({
              ...current,
              message: event.target.value,
            }))
          }}
        />

        {errors.message && (
          <span className="mt-2 block text-sm text-rose-200">
            {errors.message}
          </span>
        )}
      </label>

      <Button className="w-full text-base font-semibold" disabled={loading}>
        {loading ? (
          <Loader2 className="animate-spin" size={18} />
        ) : (
          <Send size={18} />
        )}
        {loading ? ' Sending request...' : ' Request premium consultation'}
      </Button>
    </form>
  )
}