const services = [
  ["Product Strategy & Budget Planning",
    "Shape the idea, set priorities and plan a realistic first release and budget."],
  ["Websites & Web Applications",
    "Websites and web applications designed around what your customers need to do."],
  ["AI & GenAI Solutions",
    "Add practical AI features, assistants and knowledge tools to products and workflows."],
  ["Automation & Integration",
    "Connect the tools you use and reduce repetitive, manual work."],
  ["Product Engineering & Lifecycle",
    "Build, launch, maintain and improve the product as needs change."],
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
        {services.map(([title, description], index) => (
          <article className="service-row" key={title}>
            <span className="service-row__number">
              [ {String(index + 1).padStart(2, "0")} ]
            </span>
            <div className="service-row__copy">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <span className="service-row__arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
