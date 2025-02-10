import { useMutation, useQueryClient } from "@tanstack/react-query";
import { feedPokemon, Pokemon } from "../api/pokemon";
import { POKEMON_QUERY_KEY, POKEMONS_QUERY_KEY } from "./keys";

export const useFeedPokemonOptimistic = (id: string) => {
  // pessimistic
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationKey: [POKEMON_QUERY_KEY, id],
    mutationFn: (id: string) => {
      return feedPokemon(id);
    },

    onMutate: (id) => {
      const previous = queryClient.getQueryData<Pokemon>([
        POKEMON_QUERY_KEY,
        id,
      ]);
      const updated = { ...previous };
      updated.fed = true;
      queryClient.setQueryData([POKEMON_QUERY_KEY, id], updated);
      return { previous };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [POKEMON_QUERY_KEY, id],
      });
      queryClient.invalidateQueries({
        queryKey: [POKEMONS_QUERY_KEY],
      });
    },
    onError: (_error, id, context) => {
      if (context?.previous) {
        queryClient.setQueryData([POKEMON_QUERY_KEY, id], context.previous);
      }
    },
  });
  const feed = async () => {
    mutate(id);
  };
  return { feed, isPending };
};
