# Capacitação em Análise de Dados para Microempresas

![Banner do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)

Um site institucional responsivo para apoiar um projeto de extensão universitário focado na capacitação de microempresas em análise de dados. O público-alvo são pequenos empresários locais com pouca familiaridade com tecnologia.

## 📋 Conteúdo

- Visão Geral
- Funcionalidades
- Tecnologias Utilizadas
- Requisitos
- Instalação
- Executando o Projeto
- Estrutura do Projeto
- Personalização
- Deployment
- Licença

## 🔍 Visão Geral

Este projeto é um site institucional completo para um programa de capacitação em análise de dados, com foco em microempresas. O site foi desenvolvido com ênfase em acessibilidade, simplicidade e responsividade para atender usuários com diferentes níveis de familiaridade com tecnologia.

## ✨ Funcionalidades

O site contém as seguintes seções:

- **Página Inicial**: Apresentação do projeto com call-to-action
- **Vídeos Explicativos**: Galeria de vídeos tutoriais incorporados
- **Slides e Exercícios**: Materiais para download
- **Ferramentas Gratuitas**: Lista de ferramentas úteis com descrições
- **Agenda de Workshops**: Calendário de eventos com formulário de inscrição
- **Fórum de Dúvidas**: Espaço para interação entre participantes
- **Rodapé**: Informações de contato e parceiros

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide Icons**: Biblioteca de ícones
- **Vite**: Ferramenta de build rápida

## 📋 Requisitos

Para executar este projeto localmente, você precisará ter instalado:

- **Node.js** (v16.0 ou superior)
- **npm**, **yarn** ou **pnpm** (gerenciadores de pacotes)

Para verificar se você já tem estes requisitos, abra um terminal e execute:

```bash
node -v
npm -v
```

## 🚀 Instalação

Siga estes passos para instalar o projeto:

1. Clone o repositório (ou extraia o arquivo zip):

```bash
git clone https://github.com/seu-usuario/capacitacao-microempresas.git
cd capacitacao-microempresas
```

2. Instale as dependências:

```bash
# Usando npm
npm install --legacy-peer-deps

# OU usando yarn
yarn install --legacy-peer-deps

# OU usando pnpm
pnpm install --legacy-peer-deps
```

> **Nota**: A flag `--legacy-peer-deps` é necessária para resolver conflitos de dependências entre os pacotes.

## ▶️ Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
# Usando npm
npm run dev

# OU usando yarn
yarn dev

# OU usando pnpm
pnpm dev
```

Após executar o comando, o site estará disponível em:
- 🌐 [http://localhost:5173](http://localhost:5173)

## 📁 Estrutura do Projeto

```
src/
├── assets/         # Recursos estáticos como imagens
├── components/     # Componentes React organizados por seção
│   ├── Header/     # Navegação principal
│   ├── Home/       # Página inicial
│   ├── Videos/     # Seção de vídeos
│   ├── Slides/     # Seção de materiais
│   ├── Tools/      # Ferramentas recomendadas
│   ├── Workshops/  # Agenda e inscrição
│   ├── Forum/      # Fórum de dúvidas
│   ├── Footer/     # Rodapé
│   └── ui/         # Componentes de UI reutilizáveis
├── hooks/          # Hooks personalizados
├── lib/            # Funções utilitárias
├── App.tsx         # Componente principal
├── index.css       # Estilos globais
└── main.tsx        # Ponto de entrada
```

## 🎨 Personalização

### Modificando Conteúdo

Para alterar o conteúdo do site, você pode editar os arquivos dentro da pasta `components`. Cada seção tem seu próprio componente com dados que podem ser facilmente modificados.

### Alterando Estilos

O projeto utiliza Tailwind CSS para estilização. Você pode personalizar as cores, fontes e outros aspectos visuais editando o arquivo `tailwind.config.js` na raiz do projeto.

## 🌐 Deployment

Para fazer o build do projeto para produção:

```bash
# Usando npm
npm run build

# OU usando yarn
yarn build

# OU usando pnpm
pnpm build
```

Os arquivos de build serão gerados na pasta `dist`, prontos para serem hospedados em qualquer serviço de hospedagem estática como Netlify, Vercel, GitHub Pages, etc.

Desenvolvido para o projeto de extensão universitária de capacitação em análise de dados para microempresas.
