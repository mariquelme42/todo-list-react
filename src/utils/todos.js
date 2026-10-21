// Funciones puras para manejar la lista de tareas.
// Nunca modifican el array recibido: siempre devuelven uno nuevo (inmutabilidad).

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

// Genera un id único. No es una función pura (depende del azar),
// por eso queda separada de las demás y se usa sólo al crear tareas.
export const generateId = () =>
  Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
