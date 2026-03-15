import { Mail, Phone, MapPin, GraduationCap, Facebook, Instagram, School } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre a Escola', href: '/#sobre' },
    { name: 'Estrutura', href: '/#estrutura' },
    { name: 'Projetos', href: '/#projetos' },
    { name: 'Grêmio Estudantil', href: '/gremio' },
    { name: 'Contato', href: '/#contato' },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Logo & Social */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg">
                <School className="h-8 w-8 text-primary" />
              </div>
              <span className="font-bold text-lg leading-tight">EE Profª Nancy de<br/>Oliveira Fidalgo</span>
            </Link>
            <p className="text-slate-400 text-sm">
              Educação de qualidade e compromisso com o futuro dos nossos jovens na Zona Leste.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/EscolaNancy" target="_blank" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors" aria-label="Facebook da Escola">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors" aria-label="Instagram da Escola">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-4">Links Rápidos</h3>
            <ul className="space-y-4 text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contato */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-4">Contato</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>(11) 2035-6503</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="break-all">e923285a@see.sp.gov.br</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Localização */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-4">Localização</h3>
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>
                Rua Miguel Arcanjo Dutra, S/N<br />
                Jardim Santa Terezinha - SP<br />
                CEP: 08430-190
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} E.E. Professora Nancy de Oliveira Fidalgo — Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido por 
            <a href="https://rendey.app" target="_blank" className="text-primary font-bold hover:underline">
              Rendey LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
