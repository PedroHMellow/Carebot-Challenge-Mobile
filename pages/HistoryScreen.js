import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const appointments = [
  {
    id: '1',
    date: '21 Nov 2025',
    period: '08:30',
    doctor: 'Dra. Ana Paula',
    specialty: 'Clínico Geral',
    status: 'Concluída',
    notes: 'Recomendado retorno em 60 dias.',
  },
  {
    id: '2',
    date: '03 Dez 2025',
    period: '11:10',
    doctor: 'Dr. Ricardo Lima',
    specialty: 'Cardiologia',
    status: 'Confirmada',
    notes: 'Levar resultados de exames laboratoriais.',
  },
  {
    id: '3',
    date: '18 Dez 2025',
    period: '17:00',
    doctor: 'Dra. Lúcia Prado',
    specialty: 'Psicologia',
    status: 'Em andamento',
    notes: 'Sessão semanal para acompanhamento emocional.',
  },
];

const statusStyles = {
  Concluída: { backgroundColor: '#10B981' },
  Confirmada: { backgroundColor: '#3B82F6' },
  'Em andamento': { backgroundColor: '#F59E0B' },
};

const HistoryScreen = () => {
  const handleDetails = (item) => {
    Alert.alert(
      `Consulta - ${item.specialty}`,
      `Profissional: ${item.doctor}\nData: ${item.date} às ${item.period}\nStatus: ${item.status}\n\nObservações:\n${item.notes}`
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Histórico de atendimentos</Text>
        <Text style={styles.subtitle}>
          Acompanhe suas consultas passadas, confirmadas e próximas.
        </Text>

        {appointments.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardDate}>{item.date}</Text>
                <Text style={styles.cardTime}>{item.period}</Text>
              </View>
              <View style={[styles.statusPill, statusStyles[item.status]]}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>

            <Text style={styles.cardSpecialty}>{item.specialty}</Text>
            <Text style={styles.cardDoctor}>{item.doctor}</Text>
            <Text style={styles.cardNotes}>{item.notes}</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => handleDetails(item)}
            >
              <Text style={styles.detailsButtonText}>Ver detalhes</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingVertical: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  cardDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  cardTime: {
    fontSize: 14,
    color: '#6B7280',
  },
  statusPill: {
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  statusText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 12,
  },
  cardSpecialty: {
    fontSize: 15,
    color: '#0066B2',
    fontWeight: '600',
    marginBottom: 4,
  },
  cardDoctor: {
    fontSize: 15,
    color: '#1F2937',
    marginBottom: 8,
  },
  cardNotes: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 16,
    lineHeight: 18,
  },
  detailsButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#E8F4FD',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  detailsButtonText: {
    color: '#0066B2',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default HistoryScreen;

