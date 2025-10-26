import React, { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '', date: '', time: '', people: '2', phone: '', requests: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    
    if (!formData.name) newErrors.name = true;
    if (!formData.date) newErrors.date = true;
    if (!formData.time) newErrors.time = true;
    if (!formData.phone) newErrors.phone = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', date: '', time: '', people: '2', phone: '', requests: '' });
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <h2 className="font-['Bebas_Neue'] text-4xl font-bold text-[#E91E8C] tracking-[2px] mb-6">
              RESERVE YOUR TABLE
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input type="text" placeholder="Your Name *" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className={`w-full px-4 py-3 border-2 rounded-lg font-['Poppins'] ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-[#E91E8C] focus:outline-none`} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} min={new Date().toISOString().split('T')[0]} className={`px-4 py-3 border-2 rounded-lg font-['Poppins'] ${errors.date ? 'border-red-500' : 'border-gray-300'} focus:border-[#E91E8C] focus:outline-none`} />
                <select value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} className={`px-4 py-3 border-2 rounded-lg font-['Poppins'] ${errors.time ? 'border-red-500' : 'border-gray-300'} focus:border-[#E91E8C] focus:outline-none`}>
                  <option value="">Select Time *</option>
                  {Array.from({length: 24}, (_, i) => i + 8).filter(h => h < 22).map(h => ['00', '30'].map(m => `${h}:${m}`)).flat().map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <select value={formData.people} onChange={(e) => setFormData({...formData, people: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-['Poppins'] focus:border-[#E91E8C] focus:outline-none">
                {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>)}
              </select>
              <input type="tel" placeholder="Phone Number *" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className={`w-full px-4 py-3 border-2 rounded-lg font-['Poppins'] ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-[#E91E8C] focus:outline-none`} />
              <textarea placeholder="Special Requests (dietary requirements, celebration notes...)" value={formData.requests} onChange={(e) => setFormData({...formData, requests: e.target.value})} rows={3} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-['Poppins'] focus:border-[#E91E8C] focus:outline-none resize-none" />
              <button type="submit" className="w-full bg-[#E91E8C] text-white py-4 rounded-lg font-['Poppins'] text-base font-semibold uppercase tracking-wide hover:bg-[#d01a7d] transition-all">
                CONFIRM BOOKING
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-['Bebas_Neue'] text-3xl font-bold text-green-600 mb-4">BOOKING CONFIRMED!</h3>
            <p className="font-['Poppins'] text-base text-gray-700">Your table for <strong>{formData.people}</strong> is reserved on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.</p>
            <p className="font-['Poppins'] text-sm text-gray-600 mt-2">We've sent confirmation to <strong>{formData.phone}</strong>.</p>
            <p className="font-['Poppins'] text-lg font-semibold text-[#E91E8C] mt-4">See you at Chutnée!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
