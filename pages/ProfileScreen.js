import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ProfileScreen = () => {
  const [profile, setProfile] = useState({
    name: 'Bruna Costa',
    phone: '(11) 99999-0000',
    emergency: '(11) 98888-1234',
    allergies: 'Sem alergias registradas',
    plan: 'premium',
    reminder: 'manhã',
  });

  const handleChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    Alert.alert(
      'Perfil atualizado',
      `Preferências salvas para ${profile.name}. Você receberá lembretes no período da ${profile.reminder}.`
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.avatarSection}>
        <Image
          source={require('../assets/icon.png')}
          style={styles.avatar}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.avatarButton}
          onPress={() =>
            Alert.alert('Em breve', 'Envio de fotos ainda está em desenvolvimento.')
          }
        >
          <Text style={styles.avatarButtonText}>Trocar foto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome completo</Text>
        <TextInput
          style={styles.input}
          value={profile.name}
          onChangeText={(text) => handleChange('name', text)}
        />
      </View>

      <View style={styles.inlineGroup}>
        <View style={[styles.formGroup, styles.inlineItem]}>
          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            value={profile.phone}
            onChangeText={(text) => handleChange('phone', text)}
            keyboardType="phone-pad"
          />
        </View>
        <View style={[styles.formGroup, styles.inlineItem]}>
          <Text style={styles.label}>Contato de emergência</Text>
          <TextInput
            style={styles.input}
            value={profile.emergency}
            onChangeText={(text) => handleChange('emergency', text)}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Plano de saúde</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={profile.plan}
            onValueChange={(value) => handleChange('plan', value)}
          >
            <Picker.Item label="Care Plus Essencial" value="essencial" />
            <Picker.Item label="Care Plus Premium" value="premium" />
            <Picker.Item label="Care Plus Corporativo" value="corporativo" />
          </Picker>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Lembretes inteligentes</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={profile.reminder}
            onValueChange={(value) => handleChange('reminder', value)}
          >
            <Picker.Item label="Manhã" value="manhã" />
            <Picker.Item label="Tarde" value="tarde" />
            <Picker.Item label="Noite" value="noite" />
          </Picker>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Alergias e alertas médicos</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          value={profile.allergies}
          onChangeText={(text) => handleChange('allergies', text)}
          multiline
          numberOfLines={4}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave} activeOpacity={0.8}>
        <Text style={styles.saveButtonText}>Salvar preferências</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  content: {
    padding: 24,
    paddingBottom: 40,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#FFFFFF',
  },
  avatarButton: {
    marginTop: 12,
    paddingHorizontal: 18,
    paddingVertical: 8,
    backgroundColor: '#0066B2',
    borderRadius: 20,
  },
  avatarButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  formGroup: {
    marginBottom: 18,
  },
  inlineGroup: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  inlineItem: {
    flex: 0.48,
  },
  label: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: '#111827',
  },
  pickerWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  multiline: {
    textAlignVertical: 'top',
    height: 100,
  },
  saveButton: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;

