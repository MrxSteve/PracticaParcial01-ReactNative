import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LibraryScreen({ navigation }) {
    const handleMyProductsPress = () => {
        navigation.navigate('ProductList', {
            listType: 'myProducts',
            title: 'Mis Productos'
        });
    };

    const handleWishlistPress = () => {
        navigation.navigate('ProductList', {
            listType: 'wishlist',
            title: 'Lista de Deseos'
        });
    };

    const handleCartPress = () => {
        navigation.navigate('ProductList', {
            listType: 'cart',
            title: 'Carrito de Compras'
        });
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Mi Biblioteca</Text>
                <Text style={styles.description}>
                    Gestiona tus productos y preferencias de compra
                </Text>
                
                <View style={styles.optionsContainer}>
                    <TouchableOpacity 
                        style={[styles.optionCard, { borderLeftColor: '#3498db' }]}
                        onPress={handleMyProductsPress}
                    >
                        <View style={styles.optionContent}>
                            <View style={[styles.iconContainer, { backgroundColor: '#3498db' }]}>
                                <MaterialIcons name="inventory" size={28} color="#ffffff" />
                            </View>
                            <View style={styles.optionText}>
                                <Text style={styles.optionTitle}>Mis Productos</Text>
                                <Text style={styles.optionDescription}>Productos que posees</Text>
                            </View>
                            <MaterialIcons name="chevron-right" size={24} color="#bdc3c7" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.optionCard, { borderLeftColor: '#e74c3c' }]}
                        onPress={handleWishlistPress}
                    >
                        <View style={styles.optionContent}>
                            <View style={[styles.iconContainer, { backgroundColor: '#e74c3c' }]}>
                                <MaterialIcons name="favorite" size={28} color="#ffffff" />
                            </View>
                            <View style={styles.optionText}>
                                <Text style={styles.optionTitle}>Lista de Deseos</Text>
                                <Text style={styles.optionDescription}>Productos que te gustan</Text>
                            </View>
                            <MaterialIcons name="chevron-right" size={24} color="#bdc3c7" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.optionCard, { borderLeftColor: '#27ae60' }]}
                        onPress={handleCartPress}
                    >
                        <View style={styles.optionContent}>
                            <View style={[styles.iconContainer, { backgroundColor: '#27ae60' }]}>
                                <MaterialIcons name="shopping-cart" size={28} color="#ffffff" />
                            </View>
                            <View style={styles.optionText}>
                                <Text style={styles.optionTitle}>Carrito de Compras</Text>
                                <Text style={styles.optionDescription}>Productos para comprar</Text>
                            </View>
                            <MaterialIcons name="chevron-right" size={24} color="#bdc3c7" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: '#2c3e50',
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#7f8c8d',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 22,
    },
    optionsContainer: {
        flex: 1,
        justifyContent: 'center',
        gap: 20,
    },
    optionCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        borderLeftWidth: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    optionContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    optionText: {
        flex: 1,
    },
    optionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 4,
    },
    optionDescription: {
        fontSize: 14,
        color: '#7f8c8d',
        lineHeight: 20,
    },
});
