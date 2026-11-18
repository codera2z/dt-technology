import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section className="contact-section page-section" id="contact"
      aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="section-label">Contact</p>
        <h2 className="section-title contact-title" id="contact-title">
          <span className="contact-title__word">Let’s</span>{" "}
          <span className="contact-title__word">work</span>{" "}
          <span className="contact-title__word">out</span>{" "}
          <span className="contact-title__word">the</span>{" "}
          <em className="contact-title__word contact-title__accent">next step</em>.
        </h2>
        <p>
          Have an idea, a process to improve, or an existing product that needs
          attention? Tell us a little about it. You do not need a complete
          technical brief to get started.
        </p>
        <a className="contact-email" href="mailto:hello@dttechnology.com">
          <span className="contact-email__label">Email us</span>
          <span>hello@dttechnology.com</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <ContactForm />
    </section>
  );
}
