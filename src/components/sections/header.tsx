"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";

/**
 * Header component for the Claude website clone.
 * Implements a fixed navigation bar with a strict black and white color scheme,
 * as per the Modern Academic design direction.
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Asset validation: Providing the logo from the assets list
  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ChatGPT-Image-Dec-25-2025-06_44_39-PM-1767273747127.png";

  const navLinks = [
    { label: "Meet Claude", href: "#" },
    { label: "Platform", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Learn", href: "#" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full bg-white border-b border-border z-[100] h-[72px] md:h-[84px] flex items-center transition-all duration-300">
        <div className="container flex items-center justify-between max-w-[90rem] mx-auto px-6 lg:px-12 w-full">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="inline-block">
              <Image 
                src={logoUrl} 
                alt="Claude Logo" 
                width={120} 
                height={84}
                className="h-[64px] w-auto object-contain md:h-[72px]" 
                priority
              />
            </a>
          </div>

          {/* Desktop Menu & Actions */}
          <div className="flex items-center gap-8">
            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 text-[#666666] hover:text-[#111111] transition-colors text-[15px] font-medium leading-none py-4">
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a 
                href="https://claude.com/contact-sales"
                className="inline-flex items-center justify-center whitespace-nowrap bg-transparent text-[#666666] border border-[#e5e5e5] rounded-[10px] h-10 px-6 text-sm font-semibold hover:text-[#111111] hover:border-[#111111] transition-all duration-200 active:scale-[0.985]"
              >
                Contact sales
              </a>
              <button 
                className="inline-flex items-center justify-center whitespace-nowrap bg-[#111111] text-white rounded-[10px] h-10 px-6 text-sm font-semibold hover:bg-black transition-all duration-200 active:scale-[0.985]"
              >
                Try Claude
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#666666] hover:text-[#111111] transition-colors"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under the fixed header */}
      <div className="h-[72px] md:h-[84px]" />

      {/* Mobile Navigation Drawer (simplified for visual representation) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-white z-[90] lg:hidden p-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-lg font-medium text-[#111111] border-b border-[#e5e5e5] pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a 
                href="https://claude.com/contact-sales"
                className="flex items-center justify-center h-12 border border-[#e5e5e5] rounded-[10px] font-semibold text-[#111111]"
              >
                Contact sales
              </a>
              <button 
                className="flex items-center justify-center h-12 bg-[#111111] text-white rounded-[10px] font-semibold"
              >
                Try Claude
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}