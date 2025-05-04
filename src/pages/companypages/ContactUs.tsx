import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900 border border-neutral-800 p-8 rounded-lg shadow-lg">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
          <form action="#" method="POST" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                aria-label="Your name"
                className="w-full rounded-md p-3 bg-zinc-800 border border-neutral-700 placeholder-neutral-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                aria-label="Your email"
                className="w-full rounded-md p-3 bg-zinc-800 border border-neutral-700 placeholder-neutral-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone #"
                aria-label="Phone number"
                className="w-full rounded-md p-3 bg-zinc-800 border border-neutral-700 placeholder-neutral-400"
              />
              <input
                type="text"
                name="company"
                placeholder="Company name"
                aria-label="Company name"
                className="w-full rounded-md p-3 bg-zinc-800 border border-neutral-700 placeholder-neutral-400"
              />
            </div>
            <textarea
              name="message"
              placeholder="Write your message"
              required
              aria-label="Message"
              className="w-full rounded-md p-3 bg-zinc-800 border border-neutral-700 placeholder-neutral-400 min-h-[100px]"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-neutral-300 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="mb-4 text-neutral-300">
            We're open for suggestions or just to have a chat
          </p>
          <p className="mb-2">📍 39/1B Pune, 411038</p>
          <p className="mb-2">📞 +91 1234567890</p>
          <p className="mb-2">
            📧{" "}
            <a
              href="mailto:Sylphora.pvt@gmail.com"
              className="text-blue-400 underline"
            >
              Sylphora.pvt@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
