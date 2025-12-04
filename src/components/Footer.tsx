import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white pb-28 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl text-amber-500 mb-6">Adalet Hukuk</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Profesyonel hukuk hizmetleri ile adalet ve güven için yanınızdayız.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 hover:bg-amber-600 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-amber-600 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-amber-600 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-amber-600 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-6 relative inline-block">
              Hızlı Bağlantılar
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-600 -mb-2"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl mb-6 relative inline-block">
              Hizmetlerimiz
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 -mb-2"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Ceza Hukuku
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Aile Hukuku
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Ticaret Hukuku
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  İş Hukuku
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Gayrimenkul Hukuku
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl mb-6 relative inline-block">
              İletişim
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-600 -mb-2"></div>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 group hover:text-white transition-colors">
                <div className="bg-amber-600 p-2 rounded-lg flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span>Atatürk Cad. No: 123<br />Çankaya, Ankara</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group hover:text-white transition-colors">
                <div className="bg-amber-600 p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span>+90 312 123 45 67</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group hover:text-white transition-colors">
                <div className="bg-amber-600 p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span>info@adalethukuk.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">&copy; 2025 Adalet Hukuk. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}