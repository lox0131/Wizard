import { v4 as uuidv4 } from "uuid";
import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

interface Props {
  list: any;
  type: string;
}

export const Dashboard = ({ list, type }: Props) => {
  return (
    <Flex 
    minW="100vw" 
    maxH="93vh" 
    overflowY="scroll" 
    padding="0px"
    flexWrap="wrap"
    justifyContent="center"
    >
      {
        list &&
          list?.map((element: any) => (
            <Box key={uuidv4()} boxSize="20rem" padding="6px" >
              <Image src={type === 'Drinks' ? element.strDrinkThumb : element.strMealThumb} alt="drink photo" objectFit="cover" borderRadius="10px"/>
            </Box>
          ))
      }
    </Flex>
  );
};
