"use client";

import { useState } from 'react';
import { X, MessageCircle, Loader2, CheckCircle2 } from 'lucide-react';

export default function WhatsAppModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [formData, setFormData] = useState({
    patientName: '',
    mobileNumber: '',
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
      const res = await fetch('/api/enquiries/whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (res.ok) {
        setSuccess(true);
        const waMessage = `HELLO JANGRA DIAGNOSTICS,\n\nI want to enquire about a diagnostic/healthcare service.\n\nEnquiry ID: ${data.requestId}\nName: ${formData.patientName}\nMobile: ${formData.mobileNumber}\nService: ${formData.service}\nMessage: ${formData.message || 'Please provide details'}\n\nPlease assist me.`;
        window.open(`https://wa.me/919813503420?text=${encodeURIComponent(waMessage)}`, '_blank');
        setTimeout(() => {
          onClose();
          setSuccess(false);
          setFormData({ patientName: '', mobileNumber: '', service: '', message: '' });
        }, 3000);
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
        
        <div className="bg-green-500 p-6 text-white text-center">
          <MessageCircle className="w-10 h-10 mx-auto mb-2 opacity-90" />
          <h2 className="text-xl font-bold">WhatsApp Enquiry</h2>
          <p className="text-green-100 text-sm mt-1">Send us a message directly on WhatsApp</p>
        </div>

        {success ? (
          <div className="p-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Request Saved!</h3>
            <p className="text-slate-500">Redirecting you to WhatsApp to complete your enquiry...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Patient Name</label>
              <input type="text" required value={formData.patientName} onChange={e => setFormData({...formData, patientName: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all text-slate-900 placeholder-slate-400" placeholder="Enter full name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Mobile Number</label>
              <input type="tel" required value={formData.mobileNumber} onChange={e => setFormData({...formData, mobileNumber: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all text-slate-900 placeholder-slate-400" placeholder="Enter 10 digit number" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Test or Service required</label>
              <input type="text" required value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all text-slate-900 placeholder-slate-400" placeholder="e.g. Full Body Checkup" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Additional Message (Optional)</label>
              <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all text-slate-900 placeholder-slate-400" placeholder="Any specific questions..." rows={2}></textarea>
            </div>
            
            <button type="submit" disabled={loading} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg flex items-center justify-center transition-all disabled:opacity-70 mt-2">
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Continue to WhatsApp'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
