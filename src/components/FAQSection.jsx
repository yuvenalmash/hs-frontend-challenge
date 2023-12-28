// FAQSection component
import React, { useState } from "react";

const FAQSection = () => {
  const faq = {
    1: {
      question: "What are my obligations?",
      answer:
        "You will be required to work for 2 years at a company of your choice. We will help you find the right fit.",
    },
    2: {
      question: "Do I get a job placement upon graduation?",
      answer:
        "You will be required to work for 2 years at a company of your choice. We will help you find the right fit.",
    },
    3: {
      question: "What if I want to start my own company?",
      answer:
        "You will be required to work for 2 years at a company of your choice. We will help you find the right fit.",
    },
    4: {
      question: "Do I need a visa?",
      answer:
        "You will be required to work for 2 years at a company of your choice. We will help you find the right fit.",
    },
  };

  // drop-down menu 
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className="faq-section px-[43px] pt-[70px] pb-[113px] md:pt-[170px] md:px-[142px] bg-purple-300">
      <div className="flex flex-col gap-[32px] items-center md:flex-row md:justify-between">
        <h2 className="text-[--color-primary] text-[35px] leading-[40px] font-bold">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-[8px]">
          <p>Filter by:</p>
          <select
            value={selectedOption}
            onChange={handleChange}
            className="w-[284px] border border-lime-700 rounded-3xl px-[16px] py-[17px]"
          >
            <option value="" className="text-[--color-primary]">Program</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>

      <div className="mt-[40px] md:mt-[64px]">
        <hr className="border w-full mb-[32px] hidden md:block" />
        {Object.keys(faq).map((key) => {
          const item = faq[key];
          return (
            <React.Fragment key={key}>
              <div className="flex justify-between items-center pb-[16px]">
                <p>{item.question}</p>
                <button className="w-[32px] h-[32px] border rounded-full">
                  <p className="text-2xl">+</p>
                </button>
              </div>
              <hr className="border w-full mb-[18px] md:mb-[32px]" />
            </React.Fragment>
          );
        })}
      </div>
       
    </section>
  );
};

export default FAQSection;