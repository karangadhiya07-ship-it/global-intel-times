import { ReactNode } from "react";

type FieldGroupProps = {
  label: string;
  htmlFor?: string;
  hint?: string;
  children: ReactNode;
};

export default function FieldGroup({ label, htmlFor, hint, children }: FieldGroupProps) {
  return (
    <div className="admin-field-group">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {hint && <p>{hint}</p>}
    </div>
  );
}
