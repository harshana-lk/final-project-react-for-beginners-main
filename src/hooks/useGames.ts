import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;
