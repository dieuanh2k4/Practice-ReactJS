import clsx from "clsx";
import styles from "./Button.module.scss";

function Button({ active }) {
  const btnPrimary = clsx(styles.btn, {
    [styles.primary]: active,
    [styles.disabled]: active,
  });

  const btnSecondary = clsx(styles.btn, {
    [styles.secondary]: active,
  });

  const btnSuccess = clsx(styles.btn, {
    [styles.success]: active,
  });

  const btnDanger = clsx(styles.btn, {
    [styles.danger]: active,
  });

  const btnWarning = clsx(styles.btn, {
    [styles.warning]: active,
  });

  const btnInfo = clsx(styles.btn, {
    [styles.info]: active,
  });

  const btnLight = clsx(styles.btn, {
    [styles.light]: active,
  });

  const btnDark = clsx(styles.btn, {
    [styles.dark]: active,
  });

  return (
    <div>
      <button className={btnPrimary}>Primary</button>
      <button className={btnSecondary}>Secondary</button>
      <button className={btnSuccess}>Success</button>
      <button className={btnDanger}>Danger</button>
      <button className={btnWarning}>Warning</button>
      <button className={btnInfo}>Info</button>
      <button className={btnLight}>Light</button>
      <button className={btnDark}>Dark</button>
    </div>
  );
}

export default Button;
