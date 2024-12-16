import smile from "../assets/smile.jpg";
import arrow from "../assets/arrow.svg";
import arrow2 from "../assets/arrow2.svg";
import Obj from "../assets/OBJECTS.svg";
import implant from "../assets/implant.png";
import brackets from "../assets/dental-brackets.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-[24px] pt-[48px] px-[24px] md:pt-[96px] md:px-[96px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        <div>
          <img
            className="w-full h-full rounded-[20px] object-cover"
            src={smile}
            alt="smile"
          />
        </div>
        <div>
          <h1 className="text-4xl md:text-7xl font-medium">
            Brighter Smiles,
            <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
              <span>Happier Lives</span>
              <div className="border-[1px] border-black w-[40px] h-[40px] rounded-full flex justify-center items-center align-middle mx-4 cursor-pointer">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </h1>
          <p className="text-lg md:text-2xl pt-[16px] md:pt-[24px] pb-[16px] md:pb-[24px]">
            SmileUp is a modern dental clinic dedicated to providing exceptional
            care in a relaxing environment. With advanced technology and a team
            of experienced professionals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px]">
            <div className="bg-[#F5F5F5] rounded-[20px] p-[16px] md:p-[32px]">
              <div className="flex items-center justify-between">
                <img src={Obj} alt="icon" />
                <div className="w-[40px] h-[40px] border-[1px] border-[#48CFCB] rounded-full flex items-center justify-center cursor-pointer">
                  <img src={arrow2} alt="arrow" />
                </div>
              </div>
              <div className="flex items-center justify-between pt-[16px] md:pt-[32px]">
                <h1 className="text-xl md:text-3xl font-medium">
                  Dental Implant
                </h1>
                <img src={implant} className="w-1/4 rotate-12" alt="implant" />
              </div>
            </div>

            <div className="bg-[#F5F5F5] rounded-[20px] p-[16px] md:p-[32px]">
              <div className="flex items-center justify-between">
                <img src={Obj} alt="icon" />
                <div className="w-[40px] h-[40px] border-[1px] border-[#48CFCB] rounded-full flex items-center justify-center cursor-pointer">
                  <img src={arrow2} alt="arrow" />
                </div>
              </div>
              <div className="flex items-center justify-between pt-[16px] md:pt-[32px]">
                <h1 className="text-xl md:text-3xl font-medium">
                  Aesthetic Care
                </h1>
                <img
                  src={brackets}
                  className="w-1/4 rotate-12"
                  alt="brackets"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px] pb-[48px] md:pb-[96px]">
        <div className="bg-[#F5F5F5] p-[16px] md:p-[32px] rounded-[20px]">
          <div className="flex justify-between">
            <h1 className="text-xl md:text-3xl font-semibold">
              Schedule Your Appointment
            </h1>
            <div className="w-[40px] h-[40px] border-[1px] border-[#48CFCB] rounded-full flex items-center justify-center cursor-pointer">
              <img src={arrow2} alt="arrow" />
            </div>
          </div>
          <p className="text-lg md:text-2xl pt-[12px] md:pt-[17px]">
            By adopting the latest technologies, refining our processes, &amp;
            investing in staff training.
          </p>
        </div>

        <div className="bg-[#F5F5F5] p-[16px] md:p-[32px] rounded-[20px]">
          <div className="flex justify-between">
            <h1 className="text-xl md:text-3xl font-semibold">
              Consult Our Doctors
            </h1>
            <div className="w-[40px] h-[40px] border-[1px] border-[#48CFCB] rounded-full flex items-center justify-center cursor-pointer">
              <img src={arrow2} alt="arrow" />
            </div>
          </div>
          <p className="text-lg md:text-2xl pt-[12px] md:pt-[17px]">
            We pride on delivering exceptional healthcare through our
            unparalleled expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
