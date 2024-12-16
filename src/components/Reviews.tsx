import { useState } from "react";

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(0);

  const reviews = [
    {
      name: "Julio Arafa",
      service: "Dental Implants",
      location: "California, USA",
      quote:
        "I've never felt more comfortable at a dental clinic! The team at SmileUp made sure I understood every step of my treatment, and the results were amazing. My smile has never looked better!",
      image:
        "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Albert Flo",
      service: "Routine Care",
      location: "Georgia, USA",
      quote:
        "Exceptional care and attention to detail. The staff at SmileUp truly goes above and beyond to ensure patient comfort and satisfaction.",
      image:
        "https://plus.unsplash.com/premium_photo-1679865370855-5a367b828f9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Hawkins",
      service: "Teeth Whitening",
      location: "California, USA",
      quote:
        "Incredible results and professional service. I'm amazed at how transformative my teeth whitening experience was at SmileUp.",
      image:
        "https://plus.unsplash.com/premium_photo-1658526972365-cf7b880373ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="text-3xl md:text-left font-semibold pb-12 text-center">
        <h1>Patient Reviews</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="grid grid-rows-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`rounded-[20px] py-8 px-7 cursor-pointer transition-all duration-300 ease-in-out ${
                selectedReview === index ? "bg-[#48CFCB]" : "bg-[#F5F5F5]"
              }`}
              onClick={() => setSelectedReview(index)}
            >
              <h1
                className={`text-2xl font-medium pb-3 transition-colors duration-300 ${
                  selectedReview === index ? "text-white" : "text-black"
                }`}
              >
                {review.name}, {review.service}
              </h1>
              <h2
                className={`text-lg transition-colors duration-300 ${
                  selectedReview === index ? "text-white" : "text-black"
                }`}
              >
                {review.location}
              </h2>
            </div>
          ))}
        </div>
        <div className="bg-black w-full h-96 lg:h-full rounded-[20px] overflow-hidden transition-all duration-300 ease-in-out">
          <img
            src={reviews[selectedReview].image}
            alt={reviews[selectedReview].name}
            className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
          />
        </div>
        <div className="bg-[#F5F5F5] rounded-[20px] flex flex-col justify-between min-h-[500px] py-[68px] px-[32px]">
          <div>
            <h1 className="font-medium text-2xl mb-4 transition-all duration-300">
              {reviews[selectedReview].service}
            </h1>
            <p className="text-xl sm:text-2xl transition-all duration-300 line-clamp-6 pt-6 sm:pt-12">
              "{reviews[selectedReview].quote}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
