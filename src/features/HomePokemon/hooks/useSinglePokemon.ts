import { useEffect, useState } from "react";
import { PokemonData } from "../types";
import { getASinglePokemonService } from "../services/getASinglePokemon";
interface useSinglePokemonProps {
  pokemonUrl: string;
}

const useSinglePokemon = ({ pokemonUrl }: useSinglePokemonProps) => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    fetchPokemonData();
  }, [pokemonUrl]);

  const fetchPokemonData = async () => {
    const data = await getASinglePokemonService({
      pokemonUrl,
    });
    setPokemonData(data);
  };

  return { pokemonData };
};

export default useSinglePokemon;
