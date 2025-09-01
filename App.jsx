import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';

import {
    DetailsScreen, HomeScreen, LibraryScreen,
    LoginScreen,
    ProfileScreen, SearchScreen
} from './src/screens';

// Navegadores
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Pantalla de configuracion
function SettingsScreen() {
    return (
        <View style={styles.settingsContainer}>
            <Text style={styles.settingsTitle}>Configuración</Text>
            <Text style={styles.settingsDescription}>
                Aquí puedes ajustar las preferencias de la aplicación.
            </Text>
        </View>
    );
}

// Componente boton hamburguesa
const openDrawer = ({ navigation }) => {
    return (
        <TouchableOpacity 
            onPress={() => navigation.openDrawer()}
            style={styles.menuButton}
        >
            <MaterialIcons name='menu' size={24} color='#333' />
        </TouchableOpacity>
    );
}

// Stack Navigator - Maneja la navegacion entre Home y Details
function StackNavigator({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f8f9fa',
                },
                headerTintColor: '#333',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen 
                name="HomeMain" 
                component={HomeScreen}
                options={{
                    title: 'Inicio',
                    headerLeft: () => openDrawer({ navigation })
                }}
            />
            <Stack.Screen 
                name="Details" 
                component={DetailsScreen} 
                options={{ 
                    title: 'Detalle',
                    headerBackTitleVisible: false,
                }} 
            />
        </Stack.Navigator>
    );
}

// Tab Navigator - Maneja las pestañas principales
function TabNavigator({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#e91e63",
                tabBarInactiveTintColor: "#999",
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    borderTopColor: '#e0e0e0',
                    height: 60,
                    paddingBottom: 5,
                    paddingTop: 5,
                },
            }}
        >
            <Tab.Screen 
                name="HomeTab" 
                component={StackNavigator} 
                options={{
                    title: 'Inicio',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="SearchTab" 
                component={SearchScreen} 
                options={{
                    title: 'Buscar',
                    headerLeft: () => openDrawer({ navigation }),
                    headerStyle: {
                        backgroundColor: '#f8f9fa',
                    },
                    headerTintColor: '#333',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="search" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="LibraryTab" 
                component={LibraryScreen} 
                options={{
                    title: 'Biblioteca',
                    headerLeft: () => openDrawer({ navigation }),
                    headerStyle: {
                        backgroundColor: '#f8f9fa',
                    },
                    headerTintColor: '#333',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="library-music" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

// Drawer Navigator menu lateral
function DrawerNavigation({ navigation }) {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#f6f6f6',
                    width: 280,
                },
                drawerActiveTintColor: '#e91e63',
                drawerInactiveTintColor: '#333',
            }}
        >
            <Drawer.Screen 
                name="MainTabs" 
                component={TabNavigator}
                options={{
                    title: 'Inicio',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Drawer.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    title: 'Mi Perfil',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#f8f9fa',
                    },
                    headerTintColor: '#333',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="person" color={color} size={size} />
                    )
                }}
            />
            <Drawer.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{
                    title: 'Configuración',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#f8f9fa',
                    },
                    headerTintColor: '#333',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="settings" color={color} size={size} />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

// App principal
export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="MainApp"
                    component={DrawerNavigation}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    menuButton: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    settingsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    settingsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    settingsDescription: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        lineHeight: 22,
    },
});
