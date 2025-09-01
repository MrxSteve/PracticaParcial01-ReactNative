import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
    const { id } = route.params || {};
    
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Pantalla de Detalle</Text>
                <Text style={styles.itemText}>
                    ID del item: {id ?? 'No disponible'}
                </Text>
                <Text style={styles.description}>
                    Esta es la pantalla de detalle.
                </Text>
                <Button
                    title="Volver al Inicio"
                    onPress={() => navigation.goBack()}
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
        marginBottom: 20,
        color: '#333',
    },
    itemText: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
        color: '#e91e63',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#666',
        lineHeight: 22,
    },
});
