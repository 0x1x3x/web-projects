import { useState, useEffect, useRef, useCallback } from "react";

const ImageSlider = ({ slides, parentWidth }) => {
  const timeRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyle = {
    height: "100%",
    position: "relative",
    zIndex: "10",
  };

  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
  };

  const leftArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "30px",
    zIndex: 1,
    fontSize: "45px",
    color: "#fff",
    cursor: "pointer",
  };

  const rightArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "30px",
    zIndex: 1,
    fontSize: "45px",
    color: "#fff",
    cursor: "pointer",
  };

  const dotsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    bottom: "1%",
    right: "50%",
  };

  const dotsStyle = {
    margin: "0 5px",
    cursor: "pointer",
    fontSize: "50px",
  };

  const slidesContainerStyle = {
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.3s",
  };

  const onGoPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const onGoNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const getSlideStyles = (slideIndex) => ({
    ...slideStyle,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  });

  const setSlidesContainerStyles = () => ({
    ...slidesContainerStyle,
    width: parentWidth * slides.length,
    transform: `translateX(${-currentIndex * parentWidth}px)`,
  });

  const slidesContainerOverflowStyle = {
    overflow: "hidden",
    height: "100%",
  };

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      onGoNext();
    }, 5000);
    return () => clearTimeout(timeRef.current);
  }, [onGoNext]);

  return (
    <div style={sliderStyle}>
      {/* arrows */}
      <div style={leftArrow} onClick={onGoPrevious}>
        ❮
      </div>
      <div style={rightArrow} onClick={onGoNext}>
        ❯
      </div>
      {/* arrows */}
      <div style={slidesContainerOverflowStyle}>
        <div style={setSlidesContainerStyles()}>
          {slides.map((_, slideIndex) => (
            <div key={slideIndex} style={getSlideStyles(slideIndex)}></div>
          ))}
        </div>
      </div>

      {/* pagination */}
      <div style={dotsContainerStyle}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotsStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ·
          </div>
        ))}
      </div>
      {/* pagination */}
    </div>
  );
};

export default ImageSlider;
