import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PokemonList } from "./components/PokemonList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList />
    </QueryClientProvider>
  );
}

export default App;
