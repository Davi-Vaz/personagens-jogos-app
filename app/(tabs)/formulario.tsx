import {
  ScrollView,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
  Switch,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { ScreenContainer } from '@/components/screen-container';
import { FormData, GeneroJogo, Plataforma } from '@/types';
import Slider from '@react-native-community/slider';
import { useColors } from '@/hooks/use-colors';

const GENEROS: GeneroJogo[] = ['RPG', 'FPS', 'Estratégia', 'Ação', 'Aventura', 'Esportes', 'Outro'];
const PLATAFORMAS: Plataforma[] = ['PC', 'PS5', 'Xbox', 'Nintendo', 'Mobile', 'Outro'];

export default function FormularioScreen() {
  const colors = useColors();
  const [formData, setFormData] = useState<FormData>({
    nomePersonagem: '',
    email: '',
    comentario: '',
    linkJogo: '',
    generoJogo: 'RPG',
    plataforma: 'PC',
    poder: 5,
    anosJogo: 10,
    personagemAtivo: true,
    recomendado: false,
  });

  const handleInputChange = (field: keyof FormData, value: string | number | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.nomePersonagem.trim()) {
      Alert.alert('Erro', 'Por favor, digite o nome do personagem');
      return false;
    }
    if (!formData.email.trim()) {
      Alert.alert('Erro', 'Por favor, digite seu email');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Erro', 'Por favor, digite um email válido');
      return false;
    }
    if (!formData.comentario.trim()) {
      Alert.alert('Erro', 'Por favor, digite um comentário');
      return false;
    }
    return true;
  };

  const handleEnviar = () => {
    if (validateForm()) {
      Alert.alert(
        'Sucesso!',
        `Obrigado por compartilhar sobre ${formData.nomePersonagem}!\n\nSeu feedback foi enviado com sucesso.`,
        [{ text: 'OK', onPress: () => {} }]
      );
    }
  };

  const handleLimpar = () => {
    setFormData({
      nomePersonagem: '',
      email: '',
      comentario: '',
      linkJogo: '',
      generoJogo: 'RPG',
      plataforma: 'PC',
      poder: 5,
      anosJogo: 10,
      personagemAtivo: true,
      recomendado: false,
    });
  };

  return (
    <ScreenContainer className="p-4">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Header */}
        <View className="mb-6">
          <Text className="text-3xl font-bold text-foreground">
            Descobrir Personagem
          </Text>
          <Text className="text-sm text-muted mt-1">
            Compartilhe sua opinião sobre personagens de jogos
          </Text>
        </View>

        {/* TextInputs */}
        <View className="gap-4 mb-6">
          {/* Nome do Personagem */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              Nome do Personagem
            </Text>
            <TextInput
              placeholder="Digite o nome..."
              placeholderTextColor={colors.muted}
              value={formData.nomePersonagem}
              onChangeText={(text) => handleInputChange('nomePersonagem', text)}
              className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
            />
          </View>

          {/* Email */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              Email
            </Text>
            <TextInput
              placeholder="seu@email.com"
              placeholderTextColor={colors.muted}
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              keyboardType="email-address"
              className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
            />
          </View>

          {/* Comentário */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              Comentário
            </Text>
            <TextInput
              placeholder="Sua opinião..."
              placeholderTextColor={colors.muted}
              value={formData.comentario}
              onChangeText={(text) => handleInputChange('comentario', text)}
              multiline
              numberOfLines={4}
              className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
              textAlignVertical="top"
            />
          </View>

          {/* Link do Jogo */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              Link do Jogo
            </Text>
            <TextInput
              placeholder="https://..."
              placeholderTextColor={colors.muted}
              value={formData.linkJogo}
              onChangeText={(text) => handleInputChange('linkJogo', text)}
              keyboardType="url"
              className="bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
            />
          </View>
        </View>

        {/* Pickers */}
        <View className="gap-4 mb-6">
          {/* Gênero do Jogo */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              Gênero do Jogo
            </Text>
            <View className="bg-surface border border-border rounded-lg overflow-hidden">
              <Picker
                selectedValue={formData.generoJogo}
                onValueChange={(value: string) => handleInputChange('generoJogo', value)}
                style={{ color: colors.foreground }}
              >
                {GENEROS.map((genero) => (
                  <Picker.Item key={genero} label={genero} value={genero} />
                ))}
              </Picker>
            </View>
          </View>

          {/* Plataforma */}
          <View>
            <Text className="text-sm font-semibold text-foreground mb-2">
              Plataforma
            </Text>
            <View className="bg-surface border border-border rounded-lg overflow-hidden">
              <Picker
                selectedValue={formData.plataforma}
                onValueChange={(value: string) => handleInputChange('plataforma', value)}
                style={{ color: colors.foreground }}
              >
                {PLATAFORMAS.map((plataforma) => (
                  <Picker.Item key={plataforma} label={plataforma} value={plataforma} />
                ))}
              </Picker>
            </View>
          </View>
        </View>

        {/* Sliders */}
        <View className="gap-6 mb-6">
          {/* Poder/Força */}
          <View>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-sm font-semibold text-foreground">
                Poder/Força
              </Text>
              <Text className="text-sm font-bold text-primary">
                {Math.round(formData.poder)}/10
              </Text>
            </View>
            <Slider
              style={{ height: 40 }}
              minimumValue={1}
              maximumValue={10}
              step={1}
              value={formData.poder}
              onValueChange={(value) => handleInputChange('poder', value as number)}
              minimumTrackTintColor={colors.primary}
              maximumTrackTintColor={colors.border}
              thumbTintColor={colors.primary}
            />
          </View>

          {/* Anos no Jogo */}
          <View>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-sm font-semibold text-foreground">
                Anos no Jogo
              </Text>
              <Text className="text-sm font-bold text-primary">
                {Math.round(formData.anosJogo)} anos
              </Text>
            </View>
            <Slider
              style={{ height: 40 }}
              minimumValue={0}
              maximumValue={50}
              step={1}
              value={formData.anosJogo}
              onValueChange={(value) => handleInputChange('anosJogo', value as number)}
              minimumTrackTintColor={colors.primary}
              maximumTrackTintColor={colors.border}
              thumbTintColor={colors.primary}
            />
          </View>
        </View>

        {/* Switches */}
        <View className="gap-3 mb-6 bg-surface rounded-lg p-4 border border-border">
          {/* Personagem Ativo */}
          <View className="flex-row justify-between items-center">
            <Text className="text-sm font-semibold text-foreground">
              Personagem Ativo
            </Text>
            <Switch
              value={formData.personagemAtivo}
              onValueChange={(value) => handleInputChange('personagemAtivo', value)}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={colors.background}
            />
          </View>

          {/* Recomendado */}
          <View className="flex-row justify-between items-center pt-3 border-t border-border">
            <Text className="text-sm font-semibold text-foreground">
              Recomendado
            </Text>
            <Switch
              value={formData.recomendado}
              onValueChange={(value) => handleInputChange('recomendado', value)}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={colors.background}
            />
          </View>
        </View>

        {/* Botões */}
        <View className="gap-3">
          {/* Enviar */}
          <Pressable
            onPress={handleEnviar}
            style={({ pressed }) => [
              {
                backgroundColor: colors.primary,
                opacity: pressed ? 0.8 : 1,
              },
            ]}
            className="rounded-lg py-4 items-center"
          >
            <Text className="text-white font-bold text-base">Enviar</Text>
          </Pressable>

          {/* Limpar */}
          <Pressable
            onPress={handleLimpar}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.7 : 1,
              },
            ]}
            className="bg-surface border border-border rounded-lg py-4 items-center"
          >
            <Text className="text-foreground font-bold text-base">Limpar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
