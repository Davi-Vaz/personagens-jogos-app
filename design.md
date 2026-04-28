# Design da Interface - Personagens de Jogos

## Visão Geral
Aplicativo mobile para explorar e descobrir personagens de jogos famosos. Design segue as diretrizes de Human Interface Guidelines (HIG) da Apple, otimizado para orientação portrait (9:16) e uso com uma mão.

## Paleta de Cores
- **Primária**: #0a7ea4 (Azul vibrante - ação, botões)
- **Background**: #ffffff (claro) / #151718 (escuro)
- **Surface**: #f5f5f5 (claro) / #1e2022 (escuro)
- **Foreground**: #11181C (claro) / #ECEDEE (escuro)
- **Muted**: #687076 (claro) / #9BA1A6 (escuro)
- **Accent**: #FF6B35 (laranja - destaque)

## Telas Principais

### 1. Home (Lista de Personagens)
**Conteúdo:**
- Header com título "Personagens de Jogos"
- ScrollView com lista de 6 personagens
- Cada card exibe: imagem (thumbnail), nome, jogo de origem, descrição curta (2-3 linhas)
- Cards com sombra suave e border radius

**Funcionalidade:**
- Tap em card → navega para tela de Detalhes
- Scroll suave entre personagens

### 2. Detalhes do Personagem
**Conteúdo:**
- Header com botão voltar
- Imagem grande do personagem (full-width)
- Nome em destaque
- Jogo de origem com ícone
- Classe/Tipo (ex: Guerreiro, Mago)
- País de origem
- Biografia longa (mínimo 30 palavras)
- ScrollView para conteúdo longo

**Funcionalidade:**
- Botão voltar retorna à Home
- Navegação entre personagens (opcional: swipe)

### 3. Formulário - Descobrir Personagem
**Conteúdo:**
- Header com título "Descobrir Personagem"
- 4 TextInputs:
  - Nome do Personagem (placeholder: "Digite o nome...")
  - Email (placeholder: "seu@email.com")
  - Comentário (multiline, placeholder: "Sua opinião...")
  - Link do Jogo (placeholder: "https://...")
- 2 Pickers (dropdowns):
  - Gênero do Jogo (RPG, FPS, Estratégia, Ação, Aventura, Esportes, Outro)
  - Plataforma (PC, PS5, Xbox, Nintendo, Mobile, Outro)
- 2 Sliders:
  - Poder/Força (1-10)
  - Anos no Jogo (0-50)
- 2 Switches:
  - Personagem Ativo (on/off)
  - Recomendado (on/off)
- 2 Botões:
  - Enviar (bg-primary, white text) → mostra toast/alert de sucesso
  - Limpar (bg-surface, foreground text) → reseta todos os campos

**Funcionalidade:**
- Validação básica (email, campos obrigatórios)
- Feedback visual ao enviar
- Reset completo ao clicar em Limpar

## Navegação
- **Tab Bar (bottom)**: Home | Formulário
- **Stack dentro de Home**: Home → Detalhes (com back button)
- **Tema automático**: Light/Dark baseado em preferência do sistema

## Componentes Reutilizáveis
- **PersonagemCard**: Card com imagem, nome, jogo, descrição (usado na Home)
- **ScreenContainer**: SafeArea wrapper com background automático
- **FormInput**: TextInput com label e validação
- **FormPicker**: Picker com label
- **FormSlider**: Slider com label e valor exibido
- **FormSwitch**: Switch com label

## Requisitos Técnicos
- TypeScript com tipos corretos
- NativeWind (Tailwind CSS) para styling
- Expo Router para navegação por abas
- Mínimo 6 personagens com 6 imagens
- Mínimo 150 palavras totais em biografias
- Sem erros de compilação
