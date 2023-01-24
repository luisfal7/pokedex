import React from "react";
import { Text, View, Image, FlatList, ScrollView, ActivityIndicator } from "react-native";
import { styles } from "../theme/AppTheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const {isLoading, simplePokemonList, loadPokemons} = usePokemonPaginated()

  return (
    <>
      <Text style={{ 
        ...styles.title, 
        ...styles.globalMargin,
        top: top + 20, 
      }}>
        Pokedex
      </Text>
      <Image
        source={require("../assets/pokebola.png")}
        style={styles.pokebolaBG}
      />

      <FlatList 
        //data
        data={simplePokemonList}
        keyExtractor = { (pokemon) => pokemon.id  }
        renderItem = {({ item, index }) => (
            <Image 
              source={{ uri: item.picture }}
              style={{
                width: 150,
                height: 150
              }}
            />
          )}

        //infinite scroll
        onEndReached = { loadPokemons }
        onEndReachedThreshold = { 0.4 }

        //loading
        ListFooterComponent= { <ActivityIndicator size={20} color='gray' style={{ height: 100 }} /> }

        //Indicator
        showsVerticalScrollIndicator={false}

      />
    </>
  );
};
