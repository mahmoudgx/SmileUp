import Dray from "../assets/Dray.jpg";
import Francisco from "../assets/Francisco.jpg";
import Veronica from "../assets/Veronica.jpg";
import Connie from "../assets/Connie.jpg";

const Dentists = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-12 md:py-24">
      <div className="pb-8 md:pb-12 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Introducing Our Dedicated Dentists
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dentist Card - Responsive Design */}
        <div className="relative group">
          <img
            className="rounded-[20px] w-full h-[300px] md:h-[400px] object-cover"
            src={Dray}
            alt="Dray"
          />
          <div
            className="absolute bg-white p-4 md:p-[20px] bottom-4 md:bottom-8 left-4 md:left-8 rounded-lg 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out"
          >
            <h1 className="text-xl md:text-2xl font-medium">Ricardo Dray</h1>
          </div>
          <div
            className="absolute bg-[#48CFCB] py-2 px-4 md:py-[10px] md:px-[20px] top-4 md:top-8 right-4 md:right-8 rounded-lg
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300 ease-in-out"
          >
            <h1 className="text-sm md:text-base font-medium text-white">
              Prosthodontist
            </h1>
          </div>
        </div>

        <div className="relative group">
          <img
            className="rounded-[20px] w-full h-[300px] md:h-[400px] object-cover"
            src={Francisco}
            alt="Francisco"
          />
          <div
            className="absolute bg-white p-4 md:p-[20px] bottom-4 md:bottom-8 left-4 md:left-8 rounded-lg 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out"
          >
            <h1 className="text-xl md:text-2xl font-medium">
              Francisco Holton
            </h1>
          </div>
          <div
            className="absolute bg-[#48CFCB] py-2 px-4 md:py-[10px] md:px-[20px] top-4 md:top-8 right-4 md:right-8 rounded-lg
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300 ease-in-out"
          >
            <h1 className="text-sm md:text-base font-medium text-white">
              Endodontist
            </h1>
          </div>
        </div>

        <div className="relative group">
          <img
            className="rounded-[20px] w-full h-[300px] md:h-[400px] object-cover"
            src={Veronica}
            alt="Veronica"
          />
          <div
            className="absolute bg-white p-4 md:p-[20px] bottom-4 md:bottom-8 left-4 md:left-8 rounded-lg 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out"
          >
            <h1 className="text-xl md:text-2xl font-medium">Veronica Sund</h1>
          </div>
          <div
            className="absolute bg-[#48CFCB] py-2 px-4 md:py-[10px] md:px-[20px] top-4 md:top-8 right-4 md:right-8 rounded-lg
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300 ease-in-out"
          >
            <h1 className="text-sm md:text-base font-medium text-white">
              Dental Hygienist
            </h1>
          </div>
        </div>

        <div className="relative group">
          <img
            className="rounded-[20px] w-full h-[300px] md:h-[400px] object-cover"
            src={Connie}
            alt="Connie"
          />
          <div
            className="absolute bg-white p-4 md:p-[20px] bottom-4 md:bottom-8 left-4 md:left-8 rounded-lg 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out"
          >
            <h1 className="text-xl md:text-2xl font-medium">Connie Corker</h1>
          </div>
          <div
            className="absolute bg-[#48CFCB] py-2 px-4 md:py-[10px] md:px-[20px] top-4 md:top-8 right-4 md:right-8 rounded-lg
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300 ease-in-out"
          >
            <h1 className="text-sm md:text-base font-medium text-white">
              Cosmetic Dentist
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dentists;
