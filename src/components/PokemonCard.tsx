import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimplePokemon } from '../interfaces/PokemonInterfaces'

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ( {pokemon}: Props ) => {
  return (
    <TouchableOpacity
        activeOpacity={0.7}
    >
        <View style={{
            ...styles.cardContainer,
             width: windowWidth * 0.4
        }}>
            <View style={{ flexDirection:'column' }}>                
                <Text style= {styles.name}>
                    { pokemon.name }
                </Text>
                <Text style= {styles.name}>
                    #{ pokemon.id }
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    }
})
