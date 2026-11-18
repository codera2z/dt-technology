const services = [
  "Product Strategy & Budget Planning",
  "Websites & Web Applications",
  "AI & GenAI Solutions",
  "Automation & Integration",
  "Product Engineering & Lifecycle",
];

export function Marquee() {
  return (
    <div className="service-marquee" aria-label="Services">
      <div className="service-marquee__track">
        {[0, 1].map((copy) => (
          <div className="service-marquee__set" key={copy} aria-hidden={copy === 1}>
            {services.map((service) => (
              <span className="service-marquee__item" key={service}>
                {service}
                <span className="service-marquee__dot" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
