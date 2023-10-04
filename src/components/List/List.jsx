import React, { useState } from "react";
import ListItem from "./ListItem";

const List = ({ todos, deleteToDo, completeToDo, filteredTodos }) => {
  return (
    <ul className="todo-list">
      {filteredTodos.map((todo, index) => {
        return (
          <ListItem
            todo={todo}
            deleteToDo={deleteToDo}
            completeToDo={completeToDo}
            key={index}
          />
        );
      })}

      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Learn React</label>
          <button className="destroy"></button>
        </div>
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Have a life!</label>
          <button className="destroy"></button>
        </div>
      </li>
    </ul>
  );
};

export default List;
