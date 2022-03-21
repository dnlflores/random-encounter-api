import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const EncounterScreen = props => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.encounterText}>This is the Encounter Screen!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    encounterText: {
        fontSize: 30,
    }
})

export default EncounterScreen;