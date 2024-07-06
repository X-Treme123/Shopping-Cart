import { useEffect, useState } from "react";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/images/banner3.jpg", "/images/banner2.jpg", "/images/banner3.jpg"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 detik

    return () => clearInterval(intervalId); // Bersihkan interval saat komponen di-unmount
  }, [images]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className={`flex justify-center items-center pt-5`}>
      <div className="relative w-[65%] h-auto flex overflow-hidden shadow-xl rounded-xl mr-5">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(${currentIndex * -100}%)` }}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`image${index + 1}`}
              className="object-cover w-full h-full cursor-pointer"
            />
          ))}
        </div>
        <div className="absolute bottom-4 right-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}></button>
          ))}
        </div>
      </div>
      <div className="w-[27%] h-auto flex flex-col ml-5 rounded-xl gap-16">
        <img src="/images/banner5.png" alt="banner" className="shadow-xl rounded-xl"/>
        <img src="/images/banner5.png" alt="banner" className="shadow-xl rounded-xl"/>
      </div>
    </div>
  );
};

export default Banner;
