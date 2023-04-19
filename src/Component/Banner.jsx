import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row py-5" data-aos="fade-up">
        <div className="col-md text-center my-3">
          <header>
            <h4
              style={{
                fontFamily: "'Luckiest Guy', cursive",
                fontSize: "40px",
                lineHeight: "40px",
                textShadow: "4px 2px black",
                color: "#FFCC00",
              }}
            >
              Warunk
            </h4>
            <h1
              style={{
                fontFamily: "'Luckiest Guy', cursive",
                fontSize: "75px",
                lineHeight: "40px",
                textShadow: "4px 2px black",
                color: "#FFCC00",
              }}
            >
              Ibu Titin
            </h1>
          </header>
          <p
            style={{
              fontFamily: "'Signika Negative', sans-serif",
              lineHeight: "50px",
              color: "white",
            }}
          >
            <strong>Solusi belanja praktis untuk kamu yang sibuk.</strong>
          </p>
          <a href="#produk" style={{ textDecoration: "none" }}>
            <button
              style={{
                fontFamily: "'Signika Negative', sans-serif",
                backgroundColor: "#FF78F0",
                color: "black",
              }}
              className="btn px-5 py-2 border border-0 rounded-2 fs-4"
            >
              <strong>Explore</strong>
            </button>
          </a>
        </div>
        <div className="col-md pb-5 pt-2">
          <div className="d-flex justify-content-around">
            <img
              src="./assets/Banner.png"
              alt=" "
              style={{ width: "85%" }}
              className="mx-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
