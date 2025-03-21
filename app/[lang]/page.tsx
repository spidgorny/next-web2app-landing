"use server";
import React from "react";
import "react-device-frameset/styles/marvel-devices.min.css";
import { getDictionary } from "@/app/[lang]/dictionaries.ts";
import { Footer } from "@/app/[lang]/footer.tsx";
import { PricingPlans } from "@/app/[lang]/pricing-plans.tsx";
import { Maximize } from "@/app/[lang]/maximize.tsx";
import { WhichProblem } from "@/app/[lang]/which-problem.tsx";
import { HowItWorks } from "@/app/[lang]/how-it-works.tsx";
import { Hero } from "@/app/[lang]/hero.tsx";
import { Header } from "@/app/[lang]/header.tsx";
import { ContactForm } from "@/app/[lang]/contact-form.tsx";
import { AppPreview } from "@/app/[lang]/app-preview.tsx";
import { DictionaryProvider } from "@/components/localization-context.tsx";

export async function generateMetadata() {
  return {
    title: "AppGen - Turn Your Website into a Mobile App",
    description:
      "No coding required. Just provide your URL and we'll do the rest.",
  };
}

export default async function SaasLandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  console.log({ lang });
  const dict = await getDictionary(lang); // en

  return (
    <div className="min-h-screen bg-white">
      <style>{`:root { --accent-color: #50E3C2; --accent2-color: #B8E986; --accent3-color: #FF7F66; --accent4-color: #FFD700; --primary-color: #4A90E2; --dark-text-color: #333333; --gray-text-color: #898989; --button-padding-x: 16px; --button-padding-y: 10px; --font-family-body: &#x27;Rubik&#x27;, sans-serif; --light-text-color: #FFFFFF; --dark-border-color: #4F4F4F; --light-border-color: #E0E0E0; --font-family-heading: &#x27;Nunito&#x27;, sans-serif; --button-rounded-radius: 8px; --dark-background-color: #1F1F1F; --light-background-color: #EAF2FB; --medium-background-color: #C9DDF4; --primary-button-bg-color: #4A90E2; --primary-button-text-color: #FFFFFF; --secondary-button-bg-color: #F5A623; --secondary-button-text-color: #FFFFFF; --primary-button-hover-bg-color: #3A7ABC; --primary-button-hover-text-color: #FFFFFF; --secondary-button-hover-bg-color: #D4871E; --secondary-button-hover-text-color: #FFFFFF;}`}</style>
      <style>
        {`
        .hovered-element {
        outline: #3871E0 dashed 2px;
      }

        .clicked-element {
        outline: #3871E0 solid 2px;
      }

        .clicked-code-section {
        border: #3B82F6 solid 2px;
        }
      `}
      </style>

      <div className="[font-family:var(--font-family-body)]">
        <DictionaryProvider dictionary={dict}>
          <Header />
          <Hero />
          <HowItWorks />
          <WhichProblem />
          <AppPreview />
          <Maximize />
          {/*<ThreeSteps />*/}
          <PricingPlans />
          {/*<BlogPosts />*/}
          {/*<CallToActionBottom />*/}
          <ContactForm />
          <Footer />
        </DictionaryProvider>
      </div>
    </div>
  );
}
