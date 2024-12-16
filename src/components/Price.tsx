import arrow2 from "../assets/arrow2.svg";
import simle3 from "../assets/simle3.svg";

const Price = () => {
  return (
    <div className="py-[96px] px-[24px] md:px-[96px]">
      <div className="text-3xl font-semibold pb-[48px]">
        <h1>Pricing Plan</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        <div className="bg-[#F5F5F5] rounded-[20px] py-[48px] px-[32px] relative">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-medium">
              Advanced Care Plan
            </h1>
            <div className="w-[40px] h-[40px] border-[1px] border-[#48CFCB] rounded-full flex items-center justify-center cursor-pointer">
              <img src={arrow2} alt="arrow" />
            </div>
          </div>
          <h2 className="text-4xl md:text-7xl font-semibold pt-[14px] text-[#48CFCB]">
            $100
          </h2>
          <p className="text-lg md:text-xl pt-[24px]">
            All Basic Care Plan services Teeth whitening (1 session) Fluoride
            treatment
          </p>
          <div className="absolute bottom-0 right-0">
            <img src={simle3} alt="smile" />
          </div>
        </div>
        <div className="bg-[#F5F5F5] rounded-[20px] py-[48px] px-[32px] relative">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-medium">
              Smile Makeover Plan
            </h1>
            <div className="w-[40px] h-[40px] border-[1px] border-[#48CFCB] rounded-full flex items-center justify-center cursor-pointer">
              <img src={arrow2} alt="arrow" />
            </div>
          </div>
          <h2 className="text-4xl md:text-7xl font-semibold pt-[14px] text-[#48CFCB]">
            $350
          </h2>
          <p className="text-lg md:text-xl pt-[24px]">
            Consultation with cosmetic dentistry specialist Teeth whitening
            (multiple sessions)
          </p>
          <div className="absolute bottom-0 right-0">
            <img src={simle3} alt="smile" />
          </div>
        </div>
        <div className="bg-[#F5F5F5] rounded-[20px] py-[48px] px-[32px] relative">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-medium">
              Orthodontic Plan
            </h1>
            <div className="w-[40px] h-[40px] border-[1px] border-[#48CFCB] rounded-full flex items-center justify-center cursor-pointer">
              <img src={arrow2} alt="arrow" />
            </div>
          </div>
          <h2 className="text-4xl md:text-7xl font-semibold pt-[14px] text-[#48CFCB]">
            $700
          </h2>
          <p className="text-lg md:text-xl pt-[24px]">
            Initial orthodontic consultation X-rays and 3D imaging Invisalign or
            braces treatment
          </p>
          <div className="absolute bottom-0 right-0">
            <img src={simle3} alt="smile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
