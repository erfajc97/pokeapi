import ListPokemons from "./components/ListPokemons";

const HomePokemon = () => {
  return (
    <div className="container mx-auto p-5 flex flex-col gap-4 items-center justify-center w-full">
      <div className="flex flex-col gap-4 w-full max-w-2xl px-5">
        <h2 className="lg:text-4xl text-2xl font-bold text-center text-gray-200">
          POKEDEX
        </h2>
      </div>
      <ListPokemons />
    </div>
  );
};

export default HomePokemon;
