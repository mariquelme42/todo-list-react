import styles from "./IconButton.module.css";

// Botón reutilizable con ícono. `variant` define el color:
// "primary" | "success" | "danger" | "neutral"
function IconButton({ children, label, onClick, variant = "neutral", type = "button", pressed }) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      aria-label={label}
      title={label}
      aria-pressed={pressed}
    >
      {children}
    </button>
  );
}

export default IconButton;
