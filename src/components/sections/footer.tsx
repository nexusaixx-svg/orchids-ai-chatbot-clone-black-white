import React from 'react';
import Image from 'next/image';
import { Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Claude", href: "#" },
        { name: "Claude Code", href: "#" },
        { name: "Max plan", href: "#" },
        { name: "Team plan", href: "#" },
        { name: "Enterprise plan", href: "#" },
        { name: "Download app", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Log in", href: "#" },
      ]
    },
    {
      title: "Features",
      links: [
        { name: "Claude in Chrome", href: "#" },
        { name: "Claude in Excel", href: "#" },
        { name: "Claude in Slack", href: "#" },
        { name: "Skills", href: "#" },
      ]
    },
    {
      title: "Models",
      links: [
        { name: "Opus", href: "#" },
        { name: "Sonnet", href: "#" },
        { name: "Haiku", href: "#" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "AI agents", href: "#" },
        { name: "Code modernization", href: "#" },
        { name: "Coding", href: "#" },
        { name: "Customer support", href: "#" },
        { name: "Education", href: "#" },
        { name: "Financial services", href: "#" },
        { name: "Government", href: "#" },
        { name: "Life sciences", href: "#" },
        { name: "Nonprofits", href: "#" },
      ]
    },
    {
      title: "Claude Developer Platform",
      links: [
        { name: "Overview", href: "#" },
        { name: "Developer docs", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Regional compliance", href: "#" },
        { name: "Amazon Bedrock", href: "#" },
        { name: "Google Cloud's Vertex AI", href: "#" },
        { name: "Console login", href: "#" },
      ]
    },
    {
      title: "Learn",
      links: [
        { name: "Blog", href: "#" },
        { name: "Claude partner network", href: "#" },
        { name: "Connectors", href: "#" },
        { name: "Courses", href: "#" },
        { name: "Customer stories", href: "#" },
        { name: "Engineering at Anthropic", href: "#" },
        { name: "Events", href: "#" },
        { name: "Powered by Claude", href: "#" },
        { name: "Service partners", href: "#" },
        { name: "Startups program", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Use cases", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Anthropic", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Economic Futures", href: "#" },
        { name: "Research", href: "#" },
        { name: "News", href: "#" },
        { name: "Responsible Scaling Policy", href: "#" },
        { name: "Security and compliance", href: "#" },
        { name: "Transparency", href: "#" },
      ]
    },
    {
      title: "Help and security",
      links: [
        { name: "Availability", href: "#" },
        { name: "Status", href: "#" },
        { name: "Support center", href: "#" },
      ]
    },
    {
      title: "Terms and policies",
      links: [
        { name: "Privacy choices", href: "#" },
        { name: "Privacy policy", href: "#" },
        { name: "Responsible disclosure policy", href: "#" },
        { name: "Terms of service: Commercial", href: "#" },
        { name: "Terms of service: Consumer", href: "#" },
        { name: "Usage policy", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-[#000000] text-[#FFFFFF] py-20 px-6 font-sans">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
          {/* Logo and Copyright Section */}
          <div className="flex flex-col justify-between lg:w-1/5 min-w-[200px]">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-8 h-8 fill-current" 
                  aria-hidden="true"
                >
                  <path d="M12 0l2.5 7.5L22 10l-7.5 2.5L12 20l-2.5-7.5L2 10l7.5-2.5L12 0z" />
                </svg>
                <span className="text-2xl font-serif font-medium tracking-tight">Claude</span>
              </div>
            </div>

            <div className="mt-auto pt-12 lg:pt-0">
              <div className="text-[14px] font-bold text-[#FFFFFF] uppercase tracking-wider mb-1">
                BY ANTHROP\C
              </div>
              <div className="text-[12px] text-[#999999] mb-6">
                © 2025 ANTHROPIC PBC
              </div>
              <div className="flex gap-6 mt-4">
                <a href="#" className="text-[#999999] hover:text-[#FFFFFF] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#999999] hover:text-[#FFFFFF] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#999999] hover:text-[#FFFFFF] transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#999999] hover:text-[#FFFFFF] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8">
            {/* Products Group */}
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="text-[13px] text-[#999999] font-medium mb-4">Products</h4>
                <ul className="space-y-2.5">
                  {footerLinks[0].links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[14px] text-[#FFFFFF] hover:text-[#999999] transition-colors">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[13px] text-[#999999] font-medium mb-4">Features</h4>
                <ul className="space-y-2.5">
                  {footerLinks[1].links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[14px] text-[#FFFFFF] hover:text-[#999999] transition-colors">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[13px] text-[#999999] font-medium mb-4">Models</h4>
                <ul className="space-y-2.5">
                  {footerLinks[2].links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[14px] text-[#FFFFFF] hover:text-[#999999] transition-colors">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solutions Group */}
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="text-[13px] text-[#999999] font-medium mb-4">Solutions</h4>
                <ul className="space-y-2.5">
                  {footerLinks[3].links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[14px] text-[#FFFFFF] hover:text-[#999999] transition-colors">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[13px] text-[#999999] font-medium mb-4">Claude Developer Platform</h4>
                <ul className="space-y-2.5">
                  {footerLinks[4].links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[14px] text-[#FFFFFF] hover:text-[#999999] transition-colors">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Learn & Company Group */}
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="text-[13px] text-[#999999] font-medium mb-4">Learn</h4>
                <ul className="space-y-2.5">
                  {footerLinks[5].links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[14px] text-[#FFFFFF] hover:text-[#999999] transition-colors">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[13px] text-[#999999] font-medium mb-4">Company</h4>
                <ul className="space-y-2.5">
                  {footerLinks[6].links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[14px] text-[#FFFFFF] hover:text-[#999999] transition-colors">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Help & Terms Group */}
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="text-[13px] text-[#999999] font-medium mb-4">Help and security</h4>
                <ul className="space-y-2.5">
                  {footerLinks[7].links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[14px] text-[#FFFFFF] hover:text-[#999999] transition-colors">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[13px] text-[#999999] font-medium mb-4">Terms and policies</h4>
                <ul className="space-y-2.5">
                  {footerLinks[8].links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[14px] text-[#FFFFFF] hover:text-[#999999] transition-colors">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;