import logo from "../assets/footer-logo.svg";

const Footer = () => {
  return (
    <div className="py-16 px-6 sm:px-12 lg:px-24">
      <div className="flex flex-col sm:flex-row justify-between bg-[#424242] rounded-[20px] p-8 sm:p-[32px]">
        {/* Logo Section */}
        <div className="mb-6 sm:mb-0">
          <img src={logo} alt="Logo" />
        </div>

        {/* Links Section */}
        <div>
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-[48px] text-white text-lg sm:text-xl">
            <li>About us</li>
            <li>Doctors</li>
            <li>Book An Appointment</li>
            <li>Services</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
