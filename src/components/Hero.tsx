import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowRight, Scale, Shield, Award } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[700px] bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <Shield className="w-4 h-4 text-amber-600" />
              <span className="text-sm text-gray-700">Güvenilir Hukuk Danışmanlığı</span>
            </div>
            
            <h2 className="text-6xl mb-6 text-gray-900 leading-tight">
              Hukuki Haklarınızı Koruyoruz
            </h2>
            <p className="text-xl mb-8 text-gray-600 leading-relaxed">
              Uzman kadromuz ile her türlü hukuki konuda yanınızdayız. 
              Adalet ve güven için doğru adres.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2">
                Sizi Arayalım
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-full hover:bg-gray-50 hover:shadow-lg transition-all duration-300 border-2 border-gray-800">
                Hizmetlerimiz
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl text-amber-600 mb-2">1000+</div>
                <div className="text-sm text-gray-600">Mutlu Müvekkil</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-amber-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Yıl Tecrübe</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-amber-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Başarı Oranı</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1756633231294-f72b004e8c5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBqdXN0aWNlJTIwY291cnRob3VzZXxlbnwxfHx8fDE3NjQ3NTc0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Law Firm Hero"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 p-3 rounded-xl">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Toplam Dava</div>
                  <div className="text-xl">850+</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="bg-amber-600 p-3 rounded-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Ödüller</div>
                  <div className="text-xl">12+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}