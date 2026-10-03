"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LOCATIONS = [
  {
    city: "Hyderabad Headquarters",
    address:
      "Unit 206, Manjeera Majestic Commercial, Opposite JNTU, Next to Lulu Mall, Kukatpally, Hyderabad 500072",
  },
];

import { BorderBeam } from "@/components/smoothui/border-beam";
import { MagneticButton } from "@/components/smoothui/magnetic-button";
import { ShineText } from "@/components/smoothui/shine-text";

export function Contact() {
  const { toast } = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !phone.trim()) {
      toast({
        title: "Required Fields Missing",
        description: "Please enter your first name and phone number.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for reaching out. A dedicated counsellor will contact you within 4 hours.",
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex mb-3">
            <ShineText
              text="⚡ FAST RESPONSE WITHIN 4 HOURS"
              className="text-xs font-bold uppercase tracking-wider text-[#0878E8] bg-[#0878E8]/10 px-4 py-1.5 rounded-full"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D3A]">
            Start with a free counselling call
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Tell us where you want to land. We reply within 4 hours with a personalised counselling slot, recommended tests, and a rough budget map.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: contact info */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 ring-1 ring-gray-100 hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-[#0878E8]/20 text-[#071D3A] flex items-center justify-center mb-3">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Phone
                </h3>
                <p className="mt-1 text-[#071D3A] font-medium">
                  <a href="tel:+919549543898" className="hover:underline">
                    +91 95495 43898
                  </a>
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 ring-1 ring-gray-100 hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-[#0878E8]/20 text-[#071D3A] flex items-center justify-center mb-3">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Email
                </h3>
                <p className="mt-1 text-[#071D3A] font-medium">
                  <a href="mailto:greenroots.tech@outlook.com" className="hover:underline">
                    greenroots.tech@outlook.com
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 ring-1 ring-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-[#071D3A]" />
                <h3 className="text-lg font-bold text-[#071D3A]">Our Location</h3>
              </div>
              <div className="space-y-4">
                {LOCATIONS.map((loc, i) => (
                  <div key={`loc-${i}`}>
                    <h4 className="text-sm font-semibold text-[#071D3A]">
                      {loc.city}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      {loc.address}
                    </p>
                  </div>
                ))}
                <div className="pt-3 border-t border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Office Hours
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Monday – Saturday: 9:00 AM – 7:00 PM <br />
                    Sunday: By appointment / counselling
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex">
                  <MagneticButton
                    href="https://wa.me/919549543898?text=Hi%20Greenroots!%20I%27d%20like%20to%20know%20more%20about%20your%20training%20programs."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0878E8] hover:text-[#065cb5] bg-[#0878E8]/10 px-4 py-2 rounded-lg"
                  >
                    Chat with us on WhatsApp (+91 95495 43898) →
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>

          {/* Right: contact form with SmoothUI BorderBeam */}
          <div className="relative bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 p-6 lg:p-8 overflow-hidden">
            <BorderBeam size={180} duration={8} colorFrom="#0878E8" colorTo="#00A86B" />
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0878E8] text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0878E8] text-gray-900"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0878E8] text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0878E8] text-gray-900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message or goals here"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0878E8] resize-none text-gray-900"
                />
              </div>
              <div className="pt-2">
                <MagneticButton
                  asChild
                  className="w-full block"
                >
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-gradient-to-r from-[#0878E8] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0766c6] hover:to-[#00a3cc] shadow-lg shadow-[#0878E8]/25 transition-all disabled:opacity-70 cursor-pointer text-center"
                  >
                    {submitting ? "Sending..." : "Get Free Counselling →"}
                  </button>
                </MagneticButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
