import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/Config'; 
import { getDatabase, ref, set } from "firebase/database";

export default function RegistroScreen({ navigation }: any) {
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [usuario, setUsuario] = useState('');
    const [telefono, setTelefono] = useState('');

    function registrarData() {
        
        if (!correo || !contrasenia || !usuario || !telefono) {
            Alert.alert('Campos vacíos', 'Por favor, completa todos los campos.');
            return;
        }

    
        const db = getDatabase();
        set(ref(db, 'users/' + correo), {
            email: correo,
            contrasenia: contrasenia,
            usuario: usuario,
            telefono: telefono,
        });

        navigation.navigate("Login");
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>REGISTRARSE</Text>
            <Image
                source={require('../assets/bancacomputadora.png')}
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
            <TextInput
                style={styles.input}
                placeholder='Ingresa tu usuario'
                onChangeText={(texto) => setUsuario(texto)}
            />
            <TextInput
                style={styles.input}
                placeholder='Ingresa teléfono'
                onChangeText={(texto) => setTelefono(texto)}
                keyboardType='phone-pad'
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={registrarData}>
                    <Text style={styles.buttonText}>REGISTRAR</Text>
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
