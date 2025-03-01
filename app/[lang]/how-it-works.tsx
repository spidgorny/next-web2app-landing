import React from "react";

export function HowItWorks() {
  return (
    <section
      className="py-24 code-section bg-gradient-to-br from-[var(--light-background-color)] to-[var(--medium-background-color)] relative overflow-hidden"
      id="how"
      style={{
        backgroundImage:
          "url('https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/8eb84447-5c9d-42a7-f45a-40a801f13f00/publicContain')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "soft-light",
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="mb-6 text-center text-6xl font-bold [font-family:var(--font-family-heading)]">
          So funktioniert Web2App
        </h2>
        <h3 className="mb-16 text-center text-xl font-medium text-[var(--dark-text-color)] max-w-4xl mx-auto tracking-wide leading-relaxed">
          Verwandeln Sie Ihre Webseite mühelos in eine mobile App mit Web2App
        </h3>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-[#ccc] md:max-w-xs md:p-12">
            <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
              <span className="text-[var(--primary-color)]">1</span>
            </div>
            <h4 className="mb-2 text-2xl font-semibold">
              Website Vorschau erhalten
            </h4>
            <p className="text-[var(--gray-text-color)]">
              Nutzen Sie einen einfachen Link, um eine Vorschau Ihrer Webseite
              in App-Form zu erleben. Sehen Sie sofort, wie Ihr Inhalt auf
              mobilen Geräten aussieht.
            </p>
          </div>
          <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-[#ccc] md:max-w-xs md:p-12">
            <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
              <span className="text-[var(--primary-color)]">2</span>
            </div>
            <h4 className="mb-2 text-2xl font-semibold">
              App-Prototyp entwickeln
            </h4>
            <p className="text-[var(--gray-text-color)]">
              Erhalten Sie schnell und kostengünstig einen Prototyp der App, den
              Sie für frühzeitiges Nutzer- und Marktfeedback nutzen können.
            </p>
          </div>
          <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-[#ccc] md:max-w-xs md:p-12">
            <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
              <span className="text-[var(--primary-color)]">3</span>
            </div>
            <h4 className="mb-2 text-2xl font-semibold">
              Beratung & Anpassung
            </h4>
            <p className="text-[var(--gray-text-color)]">
              Kontaktieren Sie uns direkt für individuelle App-Anpassungen. Wir
              beraten Sie zu Features, die Ihren Kunden einen Mehrwert bieten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
