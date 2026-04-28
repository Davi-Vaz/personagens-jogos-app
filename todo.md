# Personagens de Jogos - TODO

## Fase 1: Estrutura Base
- [x] Criar tipos e interfaces de dados (Personagem, FormData)
- [x] Criar dados dos 6 personagens com biografias (mínimo 150 palavras totais)
- [x] Implementar componente PersonagemCard reutilizável
- [x] Configurar ScreenContainer para todas as telas

## Fase 2: Tela Home (Lista)
- [x] Implementar tela Home com ScrollView
- [x] Renderizar lista de 6 personagens com PersonagemCard
- [x] Implementar navegação ao clicar em card → Detalhes
- [x] Testar scroll suave

## Fase 3: Tela Detalhes
- [x] Criar tela de Detalhes do personagem
- [x] Exibir: imagem grande, nome, jogo, classe/tipo, país, biografia
- [x] Implementar botão voltar
- [x] Testar navegação entre Home e Detalhes

## Fase 4: Tela Formulário
- [x] Criar tela de Formulário com título "Descobrir Personagem"
- [x] Implementar 4 TextInputs (Nome, Email, Comentário, Link do Jogo)
- [x] Implementar 2 Pickers (Gênero do Jogo, Plataforma)
- [x] Implementar 2 Sliders (Poder/Força 1-10, Anos no Jogo 0-50)
- [x] Implementar 2 Switches (Personagem Ativo, Recomendado)
- [x] Implementar botão Enviar com feedback (toast/alert)
- [x] Implementar botão Limpar que reseta todos os campos
- [x] Adicionar validação básica (email, campos obrigatórios)

## Fase 5: Navegação e Tema
- [x] Configurar Expo Router com tab bar (Home | Formulário)
- [x] Testar navegação entre abas
- [x] Verificar tema claro/escuro automático
- [x] Testar em iOS e Android

## Fase 6: Branding e Assets
- [x] Gerar logo/ícone do app
- [x] Salvar logo em assets/images/icon.png
- [x] Copiar logo para splash-icon.png, favicon.png, android-icon-foreground.png
- [x] Atualizar app.config.ts com appName "Personagens de Jogos"
- [x] Atualizar app.config.ts com logoUrl (S3 URL)

## Fase 7: Documentação e Deploy
- [x] Criar README.md profissional com:
  - QR Code do Expo Go
  - Link direto do Expo
  - Instruções passo a passo (iOS e Android)
  - Documentação completa
  - Stack tecnológico
  - Estrutura do projeto
  - Requisitos atendidos
  - Próximas melhorias
- [x] Fazer commit no Git
- [x] Gerar QR Code para Expo Go

## Verificação Final
- [ ] Mínimo 6 personagens com 6 imagens
- [ ] Mínimo 150 palavras totais em biografias
- [ ] Formulário com todos os componentes (4 inputs, 2 pickers, 2 sliders, 2 switches, 2 botões)
- [ ] Sem erros de compilação TypeScript
- [ ] Navegação fluida entre telas
- [ ] Tema claro/escuro funcionando
- [ ] QR Code funcional para Expo Go
