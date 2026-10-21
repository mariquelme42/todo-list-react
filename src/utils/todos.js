// Funciones puras para manejar la lista de tareas.
// Nunca modifican el array recibido: siempre devuelven uno nuevo (inmutabilidad).

// "Enum" con los filtros posibles del select
export const FILTERS = {
  ALL: "todas",
  COMPLETED: "completadas",
  PENDING: "incompletas",
};

export const FILTER_LABELS = {
  [FILTERS.ALL]: "Todas",
  [FILTERS.COMPLETED]: "Completadas",
  [FILTERS.PENDING]: "Incompletas",
};

export const EMPTY_MESSAGES = {
  [FILTERS.ALL]: "No hay tareas todavía. ¡Agregá la primera!",
  [FILTERS.COMPLETED]: "Todavía no completaste ninguna tarea.",
  [FILTERS.PENDING]: "🎉 No hay tareas pendientes",
};

export const createTodo = (text, id) => ({
  id,
  text: text.trim(),
  completed: false,
});

export const addTodo = (todos, newTodo) => [...todos, newTodo];

export const toggleTodo = (todos, id) =>
  todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

export const removeTodo = (todos, id) => todos.filter((todo) => todo.id !== id);

export const filterTodos = (todos, filter) => {
  switch (filter) {
    case FILTERS.COMPLETED:
      return todos.filter((todo) => todo.completed);
    case FILTERS.PENDING:
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};

export const countPending = (todos) =>
  todos.filter((todo) => !todo.completed).length;

// Genera un id único. No es una función pura (depende del azar),
// por eso queda separada de las demás y se usa sólo al crear tareas.
export const generateId = () =>
  Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
