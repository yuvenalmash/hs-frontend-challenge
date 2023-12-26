// AboutSection component

const AboutSection = () => {
  return (
    <section className="about-section flex flex-col gap-[50px] px-5 relative border-2 border-lime-700 bg-red-300">
      <div className="relative z-20 min-w-[335px]">
        <div className="h-[155px] border rounded-t-full bg-repeat bg-[url('src/assets/images/about-pattern.png')]"></div>
        <div className="h-[555px] border-2 border-lime-700 bg-amber-300"></div>
      </div>
      <div className="absolute z-10 top-[155px] min-w-full h-[401px] border-2 border-amber-700 bg-[--color-primary] -mx-5"></div>

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