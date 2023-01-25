import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons';
import { RootStackParams } from '../navigation/Navigator'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{};

export const PokemonScreen = ( {navigation, route}: Props ) => {

  const { SimplePokemon, color } = route.params

  const { id, name, picture } = SimplePokemon

  const {top} = useSafeAreaInsets()

  return (
    <View>
      <View style={{...styles.headerContainer, backgroundColor: 'gray'}}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{
            ...styles.backButton,
            top: top + 5
          }}
        >
          <Icon 
            name="arrow-back-outline" 
            color="white"
            size={30} 
          />
        </TouchableOpacity>

        <Text style={{...styles.pokemonName, top: top + 25}}>#{id + '\n' }{ name }</Text>

        <Image 
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />

        <FadeInImage 
          uri={picture}
          style={ styles.pokemonImage }
        
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000
  },
  backButton: {
    position: 'absolute',
    left: 20
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.5
  },
  pokemonImage:{
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15
  }
})
