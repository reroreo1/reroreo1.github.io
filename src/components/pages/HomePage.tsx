"use client";

import React from 'react';
import { FaLinkedin, FaInstagram, FaPinterest } from 'react-icons/fa';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {

  return (
    <div className="min-h-screen bg-[#F3F3E0] dark:bg-[#183B4E] font-radley overflow-auto">
      <div className="max-w-6xl mx-auto px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <div className="text-right">
              <h1 className="text-4xl md:text-5xl text-[#183B4E] dark:text-[#F3F3E0] font-normal leading-tight">
                I&apos;m Miki, a product<br />designer from<br />NYC.<span className="ml-1">✌️</span>
              </h1>
            </div>

            <div className="mt-auto pt-16 md:pt-24">
              {/* Dog illustration - simplified to match reference */}
              <svg width="110" height="300" viewBox="0 0 110 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#183B4E] dark:text-[#F3F3E0]">
                {/* Dog head */}
                <path d="M50 20C50 20 40 10 50 5C60 0 80 0 90 5C100 10 90 20 90 20" stroke="currentColor" strokeWidth="1"/>
                {/* Dog eye */}
                <circle cx="60" cy="10" r="2" fill="currentColor"/>
                {/* Dog ear */}
                <path d="M40 15C40 15 30 5 45 0" stroke="currentColor" strokeWidth="1"/>
                {/* Dog nose/mouth */}
                <path d="M65 15C65 15 70 18 75 15" stroke="currentColor" strokeWidth="1"/>
                {/* Dog long neck */}
                <path d="M70 20C70 20 80 60 70 120C60 180 70 240 70 270" stroke="currentColor" strokeWidth="1"/>
                {/* Dog legs */}
                <path d="M70 270L50 290" stroke="currentColor" strokeWidth="1"/>
                <path d="M70 270L90 290" stroke="currentColor" strokeWidth="1"/>
              </svg>

              {/* Social links */}
              <div className="flex space-x-5 mt-6">
                <a href="https://www.linkedin.com/in/rezzahra/" target="_blank" rel="noopener noreferrer" className="text-[#183B4E] dark:text-[#F3F3E0]">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#183B4E] dark:text-[#F3F3E0]">
                  <FaInstagram size={18} />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-[#183B4E] dark:text-[#F3F3E0]">
                  <FaPinterest size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-7 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-base font-medium text-[#183B4E] dark:text-[#F3F3E0] mb-6">TL;DR</h2>
              <p className="text-[#183B4E] dark:text-[#F3F3E0] mb-6 text-base leading-relaxed">
                I spend most of my time maintaining a solid caffeine buzz and looking for dogs shaped like
                potatoes or piggies. Spotting a soup or a meatball is 100 points. Dogs are perfect in every
                way, however, if they&apos;re very yappy (like chihuahuas), you must train the ability to bark.
              </p>
              <p className="text-[#183B4E] dark:text-[#F3F3E0] mb-6 text-base leading-relaxed">
                Further, I feel that improperly named foods are a missed opportunity. &quot;Eggplant&quot; is one of
                the worst offenders (of second place). Some other things that distress me include: speaking
                before thinking, animals wearing real gems, sitting on the bed, the beach, sticks with empty
                pockets (lowest socks?), people who don&apos;t let you get off the train before stepping in, and pizza
                that has no structural integrity.
              </p>
              <p className="text-[#183B4E] dark:text-[#F3F3E0] text-base leading-relaxed">
                Things that don&apos;t vex me? Podcasts, writing for pleasure, reading for self-improvement, the
                critically acclaimed film &quot;The Room,&quot; and many others. I&apos;m an over thinker—not a
                pessimist—and a designer from Queens, living and working in Manhattan.
              </p>
            </div>

            <div className="mt-auto pt-12">
              <div className="flex space-x-6">
                <button onClick={() => onNavigate('about')} className="text-[#183B4E] dark:text-[#F3F3E0] hover:underline">
                  EN
                </button>
                <button onClick={() => onNavigate('contact')} className="text-[#183B4E] dark:text-[#F3F3E0] hover:underline">
                  FR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
