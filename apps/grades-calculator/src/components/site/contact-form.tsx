"use client"

import { useActionState } from "react"

import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Send } from "@workspace/ui/icons"

import {
  sendContactMessage,
  type ContactFormState,
} from "@/src/app/kontakt/actions"

const INITIAL_STATE: ContactFormState = { status: "idle" }

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    INITIAL_STATE
  )

  if (state.status === "success") {
    return (
      <Card>
        <CardContent>
          <p className="font-semibold">Tak for din besked!</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Vi vender tilbage til dig hurtigst muligt.
          </p>
        </CardContent>
      </Card>
    )
  }

  const fieldErrors = state.fieldErrors

  return (
    <Card className="[--card-spacing:--spacing(8)]">
      <CardContent>
        <form action={formAction} noValidate className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name">Navn</Label>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                aria-invalid={Boolean(fieldErrors?.name)}
                className="bg-muted"
              />
              {fieldErrors?.name && (
                <p className="text-sm text-destructive">{fieldErrors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={Boolean(fieldErrors?.email)}
                className="bg-muted"
              />
              {fieldErrors?.email && (
                <p className="text-sm text-destructive">{fieldErrors.email}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="message">Besked</Label>
            <textarea
              id="message"
              name="message"
              rows={6}
              aria-invalid={Boolean(fieldErrors?.message)}
              className="text-md w-full min-w-0 resize-y rounded-lg border border-input bg-muted px-2.5 py-2 transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-2 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"
            />
            {fieldErrors?.message && (
              <p className="text-sm text-destructive">{fieldErrors.message}</p>
            )}
          </div>

          {state.status === "error" && state.message && (
            <p className="text-sm text-destructive">{state.message}</p>
          )}

          <Button
            type="submit"
            disabled={pending}
            className="self-start"
            size="3xl"
            weight="semibold"
          >
            <Send />
            {pending ? "Sender..." : "Send besked"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
