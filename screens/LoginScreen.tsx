import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/Config';

export default function LoginScreen({ navigation }: any) {
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');

    function login() {
        const auth = getAuth(); 
        const correoTrimmed = correo.trim(); 

        signInWithEmailAndPassword(auth, correoTrimmed, contrasenia)
            .then((userCredential) => {
                // Inicio de sesión exitoso
                const user = userCredential.user;
                console.log("Usuario autenticado:", user.email);
                navigation.navigate('BancaScreen'); 
            })
            .catch((error) => {
                // Manejar errores de inicio de sesión
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error de inicio de sesión:", errorCode, errorMessage);
                
                let titulo = "";
                let mensaje = "";
    
                if (errorCode === "auth/wrong-password") {
                    titulo = "Error de contraseña";
                    mensaje = "Contraseña incorrecta, revisa las credenciales";
                } else if (errorCode === "auth/user-not-found") {
                    titulo = "Error de usuario";
                    mensaje = "Usuario no encontrado, revisa el correo electrónico";
                } else if (errorCode === "auth/invalid-email") {
                    titulo = "Error de formato de correo electrónico";
                    mensaje = "El formato del correo electrónico es inválido";
                } else {
                    titulo = "Error de acceso";
                    mensaje = "Revisa las credenciales de correo y contraseña";
                }
    
                Alert.alert(titulo, mensaje);
            });
    }

    // Función para navegar a BancaScreen
    function navigateToBancaScreen() {
        navigation.navigate('BancaScreen');
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, marginBottom: 20 }}>LOGIN</Text>
            <Image
                source={require('../assets/securitywarning.png')}
                style={styles.image}
            />
            <TextInput
                style={styles.input}
                placeholder='Ingresa tu correo electrónico'
                onChangeText={(texto) => setCorreo(texto)}
                keyboardType='email-address'
                autoCapitalize='none'
            />
            <TextInput
                style={styles.input}
                placeholder='Ingresa contraseña'
                onChangeText={(texto) => setContrasenia(texto)}
                secureTextEntry={true}
                autoCapitalize='none'
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={login}>
                    <Text style={styles.buttonText}>INGRESAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#FFD700' }]} onPress={navigateToBancaScreen}>
                    <Text style={styles.buttonText}>IR A BANCA</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#83B4FF',
        padding: 20,
    },
    buttonContainer: {
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#FDFFE2',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 15,
        marginVertical: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#1A2130',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        backgroundColor: '#fff',
    },
});
