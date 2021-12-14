/* eslint-disable react/no-children-prop */
import { InputGroup, InputLeftAddon, Container, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface Props {
  search: string;
  setSearch: Function;
  filterElements: Function;
}

const SearchBar = ({ search, setSearch, filterElements }: Props) => {
  const handleChange = (event: any) => {
    setSearch(event.target.value);
    filterElements();
  };

  return (
    <Container centerContent>
      <InputGroup size="sm">
        <InputLeftAddon
          borderRadius="10px"
          children={<SearchIcon color="gray.500" />}
        />
        <Input
          borderRadius="10px"
          type="tel"
          placeholder="Find a recipe..."
          onChange={handleChange}
          value={search}
        />
      </InputGroup>
    </Container>
  );
};

export default SearchBar;
