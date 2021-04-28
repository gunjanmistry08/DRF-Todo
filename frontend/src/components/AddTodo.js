import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { useState } from "react";

const AddTodo = ({ addtodo }) => {
  const [content, setcontent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(content);
    addtodo(content);
    setcontent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction={["column", "row"]} m={8}>
        <Input
          variant="filled"
          placeholder="Add a Task"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        />
        <Button colorScheme="blue" p={4} type="submit">
          Add Todo
        </Button>
      </Stack>
    </form>
  );
};

export default AddTodo;
