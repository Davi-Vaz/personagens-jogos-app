import { ScrollView, Text, View, Image, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/screen-container';
import { personagensData } from '@/data/personagens';
import { MaterialIcons } from '@expo/vector-icons';
import { useColors } from '@/hooks/use-colors';

export default function DetalhesScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const colors = useColors();

  const personagem = personagensData.find((p) => p.id === id);

  if (!personagem) {
    return (
      <ScreenContainer className="items-center justify-center">
        <Text className="text-foreground text-lg">Personagem não encontrado</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer className="p-0">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Header com botão voltar */}
        <View className="flex-row items-center justify-between px-4 py-4 bg-surface border-b border-border">
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
          >
            <MaterialIcons name="arrow-back" size={24} color={colors.foreground} />
          </Pressable>
          <Text className="text-lg font-bold text-foreground flex-1 ml-3">
            Detalhes
          </Text>
        </View>

        {/* Imagem grande */}
        <Image
          source={{ uri: personagem.imagem }}
          className="w-full h-64"
          resizeMode="cover"
        />

        {/* Conteúdo */}
        <View className="px-4 py-6 gap-4">
          {/* Nome */}
          <View>
            <Text className="text-3xl font-bold text-foreground">
              {personagem.nome}
            </Text>
          </View>

          {/* Jogo */}
          <View className="bg-primary/10 rounded-lg p-3">
            <Text className="text-xs text-muted uppercase tracking-wider font-semibold">
              Jogo de Origem
            </Text>
            <Text className="text-lg font-semibold text-primary mt-1">
              {personagem.jogo}
            </Text>
          </View>

          {/* Classe e País */}
          <View className="flex-row gap-3">
            <View className="flex-1 bg-surface rounded-lg p-3 border border-border">
              <Text className="text-xs text-muted uppercase tracking-wider font-semibold">
                Classe/Tipo
              </Text>
              <Text className="text-base font-semibold text-foreground mt-1">
                {personagem.classe}
              </Text>
            </View>
            <View className="flex-1 bg-surface rounded-lg p-3 border border-border">
              <Text className="text-xs text-muted uppercase tracking-wider font-semibold">
                País
              </Text>
              <Text className="text-base font-semibold text-foreground mt-1">
                {personagem.pais}
              </Text>
            </View>
          </View>

          {/* Biografia */}
          <View>
            <Text className="text-lg font-bold text-foreground mb-2">
              Biografia
            </Text>
            <Text className="text-base text-muted leading-relaxed">
              {personagem.descricaoLonga}
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
