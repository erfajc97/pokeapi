import { create } from "zustand";
import { getAllPokemonsWithPaginationService } from "@/features/HomePokemon/services/getAllPokemonsWithPaginationService";
import { Pokemon } from "../features/HomePokemon/types";
import { getDetailPokemonService } from "@/features/HomePokemon/services/getDetailPokemonService";

interface responseError {
  error: boolean;
  message: string;
}

interface PokeApiStore {
  pokemons: Pokemon[];
  pokemonDetail: never | null;
  isLoading: boolean;
  error: string | null;
  getAllPokemons: (query: string) => Promise<void>;
  getDetailPokemon: (query: string) => Promise<responseError>;
}

export const usePokeApiStore = create<PokeApiStore>((set) => ({
  pokemons: [],
  pokemonDetail: null,
  isLoading: false,
  error: null,
  getAllPokemons: async (query: string) => {
    set({ isLoading: true });
    try {
      const response = await getAllPokemonsWithPaginationService({ query });
      set({
        pokemons: response.results,
      });
    } catch (error) {
      set({ error: error as string });
    } finally {
      set({ isLoading: false });
    }
  },

  getDetailPokemon: async (query: string) => {
    set({ isLoading: true });
    try {
      const response = await getDetailPokemonService({ query });
      set({ pokemonDetail: response });
      return response;
    } catch (error) {
      set({ error: error as string });
    } finally {
      set({ isLoading: false });
    }
  },
}));
