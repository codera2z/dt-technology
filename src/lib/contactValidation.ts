export type ContactField = "name" | "email" | "company" | "need" | "details";

export type ContactFormData = Record<ContactField, string>;

type ValidationResult = {
  errors: Partial<Record<ContactField, string>>;
  firstInvalid: ContactField | null;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const validNeeds = [
  "Product strategy & planning",
  "Website or web application",
  "AI & GenAI",
  "Automation & integration",
  "Product engineering",
  "Something else",
];

export function validateContact(values: ContactFormData): ValidationResult {
  const errors: Partial<Record<ContactField, string>> = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const company = values.company.trim();
  const details = values.details.trim();

  if (!name) errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "Please enter at least two characters.";
  else if (name.length > 80) errors.name = "Please keep your name under 80 characters.";

  if (!email) errors.email = "Please enter your email address.";
  else if (email.length > 254 || !emailPattern.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (company.length > 120) errors.company = "Please keep the company name under 120 characters.";
  if (!validNeeds.includes(values.need)) errors.need = "Please choose what you need help with.";

  if (!details) errors.details = "Please tell us a little about your project.";
  else if (details.length < 20) errors.details = "Please add a little more detail (at least 20 characters).";
  else if (details.length > 4000) errors.details = "Please keep your message under 4,000 characters.";

  const fieldOrder: ContactField[] = ["name", "email", "company", "need", "details"];
  return {
    errors,
    firstInvalid: fieldOrder.find((field) => Boolean(errors[field])) ?? null,
  };
}
