import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function LibraryScreen() {
    const libraryItems = [
        { id: 1, title: 'Favoritos', icon: 'favorite', count: 12 },
        { id: 2, title: 'Recientes', icon: 'history', count: 8 },
        { id: 3, title: 'Descargas', icon: 'download', count: 5 },
        { id: 4, title: 'Listas de reproducción', icon: 'playlist-play', count: 3 },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Mi Biblioteca</Text>
                <Text style={styles.description}>
                    Aquí encontrarás todo tu contenido guardado y personalizado.
                </Text>
                
                <View style={styles.itemsContainer}>
                    {libraryItems.map((item) => (
                        <View key={item.id} style={styles.item}>
                            <MaterialIcons name={item.icon} size={24} color="#e91e63" />
                            <View style={styles.itemText}>
                                <Text style={styles.itemTitle}>{item.title}</Text>
                                <Text style={styles.itemCount}>{item.count} elementos</Text>
                            </View>
                            <MaterialIcons name="chevron-right" size={24} color="#ccc" />
                        </View>
                    ))}
                </View>
            </ScrollView>
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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
        marginBottom: 10,
        color: '#333',
    },
    description: {
        fontSize: 16,
        marginHorizontal: 20,
        marginBottom: 20,
        color: '#666',
        lineHeight: 22,
    },
    itemsContainer: {
        paddingHorizontal: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    itemText: {
        flex: 1,
        marginLeft: 15,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    itemCount: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
});
