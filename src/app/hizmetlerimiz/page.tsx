import { services } from '@/data/services';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyContact } from '@/components/StickyContact';
import { ArrowRight, Scale } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Akdeniz Hukuk",
  description: "Ceza, Aile, Ticaret ve diğer hukuk alanlarındaki uzman hizmetlerimiz.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Sayfa Başlığı */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/10">
            <Scale className="w-5 h-5 text-amber-500" />
            <span className="text-amber-50">Uzmanlık Alanlarımız</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hukuki Hizmetlerimiz</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Deneyimli kadromuzla, hukukun her alanında yanınızdayız. İhtiyaç duyduğunuz çözümler için doğru adrestesiniz.
          </p>
        </div>
      </div>

      {/* Hizmetler Listesi */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-50 group-hover:opacity-60 transition-opacity`} />
                <div className="absolute bottom-4 left-4">
                   <h3 className="text-2xl font-bold text-white shadow-sm">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                  {service.description}
                </p>
                
                <Link 
                  href={`/hizmetlerimiz/${service.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-amber-600 hover:text-white hover:border-transparent transition-all duration-300 font-medium"
                >
                  İncele
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Alt Bilgi Kutusu */}
        <div className="mt-20 bg-amber-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Özel Bir Hukuki Durumunuz mu Var?</h2>
                <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
                    Listelenen hizmetlerin dışında, spesifik hukuki ihtiyaçlarınız için de yanınızdayız. Detaylı görüşme için ofisimizi ziyaret edebilirsiniz.
                </p>
                <Link href="/#contact" className="inline-block bg-white text-amber-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-lg">
                    Bizimle İletişime Geçin
                </Link>
            </div>
        </div>
      </main>

      <StickyContact />
      <Footer />
    </div>
  );
}