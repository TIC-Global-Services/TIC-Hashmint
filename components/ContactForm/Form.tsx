"use client";

import Image from "next/image";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'sonner'

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      // EmailJS configuration
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        "service_gssxpp2", // Replace with your EmailJS Service ID
        "template_dp5dfuk", // Replace with your EmailJS Template ID
        templateParams,
        'uG4FbbcJ9WTxrfIGb' 
      );

      if (response.status === 200) {
        setStatus("Submitted successfully!");
        toast.success('Demo Requested, Please wait for Sometime!')
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Submission failed. Please try again.");
      }
    } catch (error) {
      setStatus("Error submitting form. Please try again later.");
      console.error("EmailJS error:", error);
    }
  };

  return (
    <section id="contact" className="relative mx-7 rounded-xl my-10 max-w-[96vw] overflow-hidden">
      <Toaster richColors  position="top-center" />
      {/* Main background forest image */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/contact/contact_bg.png"
          alt="Forest with sunlight shining through trees"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Form Container */}
      <div className="relative max-w-3xl my-20 mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10">
        <h1 className="text-xl sm:text-2xl font-semibold text-center text-gray-800">Book a Demo</h1>
        <p className="mt-2 text-center text-sm sm:text-base text-gray-600 font-medium">
          Let’s collaborate – your next paper-inspired breakthrough starts here
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="firstName"
                className="uppercase text-xs font-semibold tracking-wide text-gray-700 pl-1"
              >
                First Name*
              </label>
              <input
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="bg-gray-100 py-2.5 px-4 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="lastName"
                className="uppercase text-xs font-semibold tracking-wide text-gray-700 pl-1"
              >
                Last Name*
              </label>
              <input
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Smith"
                className="bg-gray-100 py-2.5 px-4 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                type="text"
                required
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="uppercase text-xs font-semibold tracking-wide text-gray-700 pl-1"
              >
                Email*
              </label>
              <input
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="bg-gray-100 py-2.5 px-4 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                type="email"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="uppercase text-xs font-semibold tracking-wide text-gray-700 pl-1"
              >
                Phone Number
              </label>
              <input
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 8739320"
                className="bg-gray-100 py-2.5 px-4 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                type="tel"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="uppercase text-xs font-semibold tracking-wide text-gray-700 pl-1"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave your message"
              className="bg-gray-100 py-2.5 px-4 text-sm rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              required
            />
          </div>

          {/* Submit Button and Status */}
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              className="bg-yellow-500 text-white text-sm font-semibold py-2.5 px-8 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              disabled={status === "Submitting..."}
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;