import React, { useState } from "react";
import images from "../images/images";

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      backgroundImage: `url(${images.parisUltraWide})`,
      title: "El verdadero encanto está en lo desconocido",
      subtitle: "Vuelatex",
    },
  ];
  
  return (
    <div className="th-hero-wrapper hero-1" id="hero">
      <div
        className="swiper th-slider hero-slider-1 swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
        id="heroSlide1"
      >
        <div
          className="swiper-wrapper"
          id="swiper-wrapper-86cc4f4ef544965b"
          aria-live="off"
          style={{
            transitionDuration: "0.5s",
            transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`swiper-slide ${
                index === currentSlide ? "swiper-slide-active" : ""
              }`}
              style={{
                width: "100%",
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
                transitionDuration: "0ms",
              }}
              role="group"
              aria-label={`${index + 1} / ${slides.length}`}
              data-swiper-slide-index={index}
            >
              <div className="hero-inner">
                <div
                  className="th-hero-bg background-image"
                  style={{ backgroundImage: slide.backgroundImage }}
                ></div>
                <div className="container">
                  <div className="hero-style1">
                    {slide.subtitle && (
                      <span
                        className="sub-title style1 slideinup"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                        style={{ animationDelay: "0.2s" }}
                      >
                        {slide.subtitle}
                      </span>
                    )}
                    <h1
                      className="hero-title slideinup"
                      data-ani="slideinup"
                      data-ani-delay="0.4s"
                      style={{ animationDelay: "0.4s" }}
                    >
                      {slide.title}
                    </h1>
                    <div
                      className="btn-group slideinup"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                      style={{ animationDelay: "0.6s" }}
                    >
                      <a href="#" className="th-btn th-icon">
                        Explorar Vuelos
                      </a>
                      <a href="#" className="th-btn style2 th-icon">
                        Otros Servicios
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
    </div>
  );
};

export default SliderComponent;
