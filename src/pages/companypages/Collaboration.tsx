import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import PartnershipBenefits from "./PartnershipBenefits";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/sparkles";

const BenefitCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex flex-col items-center space-y-4">
      <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{icon}</span>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300 group-hover:text-white transition-colors text-center">{description}</p>
    </div>
  </motion.div>
);

const StepCard = ({ step, title, description }: { step: string; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex flex-col items-center space-y-4">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold">
        {step}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  </motion.div>
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
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <div className="flex flex-col items-center justify-start min-h-screen bg-black text-white pb-20">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Partner with Sylphora
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Join our ecosystem of innovation and collaborate with a leader in technology solutions.
            Together, we can create transformative experiences and drive business growth.
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transform transition-all duration-200 hover:scale-105"
          >
            Become a Partner
          </Button>
        </motion.div>
      </div>

      {/* Partnership Types Section */}
      <section className="w-full py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Partnership Opportunities</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover the various ways to collaborate with us and be part of our technology ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon="💻"
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
        </motion.div>
      </section>

      {/* Partnership Journey Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Partnership Journey</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A simple process to establish a successful collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard
              step="1"
              title="Apply"
              description="Submit your application through our partner application form."
            />
            <StepCard
              step="2"
              title="Evaluate"
              description="Our team evaluates potential synergies and collaboration opportunities."
            />
            <StepCard
              step="3"
              title="Onboard"
              description="Complete the partnership agreement and technical onboarding process."
            />
            <StepCard
              step="4"
              title="Collaborate"
              description="Work together to create value and achieve mutual business goals."
            />
          </div>
        </motion.div>
      </section>

      {/* Partnership Benefits Section */}
      <PartnershipBenefits />

      {/* Application Form Section */}
      <section ref={formSectionRef} className="w-full py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Become a Partner</h2>
            <p className="text-gray-300">
              Ready to explore partnership opportunities? Fill out the form below and our partnership team will get in touch with you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Website</label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Contact Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Partnership Type</label>
                <select
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Tell us about your company and partnership goals
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                required
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transform transition-all duration-200 hover:scale-105"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Collaboration;