'use client';

import Link from 'next/link';
import { Menu, X, Facebook, Instagram, User, GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Estrutura', href: '/#estrutura' },
    { name: 'Projetos', href: '/#projetos' },
    { name: 'Grêmio', href: '/gremio' },
    { name: 'Contato', href: '/#contato' },
  ];

  return (
    <>
      {/* Barra superior institucional */}
      <div className="bg-[#003DA5] text-white text-sm fixed top-0 left-0 right-0 z-50 h-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <span className="hidden sm:inline text-xs font-medium tracking-wide">
            Diretoria de Ensino Leste 2 — Secretaria da Educação do Estado de SP
          </span>
          <span className="sm:hidden text-xs font-medium">
            Diretoria Leste 2 — SEDUC-SP
          </span>
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com/EscolaNancy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#F5A623] transition-colors"
              aria-label="Facebook da escola"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a 
              href="https://instagram.com/escola.nancy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#F5A623] transition-colors"
              aria-label="Instagram da escola"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Header principal fixo com blur */}
      <header 
        className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-header shadow-lg border-b border-slate-100' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo e nome */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image 
                  src="/logo-nancy.png" 
                  alt="Logo EE Nancy" 
                  width={48} 
                  height={48} 
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <GraduationCap className="h-8 w-8 absolute text-[#003DA5]" />
              </div>
              <div className="hidden md:flex flex-col">
                <span className="font-bold text-sm leading-tight text-[#1A1A2E]">
                  E.E. Profª Nancy de
                </span>
                <span className="font-bold text-sm leading-tight text-[#1A1A2E]">
                  Oliveira Fidalgo
                </span>
              </div>
              <span className="md:hidden font-bold text-sm text-[#1A1A2E]">
                EE Nancy
              </span>
            </Link>

            {/* Navegação desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all text-[#1A1A2E] hover:text-[#003DA5] hover:bg-slate-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Botão Portal do Aluno */}
            <div className="hidden lg:block">
              <Link
                href="/portal-entrada"
                className="bg-[#003DA5] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#002d7a] transition-colors flex items-center gap-2 shadow-sm"
              >
                <User className="h-4 w-4" />
                Portal do Aluno
              </Link>
            </div>

            {/* Mobile */}
            <div className="lg:hidden flex items-center gap-3">
              <Link
                href="/portal-entrada"
                className="bg-[#003DA5] text-white p-2 rounded-lg"
                aria-label="Portal do Aluno"
              >
                <User className="h-5 w-5" />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg transition-colors text-[#1A1A2E] hover:bg-slate-100"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Menu mobile animado */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden fixed top-[104px] right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50"
            >
              <div className="p-6 space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-4 text-[#1A1A2E] font-medium hover:bg-slate-50 hover:text-[#003DA5] rounded-lg transition-colors border-b border-slate-100"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.05 }}
                  className="pt-4"
                >
                  <Link
                    href="/portal-entrada"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-[#003DA5] text-white px-4 py-4 rounded-lg font-semibold text-center"
                  >
                    Portal do Aluno
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Overlay para menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            style={{ top: '104px' }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
