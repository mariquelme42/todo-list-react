# ✔️ Lista de tareas — React

Trabajo Práctico Final: aplicación de lista de tareas hecha con **React + Vite**.
Permite agregar tareas, marcarlas como completadas, eliminarlas y filtrarlas.
Las tareas se guardan en **localStorage**, así que siguen ahí al recargar la página.

🔗 **Demo:** https://mariquelme42.github.io/todo-list-react/

## Funcionalidades

- Input con ícono para ingresar nuevas tareas (valida que no esté vacío).
- Select con ícono para filtrar: **Todas**, **Completadas** e **Incompletas**.
- Cada tarea tiene dos íconos: ✔ completar (la tarea se tacha) y 🗑 eliminar.
- Contador de tareas pendientes y mensajes cuando la lista está vacía.
- Persistencia en localStorage: agregar, completar y eliminar se reflejan en la App y en el storage.
- Diseño responsive (mobile first a partir de 560px).

## Tecnologías

- React 19 (componentes funcionales, `useState`, `useEffect`, hook personalizado)
- Vite
- CSS Modules
- react-icons (Font Awesome)
- gh-pages para el deploy

## Estructura

```
src/
├── App.jsx                 # Estado principal (tareas + filtro) y handlers
├── App.module.css
├── main.jsx
├── index.css               # Reset y variables globales
├── components/
│   ├── Form.jsx            # Input para nuevas tareas + select de filtro
│   ├── TodoList.jsx        # Recorre las tareas con map y muestra mensaje si está vacía
│   ├── Todo.jsx            # Una tarea con botones completar / eliminar
│   └── IconButton.jsx      # Botón con ícono reutilizable
├── hooks/
│   └── useLocalStorage.js  # useState + useEffect sincronizado con localStorage
└── utils/
    └── todos.js            # Funciones puras: crear, agregar, completar, eliminar, filtrar
```

### Cómo fluyen los datos

`App` es la única fuente de verdad (**estado elevado**): guarda `todos` y `filter`.
Los hijos reciben datos y funciones por **props** (`onAddTodo`, `onToggle`, `onDelete`, `onFilterChange`).
La lista visible se **deriva** en cada render con `filterTodos(todos, filter)`, sin duplicar estado.
El hook `useLocalStorage` lee el storage una sola vez al montar y, con `useEffect`,
lo actualiza cada vez que cambian las tareas.

## Cómo correrlo

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # genera /dist
```

## Deploy en GitHub Pages

```bash
pnpm run deploy   # build + publica /dist en la rama gh-pages
```

Luego en GitHub: **Settings → Pages → Branch: `gh-pages` / root**.

## Flujo de trabajo

No se trabaja sobre `main`: cada funcionalidad, fix o refactor se hizo en su propia rama
y entró a `main` mediante un Pull Request.

| Rama | Tipo |
| --- | --- |
| `maqueta` | Funcionalidad |
| `agregar-tarea` | Funcionalidad |
| `completar-tarea` | Funcionalidad |
| `eliminar-tarea` | Funcionalidad |
| `filtrar-tareas` | Funcionalidad |
| `local-storage` | Funcionalidad |
| `fix-input-vacio` | Fix |
| `refactor-icon-button` | Refactor |
| `deploy` | Configuración |
