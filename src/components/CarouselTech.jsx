import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import htmlIcon from "../icons/html-5.png";
import cssIcon from "../icons/css.png";
import tailwindIcon from "../icons/tailwindcss_logo_icon_170649.png";
import jsIcon from "../icons/js.png";
import mongoDBIcon from "../icons/mongodb_original_wordmark_logo_icon_146425.png";
import nodeJSIcon from "../icons/nodejs.png";
import gitIcon from "../icons/git6963.jpg";
import gitHubIcon from "../icons/github.png";
import apiIcon from "../icons/1000_F_480911520_v1VMx4VBEQqEP215aPyB5L59H6VEmag5.jpg";
import reactIcon from "../icons/React-icon.svg.png";
import expressIcon from "../icons/Screenshot_3.png";

function CarouselTech() {
  const CustomNextArrow = (props) => (
    <div
      className="slick-arrow slick-next text-logo-gold before:bg-none hover:text-logo-blue"
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div
      className="slick-arrow slick-prev text-logo-gold before:bg-none hover:text-logo-blue"
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const techIcons = [
    { src: htmlIcon, alt: "HTML" },
    { src: cssIcon, alt: "CSS" },
    { src: tailwindIcon, alt: "Tailwind CSS" },
    { src: jsIcon, alt: "JavaScript" },
    { src: mongoDBIcon, alt: "MongoDB" },
    { src: nodeJSIcon, alt: "Node.js" },
    { src: gitIcon, alt: "Git" },
    { src: gitHubIcon, alt: "GitHub" },
    { src: apiIcon, alt: "API" },
    { src: reactIcon, alt: "React" },
    { src: expressIcon, alt: "Express" },
  ];

  return (
    <div className="slider-container w-3/4 mx-auto border-4 p-8 border-logo-gold rounded-xl bg-white">
      <Slider {...settings}>
        {techIcons.map((icon, index) => (
          <div key={index} className="text-center ">
            <img
              src={icon.src}
              alt={icon.alt}
              className="mx-auto w-12 h-12 lg:w-20 lg:h-20"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselTech;
