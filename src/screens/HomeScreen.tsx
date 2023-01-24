import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "../theme/AppTheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const {isLoading, simplePokemonList} = usePokemonPaginated()

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
    </>
  );
};
