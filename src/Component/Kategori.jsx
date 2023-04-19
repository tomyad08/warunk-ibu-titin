import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Kategori = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        selectedItem={2}
      >
        <div>
          <img src="assets/alatTulis.jpg" alt=" " />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/obat-obatan.jpg" alt=" " />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/pembersih.jpg" alt=" " />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};
export default Kategori;
