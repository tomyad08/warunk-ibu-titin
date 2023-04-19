import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navibar = () => {
  const [kondisi, setKondisi] = useState(false);
  return (
    <div
      className="container-fluid pb-1"
      style={{
        color: "white",
        backgroundColor: "purple",
      }}
    >
      <div className="row">
        <div className=" col pt-3" id="sandwich">
          <img
            src="./assets/sandwich1.png"
            style={{ width: "40px" }}
            alt=" "
            onClick={() => setKondisi(!kondisi)}
          />
        </div>
        <div className="col-7 pt-3">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <h2
              style={{
                fontFamily: "'Signika Negative', sans-serif",
                fontSize: "20px",
                marginLeft: "35px",
                paddingTop: "10px",
              }}
            >
              <strong>Warunk Ibu Titin</strong>
            </h2>
          </Link>
        </div>
        <div className="col py-3">
          <div className="float-end">
            <a
              href="#produk"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span
                className="mx-3 fs-4"
                id="menu"
                style={{ fontFamily: "'Signika Negative', sans-serif" }}
              >
                Produk
              </span>
            </a>
            <a href="#faq" style={{ textDecoration: "none", color: "white" }}>
              <span
                className="mx-3 fs-4"
                id="menu"
                style={{
                  fontFamily: "'Signika Negative', sans-serif",
                }}
              >
                FAQ
              </span>
            </a>
            <a
              href="#lokasi"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span
                className="mx-3 fs-4"
                id="menu"
                style={{
                  fontFamily: "'Signika Negative', sans-serif",
                }}
              >
                Lokasi
              </span>
            </a>
            <a
              href="#kontak"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span
                className="mx-3 fs-4"
                id="menu"
                style={{
                  fontFamily: "'Signika Negative', sans-serif",
                }}
              >
                Kontak
              </span>
            </a>
            <span>
              <Link to="/pesanan">
                <img
                  src="./assets/keranjang1.png"
                  style={{ width: "60px" }}
                  className="float-end"
                  alt=" "
                />
              </Link>
            </span>
          </div>
        </div>
      </div>
      {kondisi && (
        <div
          style={{
            backgroundColor: "#FF78F0",
            width: "100%",
          }}
          className="p-1 border border-0 rounded-3 d-flex justify-content-around"
        >
          <a href="#produk" style={{ textDecoration: "none", color: "black" }}>
            <div
              id="menuSandwich"
              style={{ fontFamily: "'Signika Negative', sans-serif" }}
            >
              Produk
            </div>
          </a>
          <a href="#faq" style={{ textDecoration: "none", color: "black" }}>
            <div
              id="menuSandwich"
              style={{ fontFamily: "'Signika Negative', sans-serif" }}
            >
              FAQ
            </div>
          </a>
          <a href="#lokasi" style={{ textDecoration: "none", color: "black" }}>
            <div
              id="menuSandwich"
              style={{ fontFamily: "'Signika Negative', sans-serif" }}
            >
              Lokasi
            </div>
          </a>
          <a href="#kontak" style={{ textDecoration: "none", color: "black" }}>
            <div
              id="menuSandwich"
              style={{ fontFamily: "'Signika Negative', sans-serif" }}
            >
              Kontak
            </div>
          </a>
        </div>
      )}
    </div>
  );
};
export default Navibar;
