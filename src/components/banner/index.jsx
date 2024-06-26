import React from "react";
import "./index.scss";
import img1 from "../../assets/images/banner-image-1.png";
import img2 from "../../assets/images/banner-image-2.png";
import img3 from "../../assets/images/banner-image-3.png";

const Banner = () => {
  const bannerItem = [
    {
      id: 1,
      title: "Apple",
      desc: "Apple is one of the most famous smart watches providing company.",
      url: img1,
    },
    {
      id: 2,
      title: "Xiaomi",
      desc: "Xiaomi smart watches are produced by MI company.",
      url: img2,
    },
    {
      id: 3,
      title: "FitBit",
      desc: "FitBit smart watches are best for there health and fitness features.",
      url: img3,
    },
  ];

  const bannerWrapper = bannerItem?.map((item) => (
    <div key={item?.id} className="banner__card">
      <div className="banner__image">
        <img src={item.url} alt={item?.title} />
      </div>
      <div className="banner__text">
        <h4>{item?.title}</h4>
        <p>{item?.desc}</p>
      </div>
    </div>
  ));
  return (
    <section id="banner">
      <div className="container">
        <div className="banner__warpper">{bannerWrapper}</div>
      </div>
    </section>
  );
};

export default Banner;
