import { SetStateAction, useState } from "react";
import object3 from "../assets/OBJECTS3.png";
import cross from "../assets/cross.svg";

const Faq = () => {
  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(0);

  // FAQ data array
  const faqData = [
    {
      question: "What services does SmileUp offer?",
      answer:
        "At SmileUp, we provide a wide range of dental services, including routine check-ups, teeth whitening, Invisalign and braces, dental implants, cosmetic dentistry, and more. We also offer comprehensive smile makeovers tailored to your needs.",
    },
    {
      question: "How often should I visit the dentist?",
      answer:
        "We recommend visiting the dentist every six months for routine check-ups and professional cleaning. However, your specific needs may vary based on your oral health, so our dentists can provide personalized advice during your visit.",
    },
    {
      question: "How do dental implants work?",
      answer:
        "Dental implants are permanent replacements for missing teeth. The process involves surgically placing a titanium post into the jawbone, which acts as an artificial tooth root. After healing, a custom-made crown is attached to the post, creating a natural-looking and functional tooth.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment by calling our office, using our online booking system on our website, or sending us an email. Our friendly staff will help you find a convenient time that works with your schedule.",
    },
  ];

  // Toggle FAQ item open/closed
  const toggleFAQ = (index: SetStateAction<number>) => {
    setOpenIndex(index);
  };

  return (
    <div className="py-16 px-6 sm:px-12 lg:px-24">
      <div className="relative bg-[#F5F5F5] rounded-[20px] p-8 sm:p-[32px]">
        <div className="pb-12 sm:pb-16">
          <h1 className="text-3xl sm:text-4xl font-semibold">FAQ</h1>
          <div className="absolute top-0 left-0 hidden sm:block">
            <img src={object3} alt="Decorative object" />
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-[20px] p-6 sm:p-[32px] transition-all duration-500 ease-in-out
                ${openIndex === index ? "bg-[#48CFCB]" : "bg-white"}
                relative`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h1
                  className={`text-xl sm:text-2xl transition-colors duration-500 ease-in-out
                  ${openIndex === index ? "text-white" : "text-black"}`}
                >
                  {faq.question}
                </h1>
                <div>
                  {openIndex === index ? (
                    <img
                      src={cross}
                      alt="Close"
                      className="transition-transform duration-500 ease-in-out"
                    />
                  ) : (
                    <h1 className="text-xl sm:text-2xl font-semibold transition-transform duration-500 ease-in-out">
                      +
                    </h1>
                  )}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${
                    openIndex === index
                      ? "max-h-screen pt-6 sm:pt-8"
                      : "max-h-0 p-0"
                  }
                `}
              >
                <p
                  className={`text-sm sm:text-xl transition-colors duration-500 ease-in-out
                  ${openIndex === index ? "text-white" : "text-white"}`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
