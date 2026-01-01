"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

const PricingPlans = () => {
  const [activeTab, setActiveTab] = useState<"individual" | "team">("individual");

  const plans = [
    {
      name: "Free",
      description: "Try Claude",
      price: "$0",
      subtext: "Free for everyone",
      features: [
        "Chat with Claude on web, iOS, and Android",
        "Write, edit, and create content",
        "Analyze text and upload images",
        "Generate code and visualize data",
        "Get web search results inside chat",
      ],
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="50" r="2.5" fill="currentColor" />
          <path d="M32 47.5V36" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="33.5" r="2.5" fill="currentColor" />
          <path d="M34.5 33.5H46" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="48.5" cy="33.5" r="2.5" fill="currentColor" />
          <path d="M29.5 33.5H18" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="15.5" cy="33.5" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Pro",
      description: "For everyday productivity",
      price: "$17",
      subtext: "Per month with annual subscription discount ($200 billed up front). $20 if billed monthly.",
      features: [
        "More usage than Free*",
        "Access more Claude models",
        "Unlimited Projects to organize chats",
        "Unlock deep Research tools",
        "Use extended thinking for complex work",
        "Connect Google Workspace: email, calendar, and docs",
        "Integrations with remote MCP",
        "Includes Claude Code",
      ],
      extraLabel: "Everything in Free, plus:",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="50" r="2.5" fill="currentColor" />
          <path d="M32 47.5V36" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="33.5" r="2.5" fill="currentColor" />
          <path d="M34.5 33.5H43" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="45.5" cy="33.5" r="2.5" fill="currentColor" />
          <path d="M45.5 31V24" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="45.5" cy="21.5" r="2.5" fill="currentColor" />
          <path d="M29.5 33.5H18.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="33.5" r="2.5" fill="currentColor" />
          <path d="M16 31V24" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="21.5" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Max",
      description: "5–20x more usage than Pro",
      price: "From $100",
      subtext: "Per month billed monthly",
      features: [
        "Choose 5x or 20x more usage than Pro*",
        "Higher output limits for all tasks",
        "Early access to advanced Claude features",
        "Priority access at high traffic times",
        "Includes Claude Code",
      ],
      extraLabel: "Everything in Pro, plus:",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="50" r="2.5" fill="currentColor" />
          <path d="M32 47.5V36" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="33.5" r="2.5" fill="currentColor" />
          <path d="M34.5 33.5H43" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="45.5" cy="33.5" r="2.5" fill="currentColor" />
          <path d="M48 33.5H54" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="56.5" cy="33.5" r="2.5" fill="currentColor" />
          <path d="M45.5 31V24" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="45.5" cy="21.5" r="2.5" fill="currentColor" />
          <path d="M29.5 33.5H21" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18.5" cy="33.5" r="2.5" fill="currentColor" />
          <path d="M16 33.5H10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="7.5" cy="33.5" r="2.5" fill="currentColor" />
          <path d="M18.5 31V24" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18.5" cy="21.5" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section id="pricing" className="bg-background py-24 md:py-36">
      <div className="container mx-auto px-6 max-w-[90rem]">
        <div className="text-center mb-8">
          <h2 className="font-serif text-[2.5rem] leading-[1.2] text-foreground">Explore plans</h2>
        </div>

        {/* Segmented Control */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-[#f4f4f2] p-1 rounded-[10px] relative">
            <button
              onClick={() => setActiveTab("individual")}
              className={`relative z-10 h-9 px-6 text-sm font-semibold transition-colors duration-200 rounded-lg ${
                activeTab === "individual" ? "text-foreground bg-white shadow-sm" : "text-[#999999] hover:text-[#666666]"
              }`}
            >
              Individual
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`relative z-10 h-9 px-6 text-sm font-semibold transition-colors duration-200 rounded-lg ${
                activeTab === "team" ? "text-foreground bg-white shadow-sm" : "text-[#999999] hover:text-[#666666]"
              }`}
            >
              Team & Enterprise
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch justify-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col rounded-3xl py-8 px-8 bg-white border border-[#e5e5e5] hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-200 h-full"
            >
              <div className="mb-6 text-foreground">{plan.icon}</div>
              
              <div className="mb-6">
                <h3 className="font-sans text-[24px] font-semibold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-base text-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-4">
                <div className="text-[24px] font-semibold text-foreground">{plan.price}</div>
                <div className="mt-1 text-sm text-[#666666] leading-relaxed">
                  {plan.subtext}
                </div>
              </div>

              <button className="mt-4 mb-8 w-full h-11 bg-[#111111] text-white font-semibold rounded-[10px] text-base hover:scale-x-[1.005] hover:scale-y-[1.015] active:scale-[0.985] transition-transform duration-150 ease-out flex items-center justify-center">
                Try Claude
              </button>

              <div className="border-t border-[#e5e5e5] pt-8">
                {plan.extraLabel && (
                  <p className="font-semibold text-sm mb-4 text-[#111111]">
                    {plan.extraLabel}
                  </p>
                )}
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-3 items-start">
                      <div className="shrink-0 mt-0.5">
                        <Check className="w-5 h-5 text-[#111111]" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm md:text-base leading-relaxed text-[#666666]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-[#999999]">
            Prices shown do not include applicable tax.{" "}
            <a href="#" className="underline underline-offset-2 hover:text-[#666666]">
              *Usage limits apply.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;