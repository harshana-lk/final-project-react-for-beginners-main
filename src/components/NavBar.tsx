import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Vortex.png";

const NavBar = () => {
  return (
    <HStack padding={"20px"}>
      <Image src={logo} height={{ base: "40px", md: "50px", lg: "60px" }} />
    </HStack>
  );
};

export default NavBar;
