import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useEffect, useState } from "react";
import { Genre } from "./hooks/useGenre";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  // useBreakpointValue
  const showSidebar = useBreakpointValue({ base: false, lg: true });

  useEffect(() => {
    console.log("====================================");
    console.log(selectedGenre);
    console.log("====================================");
  }, [selectedGenre]);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {/* Using useBreakpointValue */}
      {showSidebar && (
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre: Genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      )}
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
      <GridItem area="footer" bg={"brown"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
