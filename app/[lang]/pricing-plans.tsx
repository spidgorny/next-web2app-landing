import React from "react";

export function PricingPlans() {
  return (
    <section className="code-section" id="pricing">
      <div className="container mx-auto px-6 py-12">
        <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:px-40 sm:text-6xl">
          Wählen Sie den idealen Plan für Ihre Organisation
        </h2>
        <p className="text-center text-xl text-[var(--gray-text-color)] sm:mb-16">
          Erleben Sie, wie Ihre Webseite in eine mobile App verwandelt wird
        </p>
        <div className="flex flex-col lg:flex-row">
          <div className="my-6 flex-1 rounded-3xl bg-[#ffffff] px-4 py-12 text-center shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10">
            <h4 className="mb-4 text-4xl font-semibold">Basis</h4>
            <p className="mb-8 font-light text-[var(--dark-text-color)] xl:text-xl">
              Genießen Sie eine Testphase für 0,00 $ heute für einen 14-tägigen
              kostenlosen Zeitraum. Jederzeit kündbar.
            </p>
            <p className="mb-2 text-6xl font-bold text-[var(--primary-color)]">
              $0
            </p>
            <p className="mb-9 text-lg font-light uppercase text-[var(--dark-text-color)]">
              14 Tage kostenlose Testphase
            </p>
            <a
              href="#start"
              className="mx-auto mb-11 block w-2/3 rounded border border-[var(--dark-border-color)] bg-[#ffffff] py-4 font-semibold uppercase text-[var(--dark-text-color)]"
            >
              Wählen Sie diesen Plan
            </a>
            <ul className="space-y-3 font-light">
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  5.000 Benutzer
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Unbegrenzte Projekte erstellen
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Alle Projekttypen
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Unbegrenzte Integrationen
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Erweiterte Freigabe
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Projekt A/B-Tests
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Unbegrenzter Speicher
                </span>
              </li>
            </ul>
          </div>
          <div className="relative my-6 flex-1 rounded-3xl bg-[var(--primary-color)] px-4 py-12 text-center text-white shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10">
            <div className="absolute -top-6 left-1/4 mb-2 flex h-[54px] w-1/2 items-center justify-center rounded bg-black px-2 py-1 text-center text-xl font-semibold uppercase">
              Am Beliebtesten
            </div>
            <h4 className="mb-4 text-4xl font-semibold">Geschäft</h4>
            <p className="mb-8 font-light xl:text-xl">
              Nach Ihrer 14-tägigen kostenlosen Testphase. Jederzeit kündbar.
              Keine Verpflichtungen.
            </p>
            <p className="mb-3 text-6xl font-bold">$20</p>
            <p className="mb-9 text-lg font-light uppercase">
              Monatliches Abonnement
            </p>
            <a
              href="#start"
              className="mx-auto mb-11 block w-2/3 rounded bg-white py-4 font-semibold uppercase text-[var(--dark-text-color)]"
            >
              Wählen Sie diesen Plan
            </a>
            <ul className="space-y-3 font-light text-white">
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg">15.000 Benutzer</span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg">
                  Unbegrenzte Projekte erstellen
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg">Alle Projekttypen</span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg">
                  Unbegrenzte Integrationen
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg">Erweiterte Freigabe</span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg">Projekt A/B-Tests</span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg">Unbegrenzter Speicher</span>
              </li>
            </ul>
          </div>
          <div className="my-6 flex-1 rounded-3xl bg-[#ffffff] px-4 py-12 text-center shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10">
            <h4 className="mb-4 text-4xl font-semibold">Unternehmen</h4>
            <p className="mb-8 font-light text-[var(--dark-text-color)] xl:text-xl">
              Starten Sie noch heute Ihre Testphase für nur 0,00 $ mit einer
              14-tägigen kostenlosen Option. Jederzeit kündbar.
            </p>
            <p className="mb-3 text-6xl font-bold text-[var(--primary-color)]">
              $99
            </p>
            <p className="mb-9 text-lg font-light uppercase text-[var(--dark-text-color)]">
              14 Tage kostenlose Testphase
            </p>
            <a
              href="#start"
              className="mx-auto mb-11 block w-2/3 rounded border border-[var(--dark-border-color)] bg-[#ffffff] py-4 font-semibold uppercase text-[var(--dark-text-color)]"
            >
              Wählen Sie diesen Plan
            </a>
            <ul className="space-y-3 font-light">
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Unbegrenzt Benutzer
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Unbegrenzte Projekte erstellen
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Alle Projekttypen
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Unbegrenzte Integrationen
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Erweiterte Freigabe
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Projekt A/B-Tests
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Unbegrenzter Speicher
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
