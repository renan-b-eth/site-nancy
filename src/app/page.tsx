import { 
  ArrowRight, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Clock, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram,
  CheckCircle2,
  ExternalLink,
  Search,
  School,
  Monitor,
  Layout,
  Library
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Início | EE Profª Nancy de Oliveira Fidalgo",
  description: "Conheça a escola, sua infraestrutura, projetos e níveis de ensino fundamental, médio e técnico.",
};

export default function Home() {
  const numbers = [
    { label: 'Alunos', value: '600+', icon: <Users className="h-6 w-6" /> },
    { label: 'Professores', value: '40+', icon: <GraduationCap className="h-6 w-6" /> },
    { label: 'Turnos', value: '3', icon: <Clock className="h-6 w-6" /> },
    { label: 'Desde', value: '1980', icon: <Calendar className="h-6 w-6" /> },
  ];

  const structure = [
    'Quadra Coberta',
    'Biblioteca',
    'Lab. de Informática',
    'Refeitório',
    'Sala de Leitura'
  ];

  const projects = [
    {
      title: 'EstaHack',
      description: 'Hackathon estudantil focado em inovação e tecnologia.',
      link: 'https://estahack.com',
      external: true,
      color: 'bg-indigo-600'
    },
    {
      title: 'Rendey Class',
      description: 'Plataforma de gestão de sala de aula e desempenho.',
      link: 'https://rendey.app',
      external: true,
      color: 'bg-emerald-600'
    },
    {
      title: 'PortãoEdu',
      description: 'Sistema de segurança e controle de acesso escolar.',
      link: '/portal-entrada',
      external: false,
      color: 'bg-primary'
    }
  ];

  const gallery = [
    { src: '/imagens/escola-1.jpg', caption: 'Fachada da Escola' },
    { src: '/imagens/escola-2.jpg', caption: 'Pátio Central' },
    { src: '/imagens/escola-3.jpg', caption: 'Laboratório de Informática' },
    { src: '/imagens/escola-4.jpg', caption: 'Biblioteca' },
    { src: '/imagens/escola-5.jpg', caption: 'Eventos Culturais' },
    { src: '/imagens/escola-6.jpg', caption: 'Quadra Esportiva' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 2. HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Imagem de fundo placeholder */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/imagens/escola-hero.jpg" 
            alt="EE Nancy Hero" 
            fill 
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl">
            E.E. Professora Nancy de Oliveira Fidalgo
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-medium drop-shadow-lg">
            Formando cidadãos, transformando futuros — Zona Leste, São Paulo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link 
              href="#sobre"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl"
              aria-label="Ir para seção sobre a escola"
            >
              Conheça a escola
            </Link>
            <Link 
              href="/portal-entrada"
              className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-2"
              aria-label="Acessar o portal PortãoEdu"
            >
              Acesse o Portal <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. NÚMEROS DA ESCOLA */}
      <section className="py-12 bg-white relative z-20 -mt-16 max-w-6xl mx-auto w-full px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {numbers.map((num, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center gap-2 hover:translate-y-[-4px] transition-transform">
              <div className="text-primary bg-primary/10 p-3 rounded-full mb-2" aria-hidden="true">
                {num.icon}
              </div>
              <span className="text-2xl md:text-3xl font-black text-slate-900">{num.value}</span>
              <span className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">{num.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SOBRE A ESCOLA */}
      <section id="sobre" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Nossa Instituição</h2>
              <h3 className="text-4xl font-black text-slate-900 leading-tight">História e Missão</h3>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Fundada em 1980, a EE Professora Nancy de Oliveira Fidalgo tem sido um pilar de educação na Zona Leste de São Paulo. Nossa missão é proporcionar um ambiente de aprendizagem seguro e inovador, onde o aluno é o protagonista de sua jornada acadêmica e social.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-800">Modalidades de Ensino</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['Ensino Fundamental', 'Ensino Médio', 'Ensino Técnico'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-700 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="estrutura" className="space-y-4">
              <h4 className="text-xl font-bold text-slate-800">Estrutura</h4>
              <div className="flex flex-wrap gap-2">
                {structure.map((item) => (
                  <span key={item} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl group">
             <Image 
                src="/imagens/escola-sobre.jpg" 
                alt="Estrutura da Escola" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-2xl font-bold italic">"Educação que transforma."</p>
              </div>
          </div>
        </div>
      </section>

      {/* 5. GALERIA DE FOTOS */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black text-slate-900">Galeria de Fotos</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Conheça um pouco do nosso dia a dia, eventos e a infraestrutura da nossa escola.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((img, i) => (
              <div key={i} className="group relative aspect-video overflow-hidden rounded-2xl shadow-md">
                {/* Substitua pelos caminhos das fotos reais do Facebook/Instagram */}
                <Image 
                  src={img.src} 
                  alt={`Foto da escola: ${img.caption}`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROJETOS EM DESTAQUE */}
      <section id="projetos" className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Inovação e Tecnologia</h2>
            <h3 className="text-4xl font-black">Projetos em Destaque</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group flex flex-col gap-6">
                <div className={`${project.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                   {i === 0 ? <Layout className="h-7 w-7" /> : i === 1 ? <Monitor className="h-7 w-7" /> : <ShieldCheck className="h-7 w-7" />}
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold">{project.title}</h4>
                  <p className="text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <Link 
                  href={project.link}
                  target={project.external ? "_blank" : "_self"}
                  className="mt-auto flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform"
                >
                  Ver projeto {project.external ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
      </section>

      {/* 7. CONTATO + MAPA */}
      <section id="contato" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-slate-900">Fale Conosco</h2>
              <p className="text-slate-500 text-lg">Estamos à disposição para atender a comunidade, pais e alunos.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary h-fit">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Endereço</h4>
                    <p className="text-slate-600 text-sm">
                      Rua Miguel Arcanjo Dutra, S/N<br />
                      Jardim Santa Terezinha - SP<br />
                      CEP: 08430-190
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary h-fit">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Telefone</h4>
                    <p className="text-slate-600 text-sm">(11) 2035-6503</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary h-fit">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">E-mail</h4>
                    <p className="text-slate-600 text-sm break-all">e923285a@see.sp.gov.br</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary h-fit">
                    <Search className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Redes Sociais</h4>
                    <div className="flex gap-4 mt-2">
                      <a href="https://facebook.com/EscolaNancy" target="_blank" className="text-slate-400 hover:text-primary transition-colors">
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a href="#" target="_blank" className="text-slate-400 hover:text-primary transition-colors">
                        <Instagram className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            {/* iframe do Google Maps embedado com a localização real da escola */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.818804918451!2d-46.41372602384666!3d-23.539003660814983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6443657c6379%3A0x6b77e8a3479b1d3!2sEscola%20Estadual%20Nancy%20de%20Oliveira%20Fidalgo!5e0!3m2!1spt-BR!2sbr!4v1710500000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
