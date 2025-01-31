import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PlatformIconsListProps {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: PlatformIconsListProps) => {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation4: FaPlaystation,
    playstation3: FaPlaystation,
    xbox360: FaXbox,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    macos: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <HStack gap={2}>
      {platforms.map((platform) => (
        <>
          {Object.entries(iconsMap).map(([key, Icon]) =>
            platform.slug === key ? <Icon key={key} /> : null
          )}
        </>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
