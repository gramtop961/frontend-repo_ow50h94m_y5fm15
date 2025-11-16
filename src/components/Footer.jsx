import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-500/30 mb-4" />
          <p className="text-sm text-gray-400 max-w-sm">Aurelia Estates curates modern residences across the city with a focus on quality, design, and premium experiences.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Explore</a></li>
            <li><a href="#featured" className="hover:text-white">Featured</a></li>
            <li><a href="#" className="hover:text-white">Agents</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16}/> 123 Skyline Ave, Downtown</li>
            <li className="flex items-center gap-2"><Phone size={16}/> +1 (234) 567-890</li>
            <li className="flex items-center gap-2"><Mail size={16}/> hello@aureliaestates.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Follow</h4>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Facebook size={18}/></a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Instagram size={18}/></a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Twitter size={18}/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Aurelia Estates. All rights reserved.</div>
    </footer>
  )
}
