import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
