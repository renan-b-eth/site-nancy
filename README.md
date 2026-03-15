# E.E. Professora Nancy de Oliveira Fidalgo - Site Oficial

Site institucional moderno para a Escola Estadual Professora Nancy de Oliveira Fidalgo, desenvolvido com Next.js, React, TypeScript, Tailwind CSS e Framer Motion.

## 📋 Sobre o Projeto

Este site segue as diretrizes de design de sites governamentais modernos como gov.br e grandes universidades públicas brasileiras.

### Características
- **Design institucional** com paleta de cores SEDUC-SP
- **Layout responsivo** mobile-first
- **Animações suaves** com Framer Motion
- **SEO otimizado** com Next.js Metadata API
- **Acessibilidade** WCAG AA compliant

---

## 🎨 Paleta de Cores Institucional

| Cor | Código | Uso |
|-----|--------|-----|
| Azul Institucional | `#003DA5` | Primária, botões, links |
| Branco | `#FFFFFF` | Fundo, textos sobre azul |
| Dourado/Âmbar | `#F5A623` | Acento, destaques |
| Texto Principal | `#1A1A2E` | Títulos e corpo |
| Superfície | `#F8F9FC` | Fundos de seção alternados |
| Texto Secundário | `#6B7280` | Descrições e legendas |

---

## 📁 Estrutura de Imagens

Para que o site funcione corretamente, **adicione as imagens da escola** nas pastas indicadas abaixo:

### 1. Logo da Escola
**Local:** `/public/logo-nancy.png`

- Formato recomendado: PNG com fundo transparente
- Tamanho ideal: 200x200px (será redimensionado para 48x48px no header)
- Deve ser o brasão/logo oficial da escola

### 2. Imagem do Hero (Página Inicial)
**Local:** `/public/imagens/escola-hero.jpg`

- Formato recomendado: JPG
- Resolução ideal: 1200x900px (proporção 4:3)
- Conteúdo: Fachada principal da escola em boa qualidade
- A imagem será exibida na seção hero com bordas arredondadas

### 3. Galeria de Fotos
**Local:** `/public/imagens/galeria/`

Adicione as seguintes fotos:

| Arquivo | Conteúdo Sugerido |
|---------|-------------------|
| `foto-1.jpg` | Fachada da escola |
| `foto-2.jpg` | Pátio central/recreativo |
| `foto-3.jpg` | Laboratório de informática |
| `foto-4.jpg` | Biblioteca ou sala de leitura |
| `foto-5.jpg` | Eventos culturais/feiras |
| `foto-6.jpg` | Quadra esportiva |

**Especificações:**
- Formato: JPG
- Resolução mínima: 800x600px
- As fotos serão exibidas em layout masonry (colunas dinâmicas)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

O site estará disponível em `http://localhost:3000`

---

## 📱 Seções do Site

### Página Inicial (`/`)
1. **Hero** - Apresentação com imagem e métricas
2. **Sobre** - História da escola e estrutura
3. **Galeria** - Fotos da escola em layout masonry
4. **Projetos** - EstaHack, Rendey Class, PortãoEdu
5. **Contato** - Informações e mapa

### Página do Grêmio (`/gremio`)
1. **Hero** - Apresentação do grêmio
2. **Quem Somos** - Descrição e membros
3. **Pautas** - Propostas e demandas
4. **Fale com o Grêmio** - Formulário de contato

### Portal de Entrada (`/portal-entrada`)
- Sistema de controle de acesso PortãoEdu

---

## 🛠️ Tecnologias Utilizadas

- **Next.js 16** - Framework React com SSR/SSG
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones
- **Inter** - Fonte institucional (Google Fonts)

---

## 📝 Personalização

### Alterar Cores
As cores institucionais estão definidas em `/src/app/globals.css` na seção `:root`.

### Alterar Textos
Os textos institucionais estão nos componentes:
- `/src/app/page.tsx` - Página inicial
- `/src/app/gremio/page.tsx` - Página do grêmio

---

## ♿ Acessibilidade

O site segue as diretrizes WCAG 2.1 Nível AA:
- Contraste de cores adequado
- Alt text em todas as imagens
- Navegação por teclado
- Aria labels em elementos interativos

---

## 📄 Licença

Este projeto é de uso exclusivo da E.E. Professora Nancy de Oliveira Fidalgo.

Desenvolvido por **Rendey LLC** - 2026
