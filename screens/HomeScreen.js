import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = props => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>This is the HomeScreen!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Encounter')}>
                <Text style={styles.buttonText}>Press Me to Encounter a wild Pokémon!</Text>
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