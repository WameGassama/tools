"use server"

import { z } from "zod"

import { resend } from "@/src/lib/resend"

export interface ContactFormState {
  status: "idle" | "success" | "error"
  message?: string
  fieldErrors?: {
    name?: string
    email?: string
    message?: string
  }
}

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Indtast dit navn."),
  email: z
    .string()
    .trim()
    .min(1, "Indtast din e-mailadresse.")
    .pipe(z.email("Indtast en gyldig e-mailadresse.")),
  message: z.string().trim().min(1, "Skriv en besked."),
})

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = ContactSchema.safeParse({
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
  })

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors
    return {
      status: "error",
      fieldErrors: {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      },
    }
  }

  const { name, email, message } = parsed.data

  const to = process.env.CONTACT_TO_EMAIL
  if (!to) {
    console.error("[kontakt] CONTACT_TO_EMAIL er ikke sat")
    return { status: "error", message: "Der opstod en fejl. Prøv igen senere." }
  }

  const { error } = await resend.emails.send({
    from: "Gennemsnitsberegner.dk <kontakt@gennemsnitsberegner.dk>",
    to,
    replyTo: email,
    subject: `Ny besked fra kontaktformularen – ${name}`,
    html: `<p><strong>Navn:</strong> ${escapeHtml(name)}</p>
<p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
<p><strong>Besked:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
  })

  if (error) {
    console.error("[kontakt] Resend-fejl", error)
    return { status: "error", message: "Der opstod en fejl. Prøv igen senere." }
  }

  return { status: "success" }
}
