import { v4 as uuidv4 } from "uuid";
import { Box } from "@chakra-ui/react";

interface Props {
  list: any;
  type: string;
}

export const Dashboard = ({ list, type }: Props) => {
  console.log(list);
  return (
    <Box minW="100vw" maxH="93vh" overflowY="scroll" padding="0px">
      {
        // list && list?.map((element: any) => <div key={uuidv4()}>{type === 'Drinks' ? element.strMeal : element.strDrink} </div> )
        list &&
          list?.map((element: any) => (
            <div key={uuidv4()}>{element.strInstructions} </div>
          ))
      }
    </Box>
  );
};
