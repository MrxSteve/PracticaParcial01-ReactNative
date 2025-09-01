import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { clothingProducts } from '../data/products';

export default function ProductListScreen({ route, navigation }) {
    const { listType, title } = route.params || {};

    // Función para obtener productos según el tipo de lista
    const getProductsByType = (type) => {
        switch (type) {
            case 'myProducts':
                return clothingProducts.slice(0, 3);
            case 'wishlist':
                return clothingProducts.slice(3, 6);
            case 'cart':
                return clothingProducts.slice(6, 9);
            default:
                return [];
        }
    };

    const products = getProductsByType(listType);

    const renderProduct = ({ item }) => (
        <TouchableOpacity 
            style={styles.productCard}
            onPress={() => navigation.navigate('Details', { product: item })}
        >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productCategory}>{item.category}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <TouchableOpacity 
                    style={styles.detailButton}
                    onPress={() => navigation.navigate('Details', { product: item })}
                >
                    <Text style={styles.detailButtonText}>Ver Detalle</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>
                    {products.length} {products.length === 1 ? 'producto' : 'productos'}
                </Text>
                
                <FlatList
                    data={products}
                    renderItem={renderProduct}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    contentContainerStyle={styles.productList}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>No hay productos en esta lista</Text>
                        </View>
                    }
                />
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
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,
        color: '#2c3e50',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#7f8c8d',
        textAlign: 'center',
        marginBottom: 20,
    },
    productList: {
        paddingBottom: 20,
    },
    productCard: {
        flex: 1,
        backgroundColor: '#ffffff',
        margin: 8,
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    productImage: {
        width: '100%',
        height: 120,
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: '#ecf0f1',
    },
    productInfo: {
        alignItems: 'flex-start',
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 4,
    },
    productCategory: {
        fontSize: 12,
        color: '#95a5a6',
        marginBottom: 6,
        textTransform: 'uppercase',
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e74c3c',
        marginBottom: 10,
    },
    detailButton: {
        backgroundColor: '#3498db',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    detailButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
    },
    emptyText: {
        fontSize: 16,
        color: '#95a5a6',
        textAlign: 'center',
    },
});
