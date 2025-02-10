import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { Pokemon, PokemonList } from "../api/pokemon";

const pokemons: Pokemon[] = [
  {
    id: "1",
    fed: false,
    name: "bulbasaur",
  },
  {
    id: "2",
    fed: false,
    name: "charmander",
  },
  {
    id: "3",
    fed: false,
    name: "squirtle",
  },
];

export const worker = setupWorker(
  http.get("/pokemons", async () => {
    const data = [...pokemons];
    const fed = data.filter((item) => item.fed);
    const result: PokemonList = {
      data,
      fed: fed.length,
      total: data.length,
    };
    return HttpResponse.json(result);
  }),
  http.get("/pokemons/:pokemonId", async ({ params }) => {
    const item = pokemons.find((item) => item.id === params.pokemonId);
    if (item) {
      return HttpResponse.json(item);
    }
    return new HttpResponse(null, { status: 404 });
  }),
  http.put("/pokemons/:pokemonId/feed", async ({ params }) => {
    const item = pokemons.find((item) => item.id === params.pokemonId);
    if (item) {
      item.fed = true;
      return HttpResponse.json(item);
    }
    return new HttpResponse(null, { status: 404 });
  })
);
