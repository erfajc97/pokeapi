"use client";

import { usePokeApiStore } from "@/store/pokeApiStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const usePokeApi = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { pokemons, getAllPokemons, isLoading, getDetailPokemon } =
    usePokeApiStore();
  const ITEMS_PER_PAGE = 20;
  const router = useRouter();

  useEffect(() => {
    handleGetAllPokemons();
  }, [page, getAllPokemons]);

  const handleGetAllPokemons = async () => {
    const offset = (page - 1) * ITEMS_PER_PAGE;
    await getAllPokemons(`?limit=${ITEMS_PER_PAGE}&offset=${offset}`);
  };

  const handleSearch = async (search: string) => {
    setSearch(search);
    setPage(1);
    if (search) {
      const response = await getDetailPokemon(search.toLocaleLowerCase());
      if (response?.error) {
        Swal.fire({
          title: "Error!",
          text: "Nombre de pokemon no valido",
          icon: "error",
        });
      } else {
        router.push(`/pokemons/${search}`);
      }
    }
  };
  return {
    handleSearch,
    pokemons,
    isLoading,
    page,
    setPage,
    search,
    setSearch,
    ITEMS_PER_PAGE,
  };
};

export default usePokeApi;
