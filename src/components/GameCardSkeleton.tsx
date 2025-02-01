import { Card, CardBody } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" width={"350px"} />
      <CardBody>
        <SkeletonText noOfLines={3} gap={2} />
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
