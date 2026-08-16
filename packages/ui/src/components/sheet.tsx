import * as React from "react"
import { Drawer as SheetPrimitive } from "@base-ui/react/drawer"

import { cn } from "@workspace/ui/lib/utils"

function Sheet(props: React.ComponentPropsWithRef<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SheetPrimitive.Trigger>) {
  return (
    <SheetPrimitive.Trigger
      data-slot="sheet-trigger"
      className={cn(className)}
      {...props}
    />
  )
}

function SheetClose({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SheetPrimitive.Close>) {
  return (
    <SheetPrimitive.Close
      data-slot="sheet-close"
      className={cn(className)}
      {...props}
    />
  )
}

function SheetPortal(
  props: React.ComponentPropsWithRef<typeof SheetPrimitive.Portal>,
) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetBackdrop({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SheetPrimitive.Backdrop>) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-backdrop"
      className={cn(
        "fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0",
        className,
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentPropsWithRef<typeof SheetPrimitive.Popup> & {
  side?: "left" | "right"
}) {
  return (
    <SheetPortal>
      <SheetBackdrop />
      <SheetPrimitive.Viewport
        className={cn(
          "fixed inset-y-0 z-50 flex w-5/6 max-w-xs",
          side === "right" ? "right-0" : "left-0",
        )}
      >
        <SheetPrimitive.Popup
          data-slot="sheet-content"
          className={cn(
            "flex h-full w-full flex-col gap-4 overflow-y-auto bg-background p-6 shadow-lg outline-none transition-transform duration-300 data-swiping:transition-none",
            side === "right"
              ? "data-ending-style:translate-x-full data-starting-style:translate-x-full"
              : "data-ending-style:-translate-x-full data-starting-style:-translate-x-full",
            className,
          )}
          {...props}
        >
          {children}
        </SheetPrimitive.Popup>
      </SheetPrimitive.Viewport>
    </SheetPortal>
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-heading font-bold", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetBackdrop,
  SheetContent,
  SheetTitle,
  SheetDescription,
}
