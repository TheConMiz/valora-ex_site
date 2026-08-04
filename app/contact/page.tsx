'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [enquiryType, setEnquiryType] = useState('');

  // Determine if project-specific fields should be shown
  const isProjectEnquiry = enquiryType === 'Discuss an FF&E Project';

  return (
    <div className="flex flex-col w-full">
      
      {/* Page Header */}
      <section className="bg-[var(--accent-teal)] text-white pt-12 md:pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">
            Talk to Us
          </h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Whether you are planning an asset transition, exploring governance readiness, or looking to collaborate within the ValoraEX ecosystem.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="content-section py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-medium mb-6">Company Information</h2>
              <div className="flex flex-col gap-4 text-sm text-[var(--text-muted)]">
                <div>
                  <strong className="block text-[var(--foreground)] mb-1 label-priority">Legal Entities</strong>
                  <span>ValoraEX Limited</span><br />
                  <span>延昇智能生態有限公司</span>
                </div>
                
                <div>
                  <strong className="block text-[var(--foreground)] mb-1 label-priority">Telephone</strong>
                  <a href="tel:+85246285775" className="hover:text-[var(--accent-teal)] transition-colors">
                    +852 4628 5775
                  </a>
                </div>

                <div>
                  <strong className="block text-[var(--foreground)] mb-1 label-priority">General Enquiries</strong>
                  <a href="mailto:office@valoraex.com" className="hover:text-[var(--accent-teal)] transition-colors">
                    office@valoraex.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 border border-gray-200 rounded-sm">
              <h3 className="font-bold text-sm mb-2">Headquarters</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Hong Kong SAR
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name (Required) */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-sm font-bold text-[var(--foreground)] label-priority">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="fullName" 
                    required
                    className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-teal)] focus:ring-1 focus:ring-[var(--accent-teal)] transition-all bg-white"
                  />
                </div>

                {/* Work Email (Required) */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="workEmail" className="text-sm font-bold text-[var(--foreground)] label-priority">
                    Work Email *
                  </label>
                  <input 
                    type="email" 
                    id="workEmail" 
                    required
                    className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-teal)] focus:ring-1 focus:ring-[var(--accent-teal)] transition-all bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company or Organisation (Required) */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-bold text-[var(--foreground)] label-priority">
                    Company or Organisation *
                  </label>
                  <input 
                    type="text" 
                    id="company" 
                    required
                    className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-teal)] focus:ring-1 focus:ring-[var(--accent-teal)] transition-all bg-white"
                  />
                </div>

                {/* Job Title (Optional) */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="jobTitle" className="text-sm font-medium text-[var(--foreground)]">
                    Job Title <span className="text-[var(--text-muted)] font-normal">(Optional)</span>
                  </label>
                  <input 
                    type="text" 
                    id="jobTitle" 
                    className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-teal)] focus:ring-1 focus:ring-[var(--accent-teal)] transition-all bg-white"
                  />
                </div>
              </div>

              {/* Enquiry Type (Required) */}
              <div className="flex flex-col gap-2">
                <label htmlFor="enquiryType" className="text-sm font-bold text-[var(--foreground)] label-priority">
                  Enquiry Type *
                </label>
                <select 
                  id="enquiryType" 
                  required
                  value={enquiryType}
                  onChange={(e) => setEnquiryType(e.target.value)}
                  className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-teal)] focus:ring-1 focus:ring-[var(--accent-teal)] transition-all bg-white appearance-none"
                >
                  <option value="" disabled>Select an option...</option>
                  <option value="Discuss an FF&E Project">Discuss an FF&E Project</option>
                  <option value="Discuss Governance Readiness">Discuss Governance Readiness</option>
                  <option value="Explore Ecosystem Collaboration">Explore Ecosystem Collaboration</option>
                  <option value="Institutional or University Cooperation">Institutional or University Cooperation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Conditional Fields: Project Location & Timing (Optional) */}
              {isProjectEnquiry && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 border border-gray-200 rounded-sm fade-enter-active">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="projectLocation" className="text-sm font-medium text-[var(--foreground)]">
                      Project Location <span className="text-[var(--text-muted)] font-normal">(Optional)</span>
                    </label>
                    <input 
                      type="text" 
                      id="projectLocation" 
                      className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-teal)] focus:ring-1 focus:ring-[var(--accent-teal)] transition-all bg-white"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="expectedTiming" className="text-sm font-medium text-[var(--foreground)]">
                      Expected Timing <span className="text-[var(--text-muted)] font-normal">(Optional)</span>
                    </label>
                    <input 
                      type="text" 
                      id="expectedTiming" 
                      placeholder="e.g., Q3 2024"
                      className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-teal)] focus:ring-1 focus:ring-[var(--accent-teal)] transition-all bg-white"
                    />
                  </div>
                </div>
              )}

              {/* Brief Description (Required) */}
              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm font-bold text-[var(--foreground)] label-priority">
                  Brief Description *
                </label>
                <textarea 
                  id="description" 
                  rows={4}
                  required
                  className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-teal)] focus:ring-1 focus:ring-[var(--accent-teal)] transition-all bg-white resize-y"
                ></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Submit Enquiry
                </button>
              </div>
              
              <small className="disclaimer mt-2">
                By submitting this form, you agree to our Privacy Policy regarding the processing of your personal data.
              </small>

            </form>
          </div>

        </div>
      </section>
    </div>
  );
}