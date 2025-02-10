import { useQuery } from "@tanstack/react-query";
import { PokemonList, getPokemons } from "../api/pokemon";
import { POKEMONS_QUERY_KEY } from "./keys";

export const useGetPokemons = () => {
  const { data, error, isLoading, refetch } = useQuery<PokemonList>({
    queryKey: [POKEMONS_QUERY_KEY],
    queryFn: () => getPokemons(),
  });

  const noData: PokemonList = {
    data: [],
    fed: 0,
    total: 0,
  };

  return { data: data ? data : noData, error, isLoading, refetch };
};
