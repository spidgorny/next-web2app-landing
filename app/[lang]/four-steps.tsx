import React from "react";

export function FourSteps() {
  return (
    <section className="py-20 code-section" id="how">
      <div className="container mx-auto px-6">
        <h2 className="mb-6 text-center text-6xl font-bold [font-family:var(--font-family-heading)]">
          So funktioniert Web2App
        </h2>
        <h3 className="mb-12 text-center text-xl text-[var(--gray-text-color)]">
          Verwandeln Sie Ihre Webseite mühelos in eine mobile App mit Web2App
        </h3>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-[#ccc] md:max-w-xs md:p-12">
            <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
              <span className="text-[var(--primary-color)]">1</span>
            </div>
            <h4 className="mb-2 text-2xl font-semibold">
              Website Vorschau erhalten
            </h4>
            <p className="text-[var(--gray-text-color)]">
              Nutzen Sie einen einfachen Link, um eine Vorschau Ihrer Webseite
              in App-Format zu erleben. Sehen Sie sofort, wie Ihr Inhalt auf
              mobilen Geräten aussieht.
            </p>
          </div>
          <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-[#ccc] md:max-w-xs md:p-12">
            <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
              <span className="text-[var(--primary-color)]">2</span>
            </div>
            <h4 className="mb-2 text-2xl font-semibold">
              Anpassbare App-Features
            </h4>
            <p className="text-[var(--gray-text-color)]">
              Gestalten Sie Ihre App nach Ihren Wünschen. Wählen Sie die
              Funktionen aus, die Ihrem Geschäft und Ihren Kunden am besten
              dienen.
            </p>
          </div>
          <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-[#ccc] md:max-w-xs md:p-12">
            <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
              <span className="text-[var(--primary-color)]">3</span>
            </div>
            <h4 className="mb-2 text-2xl font-semibold">
              Schnelle Kontaktaufnahme
            </h4>
            <p className="text-[var(--gray-text-color)]">
              Treten Sie schnell mit uns in Kontakt, um eine kostengünstige
              Test-App zu erhalten. Erleben Sie die Vorteile, ohne lange
              Wartezeiten.
            </p>
          </div>
          <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-[#ccc] md:max-w-xs md:p-12">
            <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
              <span className="text-[var(--primary-color)]">4</span>
            </div>
            <h4 className="mb-2 text-2xl font-semibold">
              Optimale Benutzererfahrung
            </h4>
            <p className="text-[var(--gray-text-color)]">
              Überzeugen Sie Ihre Kunden mit einer reibungslosen
              Benutzeroberfläche und schneller Ladezeit, die die Interaktion
              fördert und die Zufriedenheit steigert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
