import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import {
  EMPTY_MESSAGES,
  FILTERS,
  addTodo,
  countPending,
  createTodo,
  filterTodos,
  generateId,
  removeTodo,
  toggleTodo,
} from "./utils/todos";
import styles from "./App.module.css";

function App() {
  // Estado elevado: App es la única fuente de verdad de las tareas y del filtro
  // Las tareas se guardan en localStorage (ver hooks/useLocalStorage.js)
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState(FILTERS.ALL);

  const handleAdd = (text) =>
    setTodos((prev) => addTodo(prev, createTodo(text, generateId())));
  const handleToggle = (id) => setTodos((prev) => toggleTodo(prev, id));
  const handleDelete = (id) => setTodos((prev) => removeTodo(prev, id));

  // Datos derivados: se calculan en cada render, no necesitan su propio estado
  const visibleTodos = filterTodos(todos, filter);
  const pending = countPending(todos);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Lista de tareas</h1>
      </header>
      <main className={styles.main}>
        <Form onAddTodo={handleAdd} filter={filter} onFilterChange={setFilter} />
        <TodoList
          todos={visibleTodos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          emptyMessage={EMPTY_MESSAGES[filter]}
        />
        {todos.length > 0 && (
          <p className={styles.counter}>
            {pending === 1 ? "1 tarea pendiente" : `${pending} tareas pendientes`}
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
