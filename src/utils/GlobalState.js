import React, { createContext, useReducer, useContext } from "react";

const TodoContext = createContext();
const { Provider } = TodoContext;

const reducer =  (state, action) => {
  switch (action.type) {
  case "add":
    return [
      ...state,
      {
        id: state.length * Math.random(),
        name: action.name
      }
    ];
    // Bonus: Remove a todo from the list.
  case "remove":
    return state.filter((_, index) => {
      return index !== action.index;
    });
    case "Prioritize":
      return state.map((item, index) => {
        if (index === action.index) {
          return { 
            ...item,
             prioritize: !item.prioritize,
             complete: false          
            };
        }
      })
    case "Complete":
      return state.map((item, index) => {
        if (index === action.index) {
          return {
             ...item,
              complete: !item.complete,
            prioritize: false,
          };
        }
      })
  default:
    return state;
  }
};

const TodoProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, value );

  return <Provider value={[state, dispatch]} {...props} />;
};

const useTodoContext = () => {
  return useContext(TodoContext);
};

export  { TodoProvider, useTodoContext };