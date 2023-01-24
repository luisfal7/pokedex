import React, {useEffect, useRef} from 'react'
import { pokemonApi } from '../api/pokemonApi';

export const usePokemonPaginated = () => {

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=3')

    const loadPokemons = async() => {

        const resp = await pokemonApi.get( nextPageUrl.current )

    }

    useEffect(() => {
      
        loadPokemons();

    }, [])
    

}
