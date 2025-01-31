import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}
const CriticScore = ({ score }: CriticScoreProps) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "";
  return (
    <Badge
      color={color}
      fontSize={"16px"}
      paddingX={2}
      fontWeight={"bold"}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
