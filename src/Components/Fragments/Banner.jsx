import { useEffect, useState } from "react";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/banner3.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 3 detik

    return () => clearInterval(intervalId); // Bersihkan interval saat komponen di-unmount
  }, [images]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center py-10 w-full">
      <div className="relative w-full lg:w-[65%] h-auto flex overflow-hidden shadow-xl rounded-xl mb-5 lg:mb-0 lg:mr-5">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(${currentIndex * -100}%)`, width: `${images.length * 100}%` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`image${index + 1}`}
              className="object-cover w-full h-full"
              style={{ flex: '0 0 100%' }}
            />
          ))}
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 flex items-center justify-center p-5 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition ease-in-out duration-300 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-0 flex items-center justify-center p-5 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition ease-in-out duration-300 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className="absolute bottom-4 right-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}></button>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[27%] h-auto flex flex-col gap-5 lg:gap-16">
        <img
          src="/images/banner5.png"
          alt="banner"
          className="shadow-xl rounded-xl w-full h-auto"
        />
        <img
          src="/images/banner5.png"
          alt="banner"
          className="shadow-xl rounded-xl w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
