"use client";

import { useState } from 'react';
import { X, CalendarCheck, Loader2, CheckCircle2 } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [formData, setFormData] = useState({
    patientName: '',
    mobileNumber: '',
    age: '',
    gender: 'Male',
    collectionType: 'Centre Visit',
    address: '',
    pincode: '',
    preferredDate: '',
    preferredTime: '',
    tests: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Parse tests into an array
    const testsArray = formData.tests.split(',').map(t => t.trim()).filter(Boolean);
    
    const payload = {
      ...formData,
      age: formData.age ? parseInt(formData.age) : undefined,
      tests: testsArray
    };

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      
      if (res.ok) {
        setSuccess(true);
        const waMessage = `HELLO JANGRA DIAGNOSTICS,\n\nI want to book an appointment.\n\nBooking ID: ${data.bookingId}\nName: ${formData.patientName}\nMobile: ${formData.mobileNumber}\nAge/Gender: ${formData.age || 'N/A'} ${formData.gender}\nCollection: ${formData.collectionType}\nDate & Time: ${formData.preferredDate || 'Flexible'} ${formData.preferredTime || ''}\nTests/Services Required: ${formData.tests || 'Diagnostic Consultation'}\n\nPlease confirm my booking.`;
        window.open(`https://wa.me/919813503420?text=${encodeURIComponent(waMessage)}`, '_blank');
        setTimeout(() => {
          onClose();
          setSuccess(false);
          setFormData({
            patientName: '', mobileNumber: '', age: '', gender: 'Male', collectionType: 'Centre Visit', 
            address: '', pincode: '', preferredDate: '', preferredTime: '', tests: '', notes: ''
          });
        }, 3000);
      } else {
        alert(data.error || 'Failed to submit booking');
      }
    } catch (err) {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-lg my-8 relative animate-in fade-in zoom-in duration-300 border border-slate-100 overflow-hidden">
        <button 
          type="button"
          suppressHydrationWarning
          onClick={onClose} 
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 transition-colors z-10 p-1.5 rounded-full hover:bg-slate-100"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Soft Ice-Blue Header */}
        <div className="bg-[#F5F9FD] p-6 sm:p-7 border-b border-sky-100/80 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#EBF5FE] text-[#1D64D8] flex items-center justify-center mx-auto mb-2.5">
            <CalendarCheck className="w-6 h-6" />
          </div>
          <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-1 flex items-center justify-center gap-2">
            <span>BOOK ONLINE</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>QUICK CONFIRMATION</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#0A1938] tracking-tight">
            <span>Book an </span>
            <span className="text-[#1D64D8]">Appointment</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-normal mt-1">Fill in the details below to schedule your test</p>
        </div>

        {success ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#EBF5FE] text-[#1D64D8] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0A1938] mb-2">
              <span>Booking </span>
              <span className="text-[#1D64D8]">Initiated!</span>
            </h3>
            <p className="text-slate-500 text-sm font-normal">Redirecting you to WhatsApp to confirm your appointment details...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[70vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">Patient Name *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.patientName} 
                  onChange={e => setFormData({...formData, patientName: e.target.value})} 
                  className="w-full border border-slate-200 rounded-2xl px-4 py-2.5 outline-none focus:border-[#1D64D8] focus:ring-4 focus:ring-[#1D64D8]/10 transition-all text-slate-900 bg-[#F8FAFC] focus:bg-white text-sm" 
                  placeholder="Enter full name" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">Mobile Number *</label>
                <input 
                  type="tel" 
                  required 
                  value={formData.mobileNumber} 
                  onChange={e => setFormData({...formData, mobileNumber: e.target.value})} 
                  className="w-full border border-slate-200 rounded-2xl px-4 py-2.5 outline-none focus:border-[#1D64D8] focus:ring-4 focus:ring-[#1D64D8]/10 transition-all text-slate-900 bg-[#F8FAFC] focus:bg-white text-sm" 
                  placeholder="10 digit number" 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">Age</label>
                <input 
                  type="number" 
                  required 
                  value={formData.age} 
                  onChange={e => setFormData({...formData, age: e.target.value})} 
                  className="w-full border border-slate-200 rounded-2xl px-4 py-2.5 outline-none focus:border-[#1D64D8] focus:ring-4 focus:ring-[#1D64D8]/10 transition-all text-slate-900 bg-[#F8FAFC] focus:bg-white text-sm" 
                  placeholder="Years" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">Gender</label>
                <select 
                  value={formData.gender} 
                  onChange={e => setFormData({...formData, gender: e.target.value})} 
                  className="w-full border border-slate-200 rounded-2xl px-4 py-2.5 outline-none focus:border-[#1D64D8] focus:ring-4 focus:ring-[#1D64D8]/10 transition-all bg-[#F8FAFC] focus:bg-white text-slate-900 text-sm"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-2">Collection Type</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700">
                  <input 
                    type="radio" 
                    name="collectionType" 
                    value="Centre Visit" 
                    checked={formData.collectionType === 'Centre Visit'} 
                    onChange={e => setFormData({...formData, collectionType: e.target.value})} 
                    className="w-4 h-4 text-[#1D64D8] focus:ring-[#1D64D8]" 
                  />
                  <span>Centre Visit</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700">
                  <input 
                    type="radio" 
                    name="collectionType" 
                    value="Home Collection" 
                    checked={formData.collectionType === 'Home Collection'} 
                    onChange={e => setFormData({...formData, collectionType: e.target.value})} 
                    className="w-4 h-4 text-[#1D64D8] focus:ring-[#1D64D8]" 
                  />
                  <span>Free Home Collection</span>
                </label>
              </div>
            </div>

            {formData.collectionType === 'Home Collection' && (
              <div className="space-y-3 p-4 bg-[#F8FAFC] rounded-2xl border border-slate-200">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Address *</label>
                  <textarea 
                    required 
                    value={formData.address} 
                    onChange={e => setFormData({...formData, address: e.target.value})} 
                    rows={2} 
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-[#1D64D8] focus:ring-4 focus:ring-[#1D64D8]/10 transition-all resize-none text-slate-900 bg-white text-xs" 
                    placeholder="Enter full address in Rohtak" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Pincode</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.pincode} 
                    onChange={e => setFormData({...formData, pincode: e.target.value})} 
                    className="w-full border border-slate-200 rounded-xl px-4 py-2 outline-none focus:border-[#1D64D8] focus:ring-4 focus:ring-[#1D64D8]/10 transition-all text-slate-900 bg-white text-xs" 
                    placeholder="e.g. 124001" 
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">Preferred Date *</label>
                <input 
                  type="date" 
                  required 
                  value={formData.preferredDate} 
                  onChange={e => setFormData({...formData, preferredDate: e.target.value})} 
                  className="w-full border border-slate-200 rounded-2xl px-4 py-2.5 outline-none focus:border-[#1D64D8] focus:ring-4 focus:ring-[#1D64D8]/10 transition-all text-slate-900 bg-[#F8FAFC] focus:bg-white text-sm" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">Preferred Time *</label>
                <select 
                  required 
                  value={formData.preferredTime} 
                  onChange={e => setFormData({...formData, preferredTime: e.target.value})} 
                  className="w-full border border-slate-200 rounded-2xl px-4 py-2.5 outline-none focus:border-[#1D64D8] focus:ring-4 focus:ring-[#1D64D8]/10 transition-all bg-[#F8FAFC] focus:bg-white text-slate-900 text-sm"
                >
                  <option value="">Select time...</option>
                  <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">Tests / Services Required *</label>
              <input 
                type="text" 
                required 
                value={formData.tests} 
                onChange={e => setFormData({...formData, tests: e.target.value})} 
                className="w-full border border-slate-200 rounded-2xl px-4 py-2.5 outline-none focus:border-[#1D64D8] focus:ring-4 focus:ring-[#1D64D8]/10 transition-all text-slate-900 bg-[#F8FAFC] focus:bg-white text-sm" 
                placeholder="e.g. Ultrasound, CBC, Dental Checkup" 
              />
            </div>

            <button 
              type="submit" 
              disabled={loading} 
              className="w-full bg-[#1D64D8] hover:bg-[#1554B8] text-white font-medium py-3.5 rounded-full flex items-center justify-center transition-all disabled:opacity-70 mt-6 shadow-sm cursor-pointer text-sm"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Confirm Booking on WhatsApp'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
