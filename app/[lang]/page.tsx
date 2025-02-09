"use server";
import React from "react";
import "react-device-frameset/styles/marvel-devices.min.css";
import { Metadata } from "next";
import { getDictionary } from "@/app/[lang]/dictionaries.ts";
import { Footer } from "@/app/[lang]/footer.tsx";
import { CallToActionBottom } from "@/app/[lang]/call-to-action-bottom.tsx";
import { PricingPlans } from "@/app/[lang]/pricing-plans.tsx";
import { ThreeSteps } from "@/app/[lang]/three-steps.tsx";
import { Maximize } from "@/app/[lang]/maximize.tsx";
import { Transform } from "@/app/[lang]/transform.tsx";
import { FourSteps } from "@/app/[lang]/four-steps.tsx";
import { Hero } from "@/app/[lang]/hero.tsx";
import { Header } from "@/app/[lang]/header.tsx";
import { AppPreview } from "@/app/[lang]/app-preview.tsx";
import { ContactForm } from "@/app/[lang]/contact-form.tsx";

export async function getMetadata(): Promise<Metadata> {
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
        <Header />
        <Hero />
        <FourSteps />
        <Transform />
        <Maximize />
        <ThreeSteps />
        <PricingPlans />
        {/*<BlogPosts />*/}
        <CallToActionBottom />
        <AppPreview />
        <div className="my-20">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
