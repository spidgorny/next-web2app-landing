import React from "react";
import Image from "next/image";
import Link from "next/link";

export function BlogPosts() {
  return (
    <section className="code-section" id="blog">
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-6 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:text-6xl">
          Neueste Einblicke
        </h2>
        <p className="mx-auto mb-8 max-w-4xl text-center text-lg font-light text-[var(--gray-text-color)] sm:text-xl">
          Verwandeln Sie Ihre Webseite mit Web2App in eine beeindruckende mobile
          Anwendung. Erleben Sie sofortige Vorschauen und optimieren Sie Ihre
          online Präsenz effizient.
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="m-6 flex-1 rounded-3xl bg-[#ffffff] p-4 shadow-lg shadow-[#ccc]">
            <Image
              src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e73e20ea-c9b4-4d97-d4cb-ab68d3cb9d00/public"
              alt="Blog"
              className="h-64 w-full rounded-3xl object-cover"
              data-landingsite-gallery-type="image"
              data-media='{"id":"1196702694","src":"iStock","type":"image"}'
              width={64}
              height={64}
            />
            <div className="px-4 py-6">
              <p className="mb-2 uppercase text-[var(--primary-color)]">
                15 FEB 2023
              </p>
              <h3 className="mb-2 text-3xl font-medium">
                Optimierung Ihrer mobilen Strategie
              </h3>
              <p className="mb-4 text-lg font-light text-[var(--gray-text-color)]">
                Erfahren Sie, wie Sie Ihre bestehende Online-Präsenz mit
                spezifischen Funktionen zur Verbesserung der Benutzererfahrung
                anpassen können.
              </p>
              <Link
                href="#start"
                className="flex items-center uppercase text-[var(--primary-color)] hover:underline"
              >
                Mehr erfahren{" "}
                <i
                  className="fa-solid fa-arrow-right ml-2"
                  aria-hidden="true"
                ></i>
              </Link>
            </div>
          </div>
          <div className="m-6 flex-1 rounded-3xl bg-[#ffffff] p-4 shadow-lg shadow-[#ccc]">
            <Image
              src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/8fa1ccaf-944a-44a2-b24e-0634a392da00/public"
              alt="Blog"
              className="h-64 w-full rounded-3xl object-cover"
              data-landingsite-gallery-type="image"
              data-media='{"id":"1961529307","src":"iStock","type":"image"}'
              width={64}
              height={64}
            />
            <div className="px-4 py-6">
              <p className="mb-2 uppercase text-[var(--primary-color)]">
                20 FEB 2023
              </p>
              <h3 className="mb-2 text-3xl font-medium">
                Erhöhung der Collaboration in der Cloud
              </h3>
              <p className="mb-4 text-lg font-light text-[var(--gray-text-color)]">
                Nutzen Sie Tools für die Teamarbeit in der Cloud, um die
                Produktivität und Zugänglichkeit Ihrer Daten zu steigern.
              </p>
              <Link
                href="/dienstleistungen"
                className="flex items-center uppercase text-[var(--primary-color)] hover:underline"
              >
                Mehr erfahren{" "}
                <i
                  className="fa-solid fa-arrow-right ml-2"
                  aria-hidden="true"
                ></i>
              </Link>
            </div>
          </div>
          <div className="m-6 flex-1 rounded-3xl bg-[#ffffff] p-4 shadow-lg shadow-[#ccc]">
            <Image
              src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e74fc51c-e2aa-4b07-5f67-daf18596b000/public"
              alt="Blog"
              className="h-64 w-full rounded-3xl object-cover"
              data-landingsite-gallery-type="image"
              data-media='{"id":"1714808445","src":"iStock","type":"image"}'
              width={64}
              height={64}
            />
            <div className="px-4 py-6">
              <p className="mb-2 uppercase text-[var(--primary-color)]">
                25 FEB 2023
              </p>
              <h3 className="mb-2 text-3xl font-medium">
                Sicherung Ihrer Daten in der digitalen Welt
              </h3>
              <p className="mb-4 text-lg font-light text-[var(--gray-text-color)]">
                Entdecken Sie Strategien zur Gewährleistung der Datensicherheit
                in einer vernetzten Umgebung, während Sie die
                Benutzerfreundlichkeit optimieren.
              </p>
              <Link
                href="/kontakt"
                className="flex items-center uppercase text-[var(--primary-color)] hover:underline"
              >
                Mehr erfahren{" "}
                <i
                  className="fa-solid fa-arrow-right ml-2"
                  aria-hidden="true"
                ></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
