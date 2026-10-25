import styles from "./PageHeader.module.css";

type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section className={styles.header}>
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}