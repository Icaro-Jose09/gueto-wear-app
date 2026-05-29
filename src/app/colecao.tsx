import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Colecao() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Botão simples para voltar */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>← VOLTAR</Text>
        </TouchableOpacity>
        <Text style={styles.title}>CATÁLOGO</Text>
      </View>

      {/* ScrollView permite rolar a tela para baixo quando tiver muitos itens */}
      <ScrollView style={styles.list}>
        <View style={styles.itemCard}>
          <Text style={styles.itemTitle}>Camiseta Oversized "Hustle"</Text>
          <Text style={styles.itemPrice}>R$ 120,00</Text>
        </View>

        <View style={styles.itemCard}>
          <Text style={styles.itemTitle}>Tênis de Basquete Retro</Text>
          <Text style={styles.itemPrice}>R$ 450,00</Text>
        </View>

        <View style={styles.itemCard}>
          <Text style={styles.itemTitle}>Jaqueta Corta-Vento Refletiva</Text>
          <Text style={styles.itemPrice}>R$ 280,00</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  backButton: {
    marginRight: 20,
  },
  backText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  list: {
    paddingHorizontal: 20,
  },
  itemCard: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#FFFFFF', // Um detalhe de design na borda
  },
  itemTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    color: '#A0A0A0',
    fontSize: 16,
  },
});