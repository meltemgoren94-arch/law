import { services } from '@/data/services';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyContact } from '@/components/StickyContact';

interface ServiceDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage(props: ServiceDetailProps) {
  const params = await props.params;
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section - Başlık ve Arka Plan Resmi */}
        <div className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
          <ImageWithFallback
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-80 mix-blend-multiply`} />
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Link 
                href="/#services" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Hizmetlere Dön
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section - İçerik Alanı */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 -mt-32 relative z-10">
            
            {/* DEĞİŞİKLİK BURADA: 
                'prose' yerine Tailwind'in arbitrary value syntax'ını ([&_p]:...) kullanarak 
                içerideki HTML etiketlerini manuel olarak stillendiriyoruz. 
                Böylece eklenti kurmaya gerek kalmadan içerik düzgün görünecek.
            */}
            <div 
              className="
                text-gray-700 leading-relaxed
                [&_p]:mb-6 [&_p]:text-lg
                [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-4
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2
                [&_li]:text-gray-700 [&_li]:marker:text-amber-600
                [&_strong]:font-semibold [&_strong]:text-gray-900
                [&_.bg-blue-50]:rounded-xl [&_.bg-purple-50]:rounded-xl [&_.bg-orange-50]:rounded-xl
              "
              dangerouslySetInnerHTML={{ __html: service.content }} 
            />

            {/* Alt Bilgi Kutusu */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="bg-amber-50 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Hukuki Desteğe mi İhtiyacınız Var?</h4>
                  <p className="text-gray-600 text-sm">Uzman ekibimizle iletişime geçerek süreci hemen başlatabilirsiniz.</p>
                </div>
                <Link 
                  href="/#contact" 
                  className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors shadow-lg whitespace-nowrap"
                >
                  Hemen Danışın
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>

      <StickyContact />
      <Footer />
    </div>
  );
}