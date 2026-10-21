import { FaCheck, FaTrash } from "react-icons/fa";
import styles from "./Todo.module.css";

function Todo({ todo, onToggle, onDelete }) {
  const { id, text, completed } = todo;

  return (
    <li className={styles.todo}>
      <span className={`${styles.text} ${completed ? styles.completed : ""}`}>
        {text}
      </span>
      <button
        type="button"
        className={styles.completeBtn}
        onClick={() => onToggle(id)}
        aria-label={completed ? "Marcar como pendiente" : "Marcar como completada"}
        aria-pressed={completed}
      >
        <FaCheck />
      </button>
      <button
        type="button"
        className={styles.trashBtn}
        onClick={() => onDelete(id)}
        aria-label="Eliminar tarea"
      >
        <FaTrash />
      </button>
    </li>
  );
}

export default Todo;
