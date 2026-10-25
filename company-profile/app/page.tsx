import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1>Single-origin coffee from the heart of Indonesia</h1>
          <p>Roasted fresh, sourced directly from local farmers across the archipelago.</p>
          <Button href="/services">Explore Our Coffee</Button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className={styles.title}>Our Coffee</h2>
          <div className="grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}