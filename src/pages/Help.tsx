import React from "react";
import PageTransition from "../components/ui/PageTransition"; 

const Help = () => {
  return (
    <PageTransition>
      <div className="container mx-auto p-8 max-w-4xl">
        {/* Title Section */}
        <header className="text-center mt-10 mb-10 relative">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Help Center
          </h1>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mt-2 rounded-full"></div>
        </header>

        {/* Help Content */}
        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">How Can We Assist You?</h2>
          <p className="mt-4 text-lg">Here are some common questions and answers:</p>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-semibold">How do I contact support?</h3>
              <p>If you need help, please contact us via the contact page.</p>
            </div>
            <div>
              <h3 className="font-semibold">How do I reset my password?</h3>
              <p>
                You can reset your password by clicking on the "Forgot Password" link on the login
                page.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Where can I find tutorials?</h3>
              <p>Check our tutorials section for step-by-step guides on how to use our product.</p>
            </div>
          </div>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white py-2 px-6 rounded-full transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </PageTransition>
  );
};

export default Help;
