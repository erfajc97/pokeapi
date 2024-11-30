export type PokemonType = {
  type: {
    name: string;
  };
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type PokemonDetail = {
  name: string;
  types: PokemonType[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: PokemonStat[];
};
