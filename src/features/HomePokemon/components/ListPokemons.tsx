"use client";

import React, { Suspense } from "react";
import usePokeApi from "../hooks/usePokeApi";
import CardPokemon from "./CardPokemon";
import PaginationComponent from "@/components/Pagination";
import InputToSearch from "@/components/InputToSearch";
import { Button } from "@nextui-org/react";
import SkeletonCard from "../../../components/SkeletonCard";

const ListPokemons = () => {
  const {
    handleSearch,
    pokemons,
    isLoading,
    page,
    search,
    setPage,
    setSearch,
    ITEMS_PER_PAGE,
  } = usePokeApi();

  return (
    <>
      <div className="flex flex-col gap-4 w-full max-w-2xl px-5 justify-center items-center">
        <div className="flex gap-2 w-full">
          <InputToSearch
            placeholder="Busca tu pokemon favorito"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={() => handleSearch(search)}>Buscar</Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 w-full p-5">
        {pokemons?.map((pokemon) => (
          <div key={pokemon?.url} onClick={() => handleSearch(pokemon?.name)}>
            <Suspense fallback={isLoading ? <SkeletonCard /> : null}>
              <CardPokemon
                key={pokemon.url}
                pokemon={pokemon}
                pokemonUrl={pokemon.url}
              />
            </Suspense>
          </div>
        ))}
      </div>
      <PaginationComponent
        total={Math.ceil(1000 / ITEMS_PER_PAGE)}
        page={page}
        onChange={(newPage) => setPage(newPage)}
      />
    </>
  );
};

export default ListPokemons;
