import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import InventoryPage from '../pages/InventoryPage.jsx'
import CarDetailsPage from '../pages/CarDetailsPage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

export default function AppRoutes({ location }) {
  return (
    <Routes location={location}>
      <Route path="/" element={<HomePage />} />
      <Route path="/inventory" element={<InventoryPage />} />
      <Route path="/inventory/:id" element={<CarDetailsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
