import { useState } from "react";
import { FaChevronDown, FaFilter, FaPlus } from "react-icons/fa";
import { FILTERS, FILTER_LABELS } from "../utils/todos";
import styles from "./Form.module.css";

function Form({ onAddTodo, filter, onFilterChange }) {
  // El texto del input sólo lo necesita Form, por eso el estado vive acá
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() === "") {
      setError(true);
      return;
    }
    onAddTodo(inputText);
    setInputText("");
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    if (error) setError(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          className={styles.input}
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Ingresá una tarea"
          aria-label="Nueva tarea"
          aria-invalid={error}
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

      {error && (
        <p className={styles.error} role="alert">
          Escribí una tarea antes de agregarla.
        </p>
      )}
    </form>
  );
}

export default Form;
