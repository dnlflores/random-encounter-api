import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = props => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, [])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Encounter', { pokeId: Math.floor(Math.random() * 493) })}>
                <Text style={styles.buttonText}>Encounter wild Pokémon!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Encounter', { pokeId: 151 })}>
                <Text style={styles.buttonText}>Encounter wild Mew!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Encounter', { pokeId: 150 })}>
                <Text style={styles.buttonText}>Encounter wild Mewtwo!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    homeText: {
        fontSize: 30,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomeScreen;