import React, { ReactNode } from "react";
import { Smartphone, Globe, Clock3 } from "lucide-react";
import Link from "next/link";

const AppPreview = () => (
  <div className="bg-gray-200 rounded-lg p-4 shadow-lg">
    <div className="bg-white rounded-lg overflow-hidden shadow-inner">
      <div className="bg-blue-500 text-white p-2 text-center">App Header</div>
      <div className="p-4">
        <div className="bg-gray-300 h-8 w-3/4 rounded mb-2"></div>
        <div className="bg-gray-300 h-4 w-full rounded mb-2"></div>
        <div className="bg-gray-300 h-4 w-full rounded mb-2"></div>
        <div className="bg-gray-300 h-8 w-1/2 rounded"></div>
      </div>
    </div>
  </div>
);

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: ReactNode;
  description: ReactNode;
}) => (
  <div className="flex flex-col items-center text-center">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2 text-black">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SaasLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-md sticky top-0">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">AppGen</div>
          <div className="space-x-4">
            <Link
              href="#features"
              className="text-gray-600 hover:text-blue-600"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-blue-600"
            >
              How It Works
            </Link>
            <Link href="/start">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Get Started
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 text-black">
            Turn Your Website into a Mobile App in 3 Days
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            No coding required. Just provide your URL and we&apos;ll do the
            rest.
          </p>
          <Link href="/start">
            <button className="bg-blue-600 text-white text-lg px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
              Start Your App Journey
            </button>
          </Link>
        </section>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">
                See Your Website Transform!
              </h2>
              <p className="text-gray-600 mb-4">
                Watch as we turn your existing website into a sleek,
                user-friendly mobile app. Our AI-powered technology ensures a
                seamless transition from web to mobile.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Maintain your brand identity</li>
                <li>Optimize for mobile user experience</li>
                <li>Add mobile-specific features</li>
              </ul>
            </div>
            <AppPreview />
          </div>
        </section>

        <section id="features" className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12 text-black">
            Why Choose AppGen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        <section id="how-it-works" className="mb-20">
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
          <Link href="/start">
            <button className="bg-white text-blue-600 text-lg px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
              Get Started Now
            </button>
          </Link>
        </section>
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
