import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'AĞIR CEZA HUKUKU',
    subtitle: 'Mersin Ağır Ceza Avukatı',
    description: 'Kişi özgürlüğünü doğrudan ilgilendiren ağır ceza davaları, titiz bir hukuki hazırlık ve güçlü bir savunma stratejisi gerektirir.',
    details: 'AYM Başvurusu & Olağanüstü Kanun Yolları',
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmltaW5hbCUyMGxhdyUyMGdhdmVsfGVufDF8fHx8MTc2NDgzMDI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    id: 2,
    title: 'BOŞANMA VE AİLE HUKUKU',
    subtitle: 'Mersin Boşanma Avukatı',
    description: 'Aile hukuku uyuşmazlıklarında önceliğimiz, süreci müvekkillerimiz için en az yıpratıcı şekilde yönetmektir.',
    details: 'Çekişmeli Boşanma & İstinaf Süreci',
    // Guncellendi: Calismayan .png yerine Unsplash gorseli geri getirildi
    image: 'https://images.unsplash.com/photo-1633158108216-f10cd3202d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBsYXclMjBkb2N1bWVudHN8ZW58MXx8fHwxNzY0ODMwMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 3,
    title: 'TİCARET VE ŞİRKETLER HUKUKU',
    subtitle: 'Mersin Ticaret Avukatı',
    description: 'Mersin’in ticari dinamiklerine hakim ofisimiz, şirketlerin kuruluşundan tasfiyesine kadar tüm süreçlerde yanınızdadır.',
    details: 'Şirketler Hukuku & Danışmanlık',
    // Guncellendi: Calismayan .png yerine Unsplash gorseli geri getirildi
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
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                {/* Subtitle: Başlığın üstünde, 9px, sola hizalı ve amber renginde */}
                <div className="text-[9px] text-amber-600 font-bold uppercase tracking-widest mb-2 text-left">
                  {service.subtitle}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight uppercase">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Detay Alanı */}
                <div className="text-gray-800 font-medium text-sm mb-6 border-l-4 border-amber-100 pl-3 py-1">
                  {service.details}
                </div>

                <div className="mt-auto">
                    <button className="group/btn flex items-center gap-2 text-gray-800 hover:text-amber-600 hover:gap-3 transition-all font-medium">
                    Detaylı Bilgi
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
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