import { render, screen } from "@testing-library/react";
import ListPokemons from "../features/HomePokemon/components/ListPokemons";
import { usePokeApiStore } from "../store/pokeApiStore";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

jest.mock("../store/pokeApiStore");

describe("ListPokemons", () => {
  beforeEach(() => {
    (usePokeApiStore as unknown as jest.Mock).mockReturnValue({
      pokemons: [
        { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
      ],
      isLoading: false,
      getAllPokemons: jest.fn(),
      getDetailPokemon: jest.fn(),
    });
  });

  it("debe mostrar el nombre del pokemon", () => {
    render(<ListPokemons />);
    expect(screen.getByText("pikachu")).toBeInTheDocument();
  });
});
