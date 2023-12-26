// AboutSection component

const AboutSection = () => {
  return (
    <section className="about-section flex flex-col gap-[50px] px-5 items-center relative border-2 border-lime-700 bg-red-300">
      <div className="relative z-20 min-w-[335px] flex flex-col items-center">
        <div className="h-[155px] w-full border rounded-t-full bg-repeat bg-[url('src/assets/images/about-pattern.png')]"></div>
        <img className="absolute z-10 top-10 w-[252px] h-[252px] object-cover rounded-full" src="src/assets/images/about-small.png" alt="About image" />
        <div className="w-full flex flex-col pt-40 pb-[56px] px-[22px] gap-8 border-2 border-lime-700 bg-amber-300">
          <h2 className="text-[--color-primary] text-[35px] leading-[40px] font-bold">
            About the apprenticeship
          </h2>
          <p className="text-[18px] leading-[28px]">
            Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.  
          </p>
        </div>
      </div>
      <div className="absolute z-10 top-[170px] min-w-full h-[401px] border-2 border-amber-700 bg-[--color-primary] -mx-5"></div>

      <div className="relative z-20 flex flex-col gap-16 min-w-[335px]">
        <div className="h-[210px] border-2 border-red-700 bg-amber-300">
        </div>
        <div className="flex flex-col gap-8 border-2 border-red-700 bg-amber-300">
          <div className="h-[263px] border"></div>
          <div className="h-[263px] border"></div>
          <div className="flex items-center justify-between">
            <hr className="w-1/3 border-2 border-red-700" />
            <p>Graduation</p>
            <hr className="w-1/3 border-2 border-red-700" />
          </div>
          <div className="h-[263px] border"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;