# CareBot Connect

Aplicativo React Native criado para o desafio de **Mobile Development and IoT**. O app apresenta autenticação com validação de formulário e um fluxo principal com navegação em abas (TabNavigation) contendo 4 telas completas: Início, Chat, Histórico e Perfil.

## Funcionalidades

- **Login validado**: formulário com máscara básica, mensagens de erro e credenciais de teste (`usuario@careplus.com` / `123456`).
- **Home**: cards interativos com dicas, banner informativo e atalhos para as demais áreas do app.
- **Chat com CareBot**: lista de mensagens, atalhos rápidos, envio de texto e avisos via `Alert`.
- **Histórico**: timeline de consultas com cards, status colorido, botão de detalhes e alerta com resumo.
- **Perfil do paciente**: formulário completo com `Picker`, upload de foto (placebo), campos editáveis e confirmação de salvamento.

> Componentes exigidos pelo edital (`View`, `ScrollView`, `TextInput`, `Text`, `Image`, `TouchableOpacity`, `Alert`, `Picker`) estão distribuídos pelas telas.

## Estrutura das pastas

```
carebot/
├── App.js                # Decide entre Login e TabNavigation
├── components/
│   └── TabNavigation.js  # Abas: Início, Chat, Histórico e Perfil
├── pages/
│   ├── LoginScreen.js
│   ├── HomeScreen.js
│   ├── ChatScreen.js
│   ├── HistoryScreen.js
│   └── ProfileScreen.js
└── assets/               # Logos e ícones usados nas telas
```

## Como executar

### 1. Via Snack (recomendado para o vídeo)
1. Acesse [https://snack.expo.dev/](https://snack.expo.dev/).
2. Clique em **Import project** e cole o conteúdo desta pasta (ou compacte e faça upload).
3. Aguarde o bundler e teste diretamente no preview Android/iOS ou leia o QR Code no app Expo Go.

### 2. Local com Expo CLI
```bash
npm install
npm run start       # abre o Metro bundler
```
Depois, use `npm run android`, `npm run ios` ou `npm run web` conforme o ambiente disponível.

## Credenciais de teste

| Campo | Valor |
| ----- | ----- |
| Email | `usuario@careplus.com` |
| Senha | `123456` |

As credenciais também aparecem na própria tela de login, facilitando a gravação do vídeo.

## Checklist para o PDF da entrega

- [ ] Nome completo e RA/ RM dos integrantes.
- [ ] Print do diretório de arquivos (estrutura mostrada acima).
- [ ] Código-fonte das telas (`.tsx/.js`) e estilos (`.css/.js`).
- [ ] Capturas reais do emulador Android com **todas** as telas (Login + 4 abas).
- [ ] Link do repositório / Snack.

Para complementar, grave um vídeo curto navegando pelas telas no emulador Android/iOS, demonstrando:
1. Login com validação (erro e sucesso).
2. Uso dos atalhos no Chat e envio de mensagem.
3. Consulta ao histórico e visualização do alerta de detalhes.
4. Alteração de algum campo no Perfil + Picker e alerta de confirmação.
