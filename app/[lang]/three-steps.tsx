import React from "react";

export function ThreeSteps() {
  return (
    <section className="code-section" id="three-steps">
      <div className="container mx-auto px-6 py-6 md:py-12">
        <div className="rounded-3xl bg-[var(--light-background-color)] px-4 py-8 md:py-40">
          <h2 className="mx-auto mb-4 max-w-4xl text-center text-3xl font-bold [font-family:var(--font-family-heading)] md:text-6xl">
            Verwandeln Sie Ihre Webseite in eine beeindruckende mobile App mit
            Web2App
          </h2>
          <p className="mb-8 text-center text-xl text-[var(--dark-text-color)]">
            Mit nur einem Klick auf einen Link erhalten Sie die Möglichkeit,
            eine realistische Vorschau Ihrer Webseite in app-freundlichem Format
            zu erleben.
          </p>
        </div>
        <div className="-mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 lg:-mt-36 lg:grid lg:flex-none lg:grid-cols-3 lg:place-items-center lg:items-stretch lg:gap-y-12">
          <div className="max-w-sm flex-1 rounded-3xl bg-[#ffffff] p-14 text-center shadow-xl shadow-[#ccc]">
            <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
              <span className="text-[var(--primary-color)]">1</span>
            </div>
            <h4 className="mb-6 text-3xl font-semibold">Gestalten</h4>
            <p className="text-[var(--dark-text-color)]">
              Erstellen Sie Ihre App genau nach Ihren Vorstellungen, indem Sie
              die Funktionen auswählen, die am besten zu Ihrem Geschäft passen.
            </p>
          </div>
          <div className="max-w-sm flex-1 rounded-3xl bg-[#ffffff] p-14 text-center shadow-xl shadow-[#ccc]">
            <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
              <span className="text-[var(--primary-color)]">2</span>
            </div>
            <h4 className="mb-6 text-3xl font-semibold">Testen</h4>
            <p className="text-[var(--dark-text-color)]">
              Nutzen Sie die Möglichkeit, die Vorteile unserer Lösungen zu
              testen, ohne sich auf große Investitionen festlegen zu müssen.
            </p>
          </div>
          <div className="max-w-sm flex-1 rounded-3xl bg-[#ffffff] p-14 text-center shadow-xl shadow-[#ccc]">
            <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
              <span className="text-[var(--primary-color)]">3</span>
            </div>
            <h4 className="mb-6 text-3xl font-semibold">Optimieren</h4>
            <p className="text-[var(--dark-text-color)]">
              Kontaktieren Sie uns noch heute, um Ihre individuelle Test-App zu
              starten und erleben Sie die Benutzerfreundlichkeit und Effizienz,
              die Web2App Ihnen bietet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
