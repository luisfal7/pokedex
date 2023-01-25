import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { RootStackParams } from '../navigation/Tab1'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{};

export const PokemonScreen = ( {navigation, route}: Props ) => {

  const { SimplePokemon, color } = route.params

  const { id, name, picture } = SimplePokemon

  const {top} = useSafeAreaInsets()

   const {isLoading, pokemon} = usePokemon( id )

  return (
    <View style={{ flex:1 }}>
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
      
      {

        isLoading ? 
        (
          <View style={ styles.loadingIndicator }>
            <ActivityIndicator 
              color='grey'
              size={50}
            />
          </View>
        )
        : <PokemonDetails pokemon={ pokemon } />

      }



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
  },
  loadingIndicator: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
