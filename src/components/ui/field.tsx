import type { ComponentPropsWithoutRef, ReactNode } from "react";

const fieldClass =
  "w-full border border-ink/30 bg-paper px-4 py-3 text-sm text-ink placeholder:text-kattha/60 transition-colors focus:border-ink focus:outline-none aria-[invalid=true]:border-sindoor";

function Label({ id, children, required }: { id: string; children: ReactNode; required?: boolean }) {
  return (
    <label
      htmlFor={id}
      className="block font-mono text-[11px] uppercase tracking-[0.14em] text-kattha"
    >
      {children}
      {required ? <span className="text-sindoor"> *</span> : null}
    </label>
  );
}

function ErrorText({ children }: { children?: string }) {
  return children ? <p className="fade-in text-xs font-medium text-sindoor">{children}</p> : null;
}

type FieldProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  id: string;
  error?: string;
};

export function Input({ label, id, error, className = "", ...props }: FieldProps) {
  return (
    <div className="space-y-2">
      <Label id={id} required={props.required}>
        {label}
      </Label>
      <input id={id} className={`${fieldClass} ${className}`} aria-invalid={!!error} {...props} />
      <ErrorText>{error}</ErrorText>
    </div>
  );
}

type TextareaProps = ComponentPropsWithoutRef<"textarea"> & {
  label: string;
  id: string;
  error?: string;
};

export function Textarea({ label, id, error, className = "", ...props }: TextareaProps) {
  return (
    <div className="space-y-2">
      <Label id={id} required={props.required}>
        {label}
      </Label>
      <textarea
        id={id}
        className={`${fieldClass} min-h-[140px] resize-y ${className}`}
        aria-invalid={!!error}
        {...props}
      />
      <ErrorText>{error}</ErrorText>
    </div>
  );
}
