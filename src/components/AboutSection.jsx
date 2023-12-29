// AboutSection component

import { useSelector } from "react-redux";
import { selectData } from "../app/habourSpaceSlice";

const AboutSection = () => {
  const data = useSelector(selectData);

  // section dynamic data
  const aboutDescription = data.scholarship.about[0].data;
  const scholarshipValue = data.scholarship.total_value;
  const tuition = data.scholarship.tuition;
  const stipend_per_year = data.scholarship.stipend_per_year;
  const stipend_per_month = data.scholarship.stipend_per_month;
  const studyCommitment = data.scholarship.study_commitment;
  const studyCommitmentText = data.scholarship.study_commitment_text;
  const internshipCommitment = data.scholarship.internship_commitment;
  const internshipCommitmentText = data.scholarship.internship_commitment_text;

  return (
    <section className="about-section flex flex-col gap-[50px] px-5 mt-[72px] pb-[129px] items-center relative">
      <div className="relative z-20 min-w-[335px] flex flex-col items-center md:flex-row md:gap-[50px] lg:gap-[199px]">
        <div className="h-[155px] w-full border rounded-t-full md:rounded-full md:h-[338px] md:w-[338px] lg:h-[438px] lg:w-[438px] bg-repeat bg-[url('/assets/images/about-pattern.png')]"></div>
        <img
          className="absolute z-10 top-10 w-[252px] h-[252px] object-cover rounded-full md:hidden"
          src="/assets/images/about-small.svg"
          alt="About image"
        />
        <img
          className="absolute z-10 left-7 md:h-[280px] md:w-[280px] lg:w-[380px] lg:h-[380px] object-cover rounded-full hidden md:block"
          src="/assets/images/about-large.svg"
          alt="About image"
        />
        <div className="w-full flex flex-col bg-[--color-bg] pt-[179px] pb-[56px] px-[22px] gap-8 md:py-0 md:gap-[40px] md:w-[350px] lg:w-[440spx] border">
          <h2 className="text-[--color-primary] text-[35px] leading-[40px] font-bold">
            About the apprenticeship
          </h2>
          <p className="text-[18px] leading-[28px]">{aboutDescription}</p>
        </div>
      </div>
      <div className="absolute z-10 top-[170px] min-w-full h-[401px] bg-[--color-primary] -mx-5 md:hidden"></div>

      <div className="relative z-20 flex flex-col gap-16 min-w-[335px] md:flex-row md:gap-4 lg:gap-16">
        <div className="flex flex-col px-[25px] gap-[24px] border md:py-[32px]">
          <div className="flex flex-col md:gap-[33px]">
            <h3 className="text-[--color-primary] text-[16px]">
              <span className="md:hidden">Fellowiship value</span>
              <span className="hidden md:block">Scholarship value</span>
            </h3>
            <p className="text-[24px] leading-[24px] md:text-[48px]">
              €{scholarshipValue}
            </p>
          </div>
          <hr className="border w-full mt-[210px] mb-[61px] hidden md:block" />
          <div className="flex gap-[44px]">
            <div>
              <h3 className="text-[--color-primary] text-[16px]">Tution</h3>
              <p className="text-[24px] leading-[24px] md:text-[16px]">
                €{tuition}
              </p>
            </div>
            <div>
              <h3 className="text-[--color-primary] text-[16px]">Remaining</h3>
              <p className="text-[24px] leading-[24px] md:text-[16px]">
                €{scholarshipValue - tuition}
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[--color-primary] text-[16px]">
              Living Stipend
            </h3>
            <p className="text-[24px] leading-[24px] md:text-[16px]">
              €{stipend_per_year} (€{stipend_per_month}/month)
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8 md:flex-row md:gap-2 lg:gap-8">
            <div className="flex flex-col gap-2 px-[24px] pt-[40px] pb-[32px] border md:pt-[32px] md:w-[250px] lg:w-[320px]">
              <h3 className="text-[--color-primary] text-[16px]">
                Study Commitment
              </h3>
              <p className="text-[24px] leading-[24px]">
                {studyCommitment} hours / day
              </p>
              <hr className="mt-[24px] w-1/12 border" />
              <p className="text-[16px] leading-[24px]">
                {studyCommitmentText}
              </p>
            </div>
            <div className="flex flex-col gap-2 px-[24px] pt-[40px] pb-[32px] border md:pt-[32px] md:w-[250px] lg:w-[320px]">
              <h3 className="text-[--color-primary] text-[16px]">
                <span className="md:hidden">Apprenticeship Commitment</span>
                <span className="hidden md:block">Work Commitment</span>
              </h3>
              <p className="text-[24px] leading-[24px]">
                {internshipCommitment} hours / day
              </p>
              <hr className="mt-[24px] w-1/12 border" />
              <p className="text-[16px] leading-[24px]">
                {internshipCommitmentText}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <hr className="w-[33%] sm:w-[40%] border" />
            <p>Graduation</p>
            <hr className="w-[33%] sm:w-[40%] border" />
          </div>

          <div className="flex flex-col gap-2 px-[24px] pt-[40px] pb-[32px] border">
            <h3 className="text-[--color-primary] text-[16px]">
              A full-time contract
            </h3>
            <p className="text-[24px] leading-[24px] flex">
              1 Year <span className="hidden md:block">/</span> Full-Time
            </p>
            <hr className="mt-[24px] w-1/12 border" />
            <p className="text-[16px] leading-[24px]">
              You&apos;ll be guaranteed a 1 year contract with SCG upon
              graduation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
