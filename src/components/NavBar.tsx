import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Vortex.png";
import SearchInput from "./SearchInput";

interface NavbarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavbarProps) => {
  return (
    <HStack padding={"20px"} justifyContent={"space-between"}>
      <Image src={logo} height={{ base: "40px", md: "50px", lg: "60px" }} />
      <SearchInput onSearch={onSearch} />
    </HStack>
  );
};

export default NavBar;
