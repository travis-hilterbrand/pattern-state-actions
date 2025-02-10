import { sleep } from "../utils";

export type Pokemon = {
  id: string;
  fed: boolean;
  name: string;
};
export type PokemonList = {
  data: Pokemon[];
  fed: number;
  total: number;
};

export const getPokemons = async (): Promise<PokemonList> => {
  await sleep(500); // simulate slow network
  const response = await fetch(`/pokemons`);
  return response.json();
};
export const getPokemon = async (id: string): Promise<Pokemon> => {
  await sleep(500); // simulate slow network
  const response = await fetch(`/pokemons/${id}`);
  return response.json();
};
export const feedPokemon = async (id: string): Promise<Pokemon> => {
  await sleep(1300); // simulate slow network
  const response = await fetch(`/pokemons/${id}/feed`, {
    method: "PUT",
  });
  return response.json();
};
