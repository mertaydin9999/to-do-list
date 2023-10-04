import React, { useEffect, useState } from "react";
import Main from "../components/main/Main";
import MainFooter from "../components/main/MainFooter";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
const Layout = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addToDo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setFilteredTodos([...todos, newTodo]);
  };
  const deleteToDo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };
  const clearAll = () => {
    setTodos([]);
    setFilteredTodos([]);
  };
  const completeToDo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isActive: !todo.isActive } : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };
  const filterTodos = (filter) => {
    if (filter === "all") {
      setFilteredTodos(todos);
    } else if (filter === "active") {
      const activeTodos = todos.filter((todo) => todo.isActive);
      setFilteredTodos(activeTodos);
    } else if (filter === "completed") {
      const completedTodos = todos.filter((todo) => !todo.isActive);
      setFilteredTodos(completedTodos);
    } else {
      setFilteredTodos(todos);
    }
  };

  useEffect(() => {
    console.log(todos);
    console.log(filteredTodos);
  }, [todos, filteredTodos]);

  return (
    <>
      <section className="todoapp">
        <Header addToDo={addToDo} />
        <Main
          todos={todos}
          deleteToDo={deleteToDo}
          completeToDo={completeToDo}
          filteredTodos={filteredTodos}
        />

        <MainFooter
          filterTodos={filterTodos}
          filteredTodos={filteredTodos}
          todos={todos}
          clearAll={clearAll}
        />
      </section>
      <Footer />
    </>
  );
};

export default Layout;
