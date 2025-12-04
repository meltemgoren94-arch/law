import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Ceza Hukuku',
    description: 'Ceza davaları, soruşturma süreçleri ve savunma hizmetlerinde uzman ekibimizle yanınızdayız.',
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmltaW5hbCUyMGxhdyUyMGdhdmVsfGVufDF8fHx8MTc2NDgzMDI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    id: 2,
    title: 'Aile Hukuku',
    description: 'Boşanma, velayet, nafaka ve aile içi hukuki sorunlarınızda profesyonel destek sunuyoruz.',
    image: 'https://images.unsplash.com/photo-1633158108216-f10cd3202d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBsYXclMjBkb2N1bWVudHN8ZW58MXx8fHwxNzY0ODMwMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 3,
    title: 'Ticaret Hukuku',
    description: 'Şirket kuruluşu, sözleşmeler ve ticari uyuşmazlıklarda size rehberlik ediyoruz.',
    image: 'https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxhdyUyMGNvbnRyYWN0fGVufDF8fHx8MTc2NDgzMDI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-orange-600 to-red-600'
  }
];

export function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
            >
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
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button className="group/btn flex items-center gap-2 text-gray-800 hover:text-amber-600 hover:gap-3 transition-all">
                  Detaylı Bilgi
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group bg-gray-800 text-white px-10 py-4 rounded-full hover:bg-gray-700 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
            Tüm Hizmetleri Görüntüle
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}