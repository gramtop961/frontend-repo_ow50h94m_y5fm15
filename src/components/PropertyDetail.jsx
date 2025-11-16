import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BedDouble, Bath, Ruler, MapPin, Download, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PropertyDetail() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/properties/${id}`)
        if (!res.ok) throw new Error('Not found')
        const json = await res.json()
        setData(json)
      } catch (e) {
        // fallback demo data
        setData({
          id,
          title: 'Skyline Penthouse',
          address: '123 Skyline Ave',
          city: 'Metropolis',
          country: 'USA',
          price: 2250000,
          bedrooms: 3,
          bathrooms: 3,
          area: 2475,
          type: 'Penthouse',
          status: 'For Sale',
          badges: ['Hot', 'Furnished'],
          images: [
            'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d9b?q=80&w=1600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop'
          ],
          description: 'A rare corner penthouse with panoramic city vistas, floor-to-ceiling glass, and bespoke finishes.',
          amenities: ['Pool', 'Gym', 'Concierge', 'Private Elevator'],
          location: { lat: 37.7749, lng: -122.4194 },
          floor_plans: [
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop'
          ],
          featured: true,
        })
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  if (loading) return <div className="min-h-[60vh] grid place-items-center text-gray-500">Loading...</div>
  if (!data) return <div className="min-h-[60vh] grid place-items-center text-gray-500">Not found</div>

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10">
        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img className="rounded-xl h-72 w-full object-cover" src={data.images[0]} alt="" />
          <div className="grid grid-cols-2 gap-4">
            {data.images.slice(1,3).map((src, i) => (
              <img key={i} className="rounded-xl h-36 w-full object-cover" src={src} alt="" />
            ))}
          </div>
        </div>

        {/* Title & Specs */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">{data.title}</h1>
            <div className="text-gray-600 flex items-center gap-2 mt-1"><MapPin size={16}/> {data.address}, {data.city}</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-semibold text-gray-900">${data.price.toLocaleString()}</div>
            <div className="text-gray-500 text-sm">For {data.status.replace('For ', '')}</div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-gray-50 flex items-center gap-2"><BedDouble/> {data.bedrooms} Bedrooms</div>
          <div className="p-4 rounded-xl bg-gray-50 flex items-center gap-2"><Bath/> {data.bathrooms} Bathrooms</div>
          <div className="p-4 rounded-xl bg-gray-50 flex items-center gap-2"><Ruler/> {data.area} sqft</div>
          <div className="p-4 rounded-xl bg-gray-50">Type: {data.type}</div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Overview</h2>
            <p className="text-gray-600 leading-relaxed">{data.description}</p>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {data.amenities.map((a, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm">{a}</span>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Floor plans</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.floor_plans.map((src, i) => (
                <img key={i} className="rounded-xl h-64 w-full object-cover" src={src} alt="floor plan" />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="text-gray-900 font-semibold">Schedule a Visit</div>
              <p className="text-gray-600 text-sm mt-1">Our agent will reach out shortly.</p>
              <div className="mt-4 space-y-3">
                <input placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
                <input placeholder="Phone" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
                <button className="w-full px-4 py-3 rounded-xl bg-emerald-500 text-white font-semibold">Contact Agent</button>
                <button className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 font-semibold inline-flex items-center justify-center gap-2"><Download size={16}/> Download Brochure</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Location</h3>
          <div className="rounded-2xl overflow-hidden">
            <iframe
              title="map"
              className="w-full h-64 rounded-2xl border-0"
              loading="lazy"
              src={`https://www.google.com/maps?q=${data.location?.lat || 37.7749},${data.location?.lng || -122.4194}&hl=en&z=12&output=embed`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
