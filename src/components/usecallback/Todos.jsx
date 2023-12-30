import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("Rendering Todos Component!");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => (
        <span key={index}>{`${todo} ${index + 1}`}</span>
      ))}

      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
