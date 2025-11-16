import { useEffect, useState } from 'react'

export default function AdminPanel() {
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({
    title: '', address: '', city: '', country: '', price: '', bedrooms: '', bathrooms: '', area: '', type: 'Apartment', status: 'For Sale', badges: '', images: ''
  })
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage('')
    try {
      const payload = {
        ...form,
        price: parseFloat(form.price),
        bedrooms: parseInt(form.bedrooms),
        bathrooms: parseInt(form.bathrooms),
        area: parseFloat(form.area),
        badges: form.badges ? form.badges.split(',').map(s => s.trim()) : [],
        images: form.images ? form.images.split(',').map(s => s.trim()) : [],
        featured: true
      }
      const res = await fetch(`${base}/properties`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to save')
      const id = await res.json()
      setMessage(`Saved! ID: ${id}`)
      setForm({ title: '', address: '', city: '', country: '', price: '', bedrooms: '', bathrooms: '', area: '', type: 'Apartment', status: 'For Sale', badges: '', images: '' })
    } catch (e) {
      setMessage('Error saving property')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16">
      <h1 className="text-2xl font-semibold text-gray-900">Admin Panel</h1>
      <p className="text-gray-600">Add a new property</p>

      <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {['title','address','city','country','price','bedrooms','bathrooms','area'].map(name => (
          <input key={name} name={name} value={form[name]} onChange={onChange} placeholder={name[0].toUpperCase()+name.slice(1)} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
        ))}
        <select name="type" value={form.type} onChange={onChange} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60">
          <option>Apartment</option>
          <option>Villa</option>
          <option>Penthouse</option>
        </select>
        <select name="status" value={form.status} onChange={onChange} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60">
          <option>For Sale</option>
          <option>For Rent</option>
          <option>Sold</option>
        </select>
        <input name="badges" value={form.badges} onChange={onChange} placeholder="Badges (comma separated)" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 sm:col-span-2" />
        <input name="images" value={form.images} onChange={onChange} placeholder="Image URLs (comma separated)" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 sm:col-span-2" />
        <div className="sm:col-span-2 flex items-center gap-3">
          <button disabled={saving} className="px-5 py-3 rounded-xl bg-emerald-500 text-white font-semibold disabled:opacity-60">{saving ? 'Saving...' : 'Save Property'}</button>
          {message && <div className="text-sm text-gray-600">{message}</div>}
        </div>
      </form>
    </div>
  )
}
