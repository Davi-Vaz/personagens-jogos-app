import { ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { ScreenContainer } from '@/components/screen-container';
import { PersonagemCard } from '@/components/personagem-card';
import { personagensData } from '@/data/personagens';

export default function HomeScreen() {
  return (
    <ScreenContainer className="p-4">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Header */}
        <View className="mb-6">
          <Text className="text-3xl font-bold text-foreground">
            Personagens de Jogos
          </Text>
          <Text className="text-sm text-muted mt-1">
            Explore e descubra seus heróis favoritos
          </Text>
        </View>

        {/* Lista de Personagens */}
        <View>
          {personagensData.map((personagem) => (
            <Link
              key={personagem.id}
              href={{
                pathname: '/detalhes',
                params: { id: personagem.id },
              }}
              asChild
            >
              <PersonagemCard
                personagem={personagem}
                onPress={() => {}}
              />
            </Link>
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
