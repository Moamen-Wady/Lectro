import { memo } from "react";
import "./banner.css";

export default memo(function Slidez({ Slider }) {
  const PrevArrow = memo((props) => {
    const { onClick } = props;
    return (
      <div className="btnbanner bleft" onClick={onClick}>
        <img src="/l.webp" alt="" />
      </div>
    );
  });
  const NextArrow = memo((props) => {
    const { onClick } = props;
    return (
      <div className="btnbanner bright" onClick={onClick}>
        <img src="/r.webp" alt="" />
      </div>
    );
  });
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    cssEase: "ease",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: false,
  };
  const slides = [
    {
      img: "/pr1.webp",
      loading: "eager",
    },
    {
      img: "/pr2.webp",
      loading: "lazy",
    },
    {
      img: "/pr3.webp",
      loading: "lazy",
    },
    {
      img: "/pr4.webp",
      loading: "lazy",
    },
    {
      img: "/pr5.webp",
      loading: "lazy",
    },
    {
      img: "/pr6.webp",
      loading: "lazy",
    },
  ];

  return (
    <div className="banw">
      <img src="/btw.webp" className="shade" alt="" />
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={`SlideImg ${index + 1}`}>
            <img
              className="slide-image-head"
              src={slide.img}
              alt={`Slide ${index + 1}`}
              loading={slide.loading}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
});
