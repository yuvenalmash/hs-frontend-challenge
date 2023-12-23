// HeadlineSection component

const HeadlineSection = () => {
  return (
    <section className="headline-section flex flex-col items-center justify-center gap-10 px-4 py-28 border-2 border-[#ff8d4b] sm:gap-5 md:py-20 md:flex-row-reverse md:items-stretch md:gap-6">
      <h1 className={"text-[--color-primary] text-3xl font-bold md:hidden"}>
        Interaction Design Apprenticeship
      </h1>

      <div className="flex flex-col gap-5 sm:min-w-[240px] max-w-[480px]">
        <div>
          <div className="flex gap-2">
            <p className="text-sm">
              Powered by: </p>
            <p className="text-sm font-bold">
              Zeptolab</p>
          </div>
          <img src="src/assets/images/zeptolab-logo.svg" alt="Zeptolab-logo" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex-col gap-4 border rounded-md px-6 py-7">
            <p className="text-[--color-primary] text-sm font-bold ">
              Application closes in</p>
            <p className="text-[20px] lg:text-[27px]">
              6 Day : 22 Hrs : 56 Min : <span>13 Sec</span></p>
          </div>
          <div className="grid grid-cols-2 gap-4 border rounded-md px-6 py-7">
            <div>
              <p className="text-[--color-primary] text-sm">
                Location</p>
              <p>Bangkok</p>
            </div>
            <div>
              <p className="text-[--color-primary] text-sm">Duration</p>
              <p>1 Year <span className="sm:hidden">Full-Time</span></p>
              <p className="hidden sm:block">Full-Time</p>
            </div>
            <div>
              <p className="text-[--color-primary] text-sm">Application deadline</p>
              <p>30 June 2020</p>
            </div>
            <div>
              <p className="text-[--color-primary] text-sm">Start date</p>
              <p>3 Aug 2020</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 px-7 sm:px-0 sm:min-w-[220px] md:max-w-[300px] max-w-[440px]">
        <h1 className={"text-[--color-primary] text-3xl font-bold hidden md:block"}>
          Interaction Design Apprenticeship
        </h1>
        <p className="font-bold">
          A fully funded work-study program to launch your tech career
        </p>
        <div className="flex flex-col gap-6">
          <p>
            Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship.
          </p>
          <p>
            Scholarship candidates will receive full financial support to complete their Masters program at Harbour.Space while gaining invaluable work experience through an internship with SCG, a leading company in the industry.
          </p>
        </div>
        <p>
          <span className="font-bold mr-1">
            Position:
          </span>
          Marketing Performance
        </p>
        <button type="button" className="flex justify-center items-center w-fit px-8 py-3 bg-[--color-primary] text-[--color-tertiary] text-lg rounded-3xl">
          Apply now
        </button>
      </div>
    </section>
  );
};

export default HeadlineSection;