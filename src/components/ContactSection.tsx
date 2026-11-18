export function ContactSection() {
  return (
    <section className="contact-section page-section" id="contact"
      aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="section-label">[ 02 ] Contact</p>
        <h2 className="section-title" id="contact-title">
          Let’s work out the <em>next step</em>.
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
      <div className="contact-mark" aria-hidden="true">
        <span>[</span><strong>DT</strong><span>]</span>
      </div>
    </section>
  );
}
