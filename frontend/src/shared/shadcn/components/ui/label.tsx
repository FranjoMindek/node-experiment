"use client";

import { cn } from "@/shared/shadcn/lib/utilities";
import * as LabelPrimitive from "@radix-ui/react-label";
import type * as React from "react";

function Label({
  className,
  ...properties
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...properties}
    />
  );
}

export { Label };
