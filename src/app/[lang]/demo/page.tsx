// app/demo/page.tsx
"use client";

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const DEMO_DATA = {
  title: "Request a 5R Assessment",
  subtitle: "Provide details about your upcoming corporate exit or footprint reduction, and our route intelligence team will prepare a custom ESG and commercial recovery analysis.",
};

export default function DemoPage() {
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    company: '',
    projectScope: 'office-move',
    squareFootage: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDemoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDemoForm({ ...demoForm, [e.target.name]: e.target.value });
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(demoForm),
      });

      if (response.ok) {
        alert("Assessment request received. Our team will contact you shortly.");
        setDemoForm({ name: '', email: '', company: '', projectScope: 'office-move', squareFootage: '' });
      } else {
        alert("There was an issue submitting your request. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="layout-wrapper flex flex-col justify-center min-h-screen">
      
      {/* Simple Header for navigation back to home */}
      <header className="site-header absolute top-0 w-full">
        <a href="/" className="flex items-center space-x-2 text-[#414141] hover:text-[#AF9066] font-medium transition">
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </a>
      </header>

      <section className="px-8 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="hero-title">{DEMO_DATA.title}</h1>
          <p className="hero-subtitle mb-10">{DEMO_DATA.subtitle}</p>
          
          <form onSubmit={handleDemoSubmit} className="contact-form p-8 bg-white rounded-xl border border-[#91968F]/30 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" value={demoForm.name} onChange={handleDemoChange} placeholder="Full Name" required className="form-input" />
              <input type="email" name="email" value={demoForm.email} onChange={handleDemoChange} placeholder="Work Email" required className="form-input" />
            </div>
            
            <input type="text" name="company" value={demoForm.company} onChange={handleDemoChange} placeholder="Company Name" required className="form-input mt-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <select name="projectScope" value={demoForm.projectScope} onChange={handleDemoChange} className="form-input text-[#414141]">
                <option value="office-move">Office Relocation</option>
                <option value="footprint-reduction">Footprint Reduction</option>
                <option value="liquidation">Liquidation / Exit</option>
                <option value="ongoing-governance">Ongoing 5R Governance</option>
              </select>
              
              <input type="text" name="squareFootage" value={demoForm.squareFootage} onChange={handleDemoChange} placeholder="Est. Square Footage" className="form-input" />
            </div>

            <button type="submit" disabled={isSubmitting} className="btn-submit mt-6 disabled:opacity-70 disabled:cursor-not-allowed">
              {isSubmitting ? "Processing..." : "Submit Request"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}