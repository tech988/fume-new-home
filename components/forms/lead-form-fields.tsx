import type { LeadPayload } from "@/lib/validators/lead";

type InputFieldName = Exclude<keyof LeadPayload, "consent">;

const inputClassName =
  "rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-fume-primary focus:ring-2 focus:ring-fume-primary/15";

export const FormField = ({
  label,
  name,
  type = "text",
  error,
  autoComplete,
  required = true
}: {
  readonly label: string;
  readonly name: InputFieldName;
  readonly type?: "text" | "email" | "tel";
  readonly error?: string;
  readonly autoComplete?: string;
  readonly required?: boolean;
}) => (
  <label className="grid gap-2 text-sm font-bold text-fume-charcoal">
    {label}
    <input
      name={name}
      type={type}
      required={required}
      autoComplete={autoComplete}
      className={inputClassName}
    />
    {error ? <span className="text-xs text-fume-primary">{error}</span> : null}
  </label>
);

export const SelectField = ({
  label,
  name,
  options,
  error
}: {
  readonly label: string;
  readonly name: InputFieldName;
  readonly options: readonly string[];
  readonly error?: string;
}) => (
  <label className="grid gap-2 text-sm font-bold text-fume-charcoal">
    {label}
    <select name={name} className={inputClassName}>
      <option value="">Select</option>
      {options.map((option) => <option key={option} value={option}>{option}</option>)}
    </select>
    {error ? <span className="text-xs text-fume-primary">{error}</span> : null}
  </label>
);

export const NotesField = ({ error }: { readonly error?: string }) => (
  <label className="grid gap-2 text-sm font-bold text-fume-charcoal">
    Requirement Notes
    <textarea
      name="requirementNotes"
      rows={4}
      className={inputClassName}
      placeholder="Team size, preferred date, location or any specific requirement"
    />
    {error ? <span className="text-xs text-fume-primary">{error}</span> : null}
  </label>
);

export const HoneypotField = () => (
  <label className="sr-only">
    Website
    <input name="website" type="text" tabIndex={-1} autoComplete="off" />
  </label>
);
