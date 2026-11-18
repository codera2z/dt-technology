import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { validateContact, type ContactFormData, type ContactField } from "../lib/contactValidation";
import { submitContact } from "../lib/submitContact";

const initialValues: ContactFormData = { name: "", email: "", company: "", need: "", details: "" };
const fieldLabels: Record<ContactField, string> = {
  name: "Name", email: "Email", company: "Company (optional)",
  need: "What do you need?", details: "Tell us about your project",
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({});
  const [notice, setNotice] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const updateField = (field: ContactField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => { const next = { ...current }; delete next[field]; return next; });
    setNotice("");
    setStatus("idle");
  };

  const handleChange = (field: ContactField) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      updateField(field, event.target.value);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;
    const validation = validateContact(values);
    setErrors(validation.errors);
    if (validation.firstInvalid) {
      setNotice("");
      setStatus("idle");
      formRef.current?.querySelector<HTMLElement>('[name="' + validation.firstInvalid + '"]')?.focus();
      return;
    }
    const honeypot = formRef.current?.elements.namedItem("botcheck");
    if (honeypot instanceof HTMLInputElement && honeypot.checked) return;
    setStatus("loading");
    setNotice("Sending your message…");
    const result = await submitContact(values);
    setStatus(result.success ? "success" : "error");
    setNotice(result.message);
    if (result.success) {
      setValues(initialValues);
      setErrors({});
      formRef.current?.reset();
    }
  };

  const errorFor = (field: ContactField) => errors[field];
  const describedBy = (field: ContactField) => errorFor(field) ? field + "-error" : undefined;

  return (
    <div className={"contact-form-panel" + (status === "error" ? " is-error" : "") + (status === "success" ? " is-success" : "")}>
      <div className="contact-form-panel__light" aria-hidden="true" />
      <div className="contact-success-particles" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate aria-busy={status === "loading"}>
        <div className="contact-honeypot" aria-hidden="true">
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
        </div>
        <fieldset className="contact-form__fields" disabled={status === "loading"}>
          <div className="contact-field">
            <input id="contact-name" name="name" type="text" required maxLength={80} autoComplete="name"
              placeholder=" " value={values.name} onChange={handleChange("name")}
              aria-invalid={Boolean(errorFor("name"))} aria-describedby={describedBy("name")} />
            <label htmlFor="contact-name">{fieldLabels.name}</label>
            {errorFor("name") && <span className="contact-field__error" id="name-error">{errorFor("name")}</span>}
          </div>
          <div className="contact-field">
            <input id="contact-email" name="email" type="email" required maxLength={254} autoComplete="email"
              placeholder=" " value={values.email} onChange={handleChange("email")}
              aria-invalid={Boolean(errorFor("email"))} aria-describedby={describedBy("email")} />
            <label htmlFor="contact-email">{fieldLabels.email}</label>
            {errorFor("email") && <span className="contact-field__error" id="email-error">{errorFor("email")}</span>}
          </div>
          <div className="contact-field">
            <input id="contact-company" name="company" type="text" maxLength={120} autoComplete="organization"
              placeholder=" " value={values.company} onChange={handleChange("company")}
              aria-invalid={Boolean(errorFor("company"))} aria-describedby={describedBy("company")} />
            <label htmlFor="contact-company">{fieldLabels.company}</label>
            {errorFor("company") && <span className="contact-field__error" id="company-error">{errorFor("company")}</span>}
          </div>
          <div className="contact-field">
            <select id="contact-need" name="need" required value={values.need}
              onChange={handleChange("need")} aria-invalid={Boolean(errorFor("need"))}
              aria-describedby={describedBy("need")}>
              <option value="" disabled></option>
              <option value="Product strategy & planning">Product strategy &amp; planning</option>
              <option value="Website or web application">Website or web application</option>
              <option value="AI & GenAI">AI &amp; GenAI</option>
              <option value="Automation & integration">Automation &amp; integration</option>
              <option value="Product engineering">Product engineering</option>
              <option value="Something else">Something else</option>
            </select>
            <label htmlFor="contact-need">{fieldLabels.need}</label>
            {errorFor("need") && <span className="contact-field__error" id="need-error">{errorFor("need")}</span>}
          </div>
          <div className="contact-field contact-field--full">
            <textarea id="contact-details" name="details" required maxLength={4000} placeholder=" "
              value={values.details} onChange={handleChange("details")}
              aria-invalid={Boolean(errorFor("details"))} aria-describedby={describedBy("details")} />
            <label htmlFor="contact-details">{fieldLabels.details}</label>
            {errorFor("details") && <span className="contact-field__error" id="details-error">{errorFor("details")}</span>}
          </div>
        </fieldset>
        <div className="contact-form__footer">
          <p className="contact-form__note">A few details are enough to get the conversation started.</p>
          <button className="contact-submit" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending…" : status === "success" ? "Message sent" : "Send enquiry"}
            <span className={status === "loading" ? "contact-submit__spinner" : ""} aria-hidden="true">{status === "loading" ? "" : "↗"}</span>
          </button>
        </div>
        <p className={"contact-form__notice contact-form__notice--" + status}
          role={status === "error" ? "alert" : "status"} aria-live="polite">{notice}</p>
      </form>
    </div>
  );
}
