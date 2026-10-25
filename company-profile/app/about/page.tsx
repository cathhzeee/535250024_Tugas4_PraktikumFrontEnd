import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" subtitle="Who we are and what we do" />
      <section className="section">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            Maju Bersama was founded to help businesses succeed in the digital
            world. Our team combines design, engineering, and strategy to
            deliver results.
          </p>
          <h2 style={{ marginTop: "2rem" }}>Our Values</h2>
          <ul className="list">
            <li>Quality in everything we build</li>
            <li>Honest and transparent communication</li>
            <li>Continuous learning</li>
          </ul>
        </div>
      </section>
    </>
  );
}