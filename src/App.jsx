import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { addTodo, createTodo, generateId, toggleTodo } from "./utils/todos";
import styles from "./App.module.css";

function App() {
  // Estado elevado: App es la única fuente de verdad de las tareas
  const [todos, setTodos] = useState([]);

  const handleAdd = (text) =>
    setTodos((prev) => addTodo(prev, createTodo(text, generateId())));

  const handleToggle = (id) => setTodos((prev) => toggleTodo(prev, id));

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Lista de tareas</h1>
      </header>
      <main className={styles.main}>
        <Form onAddTodo={handleAdd} />
        <TodoList todos={todos} onToggle={handleToggle} />
      </main>
    </div>
  );
}

export default App;
