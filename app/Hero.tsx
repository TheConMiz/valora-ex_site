import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-[var(--background)] pt-20 pb-16 md:pt-32 md:pb-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Core Messaging */}
          <div className="flex flex-col justify-center max-w-2xl">
            <span className="text-[var(--brand-camel)] font-bold tracking-wider uppercase text-sm mb-4 block">
              EXTEND VALUE BEYOND EXIT
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[var(--foreground)] leading-tight mb-6">
              Make every asset transition more visible, traceable and better prepared.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              ValoraEX connects asset visibility, route readiness, execution evidence and transparent project information through a structured 5R workflow.
            </p>
            <p className="text-base font-bold text-[var(--foreground)] mb-10">
              Visible assets. Transparent information. Structured evidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex justify-center items-center px-6 py-3 border-2 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] text-base font-bold hover:bg-transparent hover:text-[var(--foreground)] transition-all"
              >
                Request a Demonstration
              </Link>
              <Link 
                href="/contact"
                className="inline-flex justify-center items-center px-6 py-3 border-2 border-gray-300 text-[var(--foreground)] text-base font-bold hover:border-[var(--brand-camel)] hover:text-[var(--brand-camel)] transition-all"
              >
                Talk to Us
              </Link>
            </div>
          </div>

          {/* Right Column: Custom Workflow Illustration */}
          <div className="hidden lg:flex flex-col justify-center pl-12 border-l border-gray-200">
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--brand-camel)] before:to-gray-200">
              
              {/* Workflow Steps */}
              {[
                "Asset Visibility",
                "Readiness",
                "Route Consideration",
                "Execution Evidence",
                "Close-Out"
              ].map((step, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[var(--brand-camel)] bg-[var(--background)] text-[var(--brand-camel)] font-bold text-sm z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm">
                    {index + 1}
                  </div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded border border-gray-200 bg-white shadow-sm text-[var(--foreground)] font-bold text-center">
                    {step}
                  </div>
                </div>
              ))}
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}