import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Colecao() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>← VOLTAR</Text>
        </TouchableOpacity>
        <Text style={styles.title}>CATÁLOGO</Text>
      </View>

      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        
        {/* PRODUTO 1 */}
        <View style={styles.itemCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop' }} 
            style={styles.itemImage}
            resizeMode="cover"
          />
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>Camiseta Oversized "Hustle"</Text>
            <Text style={styles.itemPrice}>R$ 120,00</Text>
          </View>
        </View>

        {/* PRODUTO 2 */}
        <View style={styles.itemCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop' }} 
            style={styles.itemImage}
            resizeMode="cover"
          />
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>Tênis de Basquete Retro</Text>
            <Text style={styles.itemPrice}>R$ 450,00</Text>
          </View>
        </View>

        {/* PRODUTO 3 */}
        <View style={styles.itemCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=800&auto=format&fit=crop' }} 
            style={styles.itemImage}
            resizeMode="cover"
          />
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>Jaqueta Streetwear Black</Text>
            <Text style={styles.itemPrice}>R$ 280,00</Text>
          </View>
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
    paddingVertical: 5,
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
    borderRadius: 12,
    marginBottom: 25,
    overflow: 'hidden', // Importante para a imagem não vazar das bordas arredondadas
    borderWidth: 1,
    borderColor: '#333333',
  },
  itemImage: {
    width: '100%',
    height: 250, // Altura padrão para todas as fotos dos produtos
  },
  itemInfo: {
    padding: 20,
  },
  itemTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemPrice: {
    color: '#A0A0A0',
    fontSize: 18,
    fontWeight: '600',
  },
});