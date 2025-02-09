import React from "react";

export function Footer() {
  return (
    <footer className="py-16 code-section" id="s698wh">
      <div className="container mx-auto px-4 text-center">
        <div className="m-8 text-xl font-bold">
          <a
            href="/"
            className="text-3xl text-[var(--primary-color)] [font-family:var(--font-family-heading)]"
          >
            <span>Web2App</span>
          </a>
        </div>
        <div className="mb-8 flex flex-col justify-center sm:flex-row">
          <a
            href="/datenschutz"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            Datenschutz
          </a>
          <a
            href="/impressum"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            Impressum
          </a>
          <a
            href="/uber-uns"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            Über Uns
          </a>
          <a
            href="/faqs"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            FAQs
          </a>
          <a
            href="/kontakt"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            Kontakt
          </a>
        </div>
        <div className="mb-8">
          <a
            href="/"
            className="mx-2 text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a
            href="/"
            className="mx-2 text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
          </a>
          <a
            href="/"
            className="mx-2 text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
          </a>
        </div>
        <p className="text-lg text-[var(--gray-text-color)]">
          © 2025 Web2App All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
