import styled from "styled-components";
import { useGetPokemon } from "../hooks/useGetPokemon";
//import { useFeedPokemon } from "../hooks/useFeedPokemon";
import { useFeedPokemonOptimistic } from "../hooks/useFeedPokemonOptimistic";

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-right: 8px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid blue;
`;

type PokemonCardProps = {
  id: string;
};
export const PokemonCard = ({ id }: PokemonCardProps) => {
  const { data, error, isLoading } = useGetPokemon(id);
  const { feed, isPending } = useFeedPokemonOptimistic(id);
  //const { feed, isPending } = useFeedPokemon(id);

  return (
    <Container style={{ borderColor: error ? "red" : "blue" }}>
      {data && (
        <>
          <div style={{ fontWeight: 700 }}>{data.name}</div>
          {data.fed === false && (
            <button onClick={() => feed()}>Feed me</button>
          )}
        </>
      )}
      {error && <span>Error</span>}
      {isLoading === true && <span>Loading...</span>}
      {isPending === true && <span>Saving...</span>}
    </Container>
  );
};
