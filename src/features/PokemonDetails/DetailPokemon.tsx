"use client";
import { usePokeApiStore } from "@/store/pokeApiStore";
import React from "react";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { PokemonDetail } from "./types";
import SkeletonCard from "../../components/SkeletonCard";

const DetailPokemon = () => {
  const { pokemonDetail } = usePokeApiStore() as {
    pokemonDetail: PokemonDetail | null;
  };

  if (!pokemonDetail)
    return (
      <div className="flex flex-col justify-center gap-y-5 items-center h-[100vh]">
        <SkeletonCard />
        <Button
          className="mt-5 -lg:mt-10"
          onClick={() => window.history.back()}
        >
          ⬅️ Volver
        </Button>
      </div>
    );

  return (
    <div className="flex flex-col justify-center gap-y-5 items-center h-[100vh] max-w-80">
      <Card className="py-2 w-full max-w-xl ">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <h1 className="text-4xl font-bold capitalize mb-2">
            {pokemonDetail.name}
          </h1>
          <div className="flex gap-2">
            {pokemonDetail.types.map((type) => (
              <span
                key={type.type.name}
                className="px-3 py-1 rounded-full bg-blue-500 text-white text-sm"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="flex flex-col items-center gap-6">
            <Image
              src={pokemonDetail.sprites.other.dream_world.front_default}
              alt={pokemonDetail.name}
              width={150}
              height={150}
              style={{ width: "150px", height: "150px" }}
            />
            <div className="grid grid-cols-4 gap-4 w-full">
              {pokemonDetail.stats.slice(0, 4).map((stat) => (
                <div
                  key={stat.stat.name}
                  className="flex flex-col items-center p-2 bg-gray-100 rounded-lg"
                >
                  <span className="font-semibold capitalize">
                    {stat.stat.name}
                  </span>
                  <span className="text-lg">{stat.base_stat}</span>
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
      <Button className="mt-5 -lg:mt-10" onClick={() => window.history.back()}>
        ⬅️ Volver
      </Button>
    </div>
  );
};

export default DetailPokemon;
