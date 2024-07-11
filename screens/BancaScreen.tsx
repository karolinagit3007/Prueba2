
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function BancaScreen() {
    const [usuario, setUsuario] = useState('');
    const [telefono, setTelefono] = useState('');
  return (
    <View>
         <Image
                source={require('../assets/pichincha.png')}
                style={styles.image}
            />
      <Text>Banca Móvil</Text>
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
    </View>
  )
}

const styles = StyleSheet.create({
    image:{ 
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
    

})