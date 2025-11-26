import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from 'react-native';

const LoginScreen = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Função de validação do formulário
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validação do email
    if (!email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Email inválido';
    }

    // Validação da senha
    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Função de login
  const handleLogin = () => {
    if (validateForm()) {
      // Credenciais de teste
      if (email === 'usuario@careplus.com' && password === '123456') {
        Alert.alert(
          'Sucesso! 🎉',
          'Login realizado com sucesso',
          [{ text: 'OK', onPress: onLoginSuccess }]
        );
      } else {
        Alert.alert(
          'Erro de Login ❌',
          'Email ou senha incorretos.\n\n📝 Credenciais de teste:\nEmail: usuario@careplus.com\nSenha: 123456'
        );
      }
    } else {
      Alert.alert('Atenção ⚠️', 'Por favor, corrija os campos inválidos');
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      {/* Logo Care Plus - Agora usando Image */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/CarePlus_Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Título do App */}
      <Text style={styles.title}>CareBot Connect</Text>
      <Text style={styles.description}>
        Seu assistente de saúde inteligente 🤖
      </Text>

      {/* Formulário de Login */}
      <View style={styles.formContainer}>
        
        {/* Campo de Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="seu@email.com"
            placeholderTextColor="#999"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (errors.email) {
                setErrors({ ...errors, email: null });
              }
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
          />
          {errors.email && (
            <Text style={styles.errorText}>⚠️ {errors.email}</Text>
          )}
        </View>

        {/* Campo de Senha */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={[styles.input, errors.password && styles.inputError]}
            placeholder="••••••"
            placeholderTextColor="#999"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (errors.password) {
                setErrors({ ...errors, password: null });
              }
            }}
            secureTextEntry
            autoCapitalize="none"
            autoComplete="password"
          />
          {errors.password && (
            <Text style={styles.errorText}>⚠️ {errors.password}</Text>
          )}
        </View>

        {/* Botão de Login */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          activeOpacity={0.7}
        >
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Link "Esqueci minha senha" */}
        <TouchableOpacity
          onPress={() => Alert.alert('Info', 'Funcionalidade em desenvolvimento')}
          style={styles.forgotPasswordButton}
        >
          <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        {/* Box com Credenciais de Teste */}
        <View style={styles.credentialsBox}>
          <Text style={styles.credentialsTitle}>🔐 Credenciais de Teste</Text>
          <View style={styles.credentialRow}>
            <Text style={styles.credentialLabel}>Email:</Text>
            <Text style={styles.credentialValue}>usuario@careplus.com</Text>
          </View>
          <View style={styles.credentialRow}>
            <Text style={styles.credentialLabel}>Senha:</Text>
            <Text style={styles.credentialValue}>123456</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
    paddingTop: 40,
  },
  
  // Logo
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 120,
  },
  
  // Título
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  
  // Formulário
  formContainer: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    color: '#333',
  },
  inputError: {
    borderColor: '#E74C3C',
    borderWidth: 2,
  },
  errorText: {
    color: '#E74C3C',
    fontSize: 13,
    marginTop: 6,
    marginLeft: 4,
  },
  
  // Botões
  loginButton: {
    backgroundColor: '#0066B2',
    borderRadius: 10,
    padding: 18,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#0066B2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#0066B2',
    fontSize: 14,
    fontWeight: '600',
  },
  
  // Box de Credenciais
  credentialsBox: {
    marginTop: 40,
    padding: 20,
    backgroundColor: '#E8F4FD',
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#0066B2',
  },
  credentialsTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0066B2',
    marginBottom: 12,
  },
  credentialRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  credentialLabel: {
    fontSize: 14,
    color: '#555',
    fontWeight: '600',
    width: 70,
  },
  credentialValue: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'monospace',
  },
});

export default LoginScreen;