import { VStack } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <VStack p={24}>
      <Header />
      <AddTodo />
      <TodoList />
    </VStack>
  );
}

export default App;
