"use client";

import { useState } from 'react';
import { X, Phone, Loader2, CheckCircle2 } from 'lucide-react';

export default function CallbackModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [formData, setFormData] = useState({
    patientName: '',
    mobileNumber: '',
    preferredTime: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/enquiries/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (res.ok) {
        setSuccess(true);
      } else {
        alert(data.error || 'Failed to submit request');
      }
    } catch (err) {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
          <X className="w-5 h-5" />
        </button>
        
        <div className="bg-fuchsia-600 p-6 text-white text-center">
          <Phone className="w-10 h-10 mx-auto mb-2 opacity-90" />
          <h2 className="text-xl font-bold">Request a Callback</h2>
          <p className="text-fuchsia-100 text-sm mt-1">Leave your details and our team will call you</p>
        </div>

        {success ? (
          <div className="p-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-fuchsia-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Request Saved!</h3>
            <p className="text-slate-500 mb-6">Our team will call you during your preferred time.</p>
            <div className="space-y-3">
              <a href="tel:+919813503419" className="block w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 rounded-lg transition-colors">
                Call Us Now
              </a>
              <button onClick={onClose} className="block w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-lg transition-colors">
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Patient Name</label>
              <input type="text" required value={formData.patientName} onChange={e => setFormData({...formData, patientName: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-all text-slate-900 placeholder-slate-400" placeholder="Enter full name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Mobile Number</label>
              <input type="tel" required value={formData.mobileNumber} onChange={e => setFormData({...formData, mobileNumber: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-all text-slate-900 placeholder-slate-400" placeholder="Enter 10 digit number" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Preferred Time</label>
              <select required value={formData.preferredTime} onChange={e => setFormData({...formData, preferredTime: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-all bg-white text-slate-900">
                <option value="">Select a time slot...</option>
                <option value="Anytime">Anytime</option>
                <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Test or Service required</label>
              <input type="text" required value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-all text-slate-900 placeholder-slate-400" placeholder="e.g. MRI Scan" />
            </div>
            
            <button type="submit" disabled={loading} className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 rounded-lg flex items-center justify-center transition-all disabled:opacity-70 mt-2">
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Request Callback'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
