import { useState, useRef } from "react";
import { Calendar } from "lucide-react";
import arrow from "../assets/arrow.svg";

const doctorsData = [
  {
    name: "Jonathan Putra",
    specialty: "Dental Implants & Oral Surgery Specialist",
    description:
      "Dr. Jonathan Putra is an expert in dental implants, bone grafts, and oral surgery. He is known for precise, minimally invasive procedures that promote faster recovery and less discomfort. With a focus on advanced technology like 3D imaging.",
    image:
      "https://plus.unsplash.com/premium_photo-1661582103683-9f4757c91f0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emily Chen",
    specialty: "Cosmetic Dentistry Expert",
    description:
      "Dr. Emily Chen specializes in cosmetic dental procedures, including veneers, teeth whitening, and smile makeovers. She combines artistic precision with advanced dental techniques to create beautiful, natural-looking smiles that boost confidence and enhance personal appearance.",
    image:
      "https://plus.unsplash.com/premium_photo-1672922646298-3afc6c6397c9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Rodriguez",
    specialty: "Pediatric Dentistry Specialist",
    description:
      "Dr. Michael Rodriguez is dedicated to children's dental health, creating a warm and friendly environment that helps kids feel comfortable. He focuses on preventative care and teaches young patients about proper oral hygiene, ensuring their dental experiences are positive and educational.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Doctors = () => {
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const descriptionRef = useRef(null);

  const navigateDoctor = (direction: string) => {
    setIsTransitioning(true);

    let newIndex;
    if (direction === "next") {
      newIndex = (currentDoctorIndex + 1) % doctorsData.length;
    } else {
      newIndex =
        (currentDoctorIndex - 1 + doctorsData.length) % doctorsData.length;
    }

    setTimeout(() => {
      setCurrentDoctorIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const currentDoctor = doctorsData[currentDoctorIndex];

  return (
    <div id="Doctors" className="px-6 md:px-24 py-12 md:py-24">
      <div className="pb-8 md:pb-12">
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Meet Our Doctors
          </h1>
          <div className="flex items-center space-x-4">
            <div
              onClick={() => navigateDoctor("prev")}
              className="w-[32px] h-[32px] border-2 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-all"
            >
              <img className="rotate-180" src={arrow} alt="Previous Doctor" />
            </div>
            <div
              onClick={() => navigateDoctor("next")}
              className="w-[32px] h-[32px] border-2 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-all"
            >
              <img src={arrow} alt="Next Doctor" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="col-span-1 md:col-span-2">
          <div
            className={`transition-opacity duration-300 ${
              isTransitioning ? "opacity-50" : "opacity-100"
            }`}
          >
            <img
              key={currentDoctor.image}
              src={currentDoctor.image}
              alt={currentDoctor.name}
              className="w-full max-h-[300px] md:max-h-[410px] rounded-[20px] object-cover"
            />
          </div>
        </div>
        <div className="bg-[#F5F5F5] p-6 md:p-8 rounded-[20px] relative overflow-hidden">
          <div className="md:absolute inset-0 bg-[#F5F5F5] p-6">
            <div
              className={`transition-all duration-300 ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <h1 className="pb-2 text-lg md:text-xl font-semibold">
                {currentDoctor.name}
              </h1>
              <h2 className="pb-4 text-md md:text-lg font-medium">
                {currentDoctor.specialty}
              </h2>
              <p ref={descriptionRef} className="pb-6 text-sm md:text-base">
                {currentDoctor.description}
              </p>
              <div className="flex items-center justify-center space-x-3 bg-[#48CFCB] py-3 rounded-[8px]">
                <Calendar className="text-white" />
                <h1 className="text-white font-semibold cursor-pointer">
                  Make an appointment
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
