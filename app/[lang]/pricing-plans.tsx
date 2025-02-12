import React from "react";
import Link from "next/link";

export function PricingPlans() {
  return (
    <section className="code-section" id="pricing">
      <div className="container mx-auto px-6 py-12">
        <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:px-40 sm:text-6xl">
          Wählen Sie das idealen Angebot für Ihre App
          <br />
        </h2>
        <p className="text-center text-xl text-[var(--gray-text-color)] sm:mb-16">
          Erleben Sie, wie Ihre Webseite in eine Handy-App verwandelt wird
        </p>
        <div className="flex flex-col lg:flex-row">
          <div className="my-6 flex-1 rounded-3xl bg-[#ffffff] px-4 py-12 text-center shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10">
            <h4 className="mb-4 text-4xl font-semibold">Basis: App-Prototyp</h4>
            <p className="mb-8 font-light text-[var(--dark-text-color)] xl:text-xl">
              Sie erhalten eine vollständige <br />
              ​Handy-App basierend auf Ihrer&nbsp; Webseite (WebApp).
            </p>
            <p className="mb-2 text-6xl font-bold text-[var(--primary-color)]">
              189€
            </p>
            <p className="mb-9 text-lg font-light uppercase text-[var(--dark-text-color)]">
              14 Tage geld Zurück garantie
            </p>
            <Link
              href="#start"
              className="mx-auto mb-11 block w-2/3 rounded border border-[var(--dark-border-color)] bg-[#ffffff] py-4 font-semibold uppercase text-[var(--dark-text-color)]"
            >
              Wählen Sie diesen Plan
            </Link>
            <ul className="space-y-3 font-light">
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  IOS/Android Integration möglich
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Einmaliger Kauf
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Zustellung innerhalb 24h
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Perfekt zum testen
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Unbegrenzte App Größe
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-times fa-xl ml-1 mr-4 text-[var(--accent3-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  keine Anpassungen inclusive
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-times fa-xl ml-1 mr-4 text-[var(--accent3-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  App/Play Store veröffentlichung nicht inclusive
                </span>
              </li>
            </ul>
          </div>
          <div className="relative my-6 flex-1 rounded-3xl bg-[var(--primary-color)] px-4 py-12 text-center text-white shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10">
            <div className="absolute -top-6 left-1/4 mb-2 flex h-[54px] w-1/2 items-center justify-center rounded bg-black px-2 py-1 text-center text-xl font-semibold uppercase">
              Premium
            </div>
            <h4 className="mb-4 text-4xl font-semibold">
              &nbsp;Individuelle App
            </h4>
            <p className="mb-8 font-light xl:text-xl">
              Wir arbeiten mit Ihnen zusammen damit Sie eine nach ihren Wünschen
              angepasste WebApp erhalten.
            </p>
            <p className="mb-3 text-6xl font-bold">ab 890€</p>
            <p className="mb-9 text-lg font-light uppercase">
              Preis variiert je nach aufwand
            </p>
            <Link
              href="#start"
              className="mx-auto mb-11 block w-2/3 rounded bg-white py-4 font-semibold uppercase text-[var(--dark-text-color)]"
            >
              Wählen Sie diesen Plan
            </Link>
            <ul className="space-y-3 font-light text-white">
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg">
                  Individuelles Preisangebot nach Absprache
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg">
                  Einmaliger Kauf oder Zusammenarbeit
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg">
                  Jegliche Anpassungen möglich
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg">
                  Basierend auf Ihrer Webseite
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg">
                  IOS/Android Integration möglich
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg">
                  Inclusive Benachrichtigungen
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-times fa-xl ml-1 mr-4 text-[var(--accent3-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg">
                  Veröffentlichung nicht inclusive
                </span>
              </li>
            </ul>
          </div>
          <div className="my-6 flex-1 rounded-3xl bg-[#ffffff] px-4 py-12 text-center shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10">
            <h4 className="mb-4 text-4xl font-semibold">Integrierte App</h4>
            <p className="mb-8 font-light text-[var(--dark-text-color)] xl:text-xl">
              Sie erhalten zusätzlich zu Ihrem Basis oder Premium Model binden
              wir Ihre App in den Play/App Store ein und kümern uns um die
              Instandhaltung.
            </p>
            <p className="mb-3 text-6xl font-bold text-[var(--primary-color)]">
              59€/m
            </p>
            <p className="mb-9 text-lg font-light uppercase text-[var(--dark-text-color)]">
              Monatliches abonnement
              <br />
            </p>
            <Link
              href="#start"
              className="mx-auto mb-11 block w-2/3 rounded border border-[var(--dark-border-color)] bg-[#ffffff] py-4 font-semibold uppercase text-[var(--dark-text-color)]"
            >
              Wählen Sie diesen Plan
            </Link>
            <ul className="space-y-3 font-light">
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  App/Play Store veröffentlichung
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Unbegrenzte Benutzeranzahl
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  App Instandhaltung
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Anpassungen an der Beschreibung
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Jederzeit kündbar
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fas fa-regular fa-times fa-xl ml-1 mr-4 text-[var(--accent3-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Basis/Premium Paket nicht inclusive
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
