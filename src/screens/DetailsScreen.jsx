import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
    const { product, id } = route.params || {};

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Image source={{ uri: product.image }} style={styles.productImage} />
                    
                    <View style={styles.productInfo}>
                        <Text style={styles.category}>{product.category}</Text>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.price}>{product.price}</Text>
                        
                        <Text style={styles.sectionTitle}>Descripción</Text>
                        <Text style={styles.description}>{product.description}</Text>
                        
                        <Text style={styles.sectionTitle}>Colores disponibles</Text>
                        <View style={styles.optionsContainer}>
                            {product.colors.map((color, index) => (
                                <View key={index} style={styles.optionChip}>
                                    <Text style={styles.optionText}>{color}</Text>
                                </View>
                            ))}
                        </View>
                        
                        <Text style={styles.sectionTitle}>Tallas disponibles</Text>
                        <View style={styles.optionsContainer}>
                            {product.sizes.map((size, index) => (
                                <View key={index} style={styles.optionChip}>
                                    <Text style={styles.optionText}>{size}</Text>
                                </View>
                            ))}
                        </View>
                        
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.addToCartButton}>
                                <Text style={styles.addToCartText}>Agregar al Carrito</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    scrollView: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    productImage: {
        width: '100%',
        height: 300,
        backgroundColor: '#ecf0f1',
    },
    productInfo: {
        padding: 20,
    },
    category: {
        fontSize: 14,
        color: '#95a5a6',
        textTransform: 'uppercase',
        fontWeight: '600',
        marginBottom: 8,
    },
    productName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 10,
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#e74c3c',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#7f8c8d',
        lineHeight: 24,
        marginBottom: 10,
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    optionChip: {
        backgroundColor: '#ecf0f1',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        marginRight: 8,
        marginBottom: 8,
    },
    optionText: {
        fontSize: 14,
        color: '#2c3e50',
        fontWeight: '500',
    },
    buttonContainer: {
        marginTop: 30,
        gap: 15,
    },
    addToCartButton: {
        backgroundColor: '#27ae60',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    addToCartText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2c3e50',
        textAlign: 'center',
    },
});
