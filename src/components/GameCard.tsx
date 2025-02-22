import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getOptimizedImageUrl from "../services/image-url";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={"2xl"} overflow={"hidden"}>
      <Image src={getOptimizedImageUrl(game.background_image)} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconsList
            platforms={game.platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
