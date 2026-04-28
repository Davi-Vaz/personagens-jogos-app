import { Pressable, View, Text, Image } from 'react-native';
import { cn } from '@/lib/utils';
import { Personagem } from '@/types';

interface PersonagemCardProps {
  personagem: Personagem;
  onPress: () => void;
}

export function PersonagemCard({ personagem, onPress }: PersonagemCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <View className="bg-surface rounded-2xl overflow-hidden shadow-sm border border-border mb-4">
        {/* Imagem */}
        <Image
          source={{ uri: personagem.imagem }}
          className="w-full h-48"
          resizeMode="cover"
        />

        {/* Conteúdo */}
        <View className="p-4">
          {/* Nome */}
          <Text className="text-xl font-bold text-foreground mb-1">
            {personagem.nome}
          </Text>

          {/* Jogo */}
          <Text className="text-sm text-primary font-semibold mb-2">
            {personagem.jogo}
          </Text>

          {/* Descrição curta */}
          <Text
            className="text-sm text-muted leading-relaxed"
            numberOfLines={2}
          >
            {personagem.descricaoCurta}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
