"use client";

import { useState } from "react";

const workspaceOptions = ["Book a tour", "Day pass", "Dedicated desk", "Private office", "Meeting room", "Enterprise workspace"];
const locationOptions = ["Cyber City", "Golf Course Road", "Udyog Vihar", "Not sure yet"];

export function LeadForm({ compact = false, source = "Public page" }: { compact?: boolean; source?: string }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="glass-card rounded-[2rem] p-5 shadow-soft sm:p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <input type="hidden" name="source" value={source} />
      <div className="mb-5">
        <p className="font-heading text-xs font-extrabold uppercase tracking-[0.22em] text-fume-rose">Quick enquiry</p>
        <h3 className="mt-2 font-heading text-2xl font-extrabold text-fume-ink">Plan your visit or workspace requirement</h3>
        <p className="mt-2 text-sm leading-6 text-fume-muted">Share your requirement and the Fume team can help with the right location, plan or visit slot.</p>
      </div>

      <div className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        <input className="input-base" name="name" placeholder="Full name" required />
        <input className="input-base" name="phone" placeholder="Phone number" required />
        <input className="input-base" name="email" placeholder="Email address" type="email" />
        <select className="select-base" name="interest" defaultValue="Book a tour">
          {workspaceOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
        <select className="select-base" name="location" defaultValue="Not sure yet">
          {locationOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
        <select className="select-base" name="teamSize" defaultValue="1-5 people">
          {["1-5 people", "6-15 people", "16-50 people", "50+ people"].map((option) => <option key={option}>{option}</option>)}
        </select>
        <textarea className="input-base min-h-28 sm:col-span-2" name="message" placeholder="Anything specific we should know?" />
      </div>

      <button type="submit" className="mt-4 w-full rounded-2xl gradient-bg px-5 py-3 font-heading text-sm font-extrabold text-white shadow-lift transition hover:shadow-xl">
        {submitted ? "Request captured for demo" : "Request Callback / Tour"}
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-fume-muted">Frontend prototype only. Developer should connect this form to CRM/email/API before launch.</p>
    </form>
  );
}

export function LeadCaptureSection({ source = "Global public lead section" }: { source?: string }) {
  return (
    <section className="py-16 sm:py-20" id="lead-form">
      <div className="container-pad">
        <div className="grid gap-8 rounded-[2.4rem] border border-fume-line bg-white/70 p-5 shadow-soft sm:p-8 lg:grid-cols-[1fr_440px] lg:items-center">
          <div>
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.28em] text-fume-rose">Ready to visit?</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-fume-ink sm:text-5xl">Book a visit without leaving the page.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-fume-muted sm:text-lg">The lead form stays available across the public journey so prospects can enquire while they are viewing locations, plans, enterprise spaces or gallery pages.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Tour requests", "Workspace enquiries", "Enterprise leads"].map((item) => (
                <div key={item} className="rounded-2xl border border-fume-line bg-fume-blush px-4 py-3 text-sm font-bold text-fume-ink">{item}</div>
              ))}
            </div>
          </div>
          <LeadForm compact source={source} />
        </div>
      </div>
    </section>
  );
}
