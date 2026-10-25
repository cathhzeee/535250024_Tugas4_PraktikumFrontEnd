import Link from "next/link";
import type { Service } from "@/data/services";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className={styles.card}>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <span>Discover →</span>
    </Link>
  );
}