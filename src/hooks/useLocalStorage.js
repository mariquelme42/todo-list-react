import { useEffect, useState } from "react";

const readStorage = (key, initialValue) => {
  try {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initialValue;
  } catch {
    // Dato corrupto o storage bloqueado: arrancamos con el valor inicial
    return initialValue;
  }
};

// Hook personalizado: funciona igual que useState, pero además
// sincroniza el valor con localStorage cada vez que cambia.
export function useLocalStorage(key, initialValue) {
  // Inicialización perezosa: localStorage se lee una sola vez, en el montaje
  const [value, setValue] = useState(() => readStorage(key, initialValue));

  // Efecto: se ejecuta después de cada render en el que cambió `value`
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage lleno o bloqueado: la app sigue funcionando en memoria
    }
  }, [key, value]);

  return [value, setValue];
}
