import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaUtensils, FaCocktail } from 'react-icons/fa'

interface Props {
  toggle: string;
  setToggle: Function;
}

export default function Header({ toggle, setToggle }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // create a button that has a different icon depending on the value of toggle
  // if toggle === 'Drinks' than the icon is supposed to be a food icon else a drink icon
  // also on click the icon is supposed to change the value of toggle with the setToggle function to 'Meals'

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} minH="7vh">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <IconButton
            size={"md"}
            icon={toggle === 'Drinks' ? <FaUtensils /> : <FaCocktail />}
            aria-label={"Toggle Recipe Type"}
            onClick={toggle === 'Drinks' ? () => setToggle('Meals') : () => setToggle('Drinks')}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={""} />
              </MenuButton>
              <MenuList>
                <MenuItem>Saved Drinks</MenuItem>
                <MenuDivider />
                <MenuItem>Saved Food</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
