import React from "react";
import "./App.css";
import Form from "./components/Form"
import List from "./components/List"
import {TodoProvider} from "./utils/GlobalState"

function TodoList() {
  
  return (
    <TodoProvider >
    <div className="container text-center">

      <h1>Create a Todo List!</h1>
      <Form />

      <h4>My Todo List:</h4>
      <List />
    </div>
    </TodoProvider>
  );
}

export default TodoList;
