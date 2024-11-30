export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonData = {
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
};

export type PokemonProps = {
  pokemon: Pokemon;
  pokemonUrl: string;
};
