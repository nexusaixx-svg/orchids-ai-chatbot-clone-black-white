"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileText, BookOpen, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  id: string;
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
}

const AccordionItem = ({
  title,
  description,
  isOpen,
  onToggle,
  icon,
}: AccordionItemProps) => {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className="group flex w-full items-center py-4 text-left focus:outline-none"
      >
        <div className="flex flex-1 items-center">
          <span
            className={cn(
              "mr-3 transition-colors duration-200",
              isOpen ? "text-[#111111]" : "text-[#999999]"
            )}
          >
            {icon}
          </span>
          <h3
            className={cn(
              "font-serif text-xl sm:text-2xl transition-colors duration-200",
              isOpen
                ? "text-[#111111]"
                : "text-[#999999] group-hover:text-[#666666]"
            )}
          >
            {title}
          </h3>
        </div>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen
            ? "grid-rows-[1fr] opacity-100 mb-6"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-[#666666] text-lg leading-relaxed max-w-lg">
            {description}
          </p>
        </div>
      </div>
      <div className="w-full border-t-[0.5px] border-[#E5E5E5]" />
    </div>
  );
};

export default function FeaturesAccordion() {
  const [activeTab, setActiveTab] = useState("create");

  const features = [
    {
      id: "create",
      title: "Create with Claude",
      description:
        "Draft and iterate on websites, graphics, documents, and code alongside your chat with Artifacts.",
      icon: <FileText size={24} />,
    },
    {
      id: "knowledge",
      title: "Bring your knowledge",
      description:
        "Upload documents, PDFs, and data to Claude to get answers based on your own specialized content and context.",
      icon: <BookOpen size={24} />,
    },
    {
      id: "share",
      title: "Share and collaborate with your team",
      description:
        "Work together in shared projects, manage access, and scale AI assistance across your organization safely.",
      icon: <Users size={24} />,
    },
  ];

  return (
    <section id="features" className="bg-white py-24 md:py-36 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="font-serif text-[2.5rem] leading-tight text-[#111111] mb-6">
            Meet Claude
          </h2>
          <p className="text-[#666666] text-xl max-w-[768px] mx-auto balance leading-relaxed">
            Claude is a next generation AI assistant built by Anthropic and
            trained to be safe, accurate, and secure to help you do your best
            work.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[1000px]:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left Side: Illustration Placeholder */}
          <div className="relative group hidden min-[1000px]:block">
            <div className="rounded-[24px] bg-[#F4F4F2] w-full aspect-[4/3] relative overflow-hidden academic-shadow border-thin border-[#E5E5E5] pt-12 pl-12">
              <div className="bg-white w-full h-full rounded-tl-[20px] shadow-[0_0_15px_rgba(0,0,0,0.06)] border-t border-l border-[#E5E5E5] transition-transform duration-500 hover:scale-[1.01]">
                <div className="p-8">
                  {/* Visual placeholder content matching the "modern academic" feel */}
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-1.5 rounded-full bg-[#EDEDE9]" />
                    <div className="w-24 h-1.5 rounded-full bg-[#EDEDE9]" />
                  </div>
                  <div className="space-y-4">
                    <div className="w-full h-2 rounded-full bg-[#F4F4F2]" />
                    <div className="w-5/6 h-2 rounded-full bg-[#F4F4F2]" />
                    <div className="w-4/6 h-2 rounded-full bg-[#F4F4F2]" />
                  </div>
                  <div className="mt-12 grid grid-cols-2 gap-6">
                    <div className="aspect-video bg-[#F4F4F2] rounded-lg" />
                    <div className="aspect-video bg-[#F4F4F2] rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="flex flex-col w-full">
            <div className="border-t-[0.5px] border-[#E5E5E5]" />
            {features.map((feature) => (
              <AccordionItem
                key={feature.id}
                id={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                isOpen={activeTab === feature.id}
                onToggle={() => setActiveTab(feature.id)}
              />
            ))}
          </div>

          {/* Mobile Illustration (appears under the active item in real Claude site, simplified here) */}
          <div className="min-[1000px]:hidden w-full">
             <div className="rounded-[24px] bg-[#F4F4F2] w-full h-[300px] relative overflow-hidden border-thin border-[#E5E5E5] pt-8 pl-8 shadow-sm">
                <div className="bg-white w-full h-full rounded-tl-[20px] border-t border-l border-[#E5E5E5]" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}