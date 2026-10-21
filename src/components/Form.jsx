import { FaChevronDown, FaFilter, FaPlus } from "react-icons/fa";
import styles from "./Form.module.css";

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.inputGroup}>
        <input
          className={styles.input}
          type="text"
          placeholder="Ingresá una tarea"
          aria-label="Nueva tarea"
        />
        <button type="submit" className={styles.addButton} aria-label="Agregar tarea">
          <FaPlus />
        </button>
      </div>

      <div className={styles.selectGroup}>
        <FaFilter className={styles.selectIcon} aria-hidden="true" />
        <select className={styles.select} aria-label="Filtrar tareas">
          <option value="todas">Todas</option>
          <option value="completadas">Completadas</option>
          <option value="incompletas">Incompletas</option>
        </select>
        <FaChevronDown className={styles.chevron} aria-hidden="true" />
      </div>
    </form>
  );
}

export default Form;
