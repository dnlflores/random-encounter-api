import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMew, fetchPokemon } from '../store/pokemon';

const EncounterScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    // const mew = useSelector(state => state.pokemon[151]);
    const pokeId = route.params.pokeId;
    const pokemon = useSelector(state => state.pokemon[pokeId]);

    useEffect(() => {
        dispatch(fetchPokemon(pokeId));
    }, [])

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, marginTop: 20, fontWeight: 'bold' }}>{pokemon?.name}</Text>
            {pokemon?.sprites?.front_default && (
                <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
            )}
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
    },
    image: {
        width: 100,
        height: 100
    }
})

export default EncounterScreen;