"use client";

import { useMutation } from "@tanstack/react-query";
import type { FormEvent } from "react";
import { useState } from "react";
import { submitLead } from "@/lib/api/leads";
import { leadSchema, type LeadPayload } from "@/lib/validators/lead";
import { buttonClassName } from "@/components/ui/button-link";
import { ErrorState, LoadingState } from "@/components/ui/state-block";
import { FormField, HoneypotField, NotesField, SelectField } from "@/components/forms/lead-form-fields";
import { formToPayload, locationOptions, type FieldErrors, workspaceOptions } from "@/components/forms/lead-form-utils";

const getFieldErrors = (issues: readonly { readonly path: readonly (string | number)[]; readonly message: string }[], payload: LeadPayload): FieldErrors => {
  const fieldErrors: FieldErrors = {};

  for (const issue of issues) {
    const key = issue.path[0];
    if (typeof key === "string" && key in payload) {
      fieldErrors[key as keyof LeadPayload] = issue.message;
    }
  }

  return fieldErrors;
};

export const LeadForm = ({ sourcePath }: { readonly sourcePath: string }) => {
  const [errors, setErrors] = useState<FieldErrors>({});

  const mutation = useMutation({
    mutationFn: submitLead
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    const payload = formToPayload(event.currentTarget, sourcePath);
    const parsed = leadSchema.safeParse(payload);

    if (!parsed.success) {
      setErrors(getFieldErrors(parsed.error.issues, payload));
      return;
    }

    mutation.mutate(parsed.data);
  };

  if (mutation.isPending) {
    return <LoadingState label="Submitting enquiry" />;
  }

  if (mutation.isSuccess) {
    return (
      <div role="status" className="rounded-3xl border border-fume-primary/20 bg-fume-muted p-8 text-center">
        <h3 className="font-heading text-2xl font-bold text-fume-secondary">Enquiry received</h3>
        <p className="mt-3 text-neutral-600">The Fume team will get back to you soon.</p>
        <button type="button" className={`${buttonClassName("ghost")} mt-6`} onClick={() => mutation.reset()}>
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      {mutation.isError ? <ErrorState message={mutation.error.message} /> : null}
      <HoneypotField />
      <FormField label="Full Name" name="fullName" error={errors.fullName} autoComplete="name" />
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Email" name="email" type="email" error={errors.email} autoComplete="email" />
        <FormField label="Phone Number" name="phone" type="tel" error={errors.phone} autoComplete="tel" />
      </div>
      <FormField label="Company Name" name="companyName" error={errors.companyName} autoComplete="organization" required={false} />
      <div className="grid gap-4 md:grid-cols-2">
        <SelectField label="Location Interest" name="locationInterest" options={locationOptions} error={errors.locationInterest} />
        <SelectField label="Workspace Type" name="workspaceType" options={workspaceOptions} error={errors.workspaceType} />
      </div>
      <NotesField error={errors.requirementNotes} />
      <label className="flex items-start gap-3 text-sm leading-6 text-neutral-600">
        <input type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-neutral-300 text-fume-primary" />
        <span>I’m okay with being called by Fume Coworking for discussing further.</span>
      </label>
      {errors.consent ? <span className="text-xs text-fume-primary">{errors.consent}</span> : null}
      <button type="submit" className={buttonClassName("primary")}>Get a Callback</button>
    </form>
  );
};
