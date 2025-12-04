'use client';

import { useState } from 'react';
import { Phone, Send } from 'lucide-react';

export function StickyContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Teşekkürler ${formData.name}! Sizi ${formData.phone} numarasından arayacağız.`);
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl shadow-2xl z-40 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gray-800 p-3 rounded-full">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm text-gray-500">Hemen İletişime Geçin</div>
              <div className="text-gray-800">Ücretsiz Danışmanlık</div>
            </div>
          </div>
          
          <input
            type="text"
            placeholder="Ad Soyad"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="flex-1 sm:flex-none sm:w-64 px-5 py-3 rounded-full bg-gray-50 text-gray-900 border-2 border-transparent focus:border-amber-600 focus:bg-white outline-none transition-all"
            required
          />
          
          <input
            type="tel"
            placeholder="Telefon Numarası"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="flex-1 sm:flex-none sm:w-64 px-5 py-3 rounded-full bg-gray-50 text-gray-900 border-2 border-transparent focus:border-amber-600 focus:bg-white outline-none transition-all"
            required
          />
          
          <button
            type="submit"
            className="group w-full sm:w-auto bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            Sizi Arayalım
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
}