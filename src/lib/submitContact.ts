import type { ContactFormData } from "./contactValidation";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  body?: { message?: string };
};

export type ContactSubmitResult = {
  success: boolean;
  message: string;
};

const endpoint = "https://api.web3forms.com/submit";

export async function submitContact(data: ContactFormData): Promise<ContactSubmitResult> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY?.trim();
  if (!accessKey) {
    return {
      success: false,
      message: "The contact form isn't configured yet. Add VITE_WEB3FORMS_KEY to .env.local and restart the dev server.",
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "New enquiry from DT Technology",
        name: data.name.trim(),
        email: data.email.trim(),
        company: data.company.trim() || "Not provided",
        need: data.need,
        details: data.details.trim(),
        botcheck: false,
      }),
    });
    const result = await response.json() as Web3FormsResponse;
    if (!response.ok || result.success !== true) {
      return {
        success: false,
        message: result.message || result.body?.message ||
          "We couldn't send your message. Please try again or email us directly.",
      };
    }
    return {
      success: true,
      message: result.body?.message || "Thanks — your message has been sent. We'll be in touch.",
    };
  } catch {
    return {
      success: false,
      message: "A connection problem stopped your message from sending. Please try again or email us directly.",
    };
  }
}
