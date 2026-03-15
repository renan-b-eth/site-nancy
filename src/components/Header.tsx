'use client';

import Link from 'next/link';
import { Menu, X, School, User } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Estrutura', href: '/#estrutura' },
    { name: 'Projetos', href: '/#projetos' },
    { name: 'Grêmio', href: '/gremio' },
    { name: 'Contato', href: '/#contato' },
  ];

  return (
    <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white/20">
                {/* Logo da escola (usar /public/logo-nancy.png como placeholder) */}
                <Image 
                  src="/logo-nancy.png" 
                  alt="Logo EE Nancy" 
                  width={48} 
                  height={48} 
                  className="object-contain"
                  onError={(e) => {
                    // Fallback se a imagem não existir
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <School className="h-7 w-7 text-primary absolute group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base leading-tight hidden sm:block">EE Profª Nancy de Oliveira Fidalgo</span>
                <span className="text-xs text-white/80 hidden sm:block italic">Diretoria Leste 2</span>
                <span className="font-bold text-lg sm:hidden">EE Nancy</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-baseline space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href="/portal-entrada"
              className="bg-white text-primary px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-slate-100 transition-colors flex items-center gap-2"
            >
              <User className="h-4 w-4" />
              Portal do Aluno
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-4">
             <Link
              href="/portal-entrada"
              className="bg-white text-primary p-2 rounded-full shadow-md sm:px-4 sm:py-2 sm:rounded-lg sm:text-xs font-bold flex items-center gap-1"
              aria-label="Acessar o portal do aluno"
            >
              <User className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Portal</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X className="h-7 w-7" aria-hidden="true" /> : <Menu className="h-7 w-7" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-primary pb-6 px-4 pt-2 space-y-2 border-t border-white/10 animate-in slide-in-from-top duration-300">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-white/10 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
