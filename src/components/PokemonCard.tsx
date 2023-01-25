import React, { useState, useEffect, useRef } from 'react'
import ImageColors from 'react-native-image-colors'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimplePokemon } from '../interfaces/PokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ( {pokemon}: Props ) => {

    const [bgColor, setBgColor] = useState('grey')
    const isMounted = useRef(true)
    const navigation = useNavigation()

    useEffect(() => {

        if( !isMounted.current ) return

        ImageColors.getColors(pokemon.picture, {
            fallback: 'grey',
          }).then( colors => {

            switch (colors.platform) {
                case 'android':
                  // android result properties
                  setBgColor(colors.dominant || 'grey') 
                  break
                case 'web':
                  // web result properties
                  setBgColor(colors.dominant || 'grey') 
                  break
                case 'ios':
                  // iOS result properties
                  setBgColor(colors.background || 'grey')
                  break
                default:
                  throw new Error('Unexpected platform key')
              }
          })

          return () => {
            isMounted.current = false
          }
      
    }, [])
    

  return (
    <TouchableOpacity
        activeOpacity={0.7}
        onPress={()=>navigation.navigate('PokemonScreen', { SimplePokemon: pokemon })}
    >
        <View style={{
            ...styles.cardContainer,
            backgroundColor: bgColor,
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
            <View style={styles.pokebolaContainer}>
                <Image 
                    source={require('../assets/pokebola-blanca.png')}
                    style={ styles.pokebola }
                />
            </View>
            <FadeInImage 
                uri={ pokemon.picture }
                style= { styles.pokemonImage }
            />
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
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
    },
    pokemonImage: {
        width: 120,
        height:120,
        position:'absolute',
        right: -5,
        bottom: -5,
    },
    pokebolaContainer: {
        position: 'absolute',
        overflow: 'hidden',
        bottom: 0,
        right: 0,
        opacity: 0.4,
        width: 100,
        height: 100,
    }
})
