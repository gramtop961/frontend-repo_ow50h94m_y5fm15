import { BedDouble, Bath, Ruler } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PropertyCard({ property }) {
  return (
    <Link to={`/property/${property.id || property._id || '1'}`} className="group rounded-2xl overflow-hidden bg-white shadow-xl shadow-gray-900/5 ring-1 ring-gray-900/5 hover:shadow-2xl hover:-translate-y-0.5 transition-all">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={property.images?.[0] || 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d9b?q=80&w=1600&auto=format&fit=crop'} alt={property.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-3 left-3 flex gap-2">
          {property.badges?.slice(0,3).map((b, i) => (
            <span key={i} className={`px-2.5 py-1 rounded-md text-xs font-medium shadow ${b.toLowerCase().includes('hot') ? 'bg-red-500/90 text-white':'bg-emerald-500/90 text-white'}`}>{b}</span>
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
    </Link>
  )
}
