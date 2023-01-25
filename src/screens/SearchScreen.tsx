import React from "react";
import { View, Text, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Loading } from "../components/Loading";
import { PokemonCard } from "../components/PokemonCard";
import { SearchInput } from "../components/SearchInput";
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/AppTheme';

const screenWidth = Dimensions.get('window').width

export const SearchScreen = () => {

  const { top } = useSafeAreaInsets()
  const { isFetching, simplePokemonList } = usePokemonSearch()

  if(isFetching){
    return(
      <Loading />
    )
  }

  return (
    <View style={{ flex: 1, marginTop: top + 10, marginHorizontal: 20 }}>

      <SearchInput 
        style={{
          position: "absolute",
          zIndex: 999,
          width: screenWidth - 40,
          top: top + 10
        }}
      />

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
              top: 10,
              paddingBottom:10,
              marginTop: top + 40 
            }}>
              Pokedex
            </Text>
          )}

          //Indicator
          showsVerticalScrollIndicator={false}

        />

    </View>
  );
};


