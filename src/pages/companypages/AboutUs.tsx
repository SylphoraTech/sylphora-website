import React from "react";
import PageTransition from "@/components/ui/PageTransition";

const AboutUs = () => {
  return (
    <PageTransition>
      <div className="w-[800px] mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <div className="space-y-6">
          <p className="text-lg">
            We aim to establish a company offering{" "}
            <strong>innovative tech solutions</strong> and consultancy services to
            businesses, helping them optimize operations and achieve digital
            transformation. Our goal is to build a strong market presence through
            tailored solutions for clients across various industries.
          </p>
          <p className="text-lg">
            By fostering long-term relationships and ensuring repeat business, we
            plan to build a reputation as a{" "}
            <strong>trusted partner.</strong> We will focus on hiring skilled
            talent, staying ahead of technological trends, and maintaining
            financial sustainability. Over time, we aspire to expand our services
            to international markets and scale our business for broader growth.
          </p>
          <p className="text-lg">
            The company shall specialize in developing customized software
            solutions, IT consulting, automation, cloud computing, data analytics,
            cybersecurity, and other emerging technologies. Additionally, it will
            offer strategic advisory services to clients across various
            industries, fostering long-term partnerships and ensuring sustainable
            growth. With a focus on skilled talent, technological advancements,
            and financial stability, the company aims to expand its market
            presence both domestically and internationally, scaling its operations
            to drive broader business growth.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutUs;
