import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="bg-gradient-to-b from-[#ffffff] to-[var(--light-background-color)] lg:py-2 code-section"
      id="hero"
    >
      <div className="container mx-auto mb-24 px-6">
        <div className="flex flex-col-reverse items-center lg:flex-row">
          <div className="mt-12 w-full lg:mt-32 lg:w-[45%] lg:pr-14">
            <h1 className="mb-4 text-center text-4xl font-bold [font-family:var(--font-family-heading)] lg:text-left lg:text-5xl xl:text-6xl">
              Verwandeln Sie Ihre Webseite in eine mobile App
            </h1>
            <p className="mb-12 text-center text-xl text-[var(--dark-text-color)] lg:text-left">
              Entdecken Sie, wie Web2App Ihre Webseite nahtlos in eine mobile
              App integriert und so die Benutzerfreundlichkeit und
              Zugänglichkeit verbessert.
            </p>
            <div className="mb-12 flex items-center justify-center lg:items-start lg:justify-start">
              <Link
                href="/vorschau"
                className="items-center rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-semibold text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
              >
                Jetzt Vorschau ansehen
              </Link>
            </div>
            <div className="flex items-center pb-10">
              <Image
                src="https://media.gettyimages.com/id/1309489745/photo/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=K1pIuZ-758hZpczvQSLjxvyqeOwy5t5EklPn_ykBHfo="
                alt="Zufriedener Kunde"
                className="mr-4 h-[72px] w-[72px] rounded-full object-cover"
                data-landingsite-gallery-type="image"
                data-testimonial-image=""
                data-dont-replace=""
                data-media='{"id":"1309489745","src":"iStock","type":"image"}'
                width={72}
                height={72}
              />
              <div>
                <i
                  className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"
                  aria-hidden="true"
                ></i>
                <p className="mb-2 inline text-lg text-[var(--dark-text-color)]">
                  Web2App hat unsere Online-Präsenz revolutioniert, indem es uns
                  ermöglicht, unsere Webseite als mobile App zu erleben.
                </p>
                <i
                  className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"
                  aria-hidden="true"
                ></i>
                <p>
                  <span className="font-semibold text-[var(--dark-text-color)]">
                    Anna Müller
                  </span>
                  <span className="pl-2 font-semibold text-[var(--primary-color)]">
                    (Marketing-Managerin bei Innovatech)
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full lg:w-[55%] lg:pl-6">
            <Image
              src="https://cdni.iconscout.com/illustration/premium/thumb/mobile-app-development-5425148-4545844.png"
              alt="Hero"
              className="mt-8 max-h-[200px] lg:max-h-[500px] h-auto w-auto object-contain lg:mt-0"
              data-landingsite-gallery-type="illustration"
              data-seo-image=""
              data-media='{"id":"5542f160-d522-11ec-a698-0242ac140003","src":"iconscout","type":"illustration"}'
              width={512}
              height={512}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
