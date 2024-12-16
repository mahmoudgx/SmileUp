import AnimatedNumber from "animated-number-react";
import line from "../assets/line.svg";

const About = () => {
  const formatValue = (value: number) => value.toFixed(0);

  return (
    <div className="w-full">
      {/* Statistics Section */}
      <div
        id="about-us"
        className="px-4 md:px-12 lg:px-[96px] flex flex-col md:flex-row items-center justify-center 
        space-y-6 md:space-y-0 md:space-x-4 lg:space-x-[80px] pt-12 md:pt-[96px]"
      >
        {/* Statistic Blocks - Now stacked on mobile, inline on larger screens */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-[18px]">
          <AnimatedNumber
            value={180}
            duration={1500}
            formatValue={formatValue}
            className="text-[#48CFCB] text-4xl md:text-5xl lg:text-6xl font-medium"
          />
          <div>
            <h2 className="text-lg md:text-xl text-center md:text-left">
              Performed Surgeries
            </h2>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            className="h-[24px] md:h-[36px] lg:h-[48px]"
            src={line}
            alt="line"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-[18px]">
          <AnimatedNumber
            value={80}
            duration={1500}
            formatValue={formatValue}
            className="text-[#48CFCB] text-4xl md:text-5xl lg:text-6xl font-medium"
          />
          <div>
            <h2 className="text-lg md:text-xl text-center md:text-left">
              Satisfied Patients
            </h2>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            className="h-[24px] md:h-[36px] lg:h-[48px]"
            src={line}
            alt="line"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-[18px]">
          <AnimatedNumber
            value={168}
            duration={1500}
            formatValue={formatValue}
            className="text-[#48CFCB] text-4xl md:text-5xl lg:text-6xl font-medium"
          />
          <div>
            <h2 className="text-lg md:text-xl text-center md:text-left">
              Staff Members
            </h2>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            className="h-[24px] md:h-[36px] lg:h-[48px]"
            src={line}
            alt="line"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-[18px]">
          <AnimatedNumber
            value={98}
            duration={1500}
            formatValue={formatValue}
            className="text-[#48CFCB] text-4xl md:text-5xl lg:text-6xl font-medium"
          />
          <div>
            <h2 className="text-lg md:text-xl text-center md:text-left">
              Yearly Surgeries
            </h2>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="px-4 md:px-12 lg:px-[96px] pt-12 md:pt-[48px] pb-12 md:pb-[96px]">
        <p className="text-2xl md:text-3xl lg:text-4xl leading-tight text-center md:text-left">
          SmileUp is a modern dental clinic focused on providing top-quality
          care with advanced technology and a patient-first approach. Our expert
          team is dedicated to helping you achieve a healthy, confident smile
          through personalized treatments in a comfortable environment.
        </p>
      </div>
    </div>
  );
};

export default About;
