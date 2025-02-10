import { useMutation, useQueryClient } from "@tanstack/react-query";
import { feedPokemon } from "../api/pokemon";
import { POKEMON_QUERY_KEY, POKEMONS_QUERY_KEY } from "./keys";

export const useFeedPokemon = (id: string) => {
  // pessimistic
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationKey: [POKEMON_QUERY_KEY, id],
    mutationFn: (id: string) => {
      return feedPokemon(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [POKEMON_QUERY_KEY, id],
      });
      queryClient.invalidateQueries({
        queryKey: [POKEMONS_QUERY_KEY],
      });
    },
  });
  const feed = async () => {
    mutate(id);
  };
  return { feed, isPending };
};
