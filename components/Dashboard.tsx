import { v4 as uuidv4 } from "uuid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Box,
  Heading,
  Flex,
  Image,
  Button,
  useDisclosure,
  useMediaQuery
} from "@chakra-ui/react";
import React from "react";

interface Props {
  list: any;
  type: string;
}

export const Dashboard = ({ list, type }: Props) => {
  return (
    <>
      <Flex
        overflowY="scroll"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        w="100vw"
      >
        <Flex padding="20px" flexDirection="column">
          {type === "Drinks" ? (
            <Heading as="h2" size="3xl" paddingTop="20px">
              {" "}
              Find a Drink Recipe{" "}
            </Heading>
          ) : (
            <Heading as="h2" size="3xl" paddingTop="20px" paddingBottom="20px">
              {" "}
              Find a Food recipes{" "}
            </Heading>
          )}
        </Flex>
        <Flex w="100%" h="100%" padding="20px">
          <Flex w="50%" h="50%">
            <LazyLoadImage
              effect="blur"
              src={
                type === "Drinks"
                  ? "/adam-jaime-dmkmrNptMpw-unsplash.jpg"
                  : "/syd-wachs-epqNIYI6S7E-unsplash.jpg"
              }
              alt="Cover img"
            />
          </Flex>
          <Flex
            w="50%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            borderWidth="1px"
            flexDirection="column"
          >
            
          </Flex>
        </Flex>
        <Flex flexDirection="column">
          {type === "Drinks" ? (
            <Heading as="h2" size="2xl" paddingTop="20px" paddingBottom="20px">
              {" "}
              Popular Drinks{" "}
            </Heading>
          ) : (
            <Heading as="h6" size="2xl" paddingTop="20px" paddingBottom="20px">
              {" "}
              Popular Meals{" "}
            </Heading>
          )}
        </Flex>
        <Flex
          padding="0px"
          flexWrap="wrap"
          justifyContent="center"
          objectFit="cover"
        >
          {list &&
            list?.map((element: any) => (
              <>
                <Button
                  key={uuidv4()}
                  boxSize="20rem"
                  padding="10px"
                  variant="ghost"
                >
                  <LazyLoadImage
                    effect="blur"
                    src={
                      type === "Drinks"
                        ? element.strDrinkThumb
                        : element.strMealThumb
                    }
                    alt="drink photo"
                  />
                </Button>
              </>
            ))}
        </Flex>
      </Flex>
    </>
  );
};
