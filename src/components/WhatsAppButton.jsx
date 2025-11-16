import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:shadow-2xl transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle size={18} /> Chat on WhatsApp
    </a>
  )
}
