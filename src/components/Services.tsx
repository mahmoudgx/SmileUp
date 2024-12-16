import arrow2 from "../assets/arrow2.svg";
import smile2 from "../assets/OBJECTS2.png";
import line2 from "../assets/line2.svg";
import dental from "../assets/Dental.jpg";
import Whitening from "../assets/Whitening.jpg";
import Care from "../assets/Care.jpg";

const Services = () => {
  return (
    <div
      id="Services"
      className="px-6 sm:px-[48px] lg:px-[96px] py-12 sm:py-20"
    >
      <div className="bg-[#F5F5F5] p-8 sm:p-12 rounded-[20px]">
        <div className="flex flex-col sm:flex-row justify-between items-center mx-auto">
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left">
              Our Medical Services
            </h1>
            <div className="absolute top-[-32px] left-[-32px]">
              <img src={smile2} className="hidden sm:block" alt="Smile" />
            </div>
          </div>
          <div className="w-[40px] h-[40px] border-[1px] border-[#48CFCB] rounded-full flex items-center justify-center cursor-pointer mt-4 sm:mt-0">
            <img src={arrow2} alt="arrow" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-[50px] items-center pt-8 sm:pt-[50px]">
          <div className="col-span-1 sm:col-span-4">
            <div>
              <h1 className="text-xl sm:text-3xl font-medium pb-4">
                Dental Implants
              </h1>
              <div className="pb-4">
                <img src={line2} alt="line" />
              </div>
            </div>
            <div>
              <h1 className="text-xl sm:text-3xl font-medium pb-4">
                Teeth Whitening
              </h1>
              <div className="pb-4">
                <img src={line2} alt="line" />
              </div>
            </div>
            <div>
              <h1 className="text-xl sm:text-3xl font-medium pb-4">
                Aesthetic Care
              </h1>
              <div className="pb-4">
                <img src={line2} alt="line" />
              </div>
            </div>
            <div>
              <h1 className="text-xl sm:text-3xl font-medium pb-4">
                Endodontics
              </h1>
              <div className="pb-4">
                <img src={line2} alt="line" />
              </div>
            </div>
            <div>
              <h1 className="text-xl sm:text-3xl font-medium pb-4">
                Prosthodontics
              </h1>
              <div className="pb-4">
                <img src={line2} alt="line" />
              </div>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="w-full h-[352px] bg-white rounded-[20px]">
                <img
                  src={dental}
                  className="w-full h-[284px] object-cover rounded-[20px]"
                  alt="Dental Implants"
                />
                <h1 className="p-4 sm:p-[20px] text-lg sm:text-xl">
                  Dental Implants
                </h1>
              </div>
              <div className="w-full h-[352px] bg-white rounded-[20px]">
                <img
                  src={Whitening}
                  className="w-full h-[284px] object-cover rounded-[20px]"
                  alt="Teeth Whitening"
                />
                <h1 className="p-4 sm:p-[20px] text-lg sm:text-xl">
                  Teeth Whitening
                </h1>
              </div>
              <div className="w-full h-[352px] bg-white rounded-[20px]">
                <img
                  src={Care}
                  className="w-full h-[284px] object-cover rounded-[20px]"
                  alt="Aesthetic Care"
                />
                <h1 className="p-4 sm:p-[20px] text-lg sm:text-xl">
                  Aesthetic Care
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
