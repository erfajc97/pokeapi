"use client";

import PokeballIcom from "@/assets/svg/PokeballIcom";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { PokemonProps } from "../types";

import useSinglePokemon from "../hooks/useSinglePokemon";

const CardPokemon = ({ pokemon, pokemonUrl }: PokemonProps) => {
  const { pokemonData } = useSinglePokemon({ pokemonUrl });

  return (
    <Card className="bg-gray-200 w-28">
      <CardBody className="flex flex-col items-center justify-center gap-2 px-2">
        <h3 className="text-xl font-bold capitalize">{pokemon.name}</h3>
        {pokemonData?.sprites?.other?.dream_world?.front_default ? (
          <Image
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            width={50}
            height={50}
            style={{ width: "150px", height: "150px" }}
          />
        ) : (
          <PokeballIcom width={50} height={50} />
        )}

        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex gap-2 justify-center">
            {pokemonData?.types?.map((type) => (
              <p
                key={type?.type?.name}
                className="px-2 py-1 bg-gray-200 rounded-md capitalize text-center"
              >
                {type?.type?.name.toLocaleUpperCase()}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-4 grid-rows-2 gap-4 justify-between items-center mr-2">
            {pokemonData?.stats.slice(0, 4).map((stat) => (
              <div
                key={stat.stat.name}
                className="flex flex-col items-center justify-center"
              >
                <span className="text-sm capitalize font-bold">
                  {stat.stat.name.toLocaleUpperCase().slice(0, 9)}
                </span>
                <span className="font-bold">{stat.base_stat}</span>
              </div>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardPokemon;
