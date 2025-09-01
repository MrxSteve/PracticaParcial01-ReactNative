import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Pantalla de Inicio</Text>
                <Text style={styles.description}>
                    Bienvenido a la aplicación.
                </Text>
                <Button
                    title="Ir a Detalle (id=42)"
                    onPress={() => navigation.navigate('Details', { id: 42 })}
                    color="#e91e63"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#666',
        lineHeight: 22,
    },
});
