import { authClient } from "@/shared/auth";
import { FieldErrors } from "@/shared/components/FieldErrors";
import { Input } from "@/shared/shadcn/components/ui/input";
import { Label } from "@/shared/shadcn/components/ui/label";
import { useForm } from "@tanstack/react-form";

export function RegisterPage() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: async ({ value }) => {
      authClient.signUp.email({
        ...value,
        callbackURL: "",
      });
    },
  });

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field name="name">
          {(field) => (
            <div>
              <Label htmlFor={field.name}>Name:</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
              />
              <FieldErrors field={field} />
            </div>
          )}
        </form.Field>
        <form.Field name="email">
          {(field) => (
            <div>
              <Label htmlFor={field.name}>Email:</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
              />
              <FieldErrors field={field} />
            </div>
          )}
        </form.Field>
        <form.Field name="password">
          {(field) => (
            <div>
              <Label htmlFor={field.name}>Password:</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
              />
              <FieldErrors field={field} />
            </div>
          )}
        </form.Field>
        <form.Field
          name="repeatPassword"
          validators={{
            onChangeListenTo: ["password"],
            onChange: ({ value, fieldApi }) => {
              if (value !== fieldApi.form.getFieldValue("password")) {
                return "Passwords do not match";
              }
              return;
            },
          }}
        >
          {(field) => (
            <div>
              <Label htmlFor={field.name}>Repeat password:</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
              />
              <FieldErrors field={field} />
            </div>
          )}
        </form.Field>
      </form>
    </div>
  );
}
