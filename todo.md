# Personagens de Jogos - TODO

## Fase 1: Estrutura Base
- [ ] Criar tipos e interfaces de dados (Personagem, FormData)
- [ ] Criar dados dos 6 personagens com biografias (mínimo 150 palavras totais)
- [ ] Implementar componente PersonagemCard reutilizável
- [ ] Configurar ScreenContainer para todas as telas

## Fase 2: Tela Home (Lista)
- [ ] Implementar tela Home com ScrollView
- [ ] Renderizar lista de 6 personagens com PersonagemCard
- [ ] Implementar navegação ao clicar em card → Detalhes
- [ ] Testar scroll suave

## Fase 3: Tela Detalhes
- [ ] Criar tela de Detalhes do personagem
- [ ] Exibir: imagem grande, nome, jogo, classe/tipo, país, biografia
- [ ] Implementar botão voltar
- [ ] Testar navegação entre Home e Detalhes

## Fase 4: Tela Formulário
- [ ] Criar tela de Formulário com título "Descobrir Personagem"
- [ ] Implementar 4 TextInputs (Nome, Email, Comentário, Link do Jogo)
- [ ] Implementar 2 Pickers (Gênero do Jogo, Plataforma)
- [ ] Implementar 2 Sliders (Poder/Força 1-10, Anos no Jogo 0-50)
- [ ] Implementar 2 Switches (Personagem Ativo, Recomendado)
- [ ] Implementar botão Enviar com feedback (toast/alert)
- [ ] Implementar botão Limpar que reseta todos os campos
- [ ] Adicionar validação básica (email, campos obrigatórios)

## Fase 5: Navegação e Tema
- [ ] Configurar Expo Router com tab bar (Home | Formulário)
- [ ] Testar navegação entre abas
- [ ] Verificar tema claro/escuro automático
- [ ] Testar em iOS e Android

## Fase 6: Branding e Assets
- [ ] Gerar logo/ícone do app
- [ ] Salvar logo em assets/images/icon.png
- [ ] Copiar logo para splash-icon.png, favicon.png, android-icon-foreground.png
- [ ] Atualizar app.config.ts com appName "Personagens de Jogos"
- [ ] Atualizar app.config.ts com logoUrl (S3 URL)

## Fase 7: Documentação e Deploy
- [ ] Criar README.md profissional com:
  - QR Code do Expo Go
  - Link direto do Expo
  - Instruções passo a passo (iOS e Android)
  - Documentação completa
  - Stack tecnológico
  - Estrutura do projeto
  - Requisitos atendidos
  - Próximas melhorias
- [ ] Fazer commit no Git
- [ ] Gerar QR Code para Expo Go

## Verificação Final
- [ ] Mínimo 6 personagens com 6 imagens
- [ ] Mínimo 150 palavras totais em biografias
- [ ] Formulário com todos os componentes (4 inputs, 2 pickers, 2 sliders, 2 switches, 2 botões)
- [ ] Sem erros de compilação TypeScript
- [ ] Navegação fluida entre telas
- [ ] Tema claro/escuro funcionando
- [ ] QR Code funcional para Expo Go
