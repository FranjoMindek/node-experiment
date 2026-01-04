import type { AnyFieldApi } from "@tanstack/react-form";

export function FieldErrors({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ?
        <span>{field.state.meta.errors.join(", ")}</span>
      : undefined}
    </>
  );
}
