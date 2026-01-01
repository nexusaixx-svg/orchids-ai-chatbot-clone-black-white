"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t-[0.5px] border-border-300 first:border-t-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left group transition-all duration-200"
      >
        <span className="text-lg md:text-xl font-normal text-text-100 font-sans tracking-tight leading-snug">
          {question}
        </span>
        <Plus
          className={cn(
            "h-5 w-5 shrink-0 text-text-100 transition-transform duration-300 ease-in-out",
            isOpen && "rotate-45"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-text-300 text-base md:text-[1.125rem] leading-relaxed max-w-2xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "What is Claude and how does it work?",
      answer:
        "Claude is a next-generation AI assistant developed by Anthropic. It uses advanced large language model technology to understand, process, and generate human-like text, code, and analysis while being designed with constitutional AI principles to be helpful, honest, and harmless.",
    },
    {
      question: "What should I use Claude for?",
      answer:
        "Claude excels at complex reasoning, creative writing, coding, summarizing long documents, and brainstorming. You can use it to draft emails, analyze data sets, translate languages, or even act as a pair programmer for software development.",
    },
    {
      question: "How much does it cost to use?",
      answer:
        "Claude offers a free tier for casual use. For heavy users and teams, Claude Pro and Team plans are available with increased usage limits and early access to new features. Pricing typically starts around $20 per month for individual Pro subscriptions, with tiered pricing for enterprise organizations.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-36" id="faq">
      <div className="container px-6 mx-auto">
        <div className="content-narrow text-center mb-12">
          <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-text-100 mb-12">
            Frequently asked questions
          </h2>
        </div>
        
        <div className="max-w-[768px] mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
          <div className="border-t-[0.5px] border-border-300" />
        </div>
      </div>
    </section>
  );
}