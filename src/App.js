import React, { useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function App() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1671418285899-58fb1471c038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1671400833073-0a066e059f44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1671433002028-f72f14b56b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1671250216336-fe1e65663832?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1671394163520-4e0b11125f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    },
  ];

  const [pic, setPic] = useState(4);
  const pervSlide = () => {
    const firstSlide = pic === 0;
    const newPic = firstSlide ? slides.length - 1 : pic - 1;
    setPic(newPic);
  };
  const nextSlide = () => {
    const firstSlide = pic === slides.length - 1;
    const newPic = firstSlide ? 0 : pic + 1;
    setPic(newPic);
  };
  const goToSlide = (index) => {
    setPic(index);
  };

  return (
    <div className="max-w-[1400px] h-[630px] m-auto py-10 px-16 relative group">
      <div
        style={{ backgroundImage: `url(${slides[pic].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 
      translate-y-[-50] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={pervSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 
      translate-y-[-50] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex justify-center gap-8 py-2 top-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
