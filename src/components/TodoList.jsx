import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, onToggle, onDelete, emptyMessage }) {
  if (todos.length === 0) {
    return <p className={styles.empty}>{emptyMessage}</p>;
  }

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
