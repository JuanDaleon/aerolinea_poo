import React from "react";
import images from "../images/images";

const VentaDestinoComponent = () => {
  return (
    <section
      className="position-relative bg-top-center overflow-hidden space background-image arrow-wrap"
      id="service-sec"
      style={{ backgroundImage: 'url("assets/img/bg/tour_bg_1.jpg")' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="title-area text-center">
              <h3 className="sec-title">OFERTAS DESDE BOGOTA</h3>
            </div>
          </div>
        </div>
        <div className="slider-area tour-slider">
          <div
            className="swiper th-slider has-shadow slider-drag-wrap swiper-initialized swiper-horizontal swiper-backface-hidden"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1300":{"slidesPerView":"4"}}}'
          >
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-a5d596925f652ea1"
              aria-live="off"
              style={{
                transitionDuration: "0ms",
                transform: "translate3d(-672px, 0px, 0px)",
                transitionDelay: "0ms",
              }}
            >
              <div
                className="swiper-slide"
                style={{ width: "312px", marginRight: "24px" }}
                role="group"
                aria-label="1 / 6"
                data-swiper-slide-index="0"
              >
                <div className="tour-box th-ani gsap-cursor">
                  <div className="tour-box_img global-img">
                    <img
                      src={images.nuevayork}
                      alt="image"
                    />
                  </div>
                  <div className="tour-content">
                    <h3 className="box-title">
                      <a href="tour-details.html">Greece Tour Package</a>
                    </h3>
                    <h4 className="tour-box_price">
                      <span className="currency">$980.00</span>/Persona
                    </h4>
                    <div className="tour-action">
                        <div style={{display: 'flex', gap: '.8rem', alignItems: 'center'}}>
                            <span className="material-symbols-outlined" style={{fontSize: '20px'}}>
                                calendar_month
                            </span>
                            <span>7 Dias</span>
                        </div>
                      <a
                        href="contact.html"
                        className="th-btn style4 th-icon"
                      >
                        Comprar Ahora
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="swiper-slide swiper-slide-prev"
                style={{ width: "312px", marginRight: "24px" }}
                role="group"
                aria-label="2 / 6"
                data-swiper-slide-index="1"
              >
                <div className="tour-box th-ani gsap-cursor">
                  <div className="tour-box_img global-img">
                    <img
                      src={images.panama}
                      alt="image"
                    />
                  </div>
                  <div className="tour-content">
                    <h3 className="box-title">
                      <a href="tour-details.html">Italy Tour package</a>
                    </h3>
                    <div className="tour-rating">
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style={{ width: "100%" }}>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on{" "}
                          <span className="rating">4.8</span>(4.8 Rating)
                        </span>
                      </div>
                      <a
                        href="tour-details.html"
                        className="woocommerce-review-link"
                      >
                        (<span className="count">4.8</span> Rating)
                      </a>
                    </div>
                    <h4 className="tour-box_price">
                      <span className="currency">$980.00</span>/Personaa
                    </h4>
                    <div className="tour-action">
                        <div style={{display: 'flex', gap: '.8rem', alignItems: 'center'}}>
                            <span className="material-symbols-outlined" style={{fontSize: '20px'}}>
                                calendar_month
                            </span>
                            <span>7 Dias</span>
                        </div>
                      <a
                        href="contact.html"
                        className="th-btn style4 th-icon"
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-active"
                style={{ width: "312px", marginRight: "24px" }}
                role="group"
                aria-label="3 / 6"
                data-swiper-slide-index="2"
              >
                <div className="tour-box th-ani gsap-cursor">
                  <div className="tour-box_img global-img">
                    <img
                      src={images.nuevayork}
                      alt="image"
                    />
                  </div>
                  <div className="tour-content">
                    <h3 className="box-title">
                      <a href="tour-details.html">Nueva York</a>
                    </h3>
                    <h4 className="tour-box_price">
                      <span className="currency">$980.00</span>/Persona
                    </h4>
                    <div className="tour-action">
                        <div style={{display: 'flex', gap: '.8rem', alignItems: 'center'}}>
                            <span className="material-symbols-outlined" style={{fontSize: '20px'}}>
                                calendar_month
                            </span>
                            <span>7 Dias</span>
                        </div>
                      <a
                        href="contact.html"
                        className="th-btn style4 th-icon"
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                style={{ width: "312px", marginRight: "24px" }}
                role="group"
                aria-label="4 / 6"
                data-swiper-slide-index="3"
              >
                <div className="tour-box th-ani gsap-cursor">
                  <div className="tour-box_img global-img">
                    <img
                      src={images.valledupar}
                      alt="image"
                    />
                  </div>
                  <div className="tour-content">
                    <h3 className="box-title">
                      <a href="tour-details.html">Valledupar</a>
                    </h3>
                    <h4 className="tour-box_price">
                      <span className="currency">$980.00</span>/Persona
                    </h4>
                    <div className="tour-action">
                        <div style={{display: 'flex', gap: '.8rem', alignItems: 'center'}}>
                            <span className="material-symbols-outlined" style={{fontSize: '20px'}}>
                                calendar_month
                            </span>
                            <span>7 Dias</span>
                        </div>
                      <a
                        href="contact.html"
                        className="th-btn style4 th-icon"
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: "312px", marginRight: "24px" }}
                role="group"
                aria-label="5 / 6"
                data-swiper-slide-index="4"
              >
                <div className="tour-box th-ani gsap-cursor">
                  <div className="tour-box_img global-img">
                    <img
                      src={images.panama}
                      alt="image"
                    />
                  </div>
                  <div className="tour-content">
                    <h3 className="box-title">
                      <a href="tour-details.html">Panama</a>
                    </h3>
                    
                    <h4 className="tour-box_price">
                      <span className="currency">$980.00</span>/Persona
                    </h4>
                    <div className="tour-action">
                        <div style={{display: 'flex', gap: '.8rem', alignItems: 'center'}}>
                            <span className="material-symbols-outlined" style={{fontSize: '20px'}}>
                                calendar_month
                            </span>
                            <span>7 Dias</span>
                        </div>
                      <a
                        href="contact.html"
                        className="th-btn style4 th-icon"
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: "312px", marginRight: "24px" }}
                role="group"
                aria-label="6 / 6"
                data-swiper-slide-index="5"
              >
                <div className="tour-box th-ani gsap-cursor">
                  <div className="tour-box_img global-img">
                    <img
                      src={images.paris}
                      alt="image"
                    />
                  </div>
                  <div className="tour-content">
                    <h3 className="box-title">
                      <a href="tour-details.html">Paris</a>
                    </h3>
                    <h4 className="tour-box_price">
                      <span className="currency">$980.00</span>/Persona
                    </h4>
                    <div className="tour-action">
                        <div style={{display: 'flex', gap: '.8rem', alignItems: 'center'}}>
                            <span className="material-symbols-outlined" style={{fontSize: '20px'}}>
                                calendar_month
                            </span>
                            <span>7 Dias</span>
                        </div>
                      <a
                        href="contact.html"
                        className="th-btn style4 th-icon"
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VentaDestinoComponent;