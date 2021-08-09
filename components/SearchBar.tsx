import { InputGroup, InputLeftAddon, Container, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import React from "react";

const SearchBar = () => {
  return (
    <Container centerContent>
      <InputGroup size="lg">
        <InputLeftAddon children={<SearchIcon color="gray.500" />} />
        <Input
          type="tel"
          placeholder="Search"
        />
      </InputGroup>
    </Container>
  );
};

export default SearchBar;
