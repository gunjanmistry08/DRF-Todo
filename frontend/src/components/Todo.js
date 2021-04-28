import { IconButton } from "@chakra-ui/button";
import { Spacer, Text } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { FaTrash } from "react-icons/fa";

const Todo = () => {
  const deleteTodo = (id) => {
    console.log(id);
  };

  return (
    <HStack>
      <Text>Example</Text>
      <Spacer />
      <IconButton
        icon={<FaTrash />}
        isRound="true"
        onClick={() => deleteTodo(4)}
      />
    </HStack>
  );
};

export default Todo;
