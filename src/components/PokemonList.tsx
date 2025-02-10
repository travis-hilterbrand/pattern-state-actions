import { useGetPokemons } from "../hooks/useGetPokemons";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = () => {
  const { data } = useGetPokemons();

  return (
    <div>
      <h2
        title={`Fed - ${data.fed} | Total - ${data.total}`}
      >{`My Pokemon [${data.fed} / ${data.total}]`}</h2>
      <div>
        {data.data.map((item) => (
          <PokemonCard key={item.id} id={item.id} />
        ))}
      </div>
    </div>
  );
};
