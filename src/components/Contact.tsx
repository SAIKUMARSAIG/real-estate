// import React from "react";

// import 

function Contact() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-black">Contact </span>
            <span className="underline decoration-black">With Us</span>
          </h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Ready to Make a Move? Let’s Build Your Future Together
          </p>
        </div>

        <form className="space-y-6">
          <div className="md:flex md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block text-sm text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">Your Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
