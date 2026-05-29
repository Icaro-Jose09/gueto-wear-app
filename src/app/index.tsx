import { useRouter } from 'expo-router';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.title}>GUETO WEAR</Text>
        <Text style={styles.subtitle}>A rua dita a moda.</Text>
      </View>

      {/* Espaço reservado para a futura imagem de destaque (ex: um tênis ou modelo) */}
      <View style={styles.imagePlaceholder}>
        <Text style={styles.placeholderText}>[ IMAGEM DA COLEÇÃO AQUI ]</Text>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.8}
        onPress={() => router.push('/colecao')}>
        <Text style={styles.buttonText}>VER COLEÇÃO</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingVertical: 60, 
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    marginTop: 8,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  imagePlaceholder: {
    width: '100%',
    height: 350,
    backgroundColor: '#1E1E1E',
    borderWidth: 2,
    borderColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, // Bordas levemente arredondadas
  },
  placeholderText: {
    color: '#555555',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingVertical: 18,
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
  },
});