import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
