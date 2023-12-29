// TestimonialsSlider component
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { number } from "@storybook/addon-knobs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const testimonials = {
  1: {
    name: "Irene Pereyra1",
    title: "Research Lead, SCG",
    testimonial:
      "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.",
    course: "B.A. Visual Design",
    industry: "Education",
    image: "/assets/images/irene-pereyra.svg",
  },
  2: {
    name: "Irene Pereyra2",
    title: "Research Lead, SCG",
    testimonial:
      "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.",
    course: "B.A. Visual Design",
    industry: "Education",
    image: "/assets/images/irene-pereyra.svg",
  },
  3: {
    name: "Irene Pereyra3",
    title: "Research Lead, SCG",
    testimonial:
      "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.",
    course: "B.A. Visual Design",
    industry: "Education",
    image: "/assets/images/irene-pereyra.svg",
  },
  4: {
    name: "Irene Pereyra4",
    title: "Research Lead, SCG",
    testimonial:
      "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.",
    course: "B.A. Visual Design",
    industry: "Education",
    image: "/assets/images/irene-pereyra.svg",
  },
};

const TestimonialsSlider = () => {
  // carousel controls
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const prev = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  const mainGroupId = "Main";

  // carousel center mode
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <section className="testimonialsSlider relative flex flex-col items-center justify-center px-[20px]">
      <div className=" absolute top-0 left-0 z-10 h-[257px] w-full bg-[--color-primary] md:flex md:justify-center md:bg-transparent md:h-[394px]">
        <div className="md:hidden w-[292px] h-[257px] border border-[#6254BF] bg-repeat bg-[url('/assets/images/testimonial-pattern.png')]"></div>
        <div className="hidden md:block w-[80%] h-full border bg-repeat bg-[url('/assets/images/about-pattern.png')]"></div>
      </div>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={false}
        interval={6100}
        selectedItem={currentSlide}
        onChange={updateCurrentSlide}
        centerMode={!isSmallScreen}
        centerSlidePercentage={
          !isSmallScreen
            ? number("centerSlidePercentage", 70, {}, mainGroupId)
            : 100
        }
        className="carousel-root relative z-20 mt-[88px] pb-[32px] md:mt-[109px]"
      >
        {Object.keys(testimonials).map((key) => (
          <div
            key={key}
            className="flex flex-col px-[23px] md:max-w-[800px] border bg-[--color-bg]"
          >
            <div className="flex justify-between items-baseline py-[30px] px-[11px] md:px-[60px]">
              <div className="flex gap-[15px]">
                <img
                  src="/assets/images/irene-pereyra.svg"
                  alt="avatar"
                  className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full"
                />
                <div className="flex flex-col justify-center items-center min-w-[143px]">
                  <h3 className="text-[--color-primary] text-[16px] md:text-[--color-secondary] font-bold">
                    {testimonials[key].name}
                  </h3>
                  <p className="text-[16px] leading-[24px]">
                    {testimonials[key].title}
                  </p>
                </div>
              </div>
              <a href="#" className="text-[27px] text-gray-400 pb-2 leading-[24px]">
                <FaLinkedinIn />
              </a>
            </div>

            <div className="flex flex-col text-start self-center justify-start px-[11px] md:max-w-[560px] md:px-[60px] mb-[70px]">
              <p className="text-[24px] leading-[29px] mt-[48px] md:mt-[33px] w-full">
                {testimonials[key].testimonial}
              </p>
              <p className="text-[16px] leading-[24px] mt-[40px] w-full">
                <span>{testimonials[key].industry}</span> &nbsp;.&nbsp;
                <span>{testimonials[key].course}</span>
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="carousel-controls w-full flex justify-end gap-[8px] mr-[45%] md:hidden">
        <button
          onClick={prev}
          className="w-[40px] h-[40px] border rounded-full flex justify-center items-center "
        >
          <HiOutlineChevronLeft />
        </button>
        <button
          onClick={next}
          className="w-[40px] h-[40px] border rounded-full flex justify-center items-center"
        >
          <HiOutlineChevronRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
