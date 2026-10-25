import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { services, getServiceBySlug } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return { title: service?.title ?? "Service Not Found" };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <PageHeader title={service.title} subtitle={service.summary} />
      <section className="section">
        <div className="container">
          <p>{service.description}</p>
          <h2 style={{ marginTop: "2rem" }}>Tasting Notes</h2>
          <ul className="list">
            {service.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Button href="/contact">Order This Coffee</Button>
        </div>
      </section>
    </>
  );
}