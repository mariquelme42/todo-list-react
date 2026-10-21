import { useState } from "react";
import { FaChevronDown, FaFilter, FaPlus } from "react-icons/fa";
import styles from "./Form.module.css";

function Form({ onAddTodo }) {
  // El texto del input sólo lo necesita Form, por eso el estado vive acá
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputText);
    setInputText("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          className={styles.input}
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          placeholder="Ingresá una tarea"
          aria-label="Nueva tarea"
          maxLength={120}
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
