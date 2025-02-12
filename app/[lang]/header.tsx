import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <header className="code-section border-b" id="sqe1yy9">
      <nav className="container mx-auto py-10">
        <div className="flex items-center justify-between relative">
          <div className="pl-6 text-xl font-bold">
            <Link
              href="/"
              className="text-[var(--primary-color)] [font-family:var(--font-family-heading)] lg:text-3xl"
            >
              <span>Web2App</span>
            </Link>
          </div>
          <button
            id="mobile-menu-button"
            data-collapse-toggle="navigation-menu"
            type="button"
            className="pr-6 text-[var(--dark-text-color)] lg:hidden"
            aria-controls="navigation-menu"
            aria-expanded="false"
            aria-label="Navigationsmenü"
          >
            <i
              className="fas fa-regular fa-bars feather feather-menu"
              aria-hidden="true"
            ></i>
          </button>
          <div
            id="navigation-menu"
            className="hidden absolute left-0 top-full mt-4 w-full bg-white pb-4 lg:static lg:mt-0 lg:flex flex-1 lg:items-center lg:justify-between lg:bg-transparent lg:pb-0"
          >
            <ul className="flex flex-col lg:px-6 lg:flex-row flex-1 lg:justify-center lg:items-center lg:space-y-0 lg:space-x-8">
              {/*<li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0 group relative">*/}
              {/*  <button className="text-[var(--dark-text-color)] flex w-full cursor-pointer flex-row items-center gap-1 underline-offset-8 lg:justify-center">*/}
              {/*    <span>Dienstleistungen</span>*/}
              {/*    <i*/}
              {/*      className="fas fa-regular fa-chevron-down ml-1 transition-['rotate'] lg:group-hover:rotate-[180deg]"*/}
              {/*      aria-hidden="true"*/}
              {/*    ></i>*/}
              {/*  </button>*/}
              {/*<div className="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">*/}
              {/*  <div className="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">*/}
              {/*    <a*/}
              {/*      className="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"*/}
              {/*      href="/dienstleistungen"*/}
              {/*    >*/}
              {/*      Dienstleistungen*/}
              {/*    </a>*/}
              {/*    <a*/}
              {/*      className="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"*/}
              {/*      href="#start"*/}
              {/*    >*/}
              {/*      Probe App*/}
              {/*    </a>*/}
              {/*    <a*/}
              {/*      className="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"*/}
              {/*      href="/vorschau"*/}
              {/*    >*/}
              {/*      Vorschau*/}
              {/*    </a>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*</li>*/}
              {/*<li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0 group relative">*/}
              {/*  <button className="text-[var(--dark-text-color)] flex w-full cursor-pointer flex-row items-center gap-1 underline-offset-8 lg:justify-center">*/}
              {/*    <span>Über Uns</span>*/}
              {/*    <i*/}
              {/*      className="fas fa-regular fa-chevron-down ml-1 transition-['rotate'] lg:group-hover:rotate-[180deg]"*/}
              {/*      aria-hidden="true"*/}
              {/*    ></i>*/}
              {/*  </button>*/}
              {/*  <div className="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">*/}
              {/*    <div className="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">*/}
              {/*      <a*/}
              {/*        className="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"*/}
              {/*        href="/uber-uns"*/}
              {/*      >*/}
              {/*        Über Uns*/}
              {/*      </a>*/}
              {/*      <a*/}
              {/*        className="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"*/}
              {/*        href="/kundenbewertungen"*/}
              {/*      >*/}
              {/*        Kundenbewertungen*/}
              {/*      </a>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</li>*/}
              {/*<li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0 group relative">*/}
              {/*  <button className="text-[var(--dark-text-color)] flex w-full cursor-pointer flex-row items-center gap-1 underline-offset-8 lg:justify-center">*/}
              {/*    <span>Ressourcen</span>*/}
              {/*    <i*/}
              {/*      className="fas fa-regular fa-chevron-down ml-1 transition-['rotate'] lg:group-hover:rotate-[180deg]"*/}
              {/*      aria-hidden="true"*/}
              {/*    ></i>*/}
              {/*  </button>*/}
              {/*  <div className="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">*/}
              {/*    <div className="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">*/}
              {/*      <a*/}
              {/*        className="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"*/}
              {/*        href="/faqs"*/}
              {/*      >*/}
              {/*        FAQs*/}
              {/*      </a>*/}
              {/*      <a*/}
              {/*        className="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"*/}
              {/*        href="/blog"*/}
              {/*      >*/}
              {/*        Blog*/}
              {/*      </a>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</li>*/}
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <Link href="/" className="text-[var(--dark-text-color)]">
                  Home
                </Link>
              </li>
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <Link href="#how" className="text-[var(--dark-text-color)]">
                  Wie funktioniert es?
                </Link>
              </li>
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <Link href="#pricing" className="text-[var(--dark-text-color)]">
                  Preisen
                </Link>
              </li>
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <Link href="#contact" className="text-[var(--dark-text-color)]">
                  Kontakt
                </Link>
              </li>
            </ul>
            <div className="flex flex-col mt-4 lg:flex-row items-center space-y-4 lg:mt-0 lg:space-y-0 lg:space-x-4 text-sm lg:text-base">
              {/*<a*/}
              {/*  href="/login"*/}
              {/*  className="px-4 py-2 text-[var(--dark-text-color)]"*/}
              {/*>*/}
              {/*  Anmelden*/}
              {/*</a>*/}
              <Link
                href="#start"
                className="rounded bg-[var(--primary-button-bg-color)] px-4 py-2 text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)]"
              >
                Jetzt Starten
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
