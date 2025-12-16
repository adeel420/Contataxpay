"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

import { serviceInvoicing } from "@/app/data/Data";
import { IoIosArrowUp } from "react-icons/io";

const faqItems = [
  {
    id: 1,
    question: "1. How long does company formation take?",
    answer:
      "Ja, Sie können bestehende Daten aus verschiedenen Formaten importieren. Wir unterstützen CSV, Excel und direkte Datenbankverbindungen.",
  },
  {
    id: 2,
    question: "2. What documents are required?",
    answer:
      "Nein, es gibt keine Mindestvertragslaufzeit. Sie können Ihr Abonnement jederzeit monatlich kündigen.",
  },
  {
    id: 3,
    question: "3. Can I change my business type later?",
    answer:
      "Die ELSTER-Integration ermöglicht einen nahtlosen Datenaustausch mit dem deutschen Steuersystem. Ihre Daten werden automatisch im richtigen Format übertragen.",
  },
  {
    id: 4,
    question: "4. Do you handle tax registration as well?",
    answer:
      "Ja, Sie können Ihrem Steuerberater gezielt Zugriffsrechte erteilen. Die Berechtigungen können jederzeit angepasst oder widerrufen werden.",
  },
  {
    id: 5,
    question: "5. Is it possible to pause or close my company?",
    answer:
      "Unsere OCR-Technologie erreicht eine Genauigkeit von über 98%. Die KI-gestützte Erkennung wird kontinuierlich verbessert und lernt mit jeder Verwendung.",
  },
];

const ServicesPage = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-transparent font-inter">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-32 lg:pb-20 min-h-[520px] sm:min-h-[560px] lg:min-h-[600px]">
        {/* Background Image (Desktop / Tablet only) */}
        <Image
          src={assets.one}
          alt="Services Background"
          fill
          className="object-cover hidden md:block -z-20"
          priority
        />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Heading */}
          <h1 className="text-[16px] sm:text-[16px] md:text-[40px] lg:text-[48px] font-inter font-normal md:font-bold text-[#111827] mb-4 leading-tight">
            Company Formation & Amendments
          </h1>

          {/* Subheading */}
          <p className="text-[16px] hidden md:block sm:text-[16px] md:text-[18px] font-normal md:font-semibold text-[#111827] mb-5">
            Clear, compliant, and hassle-free setup & updates for your business.
          </p>

          {/* Description */}
          <p className="max-w-[90%] hidden md:block sm:max-w-[80%] md:max-w-[720px] mx-auto text-[14px] sm:text-[15px] md:text-[16px] text-gray-500 mb-8 sm:mb-10 leading-relaxed">
            We help entrepreneurs and companies establish, modify, and
            streamline their legal structure with complete accuracy and expert
            guidance.
          </p>
          <p className="max-w-[90%] block md:hidden sm:max-w-[80%] md:max-w-[720px] mx-auto text-[16px] sm:text-[15px] md:text-[16px] text-gray-500 mb-8 sm:mb-10 leading-relaxed">
            We help you register your company, make amendments, and provide
            guidance to make the right choice for your future company or LLC.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button className="w-full sm:w-auto bg-[#3b82f6] cursor-pointer hover:bg-[#2563eb] text-white px-8 py-3.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
              Get Professional Support
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            <button className="w-full sm:w-auto bg-white text-[#2563EB] cursor-pointer px-8 py-3.5 rounded-lg font-medium hover:shadow-lg transition-all border border-gray-100 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),4px_4px_15px_-3px_#2563EB]">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Services Offered Section */}
      <div className="py-0 md:py-16 bg-white">
        <div className="w-full ">
          <div className="text-center mb-16 hidden md:block">
            <h2 className="text-3xl lg:text-[40px] font-semibold md:text-4xl text-[#111827]">
              Services Offered
            </h2>
            <p className="mt-2 text-gray-500 text-lg lg:text-[18px] font-normal">
              Following services your way , We got you
            </p>
          </div>

          {/* Service 1: Company / Sole Trader Formation */}
          <div className="mb-20">
            <h3 className="text-2xl lg:text-[40px] hidden md:block md:text-3xl font-normal text-center mb-8 text-[#111827]">
              1. Company / Sole Trader Formation
            </h3>
            <div className="bg-[#e9eefc] rounded-3xl lg:rounded-[40px] px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-14 lg:py-16">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-14 lg:gap-20">
                {/* Image Side */}
                <div className="w-full lg:w-[40%] flex justify-center">
                  <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={assets.service1}
                      alt="Company Formation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-center text-center space-y-6 md:space-y-8">
                  <h1 className="text-[16px] text-start font-normal text-[#155DFC] block md:hidden ">
                    1. Company / Sole Trader Formation
                  </h1>

                  {/* Desktop Text */}
                  <p className="text-[#111827] hidden md:block text-base sm:text-lg leading-relaxed max-w-2xl">
                    Start your business the right way—fast, compliant, and fully
                    organized. We handle all documentation, registration steps,
                    and legal requirements for a smooth launch.
                  </p>

                  <p className="text-[#111827] hidden md:block text-base sm:text-lg leading-relaxed max-w-2xl">
                    Launch your business with confidence. We prepare all legal
                    documents, handle registrations, verify compliance, and
                    guide you through every administrative step. Your company is
                    set up correctly from day one—no delays, no errors, no
                    stress.
                  </p>

                  {/* Mobile Text */}
                  <p className="text-[#111827] block md:hidden text-[14px] text-start sm:text-lg leading-relaxed max-w-2xl">
                    Registering a company can be daunting, but not with us. We
                    guide you through each step, ensuring all documents are
                    correctly filed s, and your company is operational in no
                    time.
                  </p>

                  <div className="pt-2 md:pt-4">
                    <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 sm:px-8 py-3 rounded-lg font-medium shadow-md transition-colors">
                      Register My Company
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services 2*/}
      <div className=" bg-white">
        <div className="w-full ">
          {/* Service 2: */}
          <div className="mb-20">
            <h3 className="text-2xl hidden md:block lg:text-[40px] md:text-3xl font-normal text-center mb-8 text-[#111827]">
              2. Business Structure Modifications
            </h3>
            <div className="bg-[#e9eefc] rounded-[40px] lg:h-[542px] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center w-[90%] mx-auto gap-12 lg:gap-20 ">
                {/* Text Side */}
                <div className="w-full lg:w-[70%] space-y-8 text-center lg:text-center items-center justify-center">
                  <h1 className="text-[16px] text-start font-normal text-[#155DFC] block md:hidden ">
                    2. Business Structure Modifications
                  </h1>

                  {/* Desktop Text */}
                  <p className="text-[#111827] hidden md:block text-lg leading-relaxed font-[18px]">
                    Update your company details effortlessly. From address
                    changes to ownership updates, we ensure everything is
                    legally compliant.
                  </p>
                  <p className="text-[#111827] hidden md:block text-lg leading-relaxed font-[18px]">
                    When your business evolves, your legal documents should too.
                    We manage all changes—address updates, new business
                    activities, ownership transfers—and ensure they are
                    officially recorded with zero complications. Everything
                    remains compliant, updated, and future-proof.
                  </p>

                  {/* Mobile Text */}
                  <p className="text-[#364153] block md:hidden text-[14px] text-start sm:text-lg leading-relaxed max-w-2xl">
                    Companies evolve, and sometimes your business structure
                    needs to change. Whether it's updating shareholder
                    information, we handle the paperwork and legal filings
                    seamlessly.
                  </p>

                  <div className="pt-4">
                    <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-3.5 rounded-lg font-medium shadow-md transition-colors cursor-pointer">
                      Update My Company
                    </button>
                  </div>
                </div>
                {/* Image Side */}
                <div className="w-full lg:w-[40%] flex justify-center">
                  <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={assets.service2}
                      alt="Company Formation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services 3*/}
      <div className=" bg-white">
        <div className="w-full ">
          <div className="text-center mb-16"></div>

          {/* Service 3 */}
          <div className="mb-20">
            <h3 className="text-2xl hidden md:block lg:text-[40px] md:text-3xl font-normal text-center mb-8 text-[#111827]">
              3. Company Suspension or Closure
            </h3>
            <div className="bg-[#e9eefc] rounded-[40px] lg:h-[542px] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex flex-col lg:flex-row items-center w-[90%] mx-auto gap-12 lg:gap-20 ">
                {/* Image Side */}
                <div className="w-full lg:w-[40%] flex justify-center">
                  <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={assets.service1}
                      alt="Company Formation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-[70%]    space-y-8 text-center lg:text-center items-center justify-center">
                  <h1 className="text-[16px] text-start font-normal text-[#155DFC] block md:hidden ">
                    3. Company Suspension or Closure
                  </h1>

                  {/* Desktop text */}
                  <p className="text-[#111827] text-lg hidden md:block leading-relaxed font-[18px]">
                    Pause or close your company without stress. We manage all
                    legal and administrative processes efficiently and
                    accurately.
                  </p>
                  <p className="text-[#111827] hidden md:block text-lg leading-relaxed font-[18px]">
                    Pausing or closing a company can be complicated. We take
                    over the full legal and administrative process, from
                    paperwork and notifications to official deregistration. You
                    stay compliant, avoid penalties, and complete the process
                    quickly and professionally.
                  </p>

                  {/* Mobile Text */}
                  <p className="text-[#364153] block md:hidden text-[14px] text-start sm:text-lg leading-relaxed max-w-2xl">
                    If you need to temporarily halt operations or dissolve your
                    company, we'll ensure the process complies with all legal
                    requirements and is handled with minimal stress.
                  </p>

                  <div className="pt-4">
                    <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-3.5 rounded-lg font-medium shadow-md transition-colors cursor-pointer">
                      Update My Company
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services 4*/}
      <div className=" bg-white">
        <div className="w-full ">
          {/* Service 4: */}
          <div className="mb-20">
            <h3 className="text-2xl hidden md:block lg:text-[40px] md:text-3xl font-normal text-center mb-8 text-[#111827]">
              4. Legal Advisory on Business Structure
            </h3>
            <div className="bg-[#e9eefc] rounded-[40px] lg:h-[542px] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center w-[90%] mx-auto gap-12 lg:gap-20 ">
                {/* Text Side */}
                <div className="w-full lg:w-[70%]    space-y-8 text-center lg:text-center items-center justify-center">
                  <h1 className="text-[16px] text-start font-normal text-[#155DFC] block md:hidden ">
                    4. Legal Advisory on Business Structure
                  </h1>

                  {/* Desktop Text */}
                  <p className="text-[#111827] hidden md:block text-lg leading-relaxed font-[18px]">
                    Not sure which company type fits best? We guide you to the
                    safest and most tax-efficient structure for your goals.
                  </p>
                  <p className="text-[#111827] hidden md:block text-lg leading-relaxed font-[18px]">
                    Choosing the right structure affects taxes, liability,
                    compliance, and long-term growth. We evaluate your goals and
                    advise whether PFA, SRL, sole trader, or partnership is the
                    safest and most cost-efficient option. Make the right
                    decision from the start.
                  </p>

                  {/* Mobile Text */}
                  <p className="text-[#364153] block md:hidden text-[14px] text-start sm:text-lg leading-relaxed max-w-2xl">
                    Not sure whether to register as a sole trader, LLC, or
                    corporation? Our experts provide tailored advice based on
                    your business goals, tax considerations, and operational
                  </p>
                  <div className="pt-4">
                    <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-3.5 rounded-lg font-medium shadow-md transition-colors cursor-pointer">
                      Get Legal Advice
                    </button>
                  </div>
                </div>
                {/* Image Side */}
                <div className="w-full lg:w-[40%] flex justify-center">
                  <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={assets.service2}
                      alt="Company Formation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services 5*/}
      <div className=" bg-white">
        <div className="w-full ">
          <div className="text-center mb-16"></div>

          {/* Service 5*/}
          <div className="mb-20">
            <h3 className="text-2xl hidden md:block lg:text-[40px] md:text-3xl font-normal text-center mb-8 text-[#111827]">
              5. Updating Legal Documents & Company Records
            </h3>
            <div className="bg-[#e9eefc] rounded-[40px] lg:h-[542px] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex flex-col lg:flex-row items-center w-[90%] mx-auto gap-12 lg:gap-20 ">
                {/* Image Side */}
                <div className="w-full lg:w-[40%] flex justify-center">
                  <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={assets.service1}
                      alt="Company Formation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-[70%] space-y-8 text-center lg:text-center items-center justify-center">
                  <h1 className="text-[16px] text-start font-normal text-[#155DFC] block md:hidden ">
                    5. Updating Legal Documents & Company Records
                  </h1>

                  {/* Desktop Text */}
                  <p className="text-[#111827] hidden md:block text-lg leading-relaxed font-[18px]">
                    Keep your company documents fully compliant. Certificates,
                    internal records, and registrations are all updated
                    professionally.
                  </p>
                  <p className="text-[#111827] hidden md:block text-lg leading-relaxed font-[18px]">
                    Keep your company documentation clean and compliant. We
                    update certificates, internal records, registrations, and
                    legal forms to match your current business status. No
                    outdated papers, no missing signatures—everything stays
                    professionally managed.
                  </p>

                  {/* Mobile Text */}
                  <p className="text-[#364153] block md:hidden text-[14px] text-start sm:text-lg leading-relaxed max-w-2xl">
                    Keep your company's legal documents, such as articles of
                    association, shareholder agreements, and minutes of
                    meetings, updated and stored securely.
                  </p>

                  <div className="pt-4">
                    <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-3.5 rounded-lg font-medium shadow-md transition-colors cursor-pointer">
                      Update My Documents
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-normal mb-6 md:mb-8 lg:mb-12">
          Benefits
        </h2>
        <div className="flex flex-wrap flex-col md:flex-row px-6 md:px-0 justify-center w-[100%] lg:gap:10 text-center mx-auto gap-4 md:gap-6 mt-8 lg:mt-32 md:mt-12 ">
          {serviceInvoicing.map((data) => (
            <div
              key={data.id}
              className={`rounded-3xl flex flex-col gap-4 md:gap-6 items-center justify-center p-6 min-h-[160px] md:h-[191px] w-[200px] md:w-[220px] ${
                [1, 3, 5].includes(data.id) ? "lg:mt-16 self-end " : "lg:mt-0"
              }`}
              style={{ backgroundColor: data.color }}
            >
              <h2 className="text-center text-lg md:text-xl font-bold">
                {data.title}
              </h2>
              <p className="text-xs md:text-sm font-normal text-center">
                {data.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-around px-4">
          <div className="relative bg-cover bg-center w-full max-w-[451px] h-[150px] sm:h-[180px] md:h-[217px] flex items-center justify-center rounded-lg">
            <Image
              src={assets.faqBg}
              alt="Services Background"
              fill
              className="object-cover rounded-lg -z-10"
              priority
            />
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-normal px-4 z-10">
              Frequently Asked <br />{" "}
              <span className="text-[#AD4AF4]">Questions</span>
            </h1>
          </div>

          {/* FAQ Items */}
          <div className="py-12 sm:py-16 md:py-20 lg:py-24 w-full">
            <div className="space-y-3 max-w-3xl mx-auto px-4">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#E8F0FE] rounded-2xl border border-[#93C5FD] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5  flex items-center justify-between text-left hover:bg-[#DDE7F9]  transition-colors cursor-pointer"
                  >
                    <span className="text-[#1A3B5D] font-medium text-[14px] sm:text-[15px] leading-relaxed pr-4">
                      {item.question}
                    </span>
                    <span
                      className={`w-5 h-5 text-[#1A3B5D] flex-shrink-0 transition-transform duration-200 ${
                        openItem === item.id ? "rotate-180" : ""
                      }`}
                    >
                      <IoIosArrowUp />
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      openItem === item.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1">
                      <p className="text-[#1A3B5D] text-[13px] sm:text-[14px] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
