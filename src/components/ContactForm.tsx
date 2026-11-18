import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { validateContact, type ContactFormData, type ContactField } from "../lib/contactValidation";

const initialValues: ContactFormData = {
  name: "",
  email: "",
  company: "",
  need: "",
  details: "",
};

const fieldLabels: Record<ContactField, string> = {
  name: "Name",
  email: "Email",
  company: "Company (optional)",
  need: "What do you need?",
  details: "Tell us about your project",
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({});
  const [notice, setNotice] = useState("");

  const updateField = (field: ContactField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
    setNotice("");
  };

  const handleChange = (field: ContactField) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      updateField(field, event.target.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = validateContact(values);
    setErrors(result.errors);
    if (result.firstInvalid) {
      setNotice("");
      formRef.current?.querySelector<HTMLElement>('[name="' + result.firstInvalid + '"]')?.focus();
      return;
    }
    setNotice("Your details are valid. No message was sent; online delivery will be connected later.");
  };

  const errorFor = (field: ContactField) => errors[field];
  const describedBy = (field: ContactField) => errorFor(field) ? field + "-error" : undefined;

  return (
    <div className="contact-form-panel">
      <div className="contact-form-panel__light" aria-hidden="true" />
      <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form__fields">
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
        </div>
        <div className="contact-form__footer">
          <p className="contact-form__note">Online sending isn't connected yet. Use the email link for now.</p>
          <button className="contact-submit" type="submit">
            Check details <span aria-hidden="true">↗</span>
          </button>
        </div>
        <p className="contact-form__notice" role="status" aria-live="polite">{notice}</p>
      </form>
    </div>
  );
}
