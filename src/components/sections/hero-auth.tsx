"use client";

import React from 'react';
import Image from 'next/image';

const HeroAuthSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[85vh] py-12 px-4 bg-background">
      <div className="w-full max-w-3xl flex flex-col items-center">
        {/* Headline Section */}
        <div className="text-center mb-8 select-none">
          <h1 className="font-serif text-[3.5rem] leading-[1.05] md:text-[5rem] text-primary tracking-tight">
            Impossible?<br />Possible.
          </h1>
          <h2 className="mt-4 text-lg md:text-xl text-primary font-normal font-sans tracking-tight">
            The AI for problem solvers
          </h2>
        </div>

        {/* Authentication Card */}
        <div className="w-full max-w-[448px] p-7 border-thin border-border rounded-[2rem] bg-card shadow-[0_4px_24px_rgba(0,0,0,0.04),0_16px_32px_rgba(0,0,0,0.02)] flex flex-col items-center">
          <div className="w-full flex flex-col gap-4">
            {/* Google Login Button */}
            <button 
              className="group relative flex items-center justify-center w-full h-11 px-5 rounded-[0.6rem] border-thin border-border bg-white hover:bg-[#f9f9f9] transition-all duration-150 active:scale-[0.985] font-semibold text-primary text-[15px]" 
              data-testid="login-with-google"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbfc676-e5bb-452c-8051-8f13730b8ead-claude-ai/assets/svgs/google-1.svg" 
                alt="Google logo" 
                width={16} 
                height={16} 
                className="mr-2"
              />
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center w-full my-1">
              <div className="flex-grow border-t border-transparent"></div>
              <span className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider px-2">or</span>
              <div className="flex-grow border-t border-transparent"></div>
            </div>

            {/* Email Login Form */}
            <form className="w-full flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="w-full">
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-11 px-4 rounded-[0.6rem] border border-border bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-text-500 text-primary text-[16px]"
                  data-testid="email"
                />
              </div>

              <button 
                type="submit"
                className="relative flex items-center justify-center w-full h-11 px-5 rounded-[0.6rem] bg-primary text-primary-foreground font-semibold text-[15px] transition-transform duration-150 hover:scale-[1.005] active:scale-[0.985] overflow-hidden after:absolute after:inset-0 after:bg-[radial-gradient(at_bottom,rgba(255,255,255,0.15),transparent)] after:opacity-0 hover:after:opacity-100"
                data-testid="continue"
              >
                Continue with email
              </button>
            </form>

            {/* Disclaimer */}
            <div className="mt-2">
              <p className="text-[12px] leading-[1.45] text-muted-foreground text-center">
                By continuing, you acknowledge Anthropic’s{' '}
                <a 
                  href="https://www.anthropic.com/legal/privacy" 
                  className="underline underline-offset-[3px] decoration-[#999999] hover:decoration-primary transition-colors"
                >
                  Privacy Policy
                </a>{' '}
                and agree to get occasional product update and promotional emails.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAuthSection;