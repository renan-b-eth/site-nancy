import { ExternalLink, ShieldCheck, UserCheck, Smartphone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portal do Aluno | EE Profª Nancy de Oliveira Fidalgo",
  description: "Acesse o PortãoEdu, o sistema oficial de controle de acesso e monitoramento da escola.",
};

export default function PortalEntradaPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 gap-8 py-16">
      <div className="bg-primary/10 p-6 rounded-3xl text-primary flex items-center gap-4">
        <ShieldCheck className="h-12 w-12" aria-hidden="true" />
        <h1 className="text-3xl md:text-4xl font-bold">Portal PortãoEdu</h1>
      </div>
      
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-xl text-slate-700 leading-relaxed">
          O PortãoEdu é o nosso sistema de controle de acesso e monitoramento escolar. Através dele, garantimos a segurança e o registro preciso de entrada e saída de todos os alunos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-4">
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4">
          <UserCheck className="h-6 w-6 text-primary mt-1" aria-hidden="true" />
          <div>
            <h3 className="font-bold text-slate-800">Para Alunos e Responsáveis</h3>
            <p className="text-sm text-slate-600">Acompanhe horários de entrada e notificações em tempo real.</p>
          </div>
        </div>
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4">
          <Smartphone className="h-6 w-6 text-primary mt-1" aria-hidden="true" />
          <div>
            <h3 className="font-bold text-slate-800">Disponível Online</h3>
            <p className="text-sm text-slate-600">Acesse via navegador ou aplicativo oficial.</p>
          </div>
        </div>
      </div>

      <a 
        href="https://portaoedu.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2 group mt-8"
        aria-label="Abrir sistema PortãoEdu em uma nova aba"
      >
        Acessar Agora <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </a>

      <p className="text-slate-400 text-sm italic">
        Você será redirecionado para o site oficial do sistema PortãoEdu.
      </p>
    </div>
  );
}
