// TestimonialsSlider component
import { useState } from "react";

const TestimonialsSlider = () => {
  const testimonials = {
    1: {
      name: "Irene Pereyra1",
      title: "Research Lead, SCG",
      testimonial:
        "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.",
      course: "B.A. Visual Design",
      industry: "Education",
      image: "src/assets/images/irene-pereyra.svg",
    },
    2: {
      name: "Irene Pereyra2",
      title: "Research Lead, SCG",
      testimonial:
        "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.",
      course: "B.A. Visual Design",
      industry: "Education",
      image: "src/assets/images/irene-pereyra.svg",
    },
    3: {
      name: "Irene Pereyra3",
      title: "Research Lead, SCG",
      testimonial:
        "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.",
      course: "B.A. Visual Design",
      industry: "Education",
      image: "src/assets/images/irene-pereyra.svg",
    },
    4: {
      name: "Irene Pereyra4",
      title: "Research Lead, SCG",
      testimonial:
        "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.",
      course: "B.A. Visual Design",
      industry: "Education",
      image: "src/assets/images/irene-pereyra.svg",
    },
  };

  const [currentTestimonial, setCurrentTestimonial] = useState(1);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev < Object.keys(testimonials).length ? prev + 1 : 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev > 1 ? prev - 1 : Object.keys(testimonials).length));
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="testimonials-slider relative flex flex-col items-center justify-center px-[20px] bg-blue-300">
      <div className=" absolute top-0 left-0 z-10 h-[257px] w-full bg-[--color-primary] md:flex md:justify-center md:bg-transparent md:h-[394px]">
        <div className="md:hidden w-[292px] h-[257px] border border-[#6254BF] bg-repeat bg-[url('src/assets/images/testimonial-pattern.png')]"></div>
        <div className="hidden md:block w-[80%] h-full border bg-repeat bg-[url('src/assets/images/about-pattern.png')]"></div>
      </div>

      <div className="slider relative z-20 flex flex-col w-[335px] px-[23px] pb-[32px] mt-[88px] md:w-[55.5%] border border-lime-500 bg-orange-300">
        <div className="flex justify-between py-[30px]">
          <div className="flex gap-[15px]">
            <img src="src/assets/images/irene-pereyra.svg" alt="avatar" className="w-[45px] h-[45px] rounded-full" />
            <div>
              <h3 className="text-[--color-primary] text-[16px]">{testimonial.name}</h3>
              <p className="text-[16px] leading-[24px]">{testimonial.title}</p>
            </div>
          </div>
          <a href="#" className="text-[16px] leading-[24px]">
            🔗 
          </a>
        </div>
        <div className="hidden md:flex justify-end items-center mt-[12px]">
          <button className="drag-btn bg-[--color-primary] text-white text-[18px] px-[24px] py-[8px] rounded-3xl">
            Drag
          </button>
        </div>

        <p className="text-[24px] leading-[29px] mt-[48px] md:mt-[33px]">
          {testimonial.testimonial}
        </p>

        <p className="text-[16px] leading-[24px] mt-[40px]">
          <span>{testimonial.industry}</span> &nbsp;.&nbsp; <span>{testimonial.course}</span>
        </p>
      </div>

      <div className="controls relative z-20 w-full flex justify-end gap-[8px] mt-[24px] md:absolute md:justify-between">
        <button className="prev-btn w-[40px] h-[40px] border rounded-full" onClick={prevTestimonial}>
          prev
        </button>
        <button className="nenbspxt-btn w-[40px] h-[40px] border rounded-full" onClick={nextTestimonial}>
          next
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
