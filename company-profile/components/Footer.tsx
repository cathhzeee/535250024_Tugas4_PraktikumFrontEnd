import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Kopi Nusantara. Brewed with love in Indonesia.</p>
      </div>
    </footer>
  );
}