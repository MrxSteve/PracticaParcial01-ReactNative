import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SearchScreen() {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        if (searchText.trim()) {
            console.log('Buscando:', searchText);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Buscar</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="¿Qué estás buscando?"
                        value={searchText}
                        onChangeText={setSearchText}
                        onSubmitEditing={handleSearch}
                    />
                    <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                        <MaterialIcons name="search" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.description}>
                    Introduce un término de búsqueda para encontrar contenido.
                </Text>
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
        marginBottom: 30,
        color: '#333',
    },
    searchContainer: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    searchButton: {
        width: 50,
        height: 50,
        backgroundColor: '#e91e63',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        lineHeight: 22,
    },
});
