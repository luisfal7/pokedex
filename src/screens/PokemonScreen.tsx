import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigation/Navigator'

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{};

export const PokemonScreen = ( {navigation, route}: Props ) => {

  const { SimplePokemon, color } = route.params

  return (
    <View>
        <Text style={{ color }}>
            { SimplePokemon.name }
        </Text>
    </View>
  )
}
