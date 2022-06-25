import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    desc,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <img
          width={500}
          height={500}
          className="footer-banner-image"
          src={urlFor(image)}
          alt=""
        />
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button>{buttonText}</button>
          </Link>
        </div>
      </div>
      <div className="footer-container">
        <p>&copy; 2022 Grabbel All rights reserved</p>
        <p className="icons"></p>
      </div>
    </div>
  );
};

export default FooterBanner;
