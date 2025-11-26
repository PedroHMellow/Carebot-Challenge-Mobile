import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from 'react-native';

const HomeScreen = () => {
  const handleCardPress = (feature) => {
    Alert.alert(
      feature,
      'Navegue pelas abas inferiores para acessar os fluxos completos desta funcionalidade.'
    );
  };

  return (
    <View style={styles.container}>
      {/* Header com Logo */}
      <View style={styles.header}>
        <Image
          source={require('../assets/CarePlus_Logo.png')}
          style={styles.logoHeader}
          resizeMode="contain"
        />
      </View>

      {/* Conteúdo Principal */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Bem-vindo */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Bem-vindo! 👋</Text>
          <Text style={styles.welcomeText}>
            Seu assistente de saúde está pronto para ajudar
          </Text>
        </View>

        {/* Cards de Funcionalidades */}
        <View style={styles.cardsContainer}>
          
          {/* Card 1 - Chatbot */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => handleCardPress('Chat com CareBot')}
          >
            <View style={styles.cardIconContainer}>
              <Text style={styles.cardIcon}>💬</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Chat com CareBot</Text>
              <Text style={styles.cardDescription}>
                Agende consultas via chat inteligente
              </Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </TouchableOpacity>

          {/* Card 2 - Histórico */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => handleCardPress('Histórico')}
          >
            <View style={styles.cardIconContainer}>
              <Text style={styles.cardIcon}>📋</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Histórico</Text>
              <Text style={styles.cardDescription}>
                Veja suas consultas anteriores
              </Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </TouchableOpacity>

          {/* Card 3 - Bem-estar */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => handleCardPress('Registro de Bem-estar')}
          >
            <View style={styles.cardIconContainer}>
              <Text style={styles.cardIcon}>💧</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Registro de Bem-estar</Text>
              <Text style={styles.cardDescription}>
                Acompanhe água, sono e exercícios
              </Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </TouchableOpacity>

          {/* Card 4 - Perfil */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => handleCardPress('Meu Perfil')}
          >
            <View style={styles.cardIconContainer}>
              <Text style={styles.cardIcon}>👤</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Meu Perfil</Text>
              <Text style={styles.cardDescription}>
                Gerencie suas informações pessoais
              </Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </TouchableOpacity>

        </View>

        {/* Banner Informativo */}
        <View style={styles.infoBanner}>
          <Text style={styles.infoBannerIcon}>💡</Text>
          <View style={styles.infoBannerContent}>
            <Text style={styles.infoBannerTitle}>Dica do dia</Text>
            <Text style={styles.infoBannerText}>
              Use o chat para agendar consultas de forma rápida e prática!
            </Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  
  // Header
  header: {
    backgroundColor: '#0066B2',
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  logoHeader: {
    width: 150,
    height: 50,
    tintColor: '#FFFFFF',
  },
  
  // Conteúdo
  content: {
    flex: 1,
    padding: 20,
  },
  
  // Seção de Boas-vindas
  welcomeSection: {
    marginBottom: 25,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  
  // Cards
  cardsContainer: {
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  cardIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#E8F4FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardIcon: {
    fontSize: 26,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  cardArrow: {
    fontSize: 28,
    color: '#0066B2',
    fontWeight: '300',
  },
  
  // Banner Informativo
  infoBanner: {
    flexDirection: 'row',
    backgroundColor: '#FFF9E6',
    borderRadius: 12,
    padding: 16,
    marginBottom: 30,
    borderLeftWidth: 4,
    borderLeftColor: '#FFB800',
  },
  infoBannerIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  infoBannerContent: {
    flex: 1,
  },
  infoBannerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  infoBannerText: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
});

export default HomeScreen;