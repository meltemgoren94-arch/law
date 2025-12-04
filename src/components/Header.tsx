'use client';

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl text-gray-800">Adalet Hukuk</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors relative group">
              Ana Sayfa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors relative group">
              Hakkımızda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-amber-600 transition-colors group"
              >
                <span>Hizmetlerimiz</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-4 w-64 bg-white rounded-2xl shadow-2xl py-3 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                  <a href="#service1" className="block px-6 py-3 hover:bg-amber-50 hover:text-amber-700 transition-all">
                    Ceza Hukuku
                  </a>
                  <a href="#service2" className="block px-6 py-3 hover:bg-amber-50 hover:text-amber-700 transition-all">
                    Aile Hukuku
                  </a>
                  <a href="#service3" className="block px-6 py-3 hover:bg-amber-50 hover:text-amber-700 transition-all">
                    Ticaret Hukuku
                  </a>
                  <a href="#service4" className="block px-6 py-3 hover:bg-amber-50 hover:text-amber-700 transition-all">
                    İş Hukuku
                  </a>
                </div>
              )}
            </div>

            <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors relative group">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-700 hover:shadow-lg transition-all duration-300">
              İletişim
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50">
                Ana Sayfa
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50">
                Hakkımızda
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50">
                Hizmetlerimiz
              </a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50">
                Blog
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50">
                İletişim
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}