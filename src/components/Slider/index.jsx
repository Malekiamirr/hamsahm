import { useRef, useState, useEffect } from 'react';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetTimer();
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(prevIndex);
  };

  const timerInterval = 10000; // 10 seconds
  let timer;

  const startTimer = () => {
    timer = setInterval(nextSlide, timerInterval);
  };

  const resetTimer = () => {
    clearInterval(timer);
    startTimer();
  };

  // Start the timer when the component mounts
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(timer);
    };
  });

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) {
      return;
    }
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX && touchEndX) {
      const touchDiff = touchStartX - touchEndX;
      if (touchDiff < 70) {
        // Swiped to the left, go to next slide
        nextSlide();
      } else if (touchDiff > -70) {
        // Swiped to the right, go to previous slide
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="overflow-hidden relative group h-36"
    >
      <div
        style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
        className="overflow-hidden bg-secondary-color rounded-[38px] w-[287px] h-[119px] mx-auto"
      >
        <ul
          className="transition-transform duration-500 ease-in-out w-[287px] h-[119px] flex"
          style={{
            transform: `translateX(${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <li
              key={slide.id}
              className="w-full flex-shrink-0 Laptop-L:h-full h-[268px] p-3"
            >
              {/* <img
                src={slide.image}
                alt={slide.name}
                className="w-full h-full object-cover"
              /> */}
              <p className="text-white leading-6 text-[15px] px-6 py-2">
                {slide.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {/* Dots */}
      <div className="flex absolute bottom-0 left-[50%] -translate-x-[50%] items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`rounded-full mx-[2px] focus:outline-none ${
              index !== currentSlide
                ? 'bg-[#BBD1DE] w-[8px] h-[8px]'
                : 'w-[10px] h-[10px] bg-secondary-color'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
