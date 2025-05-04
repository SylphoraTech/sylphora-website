import React from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";

const PartnershipBenefits = () => {
  const benefits = [
    {
      icon: "💼",
      title: "New Revenue Streams",
      description: "Expand your offerings and unlock new business opportunities through our partnership program.",
    },
    {
      icon: "🚀",
      title: "Market Expansion",
      description: "Reach new markets and customer segments through our global presence and network.",
    },
    {
      icon: "🔧",
      title: "Technical Support",
      description: "Access dedicated technical support and resources for seamless integration.",
    },
    {
      icon: "📈",
      title: "Growth Acceleration",
      description: "Accelerate your business growth through joint marketing and sales initiatives.",
    },
    {
      icon: "🔍",
      title: "Market Insights",
      description: "Gain valuable market insights and stay ahead with emerging technology trends.",
    },
    {
      icon: "🔒",
      title: "Competitive Edge",
      description: "Differentiate your business with cutting-edge technology solutions from Sylphora.",
    },
  ];

  return (
    <PageTransition>
      <div className="space-y-12 mt-16">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Partnership Benefits</h2>
          <p className="text-lg text-gray-300">
            Why partner with Sylphora? Discover the advantages of our partnership program
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full mx-auto px-4 mt-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#0a2742] text-white rounded-lg p-6 shadow-md space-y-2 text-center hover:shadow-xl hover:bg-[#0c2e4f]"
            >
              <div className="text-3xl">{benefit.icon}</div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default PartnershipBenefits;