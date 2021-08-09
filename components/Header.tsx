import { ReactNode } from "react";
import {
  Link,
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import SearchBar from "./SearchBar";
import { FaUtensils, FaCocktail, FaMoon, FaSun } from 'react-icons/fa'

interface Props {
  toggle: string;
  setToggle: Function;
}

export default function Header({ toggle, setToggle }: Props) {
    const [ user ] = useAuthState(firebase.auth());

    const color = useColorModeValue("grey.100", "grey.700");
    const { toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} minH="7vh">
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          minH="7vh"
        >
          <IconButton
            size={"md"}
            icon={toggle === "Drinks" ? <FaUtensils /> : <FaCocktail />}
            aria-label={"Toggle Recipe Type"}
            onClick={
              toggle === "Drinks"
                ? () => setToggle("Meals")
                : () => setToggle("Drinks")
            }
          />
          <SearchBar />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <IconButton
              icon={<SwitchIcon />}
              size={"md"}
              fontSize="lg"
              aria-label={"Toggle Color Type"}
              onClick={toggleColorMode}
              color={color}
              marginRight="10px"
            />
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                {user && user.photoURL ? (
                  <Avatar size={"sm"} src={`${user?.photoURL}`} />
                ) : (
                  <Avatar size={"sm"} src={""} />
                )}
              </MenuButton>
              <MenuList>
                {user ? (
                  <>
                    <Link href="/drinks">
                      <MenuItem>Saved Drinks</MenuItem>
                    </Link>
                    <MenuDivider />
                    <Link href="/food">
                      <MenuItem>Saved Food</MenuItem>
                    </Link>{" "}
                  </>
                ) : (
                  <> </>
                )}
                {!user ? (
                  <Link href="/signin">
                    <MenuItem>Log In</MenuItem>
                  </Link>
                ) : (
                  <MenuItem onClick={() => firebase.auth().signOut()}>
                    Log Out
                  </MenuItem>
                )}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
