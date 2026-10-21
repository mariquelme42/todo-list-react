import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, onToggle }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}

export default TodoList;
