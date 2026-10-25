import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";

export const metadata: Metadata = { title: "Visit Us" };

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Visit Us" subtitle="Come say hello over a fresh cup" />
      <section className="section">
        <div className="container">
          <p><strong>Email:</strong> halo@kopinusantara.id</p>
          <p><strong>Phone:</strong> +62 123 4567 8910</p>
          <p><strong>Hours:</strong> Daily, 08.00–21.00 WIB</p>
          <p style={{ marginBottom: "2rem" }}>
            <strong>Address:</strong> Jl. S. Parman No. 1, Jakarta Barat, Indonesia
          </p>
          <Button href="/services">See Our Coffee</Button>
        </div>
      </section>
    </>
  );
}