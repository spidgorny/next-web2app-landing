import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Maximize() {
  return (
    <section className="code-section" id="minimize">
      <div className="container mx-auto px-6 pb-12 pt-12 lg:pt-24">
        <div className="flex flex-col-reverse items-stretch lg:flex-row">
          <div className="lg:w-1/2 lg:pr-20">
            <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:text-5xl lg:text-left">
              Warum eine Handy-App sinnvoll sein kann.
            </h2>
            <p className="mb-6 text-center text-xl text-[var(--dark-text-color)] lg:text-left">
              PS: Es soll genau den selben stil haben wie die vorherige
              sektion...
            </p>
            <div className="mb-6">
              <p className="text-xl text-[var(--dark-text-color)] mb-4">
                Eine eigene Handy-App kann für Ihr Geschäft einen echten
                Mehrwert bieten. Sie ermöglicht eine direkte und persönliche
                Verbindung zu Ihren Kunden, lockt neue Kunden an, steigert die
                Umwandlungsrate. Mit einer App haben Sie die Möglichkeit, Ihre
                Dienstleistungen oder Produkte ihren Kunden näher zu bringen.
                Mit einem Klick, vom Handy aus und bequem ist eine App jederzeit
                und überall zugänglich.
              </p>
              <p className="text-xl text-[var(--dark-text-color)] italic">
                Falls Sie dennoch feststellen sollten, dass eine App nicht die
                richtige Lösung für Ihr Geschäft ist, können Sie sich ganz
                beruhigt auf unsere 14-Tage-Geld-zurück-Garantie verlassen. Wir
                möchten, dass Sie mit Ihrer Entscheidung zufrieden sind – ohne
                Risiko!
              </p>
            </div>
            <ul className="mb-12 list-disc pl-8 text-xl">
              <li className="mb-3">
                Erhalten Sie mit nur einem Klick eine detaillierte Vorschau
                Ihrer Webseite
              </li>
              <li className="mb-3">
                Vereinfachen Sie Ihre Entscheidungsfindung zur mobilen
                Darstellung Ihrer Inhalte
              </li>
              <li className="mb-3">
                Testen Sie unsere Lösungen ohne hohe Anfangsinvestitionen
              </li>
              <li className="">
                Profitieren Sie von schnell und einfach verfügbaren Test-Apps
              </li>
            </ul>
            <div className="flex justify-center lg:block">
              <Link
                href="#start"
                className="mb-12 inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-medium text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
              >
                Risikofrei App-Prototyp erstellen
              </Link>
            </div>
            <div className="flex items-center">
              <img
                src="https://media.gettyimages.com/id/1450340623/photo/portrait-of-successful-mature-boss-senior-businessman-in-glasses-asian-looking-at-camera-and.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=_3BHqzEwN7yDJ5o41g1ofHVbEp1NYbcqisUY_Sd1eyA="
                alt="Profile"
                className="mr-4 h-[72px] w-[72px] rounded-full object-cover"
                data-landingsite-gallery-type="image"
                data-testimonial-image=""
                data-dont-replace=""
                data-media='{"id":"1450340623","src":"iStock","type":"image"}'
              />
              <div className="">
                <i
                  className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"
                  aria-hidden="true"
                ></i>
                <p className="mb-2 inline text-lg text-[var(--dark-text-color)]">
                  Die Zusammenarbeit mit Web2App hat unsere Online-Präsenz
                  revolutioniert – schnell, effektiv und benutzerfreundlich!
                </p>
                <i
                  className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"
                  aria-hidden="true"
                ></i>
                <p className="">
                  <span className="font-semibold text-[var(--dark-text-color)]">
                    Michael Braun
                  </span>
                  <span className="pl-2 font-semibold text-[var(--primary-color)]">
                    (Betriebsleiter bei Tech Solutions)
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-1 items-center justify-center rounded-[var(--button-rounded-radius)] bg-[var(--light-background-color)] p-6 lg:w-1/2">
            <Image
              className="mx-auto rounded-[var(--button-rounded-radius)]"
              src="https://cdni.iconscout.com/illustration/premium/thumb/mobile-app-development-4487960-3722648.png"
              alt="Hero"
              data-landingsite-gallery-type="illustration"
              data-media='{"id":"0cfcf9e0-2c2a-11ec-a131-0242ac140003","src":"iconscout","type":"illustration"}'
              width={512}
              height={512}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
