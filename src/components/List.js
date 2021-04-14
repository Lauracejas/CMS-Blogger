import React from "react";
import { useTodoContext } from "../utils/GlobalState";

function List() {
    const [todos, dispatch] = useTodoContext();

    const renderItemLabel = (item) => {
        if (item.prioritize) {
            return <strong>{item.name}</strong>;
        } else {
            return <del>{item.name}</del>;
        } 
    }

  return (
    <ul className="list-group">
        {todos.map((item, index) => (
          <li className="list-group-item" key={item.id}>
              {item.name}{" "}    
            
            <button
              className="btn btn-warning ml-5"
              onClick={() => dispatch({ type: "Prioritize", index })}
            >
             Prioritize
            </button>
            <button
              className="btn btn-primary ml-5"
              onClick={() => dispatch({ type: "Complete", index })}
            >
             Complete
            </button>

            <button
              className="btn btn-danger ml-5"
              onClick={() => dispatch({ type: "remove", index })}
            >
              X Remove
            </button>
          </li>
        ))}
      </ul>
  );
}

export default List;