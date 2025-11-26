import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const initialMessages = [
  {
    id: 'welcome',
    author: 'bot',
    text: 'Olá! Eu sou o CareBot 😊 Como posso te ajudar hoje?',
  },
  {
    id: 'info',
    author: 'bot',
    text: 'Tap nos atalhos ou descreva o que precisa para agilizar o atendimento.',
  },
];

const quickActions = [
  {
    id: 'schedule',
    label: 'Agendar consulta',
    response:
      'Perfeito! Informe especialidade e melhor horário para confirmar sua consulta.',
  },
  {
    id: 'results',
    label: 'Resultados de exames',
    response:
      'Envie o código do exame ou a data do atendimento para eu localizar os resultados.',
  },
  {
    id: 'tips',
    label: 'Dicas de bem-estar',
    response:
      'Lembre-se de beber água e separar 5 minutos para alongamentos. Precisa de mais dicas?',
  },
];

const ChatScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const lastMessageKey = messages[messages.length - 1]?.id;

  const pushMessage = (text, author) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${author}-${Date.now()}-${prev.length}`,
        author,
        text,
      },
    ]);
  };

  const handleSend = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      Alert.alert('Mensagem vazia', 'Digite algo para enviar ao CareBot.');
      return;
    }

    pushMessage(trimmed, 'user');
    setInputValue('');

    setTimeout(() => {
      pushMessage(
        'Obrigado pelas informações! Estou analisando e já retorno com próximos passos. ✅',
        'bot'
      );
    }, 600);
  };

  const handleQuickAction = (action) => {
    pushMessage(action.label, 'user');
    pushMessage(action.response, 'bot');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.messagesWrapper}
        contentContainerStyle={styles.messagesContent}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageBubble,
              message.author === 'user' ? styles.userBubble : styles.botBubble,
            ]}
          >
            <Text style={styles.messageAuthor}>
              {message.author === 'user' ? 'Você' : 'CareBot'}
            </Text>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.quickActions}>
        {quickActions.map((action) => (
          <TouchableOpacity
            key={action.id}
            style={styles.quickButton}
            onPress={() => handleQuickAction(action)}
          >
            <Text style={styles.quickButtonText}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Escreva sua mensagem..."
          placeholderTextColor="#999"
          style={styles.input}
          returnKeyType="send"
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSend}
          activeOpacity={0.8}
          accessibilityLabel="Enviar mensagem no chat"
        >
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.assuranceText} key={lastMessageKey}>
        🔒 Seus dados estão protegidos de acordo com a LGPD.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingTop: 16,
  },
  messagesWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  messagesContent: {
    paddingBottom: 20,
  },
  messageBubble: {
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    maxWidth: '90%',
  },
  botBubble: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 0,
    alignSelf: 'flex-start',
  },
  userBubble: {
    backgroundColor: '#0066B2',
    borderBottomRightRadius: 0,
    alignSelf: 'flex-end',
  },
  messageAuthor: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
    color: '#1A1A1A',
  },
  messageText: {
    fontSize: 15,
    color: '#1A1A1A',
    lineHeight: 20,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  quickButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 30,
    backgroundColor: '#E8F4FD',
    marginRight: 10,
    marginBottom: 10,
  },
  quickButtonText: {
    color: '#0066B2',
    fontWeight: '600',
    fontSize: 13,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginRight: 12,
  },
  sendButton: {
    backgroundColor: '#0066B2',
    borderRadius: 14,
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  assuranceText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#6B7280',
    paddingBottom: 10,
  },
});

export default ChatScreen;

