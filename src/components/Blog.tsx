import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowRight, User, Calendar, Tag, TrendingUp } from 'lucide-react';

const mainArticles = [
  {
    id: 1,
    title: 'Yeni İş Kanunu Değişiklikleri ve Etkileri',
    excerpt: 'İş kanununda yapılan son değişiklikler ve çalışanlar üzerindeki etkileri hakkında detaylı bilgi...',
    author: 'Av. Mehmet Yılmaz',
    date: '2 Aralık 2025',
    tag: 'İş Hukuku',
    image: 'https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjB3cml0aW5nJTIwYXJ0aWNsZXxlbnwxfHx8fDE3NjQ4MzAyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Boşanma Davalarında Velayet Hakları',
    excerpt: 'Boşanma sürecinde çocuk velayeti konusunda bilinmesi gerekenler ve yasal süreçler...',
    author: 'Av. Ayşe Kara',
    date: '28 Kasım 2025',
    tag: 'Aile Hukuku',
    image: 'https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY0NzQ3MTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Ticari Sözleşmelerde Dikkat Edilmesi Gerekenler',
    excerpt: 'Ticari sözleşme imzalarken nelere dikkat etmelisiniz? İşte tüm detaylar...',
    author: 'Av. Can Demir',
    date: '25 Kasım 2025',
    tag: 'Ticaret Hukuku',
    image: 'https://images.unsplash.com/photo-1633158108216-f10cd3202d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBsYXclMjBkb2N1bWVudHN8ZW58MXx8fHwxNzY0ODMwMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-orange-500 to-red-500'
  }
];

const sidebarArticles = [
  { id: 4, title: 'Miras Hukukunda Saklı Pay Nedir?', tag: 'Miras Hukuku', date: '20 Kasım 2025' },
  { id: 5, title: 'Tüketici Hakları ve Korunma Yolları', tag: 'Tüketici Hukuku', date: '18 Kasım 2025' },
  { id: 6, title: 'Kira Sözleşmelerinde Yasal Haklar', tag: 'Gayrimenkul Hukuku', date: '15 Kasım 2025' },
  { id: 7, title: 'Şirket Kuruluşunda Dikkat Edilecekler', tag: 'Ticaret Hukuku', date: '12 Kasım 2025' },
  { id: 8, title: 'İcra Takibi ve Yasal Süreçler', tag: 'İcra Hukuku', date: '10 Kasım 2025' },
  { id: 9, title: 'İdari Dava Açma Koşulları', tag: 'İdare Hukuku', date: '8 Kasım 2025' },
  { id: 10, title: 'Ceza Davalarında Savunma Hakları', tag: 'Ceza Hukuku', date: '5 Kasım 2025' },
  { id: 11, title: 'İş Yerinde Mobbing ve Hukuki Yollar', tag: 'İş Hukuku', date: '3 Kasım 2025' },
  { id: 12, title: 'Gayrimenkul Alım Satımında Dikkat', tag: 'Gayrimenkul Hukuku', date: '1 Kasım 2025' },
  { id: 13, title: 'Borçlar Hukuku Temel Prensipleri', tag: 'Borçlar Hukuku', date: '28 Ekim 2025' }
];

export function Blog() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-amber-50/30" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full text-sm mb-4 shadow-sm">
            <TrendingUp className="w-4 h-4 text-amber-600" />
            <span className="text-amber-600">Blog & Makaleler</span>
          </div>
          <h2 className="text-5xl mb-6 text-gray-900">
            Güncel Hukuk Haberleri
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Hukuk dünyasından güncel gelişmeler ve bilgilendirici makaleler
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Articles - 3 Columns */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mainArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-1"
                >
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${article.gradient} opacity-40 group-hover:opacity-50 transition-opacity`}></div>
                    <div className={`absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-800`}>
                      {article.tag}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl mb-3 group-hover:text-amber-600 transition-colors leading-snug">{article.title}</h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">{article.excerpt}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-5 pb-5 border-b border-gray-100">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-gray-800 text-white px-4 py-2.5 rounded-xl hover:bg-gray-700 hover:shadow-lg transition-all text-sm">
                        Devamını Oku
                      </button>
                      <button className="flex-1 bg-amber-600 text-white px-4 py-2.5 rounded-xl hover:bg-amber-700 transition-all text-sm">
                        Benzer
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar - Scrollable Articles */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-24 shadow-lg border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-8 bg-amber-600 rounded-full"></div>
                <h3 className="text-xl">Diğer Makaleler</h3>
              </div>
              
              <div className="space-y-3 max-h-[650px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-100">
                {sidebarArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className="group bg-gradient-to-br from-gray-50 to-amber-50/50 p-4 rounded-xl border border-gray-100 hover:border-amber-300 hover:shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <div className="bg-amber-600 text-white text-xs px-2 py-1 rounded-lg">
                        {article.tag}
                      </div>
                    </div>
                    
                    <h4 className="text-sm mb-2 group-hover:text-amber-600 transition-colors leading-snug">{article.title}</h4>
                    
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}