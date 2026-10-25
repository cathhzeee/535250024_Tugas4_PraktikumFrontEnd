import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Our Coffee" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our Coffee" subtitle="Single-origin beans from Indonesia" />
      <section className="section">
        <div className="container grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}