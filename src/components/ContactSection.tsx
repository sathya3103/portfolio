"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import FadeIn from "./ui/FadeIn";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState("");

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!form.name.trim()) tempErrors.name = "Name is required";
    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!form.subject.trim()) tempErrors.subject = "Subject is required";
    if (!form.message.trim()) tempErrors.message = "Message content is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitResult("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "dc19421d-fa76-4423-b5e1-5aeb6d755352");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setSubmitResult(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setSubmitResult("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (submitResult) {
      setSubmitResult("");
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-16 flex flex-col justify-center relative z-30 border-t border-[#D7E2EA]/10">
      <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Contact Info Column */}
        <div className="lg:col-span-5 flex flex-col justify-start gap-10">
          <div className="flex flex-col">
            <FadeIn delay={0} y={30} className="mb-6">
              <h2 className="font-black uppercase tracking-tight hero-heading" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
                Contact
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} y={20} className="mb-10 max-w-sm">
              <p className="font-light text-sm sm:text-base text-[#D7E2EA]/75 leading-relaxed">
                Whether you want to discuss internships, collaborative projects, or just connect, feel free to drop a message!
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-6">
            {/* Email Card */}
            <FadeIn delay={0.2} y={20} className="flex items-center gap-4 p-4 rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5">
              <div className="p-3 rounded-xl bg-[#D7E2EA]/5 text-[#D7E2EA]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/50 font-mono">Email Address</span>
                <a href="mailto:nesarsathya@gmail.com" className="text-sm font-semibold hover:opacity-85 transition-opacity underline underline-offset-4">
                  nesarsathya@gmail.com
                </a>
              </div>
            </FadeIn>



            {/* Location Card */}
            <FadeIn delay={0.3} y={20} className="flex items-center gap-4 p-4 rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5">
              <div className="p-3 rounded-xl bg-[#D7E2EA]/5 text-[#D7E2EA]">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/50 font-mono">Location Base</span>
                <span className="text-sm font-semibold">
                  Chennai, Tamil Nadu
                </span>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <FadeIn delay={0.15} y={30} className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 sm:p-8 rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 relative overflow-hidden">
              
              {submitted && (
                <div className="absolute inset-0 bg-[#0C0C0C]/90 z-20 flex flex-col items-center justify-center text-center p-6 transition-all duration-300">
                  <CheckCircle className="w-16 h-16 text-[#D7E2EA] mb-4 animate-bounce" />
                  <h3 className="text-lg font-bold uppercase tracking-wider text-[#D7E2EA]">Message Sent!</h3>
                  <p className="text-xs text-[#D7E2EA]/70 mt-2 max-w-xs">
                    Thank you. Sathyanesar will get back to you as soon as possible.
                  </p>
                </div>
              )}

              {/* Name Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/60">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`px-4 py-3 rounded-xl border bg-transparent text-[#D7E2EA] transition-colors focus:outline-none focus:border-[#D7E2EA]/80 ${errors.name ? "border-red-500" : "border-[#D7E2EA]/15"}`}
                />
                {errors.name && <span className="text-[10px] font-mono text-red-500 uppercase tracking-wide mt-0.5">{errors.name}</span>}
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/60">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`px-4 py-3 rounded-xl border bg-transparent text-[#D7E2EA] transition-colors focus:outline-none focus:border-[#D7E2EA]/80 ${errors.email ? "border-red-500" : "border-[#D7E2EA]/15"}`}
                />
                {errors.email && <span className="text-[10px] font-mono text-red-500 uppercase tracking-wide mt-0.5">{errors.email}</span>}
              </div>

              {/* Subject Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/60">Subject Area</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`px-4 py-3 rounded-xl border bg-transparent text-[#D7E2EA] transition-colors focus:outline-none focus:border-[#D7E2EA]/80 ${errors.subject ? "border-red-500" : "border-[#D7E2EA]/15"}`}
                />
                {errors.subject && <span className="text-[10px] font-mono text-red-500 uppercase tracking-wide mt-0.5">{errors.subject}</span>}
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/60">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`px-4 py-3 rounded-xl border bg-transparent text-[#D7E2EA] transition-colors focus:outline-none focus:border-[#D7E2EA]/80 resize-none ${errors.message ? "border-red-500" : "border-[#D7E2EA]/15"}`}
                />
                {errors.message && <span className="text-[10px] font-mono text-red-500 uppercase tracking-wide mt-0.5">{errors.message}</span>}
              </div>

              {submitResult && (
                <p className="text-xs font-mono text-red-400 text-center tracking-wide mt-1">
                  {submitResult}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 py-3 rounded-xl bg-[#D7E2EA] hover:bg-white disabled:opacity-50 text-[#0C0C0C] font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending...." : "Send Message"}
                <Send className="w-3.5 h-3.5" />
              </button>

            </form>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
