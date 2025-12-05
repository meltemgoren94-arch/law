import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services'; // Veriyi merkezi dosyadan çekiyoruz
import Link from 'next/link'; // Sayfa geçişi için kritik import

export function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Üst Kısım - Başlıklar */}
        <div className="text-center mb-20">
          <div className="inline-block bg-amber-600 text-white px-4 py-1 rounded-full text-sm mb-4">
            Hizmetlerimiz
          </div>
          <h2 className="text-5xl mb-6 text-gray-900">
            Size Nasıl Yardımcı Olabiliriz?
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Tüm hukuki ihtiyaçlarınız için profesyonel ve güvenilir çözümler sunuyoruz
          </p>
        </div>

        {/* Hizmet Kartları Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
            >
              {/* Resim Alanı */}
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl text-white mb-2">{service.title}</h3>
                </div>
              </div>

              {/* İçerik ve Buton Alanı */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* DÜZELTME BURADA: Button yerine Link kullanıyoruz */}
                <Link 
                  href={`/hizmetlerimiz/${service.slug}`}
                  className="group/btn inline-flex items-center gap-2 text-gray-800 hover:text-amber-600 hover:gap-3 transition-all cursor-pointer font-medium"
                >
                  Detaylı Bilgi
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Tüm Hizmetleri Görüntüle Butonu */}
        <div className="text-center">
          <Link 
            href="/hizmetlerimiz" 
            className="group inline-flex bg-gray-800 text-white px-10 py-4 rounded-full hover:bg-gray-700 hover:shadow-2xl transition-all duration-300 items-center justify-center gap-2 mx-auto"
          >
            Tüm Hizmetleri Görüntüle
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}