import { Input } from "@/shared/shadcn/components/ui/input";
import { Label } from "@/shared/shadcn/components/ui/label";

export function RegisterPage() {
  return (
    <div>
      <form>
        <Label>
          Name
          <Input name="name" id="name" />
        </Label>

        <Label>
          Email
          <Input name="email" id="email" />
        </Label>

        <Label>
          Password
          <Input name="password" id="password" />
        </Label>

        <Label>
          Repeat password
          <Input name="repeated-password" id="repeated-password" />
        </Label>
      </form>
    </div>
  );
}
