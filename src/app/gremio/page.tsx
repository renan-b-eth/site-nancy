'use client';

import { Users, MessageCircle, Calendar, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const membros = [
  { nome: "Maria Silva", cargo: "Presidente", turma: "3º EM A", foto: "/imagens/gremio/membro-1.jpg" },
  { nome: "João Santos", cargo: "Vice-Presidente", turma: "3º EM B", foto: "/imagens/gremio/membro-2.jpg" },
  { nome: "Ana Costa", cargo: "Secretária", turma: "2º EM A", foto: "/imagens/gremio/membro-3.jpg" },
  { nome: "Pedro Lima", cargo: "Tesoureiro", turma: "2º EM B", foto: "/imagens/gremio/membro-4.jpg" },
];

const pautas = [
  {
    titulo: "Mais eventos culturais",
    descricao: "Proposta de realização de feiras culturais, shows de talentos e exposições de arte ao longo do ano letivo.",
    icone: Calendar
  },
  {
    titulo: "Reforma da biblioteca",
    descricao: "Melhoria do espaço de leitura com novos mobiliários, iluminação e acervo atualizado.",
    icone: Users
  },
  {
    titulo: "Wi-Fi para alunos",
    descricao: "Ampliação da rede wireless para permitir acesso à internet em todas as dependências da escola.",
    icone: MessageCircle
  },
];

export default function GremioPage() {
  return (
    <div className="flex flex-col w-full pt-[104px]">
      {/* Hero do Grêmio */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#003DA5] to-[#002d7a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5A623] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-[#F5A623] text-white text-sm font-semibold rounded-full mb-6"
            >
              Gestão 2026
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-[-0.02em]">
              Grêmio Estudantil Nancy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              A voz dos alunos. A força da mudança.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção Quem Somos */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-xs font-semibold tracking-[0.15em] text-[#003DA5] uppercase">
                QUEM SOMOS
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-4 mb-6 tracking-[-0.02em]">
                Representando todos os alunos
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[#6B7280] leading-relaxed mb-6">
                O Grêmio Estudantil Nancy é a entidade representativa dos estudantes da E.E. Professora Nancy de Oliveira Fidalgo. Nossa missão é defender os direitos dos alunos, propor melhorias para a escola e promover atividades que enriqueçam a vida escolar.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-[#6B7280] leading-relaxed">
                Eleito democraticamente pelos alunos, o grêmio atua como ponte entre a comunidade estudantil e a administração da escola, buscando sempre o diálogo construtivo e soluções que beneficiem a todos.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {membros.map((membro, index) => (
                <motion.div
                  key={membro.nome}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-slate-200 overflow-hidden">
                    {/* FOTOS: substitua por fotos reais dos membros do grêmio */}
                    <div className="w-full h-full bg-gradient-to-br from-[#003DA5] to-[#002d7a] flex items-center justify-center text-white text-2xl font-bold">
                      {membro.nome.charAt(0)}
                    </div>
                  </div>
                  <h3 className="font-semibold text-[#1A1A2E]">{membro.nome}</h3>
                  <p className="text-sm text-[#003DA5] font-medium">{membro.cargo}</p>
                  <p className="text-xs text-[#6B7280]">{membro.turma}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Nossas Pautas */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F9FC]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold tracking-[0.15em] text-[#003DA5] uppercase">
              NOSSAS PAUTAS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-4 tracking-[-0.02em]">
              O que estamos defendendo
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {pautas.map((pauta, index) => (
              <motion.div
                key={pauta.titulo}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#003DA5]/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#003DA5]/10 flex items-center justify-center mb-4">
                  <pauta.icone className="h-6 w-6 text-[#003DA5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">{pauta.titulo}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{pauta.descricao}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seção Fale com o Grêmio */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold tracking-[0.15em] text-[#003DA5] uppercase">
              FALE COM O GRÊMIO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-4 tracking-[-0.02em]">
              Sua voz é importante
            </h2>
            <p className="text-[#6B7280] mt-4">
              Entre em contato com a gente para sugestões, reclamações ou para participar das atividades.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="turma" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                  Turma
                </label>
                <input
                  type="text"
                  id="turma"
                  name="turma"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/20 outline-none transition-all"
                  placeholder="Ex: 2º EM A"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="assunto" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                Assunto
              </label>
              <input
                type="text"
                id="assunto"
                name="assunto"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/20 outline-none transition-all"
                placeholder="Sobre o que você quer falar?"
              />
            </div>
            
            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/20 outline-none transition-all resize-none"
                placeholder="Escreva sua mensagem..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#003DA5] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#002d7a] transition-all"
              >
                <Send className="h-5 w-5" />
                Enviar mensagem
              </button>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#128C7E] transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Rodapé específico da página do grêmio */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-[#F8F9FC] border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm">
            © 2026 Grêmio Estudantil Nancy — Todos os direitos reservados
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#003DA5] font-semibold hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o site da escola
          </Link>
        </div>
      </section>
    </div>
  );
}
