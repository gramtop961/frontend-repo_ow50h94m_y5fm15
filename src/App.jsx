import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedGrid from './components/FeaturedGrid'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import PropertyDetail from './components/PropertyDetail'
import AdminPanel from './components/AdminPanel'

function HomePage() {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/properties?featured=true&limit=6`)
        const json = await res.json()
        setProperties(json)
      } catch (e) {
        // demo fallback
        setProperties([
          { id: '1', title: 'Skyline Penthouse', city: 'Metropolis', price: 2250000, bedrooms: 3, bathrooms: 3, area: 2475, badges: ['Hot','Furnished'], images: ['https://images.unsplash.com/photo-1505691723518-36a5ac3b2d9b?q=80&w=1600&auto=format&fit=crop'] },
          { id: '2', title: 'Glasshouse Villa', city: 'Seaview', price: 3650000, bedrooms: 5, bathrooms: 5, area: 5200, badges: ['For Sale'], images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop'] },
          { id: '3', title: 'Urban Loft', city: 'Downtown', price: 980000, bedrooms: 2, bathrooms: 2, area: 1350, badges: ['Hot'], images: ['https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop'] },
          { id: '4', title: 'Riverside Residence', city: 'Harbor', price: 1450000, bedrooms: 4, bathrooms: 3, area: 2800, badges: ['Furnished'], images: ['https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop'] },
          { id: '5', title: 'Garden Suites', city: 'Uptown', price: 1200000, bedrooms: 3, bathrooms: 2, area: 1900, badges: ['For Sale'], images: ['https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1600&auto=format&fit=crop'] },
          { id: '6', title: 'Hillside Retreat', city: 'Summit', price: 2100000, bedrooms: 4, bathrooms: 4, area: 3100, badges: ['Hot'], images: ['https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1600&auto=format&fit=crop'] },
        ])
      }
    }
    load()
  }, [])

  return (
    <>
      <Hero />
      <FeaturedGrid properties={properties} />
    </>
  )
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
