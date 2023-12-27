// TestimonialsSlider component

const TestimonialsSlider = () => {
  const testimonials = {
    1: {
      name: "Irene Pereyra",
      title: "Research Lead, SCG",
      testimonial:
        "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.",
      course: "B.A. Visual Design",
      desgnation: "Education",
      image: "src/assets/images/irene-pereyra.svg",
    },
    2: {
      name: "Irene Pereyra",
      title: "Research Lead, SCG",
      testimonial:
        "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.",
      course: "B.A. Visual Design",
      desgnation: "Education",
      image: "src/assets/images/irene-pereyra.svg",
    },
    3: {
      name: "Irene Pereyra",
      title: "Research Lead, SCG",
      testimonial:
        "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.",
      course: "B.A. Visual Design",
      desgnation: "Education",
      image: "src/assets/images/irene-pereyra.svg",
    },
    4: {
      name: "Irene Pereyra",
      title: "Research Lead, SCG",
      testimonial:
        "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.",
      course: "B.A. Visual Design",
      desgnation: "Education",
      image: "src/assets/images/irene-pereyra.svg",
    },
  };
  return (
    <section className="testimonials-slider relative flex flex-col items-center px-[20px] bg-blue-300">
      <div className="h-[257px] w-full bg-[--color-primary] absolute top-0 left-0 z-10">
        <div className="w-[292px] h-[257px] border border-[#6254BF] bg-repeat bg-[url('src/assets/images/testimonial-pattern.png')]"></div>
      </div>
      <div className="slider relative z-20 flex flex-col w-[335px] h-[456px] mt-[88px] border-lime-500 bg-orange-300">
        {/* Your slider content goes here */}
      </div>
      <div className="controls relative z-20 w-full flex justify-end gap-[8px] mt-[24px]">
        <button className="prev-btn w-[40px] h-[40px] border rounded-full">
          prev
        </button>
        <button className="next-btn w-[40px] h-[40px] border rounded-full">
          next
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
