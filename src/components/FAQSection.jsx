// FAQSection component
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectData } from "../app/habourSpaceSlice";
import FaqButton from "./helpers/FaqButton";

const FAQSection = () => {
  const data = useSelector(selectData);

  // section dynamic data
  const faqs = data.scholarship.faqs.items;
  const categories = data.scholarship.faqs.categories;

  // drop-down menu
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // State to track question visibility
  const [visibleQuestions, setVisibleQuestions] = useState([]);

  const toggleQuestion = (index) => {
    // Toggle the visibility of the question at the given index
    setVisibleQuestions((prevVisibleQuestions) => {
      const updatedVisibility = [...prevVisibleQuestions];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };

  // Filter FAQs based on selected category
  const filteredFaqs = selectedOption
    ? faqs.filter((faq) => faq.type === selectedOption)
    : faqs;

  return (
    <section className="faq-section px-[43px] pt-[70px] pb-[113px] md:pt-[170px] md:px-[142px] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-[32px] items-center md:flex-row md:justify-between">
        <h2 className="text-[--color-primary] text-[35px] leading-[40px] font-bold">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-[8px]">
          <p>Filter by:</p>
          <select
            value={selectedOption}
            onChange={handleChange}
            className="w-[284px] border rounded-3xl px-[16px] py-[17px]"
          >
            <option value="" className="text-[--color-primary]">
              All
            </option>
            {categories.map((category) => {
              return (
                <option
                  value={category}
                  key={category}
                  className="text-[--color-primary]"
                >
                  {category}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="mt-[40px] md:mt-[64px]">
        <hr className="border w-full mb-[32px] hidden md:block" />
        {filteredFaqs.map((faq, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-between pb-[16px] gap-4 sm:gap-10 ">
              <p className="text-[--color-primary] hidden md:block w-[150px] lg:w-[170px]">
                {faq.type}
              </p>
              <div className="flex flex-col max-w-[235px] sm:max-w-[280px]  md:max-w-[300px] lg:max-w-[500px]">
                <p className="font-bold">{faq.question}</p>
                <div
                  className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                    visibleQuestions[index]
                      ? "h-auto opacity-100"
                      : "h-0 opacity-0"
                  }`}
                >
                  <p className="mt-[20px]">{faq.answer[0].data}</p>
                </div>
              </div>
              <FaqButton index={index} visibleQuestions={visibleQuestions} toggleQuestion={toggleQuestion} />
            </div>
            <hr className="border w-full mb-[18px] md:mb-[32px]" />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
