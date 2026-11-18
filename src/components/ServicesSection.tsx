import { ServiceRow } from "./ServiceRow";
import type { ServiceKind } from "./ServiceIllustration";

const services: { title: string; description: string; kind: ServiceKind }[] = [
  {
    title: "Product Strategy & Budget Planning",
    description: "Shape the idea, set priorities and plan a realistic first release and budget.",
    kind: "strategy",
  },
  {
    title: "Websites & Web Applications",
    description: "Websites and web applications designed around what your customers need to do.",
    kind: "web",
  },
  {
    title: "AI & GenAI Solutions",
    description: "Add practical AI features, assistants and knowledge tools to products and workflows.",
    kind: "ai",
  },
  {
    title: "Automation & Integration",
    description: "Connect the tools you use and reduce repetitive, manual work.",
    kind: "automation",
  },
  {
    title: "Product Engineering & Lifecycle",
    description: "Build, launch, maintain and improve the product as needs change.",
    kind: "lifecycle",
  },
];

export function ServicesSection() {
  return (
    <section className="services-section page-section" id="services"
      aria-labelledby="services-title">
      <div className="section-intro">
        <p className="section-label">[ 01 ] Services</p>
        <h2 className="section-title" id="services-title">
          Good technology starts with the right decisions.
        </h2>
        <p className="section-description">
          We help startups and growing businesses turn ideas into useful
          products, improve the way work gets done, and keep good software
          moving forward. We are open to working with larger organisations too.
        </p>
      </div>
      <div className="service-list">
        {services.map((service, index) => (
          <ServiceRow key={service.title} {...service} index={index} />
        ))}
      </div>
    </section>
  );
}
