import React from "react";
import { Clock3, Globe, Smartphone } from "lucide-react";
import Link from "next/link";
import "react-device-frameset/styles/marvel-devices.min.css";
import { AppPreview } from "@/app/app-preview";
import { Feature } from "@/app/feature";
import { ContactForm } from "@/app/contact-form";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AppGen - Turn Your Website into a Mobile App",
  description:
    "No coding required. Just provide your URL and we'll do the rest.",
};

const SaasLandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">AppGen</div>
          <div className="space-x-4">
            <Link href="/" className="text-gray-500 hover:text-blue-600">
              Home
            </Link>
            <Link href="#about" className="text-gray-500 hover:text-blue-600">
              About
            </Link>{" "}
            <Link href="#contact" className="text-gray-500 hover:text-blue-600">
              Contact
            </Link>
            <Link href="#start">
              <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full hover:bg-blue-700">
                Get Started
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-20 flex flex-col md:flex-row gap-3 justify-between">
          <div className="w-full md:w-3/5">
            <h1 className="text-4xl mb-6 text-black font-serif font-thin italic">
              Unlock the Power of Your Website: Transform it into a Mobile App.
            </h1>
            <p className="text-gray-600 mb-8">
              Effortlessly create a mobile app from your existing website. Our
              intuitive platform makes it easy to capture the essence of your
              web presence and bring it to life as a mobile app.
            </p>
            <div className="space-x-3">
              <Link href="#start">
                <button className="bg-gray-800 text-gray-300 text-lg px-8 py-3 rounded-full hover:bg-gray-900 transition duration-300 uppercase">
                  Get Started
                </button>
              </Link>
              <Link href="#about">
                <button className="bg-gray-100 text-gray-700 text-lg px-8 py-3 rounded-full hover:bg-gray-200 transition duration-300 uppercase border border-gray-500">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="self-end md:w-2/5 w-full">
            <Image
              src="/hand.png"
              width={700}
              height={900}
              alt="Hand holding the mobile phone"
              className="w-full"
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-black">
            See Your Website Transform!
          </h2>
          <p className="text-gray-600 mb-4">
            Watch as we turn your existing website into a sleek, user-friendly
            mobile app. Our AI-powered technology ensures a seamless transition
            from web to mobile.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Maintain your brand identity</li>
            <li>Optimize for mobile user experience</li>
            <li>Add mobile-specific features</li>
          </ul>

          <section id="features" className="my-20">
            <h2 className="text-3xl font-semibold text-center mb-12 text-black">
              Why Choose AppGen?
            </h2>
            <div className="grid grid-cols-1 md:grid-rows-3 gap-8">
              <Feature
                icon={<Globe size={48} className="text-blue-600" />}
                title="Website to App"
                description="Convert any website into a fully functional mobile app with ease."
              />
              <Feature
                icon={<Clock3 size={48} className="text-blue-600" />}
                title="Quick Turnaround"
                description="Get your custom mobile app delivered in just 3 days."
              />
              <Feature
                icon={<Smartphone size={48} className="text-blue-600" />}
                title="Mobile Optimized"
                description="Ensure a great user experience with mobile-first design principles."
              />
            </div>
          </section>
        </section>

        <AppPreview />

        <section id="how-it-works" className="my-20">
          <h2 className="text-3xl font-semibold text-center mb-12 text-black">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Provide Your URL
              </h3>
              <p className="text-gray-600">
                Enter your website URL and some basic information about your
                business.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                We Get to Work
              </h3>
              <p className="text-gray-600">
                Our team of experts and AI technology start creating your mobile
                app.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Receive Your App
              </h3>
              <p className="text-gray-600">
                In just 3 days, your custom mobile app is ready for launch!
              </p>
            </div>
          </div>
        </section>

        <section className="text-center bg-blue-600 text-white py-12 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">Ready to Go Mobile?</h2>
          <p className="text-xl mb-8">
            Transform your online presence with a custom mobile app today!
          </p>
          <Link href="#start">
            <button className="bg-white text-blue-600 text-lg px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
              Get Started Now
            </button>
          </Link>
        </section>

        <div id="start" />
        <div className="my-20">
          <ContactForm />
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 AppGen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SaasLandingPage;
