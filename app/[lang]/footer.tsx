import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="py-16 code-section bg-[var(--light-background-color)]"
      id="footer"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="m-8 text-xl font-bold">
          <Link
            href="/"
            className="text-3xl text-[var(--primary-color)] [font-family:var(--font-family-heading)]"
          >
            <span>Web2App</span>
          </Link>
        </div>
        <div className="mb-8 flex flex-col justify-center sm:flex-row">
          <Link
            href="/datenschutz"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            Datenschutz
          </Link>
          <Link
            href="/impressum"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            Impressum
          </Link>
          <Link
            href="/uber-uns"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            Über Uns
          </Link>
          <Link
            href="/faqs"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            FAQs
          </Link>
          <Link
            href="/kontakt"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            Kontakt
          </Link>
        </div>
        <div className="mb-8">
          <Link
            href="/"
            className="mx-2 text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
          </Link>
          <Link
            href="/"
            className="mx-2 text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
          </Link>
          <Link
            href="/"
            className="mx-2 text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
          </Link>
        </div>
        <p className="text-lg text-[var(--gray-text-color)]">
          © 2025 Web2App All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
