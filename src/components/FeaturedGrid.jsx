import { motion } from 'framer-motion'
import { Flame, BedDouble, Bath, Ruler } from 'lucide-react'

function Badge({ label, color = 'emerald' }) {
  const colors = {
    emerald: 'bg-emerald-500/90 text-white',
    red: 'bg-red-500/90 text-white',
    cyan: 'bg-cyan-500/90 text-gray-900',
  }
  return (
    <span className={`px-2.5 py-1 rounded-md text-xs font-medium shadow ${colors[color]}`}>{label}</span>
  )
}

function Card({ property }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl overflow-hidden bg-white shadow-xl shadow-gray-900/5 ring-1 ring-gray-900/5 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={property.images?.[0] || 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d9b?q=80&w=1600&auto=format&fit=crop'} alt={property.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
        <div className="absolute top-3 left-3 flex gap-2">
          {property.badges?.slice(0,3).map((b, i) => (
            <Badge key={i} label={b} color={b.toLowerCase().includes('hot') ? 'red' : 'emerald'} />
          ))}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-gray-900 font-semibold text-lg leading-snug">{property.title}</h3>
          <div className="text-right">
            <div className="text-gray-900 font-semibold">${property.price?.toLocaleString?.() || property.price}</div>
            <div className="text-gray-500 text-xs">{property.city}</div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-4 text-gray-600">
          <span className="inline-flex items-center gap-1 text-sm"><BedDouble size={16}/> {property.bedrooms} bd</span>
          <span className="inline-flex items-center gap-1 text-sm"><Bath size={16}/> {property.bathrooms} ba</span>
          <span className="inline-flex items-center gap-1 text-sm"><Ruler size={16}/> {property.area} sqft</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedGrid({ properties = [] }) {
  return (
    <section id="featured" className="relative bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Featured Residences</h2>
          <div className="text-sm text-emerald-600 inline-flex items-center gap-1">
            <Flame size={16}/> Curated selection
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map(p => (
            <Card key={p.id || p.title} property={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
