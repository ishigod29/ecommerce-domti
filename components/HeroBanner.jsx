import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="text">
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <p className="desc">{heroBanner.desc}</p>
        <Link href={`/product/${heroBanner.product}`}>
          <button>{heroBanner.buttonText}</button>
        </Link>
        <div></div>
      </div>
      <img
        className="hero-banner-image"
        src={urlFor(heroBanner.image)}
        alt="headphones"
      />
    </div>
  );
};

export default HeroBanner;
