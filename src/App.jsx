import Form from "./components/Form";
import TodoList from "./components/TodoList";
import styles from "./App.module.css";

// Datos de ejemplo para maquetar (se reemplazan por estado en la próxima funcionalidad)
const TAREAS_EJEMPLO = [
  { id: 1, text: "Repasar useState", completed: false },
  { id: 2, text: "Hacer la maqueta del TPF", completed: true },
];

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Lista de tareas</h1>
      </header>
      <main className={styles.main}>
        <Form />
        <TodoList todos={TAREAS_EJEMPLO} />
      </main>
    </div>
  );
}

export default App;
