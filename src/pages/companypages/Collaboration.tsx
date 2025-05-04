import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import PartnershipBenefits from "./PartnershipBenefits"; // You can remove this if unused

const BenefitCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="bg-[#0a2742] text-white rounded-lg p-6 shadow-md space-y-2 text-center">
    <div className="text-3xl">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Collaboration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    phone: "",
    partnershipType: "",
    message: "",
  });

  const formSectionRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      company: "",
      website: "",
      phone: "",
      partnershipType: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-black text-white px-4 py-12 space-y-12">
      {/* Blue Section */}
      <div
        className="text-white rounded-lg p-10 max-w-6xl w-full text-center space-y-6 shadow-lg"
        style={{ backgroundColor: "#004687" }}
      >
        <h1 className="text-4xl font-bold">Partner with Sylphora</h1>
        <p className="text-lg">
          Join our ecosystem of innovation and collaborate with a leader in technology solutions. <br />
          Together, we can create transformative experiences and drive business growth.
        </p>
        <Button
          className="bg-white text-blue-900 hover:bg-gray-100 font-semibold"
          onClick={scrollToForm}
        >
          Become a Partner
        </Button>
      </div>

      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Partnership Opportunities</h2>
        <p className="text-lg text-gray-300">
          Discover the various ways to collaborate with us and be part of our technology ecosystem
        </p>
      </div>

      {/* Opportunity Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        <BenefitCard
          icon="💼"
          title="Technology Partners"
          description="For Software & Hardware Providers: Joint solution development, API integration support, co-marketing opportunities, technical enablement."
        />
        <BenefitCard
          icon="🚀"
          title="Solution Partners"
          description="For Consultants & Agencies: Sales and implementation training, competitive commissions, marketing resources, dedicated partner manager."
        />
        <BenefitCard
          icon="🔬"
          title="Research Partners"
          description="For Academic & Research Institutions: Joint research initiatives, data sharing, academic licensing programs, industry-academia knowledge exchange."
        />
      </div>

      {/* Partnership Journey Section */}
      <div className="w-full text-white px-4 py-12 flex flex-col items-center space-y-8">
        <h2 className="text-3xl font-bold text-center">Partnership Journey</h2>
        <p className="text-lg text-gray-300 text-center max-w-2xl">
          A simple process to establish a successful collaboration
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {[
            {
              step: "1",
              title: "Apply",
              description: "Submit your application through our partner application form.",
            },
            {
              step: "2",
              title: "Evaluate",
              description: "Our team evaluates potential synergies and collaboration opportunities.",
            },
            {
              step: "3",
              title: "Onboard",
              description: "Complete the partnership agreement and technical onboarding process.",
            },
            {
              step: "4",
              title: "Collaborate",
              description: "Work together to create value and achieve mutual business goals.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700 text-center flex flex-col items-center space-y-4"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Benefits Section */}
      <div className="w-full text-white text-center px-4 py-12">
        <h2 className="text-3xl font-bold mb-2">Partnership Benefits</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Why partner with Sylphora? Discover the advantages of our partnership program
        </p>
      </div>

      {/* Partnership Benefits Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full mx-auto px-4">
        <BenefitCard
          icon="💼"
          title="New Revenue Streams"
          description="Expand your offerings and unlock new business opportunities through our partnership program."
        />
        <BenefitCard
          icon="🚀"
          title="Market Expansion"
          description="Reach new markets and customer segments through our global presence and network."
        />
        <BenefitCard
          icon="🔧"
          title="Technical Support"
          description="Access dedicated technical support and resources for seamless integration."
        />
        <BenefitCard
          icon="📈"
          title="Growth Acceleration"
          description="Accelerate your business growth through joint marketing and sales initiatives."
        />
        <BenefitCard
          icon="🔍"
          title="Market Insights"
          description="Gain valuable market insights and stay ahead with emerging technology trends."
        />
        <BenefitCard
          icon="🔒"
          title="Competitive Edge"
          description="Differentiate your business with cutting-edge technology solutions from Sylphora."
        />
      </div>

      {/* Become a Partner Section with Ref */}
      <div ref={formSectionRef} className="w-full bg-[#003366] text-white text-center px-4 py-12 space-y-6">
        <h2 className="text-3xl font-bold">Become a Partner</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Ready to explore partnership opportunities? Fill out the form below and our partnership team will get in touch with you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-1">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="px-4 py-2 text-black rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Company Website</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="px-4 py-2 text-black rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Contact Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="px-4 py-2 text-black rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="px-4 py-2 text-black rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="px-4 py-2 text-black rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Partnership Type</label>
              <select
                name="partnershipType"
                value={formData.partnershipType}
                onChange={handleInputChange}
                className="px-4 py-2 text-black rounded-lg"
                required
              >
                <option value="">Select Partnership Type</option>
                <option value="technology">Technology Partner</option>
                <option value="solution">Solution Partner</option>
                <option value="research">Research Partner</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <label className="mb-1">Tell us about your company and partnership goals</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="px-4 py-2 text-black rounded-lg"
              required
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold mt-4"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Collaboration;
