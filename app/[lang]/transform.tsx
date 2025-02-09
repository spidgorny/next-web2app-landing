import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Transform() {
  return (
    <section className="code-section" id="transform">
      <div className="container mx-auto px-6 lg:pt-24">
        <div className="flex flex-col items-stretch lg:flex-row">
          <div className="flex flex-1 items-center justify-center rounded-3xl bg-[var(--light-background-color)] p-6 lg:w-1/2">
            <Image
              className="mx-auto rounded-3xl"
              src="https://cdni.iconscout.com/illustration/premium/thumb/mobile-app-development-5424915-4552066.png"
              alt="Hero"
              data-landingsite-gallery-type="illustration"
              data-media='{"id":"d630b230-d5d2-11ec-a473-0242ac140003","src":"iconscout","type":"illustration"}'
              width={512}
              height={512}
            />
          </div>
          <div className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0">
            <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] lg:text-left lg:text-5xl">
              Transformieren Sie Ihre Webseite in eine beeindruckende mobile App
            </h2>
            <p className="mb-6 text-center text-xl text-[var(--dark-text-color)] lg:text-left">
              Mit Web2App erhalten Sie eine einfache Vorschau Ihrer bestehenden
              Webseite – alles, was Sie brauchen, ist ein einfacher Link.
            </p>
            <ul className="mb-12 list-disc pl-6 text-xl">
              <li className="mb-3">
                Wählen Sie spezifische Funktionen, die Ihren Bedürfnissen
                entsprechen
              </li>
              <li className="mb-3">
                Erleben Sie sofort, wie Ihre Inhalte auf Mobilgeräten zur
                Geltung kommen
              </li>
              <li className="mb-3">
                Nutzen Sie unseren kostengünstigen und schnellen Service für
                eine Test-App
              </li>
              <li>Optimieren Sie Ihre Online-Präsenz in der mobilen Welt</li>
            </ul>
            <div className="flex justify-center lg:block">
              <Link
                href="#start"
                className="mb-12 inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-medium text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
              >
                Starten Sie Ihre maßgeschneiderte Test-App!
              </Link>
            </div>
            <div className="flex items-center">
              <Image
                src="https://media.gettyimages.com/id/2156062809/photo/headshot-closeup-portrait-middle-eastern-israel-businesswoman-business-lady-standing-isolated.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=mPEqaET5s98W_40DmBTRbYY5z0F-_1YkqdC4TCHJeig="
                alt="Profile"
                className="mr-4 h-[72px] w-[72px] rounded-full object-cover"
                data-landingsite-gallery-type="image"
                data-testimonial-image=""
                data-dont-replace=""
                data-media='{"id":"2156062809","src":"iStock","type":"image"}'
                width={72}
                height={72}
              />
              <div>
                <i
                  className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"
                  aria-hidden="true"
                ></i>
                <p className="mb-2 inline text-lg text-[var(--dark-text-color)]">
                  Web2App ist ein echter Game Changer! Ich konnte die Prozesse
                  unserer Webseite mühelos optimieren!
                </p>
                <i
                  className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"
                  aria-hidden="true"
                ></i>
                <p>
                  <span className="font-semibold text-[var(--dark-text-color)]">
                    Emily Johnson
                  </span>
                  <span className="pl-2 font-semibold text-[var(--primary-color)]">
                    (Projektmanagerin bei Creative Solutions)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
