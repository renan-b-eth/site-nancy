'use client';

import { 
  Users, 
  Star, 
  Calendar, 
  MessageSquare, 
  Send, 
  ArrowLeft,
  Trophy,
  Megaphone,
  Heart,
  Music,
  ChevronRight,
  Phone
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function GremioPage() {
  const members = [
    { name: 'Gabriel Silva', role: 'Presidente', class: '3º Médio A', image: '/gremio/pres.jpg' },
    { name: 'Ana Oliveira', role: 'Vice-presidente', class: '3º Médio B', image: '/gremio/vp.jpg' },
    { name: 'Lucas Santos', role: 'Secretário', class: '2º Médio A', image: '/gremio/sec.jpg' },
    { name: 'Mariana Costa', role: 'Tesoureiro', class: '2º Médio C', image: '/gremio/tes.jpg' },
  ];

  const achievements = [
    { year: '2023', title: 'Reforma do Grêmio', desc: 'Conseguimos a pintura e novos móveis para a nossa sala.' },
    { year: '2023', title: 'Interclasses Solidário', desc: 'Arrecadamos mais de 500kg de alimentos para a comunidade.' },
    { year: '2024', title: 'Wi-Fi Estudantil', desc: 'Projeto piloto de internet liberada no pátio durante o intervalo.' },
    { year: '2024', title: 'Novos Projetos', desc: 'Parceria com o EstaHack para cursos de programação.' },
  ];

  const events = [
    { 
      date: '15 Abr', 
      title: 'Festival de Talentos', 
      location: 'Pátio Central', 
      desc: 'Mostre seu talento na música, dança ou arte!' 
    },
    { 
      date: '22 Abr', 
      title: 'Roda de Conversa', 
      location: 'Biblioteca', 
      desc: 'Saúde mental e vestibular: como lidar com a pressão.' 
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white selection:bg-yellow-400 selection:text-blue-900">
      {/* 1. HERO DO GRÊMIO */}
      <section className="relative bg-primary overflow-hidden py-24 md:py-32">
        {/* Decorative elements for "young" feel */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-yellow-400 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[300px] h-[300px] bg-blue-400 rounded-full blur-[100px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest animate-bounce">
            <Star className="h-4 w-4 fill-current" /> Gestão 2024/2025
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter drop-shadow-sm">
            Grêmio Estudantil <span className="text-yellow-400">Nancy</span>
          </h1>
          <p className="text-xl md:text-3xl text-white/90 font-medium max-w-2xl mx-auto">
            A voz dos alunos da Nancy. Juntos por uma escola mais conectada e divertida! 🚀
          </p>
          <div className="flex justify-center gap-4 pt-4">
             <Link href="#contato" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg">
                Fale com a gente
             </Link>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOMOS */}
      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl font-black text-slate-900 leading-tight">Representatividade e <span className="text-primary">Atitude</span></h2>
            <p className="text-slate-600 text-lg">
              O Grêmio é o seu espaço dentro da escola. Somos alunos trabalhando para alunos, buscando melhorias na estrutura, organizando eventos e garantindo que cada voz seja ouvida pela direção.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-slate-700">
                <div className="bg-yellow-400/20 p-2 rounded-lg text-yellow-600"><Megaphone className="h-5 w-5" /></div>
                <span className="font-bold">Voz ativa nas reuniões de conselho</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="bg-blue-400/20 p-2 rounded-lg text-blue-600"><Heart className="h-5 w-5" /></div>
                <span className="font-bold">Apoio a projetos sociais e culturais</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            {members.map((member, i) => (
              <div key={i} className="group flex flex-col items-center gap-4">
                <div className="relative aspect-[3/4] w-full bg-slate-100 rounded-3xl overflow-hidden border-4 border-transparent group-hover:border-yellow-400 transition-all shadow-xl">
                  {/* Foto placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                    <Users className="h-12 w-12" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-slate-900 leading-tight">{member.name}</h4>
                  <p className="text-primary text-xs font-black uppercase tracking-tighter">{member.role}</p>
                  <p className="text-slate-400 text-[10px]">{member.class}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NOSSAS CONQUISTAS */}
      <section className="py-24 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-4">
            <div className="inline-block bg-white/10 p-4 rounded-3xl mb-4">
              <Trophy className="h-10 w-10 text-yellow-400" />
            </div>
            <h2 className="text-4xl font-black">Nossa <span className="text-yellow-400">Trajetória</span></h2>
          </div>

          <div className="space-y-12">
            {achievements.map((item, i) => (
              <div key={i} className="flex gap-6 md:gap-12 group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary border-4 border-yellow-400 flex items-center justify-center font-black text-xl z-10 shrink-0 group-hover:scale-110 transition-transform">
                    {item.year}
                  </div>
                  {i !== achievements.length - 1 && <div className="w-1 h-full bg-white/10 mt-2"></div>}
                </div>
                <div className="pb-12">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EVENTOS */}
      <section className="py-24 px-4 bg-yellow-400 text-blue-900">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <h2 className="text-5xl font-black italic tracking-tighter uppercase">Fica <span className="text-white">Ligado!</span></h2>
              <p className="text-blue-900/70 font-bold text-xl">Não perca o que vem por aí na Nancy.</p>
            </div>
            <button className="bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center gap-2">
              Ver todos os eventos <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, i) => (
              <div key={i} className="bg-white p-8 rounded-[40px] shadow-2xl flex flex-col md:flex-row gap-8 hover:scale-[1.02] transition-transform">
                <div className="bg-blue-900 text-white w-24 h-24 rounded-3xl shrink-0 flex flex-col items-center justify-center font-black">
                  <span className="text-3xl leading-none">{event.date.split(' ')[0]}</span>
                  <span className="text-xs uppercase text-yellow-400 tracking-widest">{event.date.split(' ')[1]}</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-black">{event.title}</h4>
                  <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                    <Calendar className="h-4 w-4" /> {event.location}
                  </div>
                  <p className="text-slate-600">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FALE COM O GRÊMIO */}
      <section id="contato" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-primary p-12 rounded-[50px] text-white flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10 space-y-8">
              <div className="bg-white/20 p-4 rounded-2xl w-fit">
                <MessageSquare className="h-8 w-8 text-yellow-400" />
              </div>
              <h2 className="text-5xl font-black leading-tight tracking-tighter">Tem uma ideia ou <span className="text-yellow-400">reclamação?</span></h2>
              <p className="text-xl text-white/80">O grêmio é o seu canal direto com a escola. Manda sua mensagem!</p>
            </div>
            
            <div className="relative z-10 mt-12 flex flex-col gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-colors shadow-lg">
                <Phone className="h-6 w-6" /> Chamar no WhatsApp
              </button>
            </div>

            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>

          <div className="p-8 md:p-12 bg-slate-50 rounded-[50px] border border-slate-100 shadow-sm">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-black text-slate-900 uppercase tracking-widest px-2">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Seu nome aqui" 
                  className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-yellow-400 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-slate-900 uppercase tracking-widest px-2">Sua Turma</label>
                <input 
                  type="text" 
                  placeholder="Ex: 1º Médio A" 
                  className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-yellow-400 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-slate-900 uppercase tracking-widest px-2">Sua Mensagem</label>
                <textarea 
                  rows={4} 
                  placeholder="Diga o que você precisa..." 
                  className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-yellow-400 outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-blue-900 text-white p-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors shadow-xl">
                Enviar Mensagem <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. RODAPÉ DO GRÊMIO */}
      <footer className="bg-slate-100 py-12 px-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="bg-primary p-2 rounded-xl">
                <Users className="h-6 w-6 text-white" />
             </div>
             <span className="font-black text-slate-900 text-lg tracking-tighter italic">GRÊMIO NANCY</span>
          </div>
          
          <Link 
            href="/" 
            className="flex items-center gap-2 text-slate-600 font-bold hover:text-primary transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" /> 
            Voltar para o site da escola
          </Link>

          <div className="text-slate-400 text-sm font-medium">
            © 2024 Gestão Voz da Nancy
          </div>
        </div>
      </footer>
    </div>
  );
}
