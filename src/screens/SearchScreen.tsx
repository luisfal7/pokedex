import React,{useState, useEffect} from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Loading } from "../components/Loading";
import { PokemonCard } from "../components/PokemonCard";
import { SearchInput } from "../components/SearchInput";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import { SimplePokemon } from "../interfaces/PokemonInterfaces";
import { styles } from "../theme/AppTheme";

const screenWidth = Dimensions.get("window").width;

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();
  const [term, setTerm] = useState('')
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])

  useEffect(() => {
    
    if( term.length === 0 ){
      return setPokemonFiltered([])
    }

    setPokemonFiltered(
      simplePokemonList.filter( poke => poke.name.toLowerCase().includes( term.toLowerCase() ) )
    )

  }, [term])
  

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1, marginTop: top + 10, marginHorizontal: 20 }}>
      <SearchInput
        onDebounce = { (value) => setTerm(value) }
        style={{
          position: "absolute",
          opacity: 0.92,
          zIndex: 999,
          width: screenWidth - 40,
          top: top + 10,
        }}
      />

      <FlatList
        //data
        data={pokemonFiltered}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={({ item, index }) => <PokemonCard pokemon={item} />}
        numColumns={2}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              top: 10,
              paddingBottom: 10,
              marginTop: top + 40,
            }}
          >
            { term }
          </Text>
        }
        //Indicator
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
