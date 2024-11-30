import axiosInstance from "@/api/axiosConfig";
import { AxiosError } from "axios";

export const getASinglePokemonService = async ({
  pokemonUrl,
}: {
  pokemonUrl: string;
}) => {
  try {
    const response = await axiosInstance.get(pokemonUrl);

    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response) {
        console.error("Error en la respuesta de la API:", error.response.data);
        return {
          error: true,
          message: error.response.data.message || "Error al obtener el pokemon",
        };
      } else if (error.request) {
        console.error(
          "Error en la solicitud. Sin respuesta del servidor:",
          error.request
        );
        return {
          error: true,
          message: "No se recibió respuesta del servidor",
        };
      }
    }
    console.error("Error desconocido:", error);
    return {
      error: true,
      message: "Ocurrió un error desconocido al obtener el pokemon",
    };
  }
};
