import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        // Navegar a la aplicación principal
        navigation.replace('MainApp');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Bienvenido de nuevo</Text>
                <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Correo electrónico</Text>
                    <TextInput
                        style={styles.textInput}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="usuario@ejemplo.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#999"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Contraseña</Text>
                    <TextInput
                        style={styles.textInput}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="••••••••"
                        secureTextEntry
                        placeholderTextColor="#999"
                    />
                </View>

                <View style={styles.optionsContainer}>
                    <TouchableOpacity 
                        style={styles.rememberContainer}
                        onPress={() => setRememberMe(!rememberMe)}
                    >
                        <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                            {rememberMe && <MaterialIcons name="check" size={12} color="#fff" />}
                        </View>
                        <Text style={styles.rememberText}>Recordarme</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>o continúa con</Text>
                    <View style={styles.divider} />
                </View>

                <TouchableOpacity style={styles.googleButton} onPress={handleLogin}>
                    <Text style={styles.googleButtonText}>G</Text>
                    <Text style={styles.googleButtonTextLabel}>Continuar con Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.appleButton} onPress={handleLogin}>
                    <Text style={styles.appleButtonText}>🍎</Text>
                    <Text style={styles.appleButtonTextLabel}>Continuar con Apple</Text>
                </TouchableOpacity>

                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>¿No tienes cuenta? </Text>
                    <TouchableOpacity>
                        <Text style={styles.signupLink}>Regístrate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f7fa',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    loginContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    appName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e91e63',
        marginTop: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#333333',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 8,
        fontWeight: '500',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 14,
        fontSize: 16,
        backgroundColor: '#fafafa',
        color: '#333',
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 2,
        borderColor: '#d0d0d0',
        borderRadius: 4,
        marginRight: 8,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#e91e63',
        borderColor: '#e91e63',
    },
    rememberText: {
        fontSize: 14,
        color: '#666666',
    },
    forgotText: {
        fontSize: 14,
        color: '#e91e63',
        fontWeight: '500',
    },
    loginButton: {
        backgroundColor: '#e91e63',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#e91e63',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#e0e0e0',
    },
    dividerText: {
        marginHorizontal: 15,
        fontSize: 14,
        color: '#666666',
    },
    googleButton: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 12,
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    googleButtonText: {
        fontSize: 18,
        marginRight: 10,
        fontWeight: 'bold',
        color: '#4285f4',
    },
    googleButtonTextLabel: {
        fontSize: 16,
        color: '#333333',
        fontWeight: '500',
    },
    appleButton: {
        backgroundColor: '#000000',
        borderRadius: 12,
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    appleButtonText: {
        fontSize: 18,
        marginRight: 10,
    },
    appleButtonTextLabel: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '500',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupText: {
        fontSize: 14,
        color: '#666666',
    },
    signupLink: {
        fontSize: 14,
        color: '#e91e63',
        fontWeight: '600',
    },
});
