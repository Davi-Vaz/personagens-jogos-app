# Personagens de Jogos

Um aplicativo mobile moderno para explorar e descobrir personagens icônicos de videogames. Desenvolvido com React Native, Expo e NativeWind (Tailwind CSS), oferecendo uma experiência fluida e intuitiva em iOS e Android.

## 🚀 Início Rápido

### Abrir no Expo Go

Escaneie o código QR abaixo com seu dispositivo iOS ou Android para abrir o aplicativo no Expo Go:

![QR Code - Expo Go](./assets/qr-code.png)

**Link direto do Expo:** [https://expo.dev/accounts/manus/projects/personagens-jogos-app](https://expo.dev/accounts/manus/projects/personagens-jogos-app)

### Instruções Passo a Passo

#### iOS

1. Abra a **App Store** e busque por **Expo Go**
2. Instale o aplicativo Expo Go
3. Abra o Expo Go e escaneie o código QR acima
4. Aguarde o carregamento do aplicativo (primeira vez pode levar alguns segundos)
5. Explore os personagens de jogos!

#### Android

1. Abra a **Google Play Store** e busque por **Expo Go**
2. Instale o aplicativo Expo Go
3. Abra o Expo Go e toque no ícone de câmera
4. Escaneie o código QR acima
5. Aguarde o carregamento do aplicativo
6. Explore os personagens de jogos!

### Desenvolvimento Local

Se deseja executar o projeto localmente para desenvolvimento:

```bash
# Clonar o repositório
git clone <repository-url>
cd personagens-jogos-app

# Instalar dependências
pnpm install

# Iniciar o servidor de desenvolvimento
pnpm dev

# Abrir no iOS (macOS apenas)
pnpm ios

# Abrir no Android
pnpm android

# Abrir na web
pnpm web
```

## 📱 Recursos Principais

### 1. Lista de Personagens (Home)

A tela inicial apresenta uma lista scrollável de 6 personagens icônicos de videogames. Cada card exibe:

- **Imagem do personagem** em alta qualidade
- **Nome** do personagem
- **Jogo de origem** com destaque visual
- **Descrição curta** (2-3 linhas)

Toque em qualquer card para visualizar os detalhes completos do personagem.

### 2. Tela de Detalhes

Ao selecionar um personagem, você acessa uma tela com informações completas:

- **Imagem grande** do personagem (full-width)
- **Nome** em destaque
- **Jogo de origem** com styling especial
- **Classe/Tipo** (ex: Guerreiro, Mago, Bruxo)
- **País de origem**
- **Biografia longa** (mínimo 30 palavras por personagem, total de 150+ palavras)

A tela inclui um botão voltar para retornar à lista de personagens.

### 3. Formulário - Descobrir Personagem

A segunda aba oferece um formulário completo para compartilhar sua opinião sobre personagens de jogos:

**Campos de Texto (4):**
- Nome do Personagem
- Email (com validação)
- Comentário (multiline)
- Link do Jogo

**Seletores (2 Pickers):**
- Gênero do Jogo: RPG, FPS, Estratégia, Ação, Aventura, Esportes, Outro
- Plataforma: PC, PS5, Xbox, Nintendo, Mobile, Outro

**Controles Deslizantes (2 Sliders):**
- Poder/Força: 1-10
- Anos no Jogo: 0-50

**Interruptores (2 Switches):**
- Personagem Ativo (on/off)
- Recomendado (on/off)

**Botões de Ação (2):**
- **Enviar:** Valida o formulário e exibe mensagem de sucesso
- **Limpar:** Reseta todos os campos para valores padrão

## 🎮 Personagens Inclusos

O aplicativo apresenta 6 personagens famosos de videogames:

| Personagem | Jogo | Classe | País |
|-----------|------|--------|------|
| Link | The Legend of Zelda | Guerreiro | Hyrule |
| Mario | Super Mario | Herói | Reino dos Cogumelos |
| Sonic | Sonic the Hedgehog | Velocista | Zona Verde |
| Lara Croft | Tomb Raider | Arqueóloga | Inglaterra |
| Master Chief | Halo | Soldado Spartan | UNSC |
| Geralt de Rivia | The Witcher | Bruxo | Reinos do Norte |

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| React Native | 0.81.5 | Framework mobile |
| Expo | 54.0 | Plataforma de desenvolvimento |
| Expo Router | 6.0 | Navegação por abas |
| NativeWind | 4.2 | Tailwind CSS para React Native |
| TypeScript | 5.9 | Tipagem estática |
| React 19 | 19.1.0 | Biblioteca UI |
| @react-native-community/slider | 2.x | Componente Slider |
| @react-native-picker/picker | 2.11 | Componente Picker |

## 📁 Estrutura do Projeto

```
personagens-jogos-app/
├── app/
│   ├── _layout.tsx              # Root layout com providers
│   ├── detalhes.tsx             # Tela de detalhes do personagem
│   └── (tabs)/
│       ├── _layout.tsx          # Configuração do tab bar
│       ├── index.tsx            # Tela Home (lista)
│       └── formulario.tsx       # Tela de formulário
├── components/
│   ├── screen-container.tsx     # Wrapper SafeArea reutilizável
│   ├── personagem-card.tsx      # Card do personagem
│   └── ui/
│       └── icon-symbol.tsx      # Mapeamento de ícones
├── data/
│   └── personagens.ts           # Dados dos 6 personagens
├── types/
│   └── index.ts                 # Tipos e interfaces TypeScript
├── hooks/
│   ├── use-colors.ts            # Hook para cores do tema
│   └── use-color-scheme.ts      # Hook para detectar tema
├── lib/
│   ├── utils.ts                 # Funções utilitárias (cn)
│   └── theme-provider.tsx       # Contexto de tema
├── assets/
│   └── images/
│       ├── icon.png             # Ícone do app
│       ├── splash-icon.png      # Ícone da splash screen
│       ├── favicon.png          # Favicon web
│       └── android-icon-foreground.png  # Ícone adaptativo Android
├── app.config.ts                # Configuração do Expo
├── tailwind.config.js           # Configuração do Tailwind
├── theme.config.js              # Paleta de cores
└── package.json                 # Dependências do projeto
```

## ✅ Requisitos Atendidos

- ✅ **Mínimo 6 personagens** com 6 imagens de alta qualidade
- ✅ **Mínimo 150 palavras** em biografias (total distribuído entre os personagens)
- ✅ **Componente PersonagemCard** reutilizável com styling consistente
- ✅ **ScrollView** na tela Home para navegação suave
- ✅ **Tela de Detalhes** com informações completas (imagem grande, nome, jogo, classe, país, biografia)
- ✅ **Navegação fluida** entre Home e Detalhes com botão voltar
- ✅ **Formulário completo** com:
  - 4 TextInputs (Nome, Email, Comentário, Link)
  - 2 Pickers (Gênero, Plataforma)
  - 2 Sliders (Poder/Força, Anos no Jogo)
  - 2 Switches (Personagem Ativo, Recomendado)
  - 2 Botões (Enviar com validação, Limpar)
- ✅ **Expo Router** com navegação por abas (Home | Formulário)
- ✅ **NativeWind (Tailwind CSS)** para styling responsivo
- ✅ **Tema claro/escuro automático** baseado em preferência do sistema
- ✅ **TypeScript** com tipos corretos em todo o projeto
- ✅ **Sem erros de compilação** TypeScript
- ✅ **Logo/ícone customizado** para o app
- ✅ **app.config.ts** atualizado com nome e logo
- ✅ **Componentes base** (ScreenContainer, PersonagemCard)

## 🎨 Design e Tema

O aplicativo segue as diretrizes de Human Interface Guidelines (HIG) da Apple, com design otimizado para:

- **Orientação portrait (9:16)** em dispositivos móveis
- **Uso com uma mão** - elementos interativos posicionados na metade inferior
- **Tema automático** - adapta-se automaticamente ao tema claro/escuro do sistema

**Paleta de Cores:**
- **Primária:** #0a7ea4 (Azul vibrante) - botões e destaques
- **Accent:** #FF6B35 (Laranja) - elementos secundários
- **Background:** #ffffff (claro) / #151718 (escuro)
- **Foreground:** #11181C (claro) / #ECEDEE (escuro)
- **Muted:** #687076 (claro) / #9BA1A6 (escuro)

## 🔄 Navegação

O aplicativo utiliza **Expo Router** com navegação por abas na parte inferior:

- **Tab 1 - Home:** Lista de personagens com ScrollView
  - Toque em um card → Navega para tela de Detalhes
  - Botão voltar retorna à lista
- **Tab 2 - Formulário:** Formulário completo para descobrir personagens
  - Validação de email e campos obrigatórios
  - Feedback visual ao enviar (Alert)
  - Botão para limpar todos os campos

## 📝 Validação do Formulário

O formulário implementa validação básica:

- **Nome do Personagem:** Campo obrigatório
- **Email:** Campo obrigatório com validação de formato (regex)
- **Comentário:** Campo obrigatório (multiline)
- **Link do Jogo:** Campo opcional
- **Feedback:** Exibe Alert com mensagem de sucesso ou erro

## 🚢 Deploy e Publicação

Para publicar o aplicativo:

1. Crie um checkpoint no painel de gerenciamento
2. Clique no botão **Publish** no canto superior direito
3. O sistema gerará automaticamente:
   - APK para Android
   - IPA para iOS (requer conta Apple Developer)
   - Build otimizado para produção

## 📚 Próximas Melhorias

- Integração com backend para persistência de dados do formulário
- Animações de transição entre telas
- Busca e filtro de personagens
- Favoritos/Wishlist com AsyncStorage
- Compartilhamento de personagens via redes sociais
- Notificações push para novos personagens
- Modo offline com dados em cache
- Testes automatizados (Jest + React Native Testing Library)

## 🤝 Contribuindo

Este é um projeto de demonstração. Para sugestões ou melhorias, entre em contato com a equipe de desenvolvimento.

## 📄 Licença

Este projeto é fornecido como está, para fins educacionais e de demonstração.

---  

**Desenvolvido com ❤️ usando React Native, Expo e NativeWind**

**Versão:** 1.0.0  
**Data de Criação:** Abril de 2026  
**Plataformas Suportadas:** iOS 13+, Android 5.0+, Web



UTILIZADO AGENTE.IA DE AJUSTE/CONSERTO DE SINTAXE E PARA HOSPEDAGEM DO APP POIS EU NAO SABIA FAZER DIREITO!!!!!!!

foi na manus.

