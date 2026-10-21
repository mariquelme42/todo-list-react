import { FaCheck, FaTrash } from "react-icons/fa";
import IconButton from "./IconButton";
import styles from "./Todo.module.css";

function Todo({ todo, onToggle, onDelete }) {
  const { id, text, completed } = todo;

  return (
    <li className={styles.todo}>
      <span className={`${styles.text} ${completed ? styles.completed : ""}`}>
        {text}
      </span>
      <IconButton
        variant={completed ? "neutral" : "success"}
        label={completed ? "Marcar como pendiente" : "Marcar como completada"}
        pressed={completed}
        onClick={() => onToggle(id)}
      >
        <FaCheck />
      </IconButton>
      <IconButton variant="danger" label="Eliminar tarea" onClick={() => onDelete(id)}>
        <FaTrash />
      </IconButton>
    </li>
  );
}

export default Todo;
