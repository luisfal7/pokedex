import React from "react";
import { Text, View, Image, FlatList, ScrollView, ActivityIndicator } from "react-native";
import { styles } from "../theme/AppTheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from "../components/PokemonCard";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const {isLoading, simplePokemonList, loadPokemons} = usePokemonPaginated()

  return (
    <>
      <Image
        source={require("../assets/pokebola.png")}
        style={styles.pokebolaBG}
      />

      <View style={{
        ...styles.globalMargin,
        alignItems:'center'
      }}>
        <FlatList 
          //data
          data={simplePokemonList}
          keyExtractor = { (pokemon) => pokemon.id  }
          renderItem = {({ item, index }) => ( <PokemonCard pokemon={ item }/> )}
          numColumns= {2}
          ListHeaderComponent={(
            <Text style={{ 
              ...styles.title, 
              ...styles.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
              paddingBottom: 10 
            }}>
              Pokedex
            </Text>
          )}

          //infinite scroll
          onEndReached = { loadPokemons }
          onEndReachedThreshold = { 0.4 }

          //loading
          ListFooterComponent= { <ActivityIndicator size={20} color='gray' style={{ height: 100 }} /> }

          //Indicator
          showsVerticalScrollIndicator={false}

        />
      </View>
    </>
  );
};
