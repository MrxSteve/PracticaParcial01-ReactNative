import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
    const navigation = useNavigation();

    const userDefault = 'Steve Tobar';
    const emailDefault = 'steventobar@gmail.com';

    const [userName, setUserName] = useState(userDefault);
    const [userEmail, setUserEmail] = useState(emailDefault);

    const imageUrl = 'https://avatars.githubusercontent.com/u/89896025?v=4';

    // Funciones individuales para cada opción
    const handleEditProfile = () => {
        console.log('Editar perfil');
        if (userName === userDefault) {
            setUserName('Geofrey Muñoz');
        } else {
            setUserName(userDefault);
        }

        if (userEmail === emailDefault) {
            setUserEmail('geofreymunoz@gmail.com');
        } else {
            setUserEmail(emailDefault);
        }
    };

    const handleNotifications = () => {
        console.log('Notificaciones');
    };

    const handlePrivacy = () => {
        console.log('Privacidad');
    };

    const handleHelp = () => {
        console.log('Ayuda');
    };

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.profileHeader}>
                    <Image 
                        source={{uri: imageUrl}}
                        style={styles.avatarContainer}    
                    />
                    <Text style={styles.userName}>{userName}</Text>
                    <Text style={styles.userEmail}>{userEmail}</Text>
                </View>

                <View style={styles.optionsContainer}>
                    {/* Botón Editar Perfil */}
                    <TouchableOpacity style={styles.option} onPress={handleEditProfile}>
                        <MaterialIcons name="edit" size={24} color="#666" />
                        <Text style={styles.optionText}>Editar perfil</Text>
                        <MaterialIcons name="chevron-right" size={24} color="#ccc" />
                    </TouchableOpacity>

                    {/* Botón Notificaciones */}
                    <TouchableOpacity style={styles.option} onPress={handleNotifications}>
                        <MaterialIcons name="notifications" size={24} color="#666" />
                        <Text style={styles.optionText}>Notificaciones</Text>
                        <MaterialIcons name="chevron-right" size={24} color="#ccc" />
                    </TouchableOpacity>

                    {/* Botón Privacidad */}
                    <TouchableOpacity style={styles.option} onPress={handlePrivacy}>
                        <MaterialIcons name="security" size={24} color="#666" />
                        <Text style={styles.optionText}>Privacidad</Text>
                        <MaterialIcons name="chevron-right" size={24} color="#ccc" />
                    </TouchableOpacity>

                    {/* Botón Ayuda */}
                    <TouchableOpacity style={styles.option} onPress={handleHelp}>
                        <MaterialIcons name="help" size={24} color="#666" />
                        <Text style={styles.optionText}>Ayuda</Text>
                        <MaterialIcons name="chevron-right" size={24} color="#ccc" />
                    </TouchableOpacity>

                    {/* Botón Cerrar Sesión */}
                    <TouchableOpacity 
                        style={[styles.option, styles.logoutOption]} 
                        onPress={handleLogout}
                    >
                        <MaterialIcons name="logout" size={24} color="#e91e63" />
                        <Text style={[styles.optionText, styles.logoutText]}>Cerrar sesión</Text>
                        <MaterialIcons name="chevron-right" size={24} color="#ccc" />
                    </TouchableOpacity>
                </View>
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
    },
    profileHeader: {
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: '#f8f9fa',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#e91e63',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    userEmail: {
        fontSize: 16,
        color: '#666',
    },
    optionsContainer: {
        paddingTop: 20,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    optionText: {
        flex: 1,
        fontSize: 16,
        marginLeft: 15,
        color: '#333',
    },
    logoutOption: {
        borderBottomColor: '#ffe6f0',
    },
    logoutText: {
        color: '#e91e63',
        fontWeight: '600',
    },
});
