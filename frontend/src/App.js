import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todos, settodos] = useState([]);

  const fetchtask = () => {
    fetch("http://localhost:8000/api/task-list/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        settodos(data);
      });
  };

  useEffect(() => {
    fetchtask();
  }, []);

  const Addtodo = (title) => {
    fetch("http://localhost:8000/api/task-create/", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: 4,
        title: title,
        completed: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error(data.error);
        } else {
          console.info("task posted");
          fetchtask();
          console.info("task posted and fetched");
        }
      });
  };

  function deleteTodo(id) {
    console.log(id);
    fetch(`http://localhost:8000/api/task-delete/${id}`, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error(data.error);
        } else {
          console.info("item was deleted");
          fetchtask();
        }
      });
  }

  return (
    <VStack p={24}>
      <Header />
      <AddTodo addtodo={Addtodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </VStack>
  );
}

export default App;
