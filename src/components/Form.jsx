import { useState } from "react";
import { FaChevronDown, FaFilter, FaPlus } from "react-icons/fa";
import { FILTERS, FILTER_LABELS } from "../utils/todos";
import styles from "./Form.module.css";

function Form({ onAddTodo, filter, onFilterChange }) {
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
        <select
          className={styles.select}
          value={filter}
          onChange={(event) => onFilterChange(event.target.value)}
          aria-label="Filtrar tareas"
        >
          {Object.values(FILTERS).map((value) => (
            <option key={value} value={value}>
              {FILTER_LABELS[value]}
            </option>
          ))}
        </select>
        <FaChevronDown className={styles.chevron} aria-hidden="true" />
      </div>
    </form>
  );
}

export default Form;
