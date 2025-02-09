import React from "react";
import Link from "next/link";
import Image from "next/image";

export function CallToActionBottom() {
  return (
    <section
      className="mt-12 bg-[var(--light-background-color)] py-12 code-section"
      id="cta"
    >
      <div className="container mx-auto flex flex-col sm:flex-row">
        <div className="mb-6 flex w-full flex-col items-center md:mb-0 md:w-[55%] md:flex-row">
          <Image
            src="https://cdni.iconscout.com/illustration/premium/thumb/mobile-app-development-3100462-2585677.png"
            alt="CTA"
            className="h-auto w-full"
            data-landingsite-gallery-type="illustration"
            data-media='{"id":"0ca1ecd0-40fb-11eb-926a-0242ac140003","src":"iconscout","type":"illustration"}'
          />
        </div>
        <div className="flex w-full flex-col justify-center p-8 md:w-[45%] md:pr-14">
          <h3 className="mb-2 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:text-left sm:text-6xl">
            Erleben Sie eine nahtlose Transformation Ihrer Webseite in eine
            mobile App mit Web2App
          </h3>
          <p className="mb-12 text-center text-lg text-[var(--gray-text-color)] sm:text-left sm:text-xl">
            Mit nur einem einfachen Link können Sie sofort sehen, wie Ihre
            Inhalte auf Mobilgeräten präsentiert werden. Diese Vorschau hilft
            Ihnen, die Benutzererfahrung zu verstehen und sicherzustellen, dass
            Ihre Kunden auf jedem Gerät begeistert sind.
          </p>
          <div className="mb-12 flex items-center justify-center md:items-start md:justify-start">
            <Link
              href="#start"
              className="items-center rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-semibold text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
            >
              Jetzt starten
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
