import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function WelcomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Ingresar al Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registro')}>
                    <Text style={styles.buttonText}>Ingresar al Registro</Text>
                </TouchableOpacity>
            </View>
            <Image
                source={require('../assets/cajerobanco.png')}
                style={styles.image}
            />
            <Text style={styles.footerText}>Desarrollado por: Karolina Gavilema</Text>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
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
    footerText: {
        marginTop: 20,
        fontSize: 16,
    },
});
