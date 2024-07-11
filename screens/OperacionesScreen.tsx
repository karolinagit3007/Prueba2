import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

export default function OperacionesScreen() {
    const [id, setId] = useState('');
    const [monto, setMonto] = useState('');
    const [tipoOperacion, setTipoOperacion] = useState('');
    const [comentario, setComentario] = useState('');

    const ejecutarOperacion = () => {
        // Validación simple para asegurar que todos los campos estén llenos
        if (!id || !monto || !tipoOperacion || !comentario) {
            Alert.alert('Error', 'Por favor completa todos los campos.');
            return;
        }
    }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Operación</Text>
                <Image
                    source={require('../assets/creditcard.png')}
                    style={styles.image}
                />
                <TextInput
                    style={styles.input}
                    placeholder="ID"
                    value={id}
                    onChangeText={setId}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Monto"
                    value={monto}
                    onChangeText={setMonto}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Tipo de operación"
                    value={tipoOperacion}
                    onChangeText={setTipoOperacion}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Comentario"
                    value={comentario}
                    onChangeText={setComentario}
                    multiline={true}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>EJECUTAR</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        input: {
            width: '80%',
            padding: 10,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
        },
        button: {
            marginTop: 20,
            backgroundColor: '#007BFF',
            paddingVertical: 15,
            paddingHorizontal: 25,
            borderRadius: 8,
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
        },
        image: {
            width: 200,
            height: 200,
            marginBottom: 20,
        },
    });

