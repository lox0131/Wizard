import { v4 as uuidv4 } from "uuid";
import { Box, 
  Heading, 
  Flex, 
  Image, 
  Button, 
  useDisclosure,} from "@chakra-ui/react";
import React from "react";

interface Props {
  list: any;
  type: string;
}

export const Dashboard = ({ list, type }: Props) => {
  return (
    <>
      <Box minW="100vw" maxH="93vh" overflowY="scroll">
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          {type === "Drinks" ? (
            <Heading as="h2" size="3xl" paddingTop="20px" paddingBottom="20px">
              {" "}
              Drinks recipes{" "}
            </Heading>
          ) : (
            <Heading as="h2" size="3xl" paddingTop="20px" paddingBottom="20px">
              {" "}
              Food recipes{" "}
            </Heading>
          )}
          <Image
            src={
              type === "Drinks"
                ? "/kobby-mendez-xBFTjrMIC0c-unsplash.jpg"
                : "/syd-wachs-epqNIYI6S7E-unsplash.jpg"
            }
            alt="Cover img"
            borderRadius="30px"
            maxH="50vh"
            objectFit="cover"
            paddingBottom="20px"
          />
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
        <Flex padding="0px" flexWrap="wrap" justifyContent="center">
          {list &&
            list?.map((element: any) => (
              <>
                <Button
                  key={uuidv4()}
                  boxSize="20rem"
                  padding="10px"
                  variant="ghost"
                >
                  <Image
                    src={
                      type === "Drinks"
                        ? element.strDrinkThumb
                        : element.strMealThumb
                    }
                    alt="drink photo"
                    objectFit="cover"
                    borderRadius="10px"
                  />
                </Button>
              </>
            ))}
        </Flex>
      </Box>
    </>
  );
};
