import React from "react";
import List from "../List/List";

const Main = ({
  todos,
  deleteToDo,
  completeToDo,

  filteredTodos,
}) => {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <List
        todos={todos}
        deleteToDo={deleteToDo}
        completeToDo={completeToDo}
        filteredTodos={filteredTodos}
      />
    </section>
  );
};

export default Main;
