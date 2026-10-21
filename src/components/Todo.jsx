import { FaCheck, FaTrash } from "react-icons/fa";
import styles from "./Todo.module.css";

function Todo({ todo }) {
  const { text } = todo;

  return (
    <li className={styles.todo}>
      <span className={styles.text}>{text}</span>
      <button type="button" className={styles.completeBtn} aria-label="Marcar como completada">
        <FaCheck />
      </button>
      <button type="button" className={styles.trashBtn} aria-label="Eliminar tarea">
        <FaTrash />
      </button>
    </li>
  );
}

export default Todo;
