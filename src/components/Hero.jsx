import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[620px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-emerald-300/90 text-sm uppercase tracking-[0.3em] mb-5">Luxury Real Estate</p>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1]">
            Discover Elevated Living Spaces in the Heart of the City
          </h1>
          <p className="text-white/80 mt-4 text-lg max-w-2xl">
            Curated residences with panoramic views, seamless amenities, and timeless design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-8"
        >
          <div className="backdrop-blur-xl bg-white/10 border border-white/15 rounded-2xl p-3 shadow-2xl shadow-emerald-500/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <input placeholder="Location" className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
              <input placeholder="Price Range" className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
              <input placeholder="Bedrooms" className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/60">
                <option className="text-gray-800">Property Type</option>
                <option className="text-gray-800">Apartment</option>
                <option className="text-gray-800">Villa</option>
                <option className="text-gray-800">Penthouse</option>
              </select>
              <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-gray-900 font-semibold shadow-lg shadow-emerald-500/30">Search</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
