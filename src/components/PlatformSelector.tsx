import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button size="lg" variant="outline">
          Platforms Selector
        </Button>
      </MenuTrigger>
      <MenuContent
        width={"20%"}
        overflow={"auto"}
        position={"absolute"}
        zIndex={10}
      >
        {data.map((platform) => (
          <MenuItem value={platform.name}>{platform.name}</MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
