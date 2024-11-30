import { render, screen } from "@testing-library/react";
import DetailPokemon from "../features/PokemonDetails/DetailPokemon";
import { usePokeApiStore } from "../store/pokeApiStore";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

jest.mock("../store/pokeApiStore");

describe("DetailPokemon", () => {
  beforeEach(() => {
    (usePokeApiStore as unknown as jest.Mock).mockReturnValue({
      pokemonDetail: {
        name: "pikachu",
        sprites: {
          other: {
            dream_world: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            },
          },
        },
        types: [
          {
            type: {
              name: "electric",
            },
          },
        ],
        stats: [
          {
            base_stat: 35,
            stat: {
              name: "hp",
            },
          },
        ],
        height: 4,
        weight: 60,
      },
      isLoading: false,
      getDetailPokemon: jest.fn(),
    });
  });

  it("debe mostrar el nombre del pokemon en detalle", async () => {
    render(<DetailPokemon />);
    expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();
  });
});
