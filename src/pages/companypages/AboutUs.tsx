import React from "react";
import PageTransition from "@/components/ui/PageTransition";

const AboutUs = () => {
  return (
    <PageTransition>
      <div className="w-full max-w-4xl mx-auto p-16 text-gray-900 dark:text-white">
        {/* Stylish Heading */}
        <div className="relative text-center mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            About Us
          </h1>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mt-2 rounded-full"></div>
        </div>

        {/* Mission Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-lg">
            We strive to deliver <strong>innovative tech solutions</strong> and consultancy services to businesses,
            helping them optimize operations and embrace <strong>digital transformation</strong>. Our goal is to
            establish a strong market presence by offering <strong>tailored solutions</strong> to clients across various industries.
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-lg">
            We envision becoming a <strong>trusted partner</strong> for businesses worldwide. By fostering long-term relationships,
            hiring top talent, staying ahead of tech trends, and ensuring financial sustainability,
            we aim to scale our services and expand into international markets.
          </p>
        </section>

        {/* Services Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
          <p className="text-lg mb-4">
            Our expertise spans a wide range of services including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Customized Software Development</li>
            <li>IT Consulting and Automation</li>
            <li>Cloud Computing Solutions</li>
            <li>Data Analytics and Business Intelligence</li>
            <li>Cybersecurity Services</li>
            <li>Strategic Advisory Services</li>
          </ul>
          <p className="text-lg mt-4">
            With a commitment to <strong>quality, innovation, and growth</strong>, we aim to empower businesses with
            transformative digital solutions and a strong foundation for long-term success.
          </p>
        </section>
      </div>
    </PageTransition>
  );
};

export default AboutUs;
