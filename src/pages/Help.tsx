import React from "react";

const Help = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center p-8 transition-colors duration-300">
      <header className="w-full bg-blue-600 dark:bg-blue-800 text-white p-4 text-center text-2xl font-bold">
        Help Section
      </header>

      <div className="max-w-4xl w-full mt-8 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
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
  );
};

export default Help;
