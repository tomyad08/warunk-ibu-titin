import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Produk = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const Data = [
    {
      id: 1,
      nama: "Sembako",
      foto: "./assets/sembako1.jpg",
      tautan: "./sembako",
    },
    {
      id: 2,
      nama: "Sayur & Daging",
      foto: "./assets/sayur&daging.jpg",
      tautan: "./sayur&daging",
    },
    {
      id: 3,
      nama: "Alat Tulis",
      foto: "./assets/alatTulis.jpg",
      tautan: "./alat-tulis",
    },
    {
      id: 4,
      nama: "Kebersihan",
      foto: "./assets/pembersih.jpg",
      tautan: "./kebersihan",
    },
    {
      id: 5,
      nama: "Kesehatan",
      foto: "./assets/obat-obatan.jpg",
      tautan: "./kesehatan",
    },
    {
      id: 6,
      nama: "Elektronik",
      foto: "./assets/elektronik.webp",
      tautan: "./elektronika",
    },
  ];
  return (
    <div
      className="container py-3"
      style={{ fontFamily: "'Signika Negative', sans-serif" }}
      id="produk"
      data-aos="fade-up"
    >
      <h1 className="text-center">
        <strong>Produk</strong>
      </h1>
      <p className="text-center">
        Silahkan klik kartu produk yang kamu butuhkan.
      </p>
      <div className="row justify-content-center">
        {Data.map((value) => (
          <div className="col-md-3 col-4 mb-2 " key={value.id}>
            <Link to={value.tautan} style={{ textDecoration: "none" }}>
              <div
                className="border border-2 rounded-3"
                style={{
                  backgroundColor: "purple",
                  color: "white",
                }}
              >
                <div>
                  <img src={value.foto} alt=" " width="100%" id="produkCard" />
                </div>
                <h6 className="text-center pt-1" id="ukuranFont">
                  {value.nama}
                </h6>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Produk;
