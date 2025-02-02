import { Box, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useEffect, useState } from "react";
import { Genre } from "./hooks/useGenre";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  // useBreakpointValue
  const showSidebar = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
    >
      <GridItem area="nav" position="sticky" top={0} zIndex={1} bg="black">
        <NavBar />
      </GridItem>

      {/* Using useBreakpointValue */}
      {showSidebar && (
        <GridItem
          area="aside"
          paddingX={5}
          position="sticky"
          top={0}
          height="85vh"
          overflowY="auto"
          css={{
            /* Hide scrollbar */
            "&::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <GenreList
            onSelectGenre={(genre: Genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      )}

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
      <GridItem area="footer" bg={"brown"} w="full">
        <Box w="full" textAlign="center" p={4}>
          Footer
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
