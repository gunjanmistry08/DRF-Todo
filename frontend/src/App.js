import { VStack } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";

function App() {
  return (
    <VStack p={24}>
      <Header />
      <AddTodo />
    </VStack>
  );
}

export default App;
